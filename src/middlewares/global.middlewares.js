import userService from "../services/user.service.js"
import mongoose from "mongoose"

const validId = (request, response, next)=>{
    const id = request.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return response.status(400).send({message: "Invalid ID"})
    }

    next()
}

const validUser = async (request, response, next)=>{
    const id = request.params.id

    const users = await userService.getId(id)

    if(!users){
        return response.status(400).send({message: "User not found"})
    }

    request.id = id
    request.user = users

    next()
}

export {validId, validUser}
