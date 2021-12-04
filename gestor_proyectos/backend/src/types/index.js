const { projectType } = require('./project')
const { userType } = require('./user')
const{rolType} = require('./rol')
const{advanceType} = require('./avance')

const types = [projectType, userType, rolType,advanceType]
module.exports = {
    types
}