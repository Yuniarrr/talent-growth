import { contacts } from "../model.js";

const getContact = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await contacts.findById(id);

        return res.status(200).json(contact).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export default getContact;