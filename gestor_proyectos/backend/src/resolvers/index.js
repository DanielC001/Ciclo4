const {projectResolvers} = require('./proyecto')
const {userResolvers} = require('./usuario')
const {rolResolvers} = require('./rol')
const {advanceResolvers} = require('./avance')

const resolvers = [projectResolvers, userResolvers, rolResolvers, advanceResolvers]

module.exports = {resolvers}