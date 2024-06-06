import User from "../models/User.js";

// "find":  método do mongoose que busca todos os itens dentro do schema e com seus padrões
const getAll = () => User.find()

// "findById":  método do mongoose que busca um item pelo id dentro do schema e com seus padrões
const getId = (id) => User.findById(id)

// "create":  método do mongoose que cria um novo item dentro do schema e com seus padrões
const post = (body) => User.create(body)

// "findOneAndUpdate":  método do mongoose que procura um item dentro do schema e atualiza
const patch = (id,name,username,email,avatar,background) => User.findOneAndUpdate(
    // "procura por esse id"
    {_id: id},
    // "e atualiza esses campos"
    {name, username, email, avatar, background}
)


export default {getAll,getId,post,patch}