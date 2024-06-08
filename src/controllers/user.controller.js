import userService from "../services/user.service.js"


class userController{
    
    async getAll(request, response){

        const users = await userService.getAll()

        if(users.length === 0){
            return response.status(400).send({message: "There are no registered users"})
        }

        response.status(200).send(users)
    }


    async getId(request, response){

        const users = request.user

        response.status(200).send(users)
    }


    async post(request, response){
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


    async patch(request, response){

        const {name, username, email, password, avatar, background} =request.body

        if(!name && !username && !email && !password && !avatar && !background){
            response.status(400).send({message:"Submit at least one field for update"})
        }

        const id = request.id

        await userService.patch(id,name,username,email,avatar,background)

        response.status(200).send({message: "User successfully updated"})
    }
}

export default new userController()
