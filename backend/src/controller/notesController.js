import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({createdAt:-1}); //newest note first
        res.status(200).send(notes);
    } catch (error) {
        console.log("Error in getAllNotes controller",error);
        res.status(500).json({message: "Internal server error"});
    }
    
}

export async function getNotesById(req, res){
    try {
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json(note);
    } catch (error) {
        onsole.log("Error in getNotesById controller",error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function postNotes(req, res) {
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content});
        await newNote.save();
        res.status(201).json({message: "Note created successfully"});
    } catch (error) {
        console.log("Error in postNotes controller",error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function putNote(req,res) {
    try {
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new: true})
        if(!updatedNote){
            return res.status(404).json({message: "Note not found"})
        }
        res.status(200).json({message: "Note updated successfully"})
    } catch (error) {
        console.log("Error in putNotes controller",error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteNote(req,res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deleteNote){
            return res.status(404).json({message: "Note not found"})
        }
        res.status(200).json({message: "Note deleted successfully"})
    } catch (error) {
        console.log("Error in deleteNotes controller",error);
        res.status(500).json({message: "Internal server error"});
    }
}