//Create function for making the graph
function tommy_graph(pokemens){

  
//START CODING HERE
  var trace1 = {
    x: "HP",
    y: pokemens.HP,
    type: "bar"
  };

  var trace2 = {
    x: "Attack",
    y: pokemens.Attack,
    type: "bar"
  };

  var trace3 = {
    x: "Defense",
    y: pokemens.Defense,
    type: "bar"
  };
  
  var data = [trace1, trace2, trace3];

  Plotly.newPlot("graphone", data, "");



//Use d3.json to fetch the data for the current pokemon
  //Use d3 to select the searchbar with ID of "#searchbar"

  //Use `.html("")` to clear any existing data

  //Use `d3.json` to fetch the sample data for the plot


  //Create bar chart for the data

  //






};


