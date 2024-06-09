import userService from "../services/user.service.js"


class userController{
    
    async getAll(request, response){

        try{
            const users = await userService.getAll()
    
            if(users.length === 0){
                return response.status(400).send({message: "There are no registered users"})
            }
    
            response.status(200).send(users)
        }
        catch(error){
            response.status(500).send({error:"Connection error"})
        }
    }


    async getId(request, response){

        try{
            const users = request.user
    
            response.status(200).send(users)
        }
        catch(error){
            response.status(500).send({error:"Connection error"})
        }
    }


    async post(request, response){

        try{
            const {name, username, email, password, avatar, background} =request.body
    
            if(!name || !username || !email || !password || !avatar || !background){
                response.status(400).send({message:"Submit all fields for registration"})
            }
    
            const user = await userService.post(request.body)
    
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
        catch(error){
            response.status(500).send({error})
        }
    }


    async patch(request, response){

        try{
            const {name, username, email, password, avatar, background} =request.body
    
            if(!name && !username && !email && !password && !avatar && !background){
                response.status(400).send({message:"Submit at least one field for update"})
            }
    
            const id = request.id
    
            await userService.patch(id,name,username,email,avatar,background)
    
            response.status(200).send({message: "User successfully updated"})
        }
        catch(error){
            response.status(500).send({error:"Connection error"})
        }
    }
}

export default new userController()
