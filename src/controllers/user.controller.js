import userService from "../services/user.service.js"

class userController{
    
    get(request, response){

        response.status(200).send('rodando')
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
