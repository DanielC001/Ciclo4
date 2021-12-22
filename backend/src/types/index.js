const {projectType} = require('./proyecto')
const {userType} = require('./usuario')

const{rolType} = require('./rol')
const{advanceType}=require('./avance')
const{inscripcionType}=require('./inscripcion')
const{authType}=require('./auth')
const types = [projectType,userType,rolType,advanceType,inscripcionType,authType]

module.exports= {
    types
}