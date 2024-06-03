import User from "../models/User.js";

// "create":  método do mongoose que cria um novo item dentro do schema e com seus padrões
const getAll = () => User.find()

const getId = (id) => User.findById(id)

const create = (body) => User.create(body)

export default {
    create,
    getAll,
    getId
}