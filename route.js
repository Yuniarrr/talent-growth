import express from "express";
import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.json());

router.get("/", (req, res) => {
    res.send("Hello World!");
});

// create contact
router.post('/contact', (req, res) => {
    console.log("create");
});

// get all
router.get('/contacts', (req, res) => {
    console.log("get all");
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