const Inscripcion = require('../models/inscripcion')

createInscripcion = async (inscripcion) => {
    let inscripcionInstance = new Inscripcion(inscripcion)
    created_inscripcion = await inscripcionInstance.save()
    //await userService.UpdateProject(project[''], created_project['_id'])
    return created_inscripcion
}

getInscripciones = async () => {
    let projects = await Proyecto.find({})
    return projects
}

getInscripcionById = async (inscripcionId) => {
    let inscripcion = await Inscripcion.findById(inscripcionId).exec()
    return inscripcion
}

updateInscripcion = async (inscripcionId, inscripcion) => {
    let newInscripcion = await Proyecto.findByIdAndUpdate(inscripcionId, inscripcion, { new: true })
    return newInscripcion
}

deleteInscripcion = async (inscripcionId) => {
    let inscripcion = await Inscripcion.findByIdAndDelete(inscripcionId)
    return inscripcion
}

module.exports = {
    createInscripcion,
    getInscripciones,
    getInscripcionById,
    updateInscripcion,
    deleteInscripcion 
}