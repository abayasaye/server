const infoModel = require('../models/info-model')

const getInfo =async (req,res)=>{
    await infoModel.find({})
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
    await infoModel.findById(req.params.info)
    .then((info)=>{
        if(!info){
            return res.json({success:false , message:"there is no info"})
        }
        return res.status(200).json({success:true , info})
    })  
    .catch(error => res.status(400).json({ success: false, error }))
}
 
const createInfo = async (req, res) => {
    await infoModel.insertMany(req.body)
        .then(() => res.status(200).json({ success: true, massage: "info added successfully" }))
        .catch((error) => res.status(400).json({ success: false, error }))
}

const updateInfo = async (req, res) => {
    await infoModel.findByIdAndUpdate(req.params.id, req.body.info)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deleteInfo = async (  req, res) => {
    await infoModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false ,error}))
}


module.exports = {
    getInfo,
    getById,
    createInfo,
    updateInfo,
    deleteInfo
}

