const Usuario = require('../models/usuario')
 
 

createUser = async (user) => {
    let userInstance = new Usuario(user)
    user = await userInstance.save()
    return user
}

getUsers = async () => {
    let user = await Usuario.find({}).populate("idProyecto").populate("rol")
    return user
}

getUserById = async(userId) =>{
    let user = await Usuario.findById(userId).populate("idProyecto").populate("rol")
    return user
}

updateUser = async (userId, user)=>{
    let new_user = Usuario.findByIdAndUpdate(userId, user,{new:true})
    return new_user
}

deleteUser = async (userId) => {
    let user = await Usuario.findByIdAndDelete(userId)
    return user
}

UpdateProject = async(userId, projectId)=>{
    let user = await Usuario.findByIdAndUpdate(userId,{
        $push:{
            idProyecto:projectId
        }
    })
    return user
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    UpdateProject,
    deleteUser    
}