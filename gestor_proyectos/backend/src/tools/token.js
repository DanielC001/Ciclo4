const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

const {BD_TOKEN} = process.env;

const generarToken = (payload)=>{
    return jwt.sign({payload},BD_TOKEN,{ expiresIn:'24h'
    });
};

const validarToken=(token)=>{
    if(token){
        const verificar = jwt.verify(token,'secret',(err,data)=>{
            if(data){
                return{data:data,} 
            };
            if(err){
                return{error:err,};
            }
        });
        return verificar;
    }
}
module.exports={
    generarToken,validarToken
}