import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
from config import username, password
from flask import Flask, jsonify


# Database Setup
rds_connection_string = f"postgres:postgres@localhost:5432/pokemon"
engine = create_engine(f'postgresql://{rds_connection_string}')

# Reflect existing database
Base = automap_base()
Base.prepare(engine, reflect=True)

# Save reference to the table
pokemon_data = Base.classes.pokemon

# Flask Setup
app = Flask(__name__)


@app.route("/")
def index():
    #Return the homepage
    return render_template("index.html")
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
    print(pokemon_list)
        pokemon_list.append(pokeman)
    return jsonify(pokemon_list)

#Pokemon By Name
@app.route("/by_name/<name>")
def by_name(name):
    session = Session(engine)
    results = session.query(pokemon.name,
                            pokemon.number,
                            pokemon.type_1,
                            pokemon.type_2,
                            pokemon.hp,
                            pokemon.attack,
                            pokemon.defense,
                            pokemon.sp_atk,
                            pokemon.sp_def,
                            pokemon.speed,
                            pokemon.generation,
                            pokemon.legendary
                            .filter(securities.name == name).all()
    if results:
        for result in results:
            if result:
                return jsonify(result)
            else:
                return jsonify("No such Pokemon")
        session.close()
    else:
        return jsonify("No such Pokemon")

if __name__ == "__main__":
    app.run(debug=True)
