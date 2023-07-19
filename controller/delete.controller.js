import { contacts } from "../model.js";

const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;

        const exist_contact = await contacts.findById(id);

        if (!exist_contact) {
            return res.sendStatus(404);
        }

        await contacts.findOneAndDelete(id);

        return res.sendStatus(204);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export default deleteContact;