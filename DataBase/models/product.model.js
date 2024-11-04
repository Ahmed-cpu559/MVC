import { model,Schema } from "mongoose";


let schema = new Schema({

    name : String,
    price : String,
    description : String

})


export const Product = model('Product',schema)