const rolService = require('../services/rol')

const rolResolvers ={
    Query:{
        getRols: async(parent,args)=>{
            // lógica del proceso
            let rols  = await rolService.getRols()
            return rols
        },
        getRolById: async (parent,args)=>{
            let rol = await rolService.getRolById(args._id)
            return rol
        }
    },
    Mutation:{
        createRol: async (parent, args) => {
            let rol = await rolService.createRol(args)
            return rol
        },
        updateRol: async (parent,args) =>{
            let rol_update = rolService.updateRol(args._id,args)
            return rol_update
        },
        deleteRol: async (parent,args) =>{
            let rol_delete = rolService.deleteRol(args._id)
            return rol_delete
        }
 
}
}

module.exports = {
    rolResolvers
}