const Proyecto = require('../models/proyecto')
const userService = require("./usuario")

createProject = async (project) => {
    let projectInstance = new Proyecto(project)
    created_project = await projectInstance.save()
    await userService.UpdateProject(project['lider'], created_project['_id'])
    return created_project
}

getProjects = async () => {
    let projects = await Proyecto.find({})
    return projects
}

getProjectById = async (projectId) => {
    let project = await Proyecto.findById(projectId).exec()
    return project
}

updateProject = async (projectId, project) => {
    let newProject = await Proyecto.findByIdAndUpdate(projectId, project, { new: true })
    return newProject
}

deleteProject = async (projectId) => {
    let project = await Proyecto.findByIdAndDelete(projectId)
    return project
}


module.exports = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
}