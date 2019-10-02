import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
from flask import Flask, jsonify, render_template, redirect
from flask_pymongo import PyMongo
from config import mongo_password, mongo_username


# Database Setup
rds_connection_string = f"postgres:postgres@localhost:5432/Pokemon"
engine = create_engine(f'postgresql://{rds_connection_string}')

# Reflect existing database
Base = automap_base()
Base.prepare(engine, reflect=True)

# Save reference to the table
pokemon_sql = Base.classes.pokemon

# Flask Setup
app = Flask(__name__)

#Set up MongoDB Database
app.config['MONGO_URI'] = f'mongodb+srv://MikeAnderson89:{mongo_password}@cluster0-wadjd.mongodb.net/test?retryWrites=true&w=majority'
mongo = PyMongo(app)


@app.route("/")
def index():
    #Return the homepage
    pokemon_data = mongo.db.pokemon.find_one()
    return render_template("index.html", pokemon_data = pokemon_data)
    session.close()


#All Pokemon Stats
@app.route("/stats")
def stats():
    session = Session(engine)
    stats = session.query(pokemon_data).all()
    pokemon_list =[]
    for pokeman in stats:
        pokeman = {'Name': pokeman.name,
                    'Number': pokeman.number,
                    'Type 1': pokeman.type_1,
                    'Type 2': pokeman.type_2,
                    'HP': pokeman.hp,
                    'Attack': pokeman.attack,
                    'Defense': pokeman.defense,
                    'Special Attack': pokeman.sp_atk,
                    'Special Defense': pokeman.sp_def,
                    'Speed': pokeman.speed,
                    'Generation': pokeman.generation,
                    'Legendary': pokeman.legendary}
        pokemon_list.append(pokeman)
    return jsonify(pokemon_list)
    session.close()

#Pokemon By Name
#@app.route("/by_name/<name>")
#def by_name(name):
#    session = Session(engine)
#    results = session.query(pokemon.name,
#                            pokemon.number,
#                            pokemon.type_1,
#                            pokemon.type_2,
#                            pokemon.hp,
#                            pokemon.attack,
#                            pokemon.defense,
#                            pokemon.sp_atk,
#                            pokemon.sp_def,
#                            pokemon.speed,
#                            pokemon.generation,
#                            pokemon.legendary
#                            .filter(securities.name == name).all()
#    if results:
#        for result in results:
#            if result:
#                return jsonify(result)
#            else:
#                return jsonify("No such Pokemon")
#        session.close()
#    else:
#        return jsonify("No such Pokemon")

@app.route("/scrape")
def scraper():
    import Pokemon_Scrape
    pokemon_db = mongo.db.pokemon
    pokemon_data = Pokemon_Scrape.scrape(request.form['pokemon_name'])
    pokemon_db.update({}, pokemon_data, upsert=True)
    return redirect("/", code=302)

if __name__ == "__main__":
    app.run(debug=True)
