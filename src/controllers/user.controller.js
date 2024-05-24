class userController{
    
    get(request, response){

        response.status(200).send('rodando')
    }

    create(request, response){
        const {name, username, email, password, avatar, background} =request.body

        if(!name || !username || !email || !password || !avatar || !background){
            response.status(400).send({message:"Submit all fields for registration"})
        }

        response.status(201).send({
            message: "User created successfully",
            user:{
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
