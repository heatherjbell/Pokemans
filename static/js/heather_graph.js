//Create function for making the graph
function heather_graph(pokegirl){

  if (pokegirl.Type_1 == "Grass"){
    var color = "#21a64b"
  }
  else if (pokegirl.Type_1 == "Electric"){
    var color = "#ebe53d"
  }
  else if (pokegirl.Type_1 == "Water"){
    var color = "#30abdb"
  }
  else if (pokegirl.Type_1 == "Ghost"){
    var color = "#773fd9"
  }
  else if (pokegirl.Type_1 == "Fire"){
    var color = "#ff7d59"
  }
  else if (pokegirl.Type_1 == "Bug"){
    var color = "#bde831"
  }
  else if (pokegirl.Type_1 == "Fighting"){
    var color = "#e69335"
  }
  else if (pokegirl.Type_1 == "Rock"){
    var color = "#b5ada3"
  }
  else if (pokegirl.Type_1 == "Psychic"){
    var color = "#431757"
  }
  else{
    var color = "#31c4b1"
  };

  //START CODING HERE
    var trace1 = {
      x: ["Special Attack", "Special Defense", "Speed"],
      y: [pokegirl.Special_Attack, pokegirl.Special_Defense, pokegirl.Speed],
      type: "bar",
      marker: {
        color: color
      }
    };

    var layout = {
      height: 300,
      width: 350,
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      font: {
        family: 'Pokemon Font',
        size: 9,
        color: '#ffffff'
      },
      yaxis: {
        dtick: 25,
        tickcolor: '#ffffff',
        range: [0, 125],
        showgrid: false,
        showline: false,
        tickangle: 30
      },
      xaxis: {
        tickangle: 30
      }
    };



  //Use d3.json to fetch the data for the current pokemon
    //Use d3 to select the searchbar with ID of "#searchbar"

    //Use `.html("")` to clear any existing data

    //Use `d3.json` to fetch the sample data for the plot
    var data = [trace1]

    //Create bar chart for the data
    Plotly.newPlot("graphtwo", data, layout);

    //






};
