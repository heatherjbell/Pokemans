def scrape():
    import pandas as pd
    from bs4 import BeautifulSoup as bs
    import requests
    from splinter import Browser
    import time

    #Latest Headline / Paragraph
    pokemon = 'Bulbasaur'
    url = f'https://bulbapedia.bulbagarden.net/wiki/{pokemon}_(Pok%C3%A9mon)'

    #Open browser
    browser = Browser('chrome')
    browser.visit(url)

    #Turn webpage into html
    html = browser.html
    soup = bs(html, 'lxml')

    #Find the picture of the Pokemon and click on it until it's just the .png file
    links_found = browser.find_link_by_partial_href(f'{pokemon}.png').click()
    image = browser.find_by_id('file').click()
    pokemon_url = browser.url

    #Store it in a dictionary
    pokemon_image = {'URL': pokemon_url}
    browser.quit()

    return pokemon_image
