const jwt = require('jsonwebtoken')

const generarToken = (payload)=>{
    return jwt.sign({payload},'secret',{ expiresIn:'24h'
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