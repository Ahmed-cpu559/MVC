import mongoose from 'mongoose'


export const dbConnection = mongoose.connect('mongodb+srv://CRUD_User:gII9C206ADIPHE26@cluster0.hsx7vm8.mongodb.net/CRUD')
.then(()=>{
    console.log("Database connected..."); // Log success message on successful connection
}).catch((error)=>{
    console.error('Error connecting to the database:', error.message); // Log error message on failure
})

//gII9C206ADIPHE26

//