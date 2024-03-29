import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
from flask import Flask, jsonify, render_template, redirect
from flask_pymongo import PyMongo
from config import mongo_password, mongo_username, sql_username, sql_password
from bson.json_util import dumps


# Database Setup
rds_connection_string = f"{sql_username}:{sql_password}@localhost:5432/Pokemon"
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


#All Pokemon Stats
@app.route("/stats")
def stats():
    session = Session(engine)
    stats = session.query(pokemon_sql).all()
    pokemon_list =[]
    for pokeman in stats:
        pokeman = {'Name': pokeman.name,
                    'Number': pokeman.number,
                    'Type_1': pokeman.type_1,
                    'Type_2': pokeman.type_2,
                    'HP': pokeman.hp,
                    'Attack': pokeman.attack,
                    'Defense': pokeman.defense,
                    'Special_Attack': pokeman.sp_atk,
                    'Special_Defense': pokeman.sp_def,
                    'Speed': pokeman.speed,
                    'Generation': pokeman.generation,
                    'Legendary': pokeman.legendary}
        pokemon_list.append(pokeman)
    return jsonify(pokemon_list)
    session.close()

#Mongo DB image database
@app.route("/images")
def images():
    pokemon_image_db = mongo.db.pokemon.find()
    images = []
    for image in pokemon_image_db:
        image.pop('_id')
        images.append(image)
    return jsonify(images)


if __name__ == "__main__":
    app.run(debug=True)
