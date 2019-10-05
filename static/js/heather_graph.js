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
  var color = "#de3121"
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
else{
  var color = "#31c4b1"
}

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
    height: 250,
    width: 275,
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)'
  }



//Use d3.json to fetch the data for the current pokemon
  //Use d3 to select the searchbar with ID of "#searchbar"

  //Use `.html("")` to clear any existing data

  //Use `d3.json` to fetch the sample data for the plot
  var data = [trace1]

  //Create bar chart for the data
  Plotly.newPlot("graphtwo", data, layout);

  //






};
