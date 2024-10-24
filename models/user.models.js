import mongoose from "mongoose";

const user = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cnfPassword: {
        type: String,
        required: true
    },
})

export const newUser = mongoose.model("newUser", user)