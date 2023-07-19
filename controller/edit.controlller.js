import { contacts } from "../model.js";

const editContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = req.body;

        const exist_contact = await contacts.findById(id);

        if (!exist_contact) {
            return res.sendStatus(404);
        }

        Object.assign(exist_contact, contact);
        await exist_contact.save();

        return res.status(200).json(exist_contact).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export default editContact;