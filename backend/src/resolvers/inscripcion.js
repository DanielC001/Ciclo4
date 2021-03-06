const inscripcionService = require("../services/inscripcion")

const inscripcionResolvers = {
    Query: {
        getInscripciones: async (parent, args) => {
            let inscripcion = inscripcionService.getInscripciones()
            return inscripcion
        },
        getInscripcionById: async (parent, args) => {
            let inscripcion = inscripcionService.getInscripcionById(args._id)
            return inscripcion
        }
    },
    Mutation: {
        createInscripcion: async (parent, args) => {
            let inscripcion = inscripcionService.createInscripcion(args)
            return inscripcion
        },
        updateInscripcion: async (parent, args) => {
            let inscripcion = inscripcionService.updateInscripcion(args._id, args)
            return inscripcion
        },
        deleteInscripcion: async (parent, args) => {
            let inscripcion = inscripcionService.deleteInscripcion(args._id)
            return inscripcion
        }
    }
}
module.exports = {inscripcionResolvers}