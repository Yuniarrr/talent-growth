import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    numberPhone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
});

export const contacts = mongoose.model('Contacts', ContactSchema);