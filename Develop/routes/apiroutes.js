const router = require('express').Router();
const { newNote, deleteNote } = require('../lib/notes');
const  note = require('../db/db.json');