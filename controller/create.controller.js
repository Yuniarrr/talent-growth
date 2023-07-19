import { contacts } from "../model.js";

const createContact = async (req, res) => {
    try {
        const contact = req.body;

        const new_contact = new contacts(contact);
        await new_contact.save();

        return res.status(201).json(contact).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export default createContact;