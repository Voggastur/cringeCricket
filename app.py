import os
from flask import Flask, render_template, redirect, request, url_for, flash
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from os import path
if path.exists("env.py"):
    import env


app = Flask(__name__)


# My DB on MongoDB
app.config["MONGO_DBNAME"] = 'adventurers'
# SECRET_KEY variable
app.config["MONGO_URI"] = os.environ.get('SECRET_KEY')
# File Upload Config
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}

mongo = PyMongo(app)


@app.route('/')
@app.route('/get_heroes')
def get_heroes():
    return render_template("heroes.html",
                           heroes=mongo.db.heroes.find(),
                           adventures=mongo.db.adventures.find())


@app.route('/add_hero')
def add_hero():
    return render_template('addhero.html',
                           heroes=mongo.db.heroes.find(),
                           adventures=mongo.db.adventures.find())


@app.route('/insert_hero', methods=['POST'])
def insert_hero():
    heroes = mongo.db.heroes
    heroes.insert_one(request.form.to_dict())
    return redirect(url_for('get_heroes'))


@app.route('/edit_hero/<hero_id>')
def edit_hero(hero_id):
    the_hero = mongo.db.heroes.find_one({"_id": ObjectId(hero_id)})
    all_adventures = mongo.db.adventures.find()
    return render_template('edithero.html', hero=the_hero,
                           adventures=all_adventures)


@app.route('/update_hero/<hero_id>', methods=["POST"])
def update_hero(hero_id):
    heroes = mongo.db.heroes
    heroes.update({'_id': ObjectId(hero_id)},
                  {
        'adventure_name': request.form.get('adventure_name'),
        'hero_name': request.form.get('hero_name'),
        'weapon': request.form.get('weapon'),
        'armor': request.form.get('armor'),
        'profession': request.form.get('profession'),
        'mount': request.form.get('mount'),
        'possessions': request.form.get('possessions'),
        'home': request.form.get('home'),
        'race': request.form.get('race'),
    })
    return redirect(url_for('get_heroes'))


@app.route('/delete_hero/<hero_id>')
def delete_hero(hero_id):
    mongo.db.heroes.remove({'_id': ObjectId(hero_id)})
    return redirect(url_for('get_heroes'))


@app.route('/get_adventure')
def get_adventure():
    return render_template('adventure.html',
                           adventures=mongo.db.adventures.find())


@app.route('/delete_adventure/<adventures_id>')
def delete_adventure(adventures_id):
    mongo.db.adventures.remove({'_id': ObjectId(adventures_id)})
    return redirect(url_for('get_adventure'))


@app.route('/edit_adventure/<adventures_id>')
def edit_adventure(adventures_id):
    return render_template('edit_adventure.html',
                           adventures=mongo.db.adventures.find_one({'_id': ObjectId(adventures_id)}))


@app.route('/update_adventure/<adventures_id>', methods=['POST'])
def update_adventure(adventures_id):
    mongo.db.adventures.update(
        {'_id': ObjectId(adventures_id)},
        {'adventure_name': request.form.get('adventure_name')})
    return redirect(url_for('get_adventure'))


@app.route('/insert_adventure', methods=['POST'])
def insert_adventure():
    adventure_doc = {'adventure_name': request.form.get('adventure_name')}
    mongo.db.adventures.insert_one(adventure_doc)
    return redirect(url_for('get_adventure'))


@app.route('/add_adventure')
def add_adventure():
    return render_template('add_adventure.html')


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
