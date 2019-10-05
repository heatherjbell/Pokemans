//Create function for making the graph
function heather_graph(pokegirl){

//START CODING HERE
  var trace1 = {
    x: ["Special Attack", "Special Defense", "Speed"],
    y: [pokegirl.Special_Attack, pokegirl.Special_Defense, pokegirl.Speed],
    type: "bar"
  };



//Use d3.json to fetch the data for the current pokemon
  //Use d3 to select the searchbar with ID of "#searchbar"

  //Use `.html("")` to clear any existing data

  //Use `d3.json` to fetch the sample data for the plot
  var data = [trace1]

  //Create bar chart for the data
  Plotly.newPlot("graphtwo", data, "");

  //






};
