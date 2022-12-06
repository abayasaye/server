const productsModel = require('../models/products-model')

const getProducts =async (req,res)=>{
    await productsModel.find({})
    .then((result,err)=>{
        if (err) {
            return res.status(400).json({success:false,message:err})
        }
        if (result.length == 0 ) {
            return res.status(400).json
            ({success:false,message:"no data"})
        }
        if (result) {
            res.status(200).json({success:true,message:result})
        }
    })
    .catch((err)=>{
        return res.status(400).json({success:false,message:err})
    })
}

const getById = async (req , res)=>{
    await productsModel.findById(req.params.product)
    .then((product)=>{
        if(!product){
            return res.json({success:false , message:"there is no product"})
        }
        return res.status(200).json({success:true , product})
    })  
    .catch(error => res.status(400).json({ success: false, error }))
}
 
const createProduct = async (req, res) => {
    await productsModel.insertMany(req.body)
        .then(() => res.status(200).json({ success: true, massage: "product added successfully" }))
        .catch((error) => res.status(400).json({ success: false, error }))
}

const updateProduct = async (req, res) => {
    await productsModel.findByIdAndUpdate(req.params.id, req.body.product)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deleteProduct = async (  req, res) => {
    await productsModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false ,error}))
}


module.exports = {
    getProducts,
    getById,
    createProduct,
    updateProduct,
    deleteProduct
}

