var pokemon = d3.select("#searchbar");

function scrape_for_stats() {
  var pokemon = d3.select("#searchbar").value;
  d3.json("/stats").then((pokemonStats) => {
    pokemonStats.forEach((monster) => {
      if (monster.Name == pokemon){
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

d3.select("#searchbutton").on("click", function() {
  var pokemon = d3.select("#searchbar").property("value");
  d3.select("#statspanel").html("");
  d3.select("#stringpanelheading").html("");
  d3.select("#photobox").html("");
  d3.json("/stats").then(result => {
    result.forEach(pokeguy => {
      if (pokeguy.Name == pokemon){
        stats_panel_heading.append("h2").text(`${pokeguy.Name}`)
        stats_panel.append("h3").text(`NUMBER: #${pokeguy.Number}`);
        stats_panel.append("h3").text(`TYPE: ${pokeguy.Type_1} \/ ${pokeguy.Type_2}`);
        stats_panel.append("h3").text(`GENERATION: ${pokeguy.Generation}`);
        if (pokeguy.Legendary == true){
          stats_panel.append("h3").text("LEGENDARY: YOU'RE GODDAMN RIGHT HE IS")
        }
        else{
          stats_panel.append("h3").text("LEGENDARY: No, he's lame")
        }
      };
    });
  });
  d3.json("/images").then(result => {
    result.forEach(pokeguy => {
      if (pokeguy.name == pokemon){
        picture.append("svg")
        .attr('width', 400)
        .attr('height', 400)
        .append('image')
        .attr('xlink:href', pokeguy.url)
        .attr('width', 400)
        .attr('height', 400)
      };
    })
  })
});

//THIS ONE WORKS
d3.json("/stats").then((pokemonStats) => {
  pokemonStats.forEach((monster) => {
    if (monster.Name == 'Ivysaur'){
      console.log(monster.Name);
      console.log(monster.HP);
      console.log(monster.Attack);
    }
  })
});
