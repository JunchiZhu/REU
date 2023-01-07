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
    data1 = get_level1()
    data2 = get_level2()
    data3 = get_level3()
    description1 = get_description()
    return render_template('/selection_page.html', data1 = data1, data2 = data2, data3 = data3, description1 = description1)

@app.route('/graph_page')
def graph_page():
    data1 = get_level1()
    data2 = get_level2()
    data3 = get_level3()
    return render_template('/graph_page.html', data1 = data1, data2 = data2, data3 = data3)

@app.route('/question_page')
def question_page():
	return render_template('/question_page.html')

@app.route('/table_page')
def table_page():
    data1 = get_table_level1()
    data2 = get_table_level2()
    data3 = get_table_level3()
    return render_template('/table_page.html', data1 = data1, data2 = data2, data3 = data3)

def get_data():
    with open('table_data.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        data = []
        for row in reader:
            data.append(row)
    return data

def get_level1():
    with open('data/level1.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        data = []
        for row in reader:
            data.append(row)
    return data


def get_level2():
    with open('data/level2.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        data = []
        for row in reader:
            data.append(row)
    return data


def get_level3():
    with open('data/level3.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        data = []
        for row in reader:
            data.append(row)
    return data

def get_description():
    with open('data/description.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        data = []
        for row in reader:
            data.append(row)
    return data

def get_table_level1():
    with open('data/table_level1.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        data = []
        for row in reader:
            data.append(row)
    return data


def get_table_level2():
    with open('data/table_level2.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        data = []
        for row in reader:
            data.append(row)
    return data

def get_table_level3():
   with open('data/table_level3.csv', newline='') as csvfile:
       reader = csv.DictReader(csvfile)
       data = []
       for row in reader:
           data.append(row)
   return data