import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        max: 20,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8,
    }
});

export default mongoose.model("Admin", adminSchema);
