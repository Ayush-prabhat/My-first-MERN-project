import express from "express";
import { deleteNote, getAllNotes, postNotes, putNote, getNotesById } from "../controller/notesController.js";

const router = express.Router();



router.get("/", getAllNotes);
router.get("/:id", getNotesById);
router.post("/", postNotes);
router.put("/:id", putNote);
router.delete("/:id", deleteNote);

export default router;