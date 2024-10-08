import mongoose from "mongoose";

const subTodosSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, // we saying that take reference of the user
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "SubTodo"
        }
    ] // arrays of subtodos

}, { timestamps: true });
