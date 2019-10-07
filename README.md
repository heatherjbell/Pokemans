# Pokemon Project

We created a Pokedex that searches for any Pokemon and returns the stats for each one

## Databases
### SQL
The PostgreSQL database hosted the numerical and string stats for each Pokemon.
In the Flask app, the SQL query was returned as a JSON and placed in the path "/stats".

### MongoDB
The MongoDB database was set up using webscraping techniques.  The url of each Pokemon image was placed in a noSQL database and later recalled in a JSON format using PyMongo.

## HTML / CSS
The background and item placement was configured using HTML and CSS.  Very little styling was done for the graphs, as JavaScript was used to control most elements.

## JavaScript
JavaScript was used to parse through the JSONs from the SQL and MongoDB databases and return the information for the Pokemon that was typed into the search bar.  The autocomplete function helps to choose the correct Pokemon spelling and capitalization.

The graphs were created using Plotly.js and were configured within JavaScript based on the stats returned by the JSONs.

## USE
Run the Flask app by typing in "python App.py" into Bash or Command Prompt and going to the local url listed.  Then, simply search for the Pokemon of your choice.
