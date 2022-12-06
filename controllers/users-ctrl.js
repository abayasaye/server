const usersModel = require("../models/users-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const registerValidate = require("../validation/register");
const loginValidate = require("../validation/login");
const key = process.env.SECRET_KEY;

const register = async (req, res)=>{
    const {isValid , errors} = registerValidate(req.body.user)
    if(!isValid) return res.status(400).json(errors);
    usersModel.findOne({email:req.body.user.email}, (err , user)=>{
        if(err) return res.status(400).json(err);
        if(user) return res.json({message:"email already taken"});
        bcrypt
        .genSalt()
        .then((salt) =>{
            bcrypt.hash(req.body.user.password , salt)
            .then(async (hashPassword)=>{
                req.body.user.password = hashPassword;
                await usersModel
                .insertMany(req.body.user)
                .then(()=>res.json({message:"success"}))
                .catch((err) => res.json(err))
            })
            .catch((err)=>{
                console.log(err);
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    });
};






const login = async (req ,res)=>{
    const {isValid , errors}=loginValidate(req.body.user)
    if(!isValid) return res.status(400).json(errors)
    const email = req.body.user.email;
    const password = req.body.user.password;
    await usersModel.findOne({email}).then((user) =>{
        if(!user){
            return res.status(403).json({emailNotFound: "email not found"});
        }
        bcrypt.compare(password , user.password).then((isMatch) =>{
            if(isMatch){
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email
                };
                jwt.sign(payload , key , {expiresIn:"15m"} ,(err , token) =>{
                    if(err) return res.status(400).json({err ,message:"authorized"});
                    res.json({success:true , token: `bearer ${token}` });
                });
            } else {
                return res.status(400).json({incorrectPassword:"incorrect password"})
            }
        });
    });
};

const getUsers = async (req , res)=>{
    await usersModel.find({})
    .then((result ,err)=>{
        if(err){
            return res.status(400).json({success:false ,err});
        }
        if(result.length == 0){
            return res.json({success:false , message:"no details"});
        }
        if(result){
            res.status(200).json({success:true, result});
        }
    });
};

module.exports={
    register,
    login,
    getUsers
}
