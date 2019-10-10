//Create function for making the graph
function tommy_graph(pokemens){

//START CODING HERE
  if (pokemens.Type_1 == "Grass"){
    var color = "#21a64b"
  }
  else if (pokemens.Type_1 == "Electric"){
    var color = "#ebe53d"
  }
  else if (pokemens.Type_1 == "Water"){
    var color = "#30abdb"
  }
  else if (pokemens.Type_1 == "Ghost"){
    var color = "#773fd9"
  }
  else if (pokemens.Type_1 == "Fire"){
    var color = "#4B0D00"
  }
  else if (pokemens.Type_1 == "Bug"){
    var color = "#bde831"
  }
  else if (pokemens.Type_1 == "Fighting"){
    var color = "#e69335"
  }
  else if (pokemens.Type_1 == "Rock"){
    var color = "#b5ada3"
  }
  else if (pokemens.Type_1 == "Psychic"){
    var color = "#431757"
  }
  else{
    var color = "#31c4b1"
  }
  var data = [
    {
      x: ['HP', 'Attack', 'Defense'],
      y: [pokemens.HP, pokemens.Attack, pokemens.Defense],
      type: 'bar',
      marker: {
        color: color
      }
    }
  ];

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

  Plotly.newPlot('graphone', data, layout);



//Use d3.json to fetch the data for the current pokemon
  //Use d3 to select the searchbar with ID of "#searchbar"

  //Use `.html("")` to clear any existing data

  //Use `d3.json` to fetch the sample data for the plot


  //Create bar chart for the data

  //






};
