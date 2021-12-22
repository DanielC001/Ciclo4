const userService = require('../services/usuario')
const bcrypt = require('bcrypt')
const generarToken = require('../tools/token')

const userResolvers = {
    Query: {
        getUsers: async (parent, args) => {
            // lógica del proceso

            let users = await userService.getUsers()
            return users
        },
        getUserById: async (parent, args) => {
            let user = await userService.getUserById(args._id)
            return user
        }
    },
    Mutation: {
        createUser: async (parent, args) => {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(args.contrasena, salt)
            const user = await userService.createUser({
                nombre:args.nombre,
                apellido:args.apellido,
                correo:args.correo,
                identificacion:args.identificacion,
                contrasena:hashedPassword,
                rol:args.rol,
                estado:args.estado,
                idProyecto:args.idProyecto
            })
            return user;
        },
        updateUser: async (parent, args) => {
            let user_update = userService.updateUser(args._id, args)
            return user_update
        },
        deleteUser: async (parent, args) => {
            let user_delete = userService.deleteUser(args._id)
            return user_delete
        }

    }



}
module.exports = {
    userResolvers
}