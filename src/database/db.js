import mongoose from "mongoose";

const connectDatabse = ()=>{
    console.log('wait connecting to the database')

    mongoose.connect(
        'mongodb+srv://renatogomesferreira20:YjYzUzx74OpMYTer@cluster0.1l1sfl8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch((error) => console.log(error))
}

export default connectDatabse