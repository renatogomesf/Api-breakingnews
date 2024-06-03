import userService from "../services/user.service.js"
import mongoose from "mongoose"

class userController{
    
    async getAll(request, response){

        const users = await userService.getAll()

        if(users.length === 0){
            return response.status(400).send({message: "There are no registered users"})
        }

        response.status(200).send(users)
    }


    async getId(request, response){

        const id = request.params.id

        if(!mongoose.Types.ObjectId.isValid(id)){
            return response.status(400).send({message: "Invalid ID"})
        }

        const users = await userService.getId(id)

        if(!users){
            return response.status(400).send({message: "User not found"})
        }

        response.status(200).send(users)
    }


    async create(request, response){
        const {name, username, email, password, avatar, background} =request.body

        if(!name || !username || !email || !password || !avatar || !background){
            response.status(400).send({message:"Submit all fields for registration"})
        }

        const user = await userService.create(request.body)

        if(!user){
            return response.status(400).send({message: "Error creating user"})
        }

        response.status(201).send({
            message: "User created successfully",
            user:{
                id: user._id,
                name,
                username,
                email,
                avatar,
                background
            }
        })
    }
}

export default new userController()
