import userService from "../services/user.service.js"
import mongoose from "mongoose"

const validId = (request, response, next)=>{

    try{
        const id = request.params.id
    
        if(!mongoose.Types.ObjectId.isValid(id)){
            return response.status(400).send({message: "Invalid ID"})
        }
    
        next()
    }
    catch(error){
        response.status(500).send({error:"Connection error"})
    }
}

const validUser = async (request, response, next)=>{

    try{
        const id = request.params.id
    
        const users = await userService.getId(id)
    
        if(!users){
            return response.status(400).send({message: "User not found"})
        }
    
        request.id = id
        request.user = users
    
        next()
    }
    catch(error){
        response.status(500).send({error:"Connection error"})
    }
}

export default {validId, validUser}
