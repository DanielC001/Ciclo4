const userService = require('../services/usuario')


const userResolvers ={
    Query:{
        getUsers: async(parent,args) =>{
            // lógica del proceso
            let users  = await userService.getUsers()
            return users
        },
        getUserById: async (parent,args)=>{
            let user = await userService.getUserById(args._id)
            return user
        }
    },
    Mutation:{
        createUser: async (parent, args) => {
            let user = await userService.createUser(args)
            return user
        },
        updateUser: async (parent,args) =>{
            let user_update = userService.updateUser(args._id,args)
            return user_update
        },
        deleteUser: async (parent,args) =>{
            let user_delete = userService.deleteUser(args._id)
            return user_delete
        }
 
}
 
    
     
}

module.exports = {
    userResolvers
}