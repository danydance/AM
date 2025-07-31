from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import db


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
