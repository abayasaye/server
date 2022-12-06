const validator = require("validator")
const isEmpty = require("is-empty");


module.exports = validateRegister = (user)=>{
    errors = {};
    user.name = isEmpty(user.name) ? "":user.name;
    user.email = isEmpty(user.email) ? "":user.email;
    user.password = isEmpty(user.password) ? "":user.password;
    user.confirmPassword = isEmpty(user.confirmPassword) ? "":user.confirmPassword;

    if(validator.isEmpty(user.name)) errors.name = "name is required";
    if(validator.isEmpty(user.email)) errors.email = "email is required";
    if(!validator.isEmail(user.email)) errors.email = "email must be valid";
    if(validator.isEmpty(user.password)) errors.password = "password is required";
    if(!validator.equals(user.password , user.confirmPassword)) errors.name = "first name is required";
    
return {
        errors,
        isValid:isEmpty(errors)
    }
}