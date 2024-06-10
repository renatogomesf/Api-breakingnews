import mongoose from "mongoose";

// controla como os documentos serão criados
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    username: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
        // "select: false": quando é feita uma consulta no banco de dados, o password não vem na resposta.
        select: false
    },

    avatar: {
        type: String,
        require: true
    },

    background: {
        type: String,
        require: true
    }
})

const User = mongoose.model("User", userSchema)

export default User
