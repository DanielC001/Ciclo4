const {projectResolvers} = require('./proyecto')
const {userResolvers} = require('./usuario')

const resolvers = [projectResolvers, userResolvers]

module.exports = {resolvers}