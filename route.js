import express from "express";
import bodyParser from "body-parser";
import { createContact, getAllContacts } from "./controller/index.js";

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
    res.send("get by id");
});

// update
router.patch('/contact/:id', (req, res) => {
    res.send("update by id");
});

// delete
router.delete('/contact/:id', (req, res) => {
    res.send("delete by id");
});

export default router;