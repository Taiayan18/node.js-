import { Product } from "../Models/ProductModels.js";


export const createProduct = async(req,res)=>{
   try {
    const {name,price,description,image,categoryID} = req.body;
    if (!name||!price||!description||!image || !categoryID) {
        return res.status(400).json({
            status: false,
            message:"Payload missing"
        })
    }

    const product1 = await Product.create({
        name,price,description,image,categoryID
    })
    return res.status(201).json({
        status:true,
        message: "product added",
        data:product1
    })
   } catch (error) {
     return res.json({
        status: false,
        message:`error in adding product ${error.message}`
     })
   }
}

export const getproduct = async(req,res) => {
    try {

        const {id} = req.params;
        if(!id) {
            return res.status(404).json({
                status : false,
                message:"Data Not Found"
            })
        }

        const product1 = await Product.find({categoryID : id }).sort({createdAt:-1})

        return res.status(200).json({
            status:true,
            message:"Data Get All",
            data:product1
        })
        
    } catch (error) {
        return res.status(500).json({
            status:false,
            message: `Error in getProduct ${error.message}`
        })
    }
}

export const getbysingleproduct = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(404).json({
                status:false,
                message:"Data Not Found"
            })
        }

        const product1 = await Product.findById(id)

        return res.status(200).json({
            status:true,
            message:"Data get  SingleProduct BY id",
            data:product1
        })
    } catch (error) {
        return res.status(500).json({
            status:false,
            message: `Error in getProduct ${error.message}`
    })
}
}