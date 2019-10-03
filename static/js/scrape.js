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

d3.select("#searchbutton").on("click", function() {
  var pokemon = d3.select("#searchbar").property("value");
  window.location.href = `/pic/${pokemon}`;
  d3.json("/stats").then((pokemonStats) => {
    pokemonStats.forEach((monster) => {
      if (monster.Name == pokemon){
        console.log(monster.Name);
        console.log(monster.HP);
        console.log(monster.Attack);
      }
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
