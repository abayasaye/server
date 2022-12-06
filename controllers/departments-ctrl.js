const departmentModel = require('../models/departments- model')

const getDepartments =async (req,res)=>{
    await departmentModel.find({})
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
    await departmentModel.findById(req.params.department)
    .then((department)=>{
        if(!department){
            return res.json({success:false , message:"there is no department"})
        }
        return res.status(200).json({success:true , department})
    })  
    .catch(error => res.status(400).json({ success: false, error }))
}
 
const createDepartment = async (req, res) => {
    await departmentModel.insertMany(req.body)
        .then(() => res.status(200).json({ success: true, massage: "department added successfully" }))
        .catch((error) => res.status(400).json({ success: false, error }))
}

const updateDepartment = async (req, res) => {
    await departmentModel.findByIdAndUpdate(req.params.id, req.body.department)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
}
const deleteDepartment = async (  req, res) => {
    await departmentModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false ,error}))
}


module.exports = {
    getDepartments,
    getById,
    createDepartment,
    updateDepartment,
    deleteDepartment
}

