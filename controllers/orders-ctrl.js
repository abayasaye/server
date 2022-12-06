const ordersModel = require('../models/orders-model')

const getOrder =async (req,res)=>{
    await ordersModel.find({})
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
    await ordersModel.findById(req.params.order)
    .then((order)=>{
        if(!order){
            return res.json({success:false , message:"there is no order"})
        }
        return res.status(200).json({success:true , order})
    })  
    .catch(error => res.status(400).json({ success: false, error }))
}
 
const createOrder = async (req, res) => {
    await ordersModel.insertMany(req.body)
        .then(() => res.status(200).json({ success: true, massage: "order added successfully" }))
        .catch((error) => res.status(400).json({ success: false, error }))
}

const updateOrder = async (req, res) => {
    await ordersModel.findByIdAndUpdate(req.params.id, req.body.order)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deleteOrder = async (  req, res) => {
    await ordersModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false ,error}))
}


module.exports = {
    getOrder,
    getById,
    createOrder,
    updateOrder,
    deleteOrder
}

