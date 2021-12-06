const Inscripcion = require('../models/inscripcion')
const userService = require('./usuario')

createInscripcion = async (inscripcion) => {
    let inscripcionInstance = new Inscripcion(inscripcion)
    created_inscripcion = await inscripcionInstance.save()
    //await userService.updateInscripcion(inscripcion['idEstudiante'], created_inscripcion['_id'])
    return created_inscripcion
}

getInscripciones = async () => {
    let projects = await Inscripcion.find({}).populate("idProyecto").populate("idEstudiante")
    return projects
}

getInscripcionById = async (inscripcionId) => {
    let inscripcion = await Inscripcion.findById(inscripcionId).populate("idProyecto").populate("idEstudiante")
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