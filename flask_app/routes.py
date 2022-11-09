from flask import current_app as app
from flask import render_template, redirect, request
from werkzeug.datastructures import ImmutableMultiDict
from pprint import pprint
import json
import random
import csv

@app.route('/')
def root():
    return redirect('/selection_page')

@app.route('/selection_page')
def selection_page():
    data = get_data()
    return render_template('/selection_page.html', data = data)

@app.route('/graph_page')
def graph_page():
    data = get_data()
    return render_template('/graph_page.html', data = data)

@app.route('/question_page')
def question_page():
	return render_template('/question_page.html')

@app.route('/table_page')
def table_page():
    data = get_data()
    return render_template('/table_page.html', data = data)

def get_data():
    with open('table_data.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        data = []
        for row in reader:
            data.append(row)
    return data