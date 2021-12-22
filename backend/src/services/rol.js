const Rol = require('../models/rol')


createRol = async (rol) => {
    let rolInstance = new Rol(rol)
    rol = await rolInstance.save()
    return rol
}

getRols = async () => {
    let rol = await Rol.find({}) 
    return rol
}

getRolById = async(rolId) =>{
    let rol = await Rol.findById(rolId) 
    return rol
}

updateRol = async (rolId, rol)=>{
    let new_rol = Rol.findByIdAndUpdate(rolId, rol,{new:true})
    return new_rol
}

deleteRol = async (rolId) => {
    let rol = await Rol.findByIdAndDelete(rolId)
    return rol
}
module.exports = {
    createRol,
    getRols,
    getRolById,
    updateRol,   
    deleteRol
    

}