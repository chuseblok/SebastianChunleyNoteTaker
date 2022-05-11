const router = require("express").Router();
const { newNote, deleteNote } = require("../lib/notes");
const note = require("../db/db.json");

router.get("/notes", (req, res) => {
  note
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
  newNote
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

router.delete("/notes/:id", (req, res) => {
  deleteNote
    .removeNote(req.param.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
