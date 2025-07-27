from fastapi import FastAPI
from database import db

app = FastAPI()


@app.get("/")
def root():
    return {"message" : "root"}

@app.get("/it-people")
def get_ITpeople():
    return db.it_people

@app.get("/buildings")
def get_buildings():
    return db.buildings


@app.get("/resources")
def get_resources():
    return db.resources
