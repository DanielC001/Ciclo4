const jwt = require('jsonwebtoken')

const generarToken = (payload)=>{
    return jwt.sign(payload,'secret',{
        expiresIn:'24h'
    });
};

module.exports={
    generarToken
}