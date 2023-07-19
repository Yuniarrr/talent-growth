import { contacts } from "../model.js";

const getAllContacts = async (req, res) => {
    try {
        const get_contacts = await contacts.find();

        return res.status(200).json(get_contacts);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export default getAllContacts;