var pokemon = d3.select("#myInput");

var poke_name = d3.select(".name");
var stats_panel_heading = d3.select("#stringpanelheading");
var stats_panel = d3.select("#statspanel");
var picture = d3.select("#photobox");

//Setting up the search button
d3.select("#searchbutton").on("click", function () {
  var pokemon = d3.select("#myInput").property("value");
  d3.select("#statspanel").html("");
  d3.select("#stringpanelheading").html("");
  d3.select("#photobox").html("");
  d3.json("/stats").then(result => {
    result.forEach(pokeguy => {
      if (pokeguy.Name == pokemon) {

        //Insert the graphs
        tommy_graph(pokeguy);
        heather_graph(pokeguy);

        //Putting the Pokemon information in text
        stats_panel_heading.append("h1").text(`${pokeguy.Name}`)
        stats_panel.append("h6").text(`Number: #${pokeguy.Number}`);
        if (pokeguy.Type_2 == null) {
          stats_panel.append("h6").text(`Type: ${pokeguy.Type_1}`);
        } else {
          stats_panel.append("h6").text(`Type: ${pokeguy.Type_1} \/ ${pokeguy.Type_2}`);
        }
        stats_panel.append("h6").text(`Generation: ${pokeguy.Generation}`);
        if (pokeguy.Legendary == true) {
          stats_panel.append("h6").text("Legendary: YUP!!!").style("color", "#e0a13a");
        } else {
          stats_panel.append("h6").text("Legendary: No, he's lame");
        }
      };
    });
  });

  //Add the Pokemon image
  d3.json("/images").then(result => {
    result.forEach(pokeguy => {
      if (pokeguy.name == pokemon) {
        picture.append("svg")
          .attr('width', 250)
          .attr('height', 250)
          .append('image')
          .attr('xlink:href', pokeguy.url)
          .attr('width', 250)
          .attr('height', 250)
      };
    })
  })
});

//THIS ONE WORKS

//AUTOCOMPLETE STEPS https://www.w3schools.com/howto/howto_js_autocomplete.asp
//VAR NEEDS TO BE CREATED OF ALL POKEMON NAMES (I WILL ATTEMPT THIS - HEATHER)

//Big Ol' Pokemon List
var pokemon_list = []
d3.json("/images").then(result =>{
  result.forEach(pokedude => {
    pokemon_list.push(pokedude.name)
  })
});


//Setting up the autocomplete
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}




//USING ENTER AFTER TYPING IN SEARCH BAR
// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchbutton").click();
  }
});
