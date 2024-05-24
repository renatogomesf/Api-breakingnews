class userController{
    
    soma(request, response){
        const soma = 100+1

        response.status(200).send({ soma: soma })
    }
}

export default new userController()