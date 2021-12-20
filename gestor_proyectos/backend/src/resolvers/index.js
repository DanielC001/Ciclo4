const {projectResolvers} = require('./proyecto')
const {userResolvers} = require('./usuario')
const {rolResolvers}=require('./rol')
const {advanceResolvers}=require('./avance')
const {inscripcionResolvers}=require('./inscripcion')
const {AuthResolvers}=require('./auth')
const resolvers = [projectResolvers,userResolvers,rolResolvers,advanceResolvers,inscripcionResolvers,AuthResolvers]

module.exports = {resolvers}