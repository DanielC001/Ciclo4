const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const CrearToken = require('../tools/token');
const AuthResolvers = {
    Mutation: {
        autenticar: async (parent,{correo, contrasena}) => {
            const Verificarcorreo = await Usuario.findOne({correo});
            if(!Verificarcorreo){
                throw new Error('Correo invalido');
            }
            const VerificarContrasena = await bcrypt.compare(contrasena,Verificarcorreo.contrasena);
            if(!VerificarContrasena){
                throw new Error('Incorrecto')
            }

            return {
                token:CrearToken.generarToken(Verificarcorreo)
            }
        }
    }
}
module.exports = {AuthResolvers}