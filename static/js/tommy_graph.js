//Create function for making the graph
function tommy_graph(pokemens){
  
//START CODING HERE

var data = [
  {
    x: ['HP', 'Attack', 'Defense'],
    y: [pokemens.HP, pokemens.Attack, pokemens.Defense],
    type: 'bar'
  }
];

var layout = {
  height: 250,
  width: 275,
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)'
}

Plotly.newPlot('graphone', data, layout);



//Use d3.json to fetch the data for the current pokemon
  //Use d3 to select the searchbar with ID of "#searchbar"

  //Use `.html("")` to clear any existing data

  //Use `d3.json` to fetch the sample data for the plot


  //Create bar chart for the data

  //






};
