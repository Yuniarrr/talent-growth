import express from "express";
import bodyParser from "body-parser";
import { createContact, getAllContacts, getContact, editContact } from "./controller/index.js";

const router = express.Router();

router.use(bodyParser.json());

router.get("/", (req, res) => {
    res.send("Hello World!");
});

// create contact
router.post('/contact', (req, res) => {
    createContact(req, res);
});

// get all
router.get('/contacts', (req, res) => {
    getAllContacts(req, res);
});

// get one
router.get('/contact/:id', (req, res) => {
    getContact(req, res);
});

// update
router.patch('/contact/:id', (req, res) => {
    editContact(req, res);
});

// delete
router.delete('/contact/:id', (req, res) => {
    res.send("delete by id");
});

export default router;