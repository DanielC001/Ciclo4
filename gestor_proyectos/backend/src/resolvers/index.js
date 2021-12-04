const {projectResolvers} = require('./proyecto')
const {userResolvers} = require('./usuario')
const {rolResolvers}=require('./rol')
const {advanceResolvers}=require('./avance')
const {inscripcionResolvers}=require('./inscripcion')
const resolvers = [projectResolvers,userResolvers,rolResolvers,advanceResolvers,inscripcionResolvers]

module.exports = {resolvers}