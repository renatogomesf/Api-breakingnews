import User from "../models/User.js";

// "find":  método do mongoose que busca todos os itens dentro do schema e com seus padrões
const getAll = () => User.find()

// "findById":  método do mongoose que busca um item pelo id dentro do schema e com seus padrões
const getId = (id) => User.findById(id)

// "create":  método do mongoose que cria um novo item dentro do schema e com seus padrões
const create = (body) => User.create(body)

export default {
    create,
    getAll,
    getId
}