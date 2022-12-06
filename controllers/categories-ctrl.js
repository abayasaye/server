const categoriesModel = require("../models/categories-model")

const getCategories =async (req,res)=>{
    await categoriesModel.find({})
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
    await categoriesModel.findById(req.params.category)
    .then((category)=>{
        if(!category){
            return res.json({success:false , message:"there is no category"})
        }
        return res.status(200).json({success:true , Category})
    })  
    .catch(error => res.status(400).json({ success: false, error }))
}
 
const createCategory = async (req, res) => {
    await categoriesModel.insertMany(req.body)
        .then(() => res.status(300).json({ success: true, massage: "category added successfully" }))
        .catch((error) => res.status(400).json({ success: false, error }))
}

const updateCategory = async (req, res) => {
    await categoriesModel.findByIdAndUpdate(req.params.id, req.body.category)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deleteCategory = async (  req, res) => {
    await categoriesModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false ,error}))
}


module.exports = {
    getCategories,
    getById,
    createCategory,
    updateCategory,
    deleteCategory
}

