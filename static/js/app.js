// @TODO: Complete the following function that builds the metadata panel
// Use `d3.json` to fetch the metadata for a sample
// Use d3 to select the panel with id of `#sample-metadata`
var metadata_panel = d3.select('#sample-metadata');
var url = `/metadata/${sample}`;
 // Use `.html("") to clear any existing metadata
d3.select("#sample-metadata").html("")
// Use `Object.entries` to add each key and value pair to the panel
// Hint: Inside the loop, you will need to use d3 to append new
// tags for each key-value in the metadata.
d3.json(url).then(result => {
    for (var [key, value] of Object.entries(result)) {
    metadata_panel.append("p").text(`${key}: ${value}`);
  
          var trace3 = {
            type: "gauge",
            domain: { x: [0, 1], y: [0, 1] },
            value: result.WFREQ,
            mode: "gauge+number",
            type: "indicator",
            gauge: {
              axis: { range: [null, 9] }}
          };}

          var layout = {
            title: "OTU ID",
            showlegend: false,
            xaxis: {
              title: "Operational Taxonomic Unit Level"
            },
            yaxis: {
              title: "Sample Size"
            }
          };
      
          var data = [trace];
      
          Plotly.newPlot("bubble", data, layout);
        })