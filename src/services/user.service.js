import User from "../models/User.js";

// "create":  método do mongoose que cria um novo item dentro do schema e com seus padrões
const create = (body) => User.create(body)

export default {
    create
}