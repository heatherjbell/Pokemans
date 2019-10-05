var pokemon = d3.select("#searchbar");

function scrape_for_stats() {
  var pokemon = d3.select("#searchbar").value;
  d3.json("/stats").then((pokemonStats) => {
    pokemonStats.forEach((monster) => {
      if (monster.Name == pokemon) {
        console.log(monster.Name);
        console.log(monster.HP);
        console.log(monster.Attack);
      };
    });
  });
};

var poke_name = d3.select(".name");
var stats_panel_heading = d3.select("#stringpanelheading");
var stats_panel = d3.select("#statspanel");
var picture = d3.select("#photobox");

d3.select("#searchbutton").on("click", function () {
  var pokemon = d3.select("#searchbar").property("value");
  d3.select("#statspanel").html("");
  d3.select("#stringpanelheading").html("");
  d3.select("#photobox").html("");
  d3.json("/stats").then(result => {
    result.forEach(pokeguy => {
      if (pokeguy.Name == pokemon) {
        tommy_graph(pokeguy);
        heather_graph(pokeguy);
        stats_panel_heading.append("h2").text(`${pokeguy.Name}`)
        stats_panel.append("h5").text(`Number: #${pokeguy.Number}`);
        if (pokeguy.Type_2 == null) {
          stats_panel.append("h5").text(`Type: ${pokeguy.Type_1}`);
        } else {
          stats_panel.append("h5").text(`Type: ${pokeguy.Type_1} \/ ${pokeguy.Type_2}`);
        }
        stats_panel.append("h5").text(`Generation: ${pokeguy.Generation}`);
        if (pokeguy.Legendary == true) {
          stats_panel.append("h5").text("Legendary: YUP!!!").style("color", "#e0a13a");
        } else {
          stats_panel.append("h5").text("Legendary: No, he's lame");
        }
      };
    });
  });
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


//TRIGGER BUTTON ON ENTER https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
//USING ENTER AFTER TYPING IN SEARCH BAR

// Get the input field
var input = document.getElementById("searchbar");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchbutton").click();
  }
});