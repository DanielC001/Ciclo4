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
        },
        validarToken: async (parent,args,context) => {
            console.log(context);
            if(!context.userData){
                return "error"
            }else{
                return{
                    token:CrearToken.generarToken({
                       context
                    }),
                    //console.log("si lo tenemos")
            };
            }
        },
    },
}
module.exports = {AuthResolvers}