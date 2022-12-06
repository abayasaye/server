const storesModel = require("../models/stores-model")

const getStores =async (req,res)=>{
    await storesModel.find({})
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
    await storesModel.findById(req.params.store)
    .then((store)=>{
        if(!store){
            return res.json({success:false , message:"there is no store"})
        }
        return res.status(200).json({success:true , store})
    })  
    .catch(error => res.status(400).json({ success: false, error }))
}

const createStore = async (req, res) => {
    await storesModel.insertMany(req.body.store)
        .then(() => res.status(300).json({ success: true, massage: "store added successfully" }))
        .catch((error) => res.status(400).json({ success: false, error }))
}

const updateStore = async (req, res) => {
    await storesModel.findByIdAndUpdate(req.params.id, req.body.store)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deleteStore = async (  req, res) => {
    await storesModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false ,error}))
}


module.exports = {
    getStores,
    getById,
    createStore,
    updateStore,
    deleteStore
}

