import pandas as pd
from bs4 import BeautifulSoup as bs
import requests
from splinter import Browser
import time
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
from flask import Flask, jsonify, render_template, redirect
from flask_pymongo import PyMongo
from config import mongo_password, mongo_username
from selenium import webdriver

app = Flask(__name__)
csv = pd.read_csv('Pokemon.csv')

app.config['MONGO_URI'] = f'mongodb+srv://MikeAnderson89:{mongo_password}@cluster0-wadjd.mongodb.net/test?retryWrites=true&w=majority'
mongo = PyMongo(app)

def scrape(pokemon):
    url = f'https://bulbapedia.bulbagarden.net/wiki/{pokemon}_(Pok%C3%A9mon)'
    driver = webdriver.Chrome()
    #Open browser
    browser = Browser('chrome')
    browser.visit(url)

    #Turn webpage into html
    html = browser.html
    soup = bs(html, 'lxml')

    #Find the picture of the Pokemon and click on it until it's just the .png file
    browser.execute_script("window.scrollTo(0, 400);")
    links_found = browser.find_link_by_partial_href(f'{pokemon}.png').click()
    time.sleep(2)
    browser.execute_script("window.scrollTo(0, 400);")
    image = browser.find_by_id('file').click()
    time.sleep(2)
    pokemon_url = browser.url

    #Store it in a dictionary
    pokemon_image = {'name': pokemon,
                     'url': pokemon_url}
    browser.quit()

    return pokemon_image

big_ol_pokemon_list = csv['Name']
#Run through every pokemon name and get the picture
for pokedude in big_ol_pokemon_list[170:]:
    try:
        pokemon_db = mongo.db.pokemon
        pokemon_data = scrape(pokedude)
        pokemon_db.insert_one(pokemon_data)
    except AttributeError:
        print("No picture")
