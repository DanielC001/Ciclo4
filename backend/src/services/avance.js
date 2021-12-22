const Avance = require('../models/avance')

createAdvance = async (advance) => {
    let advanceInstance = new Avance(advance)
    advance = await advanceInstance.save()
    return advance
}

getAdvances = async () => {
    let advance = await Avance.find({}).populate("idProyecto")
    return advance
}

getAdvanceById = async(advanceId) =>{
    let advance = await Avance.findById(userId).populate("idProyecto")
    return advance
}

updateAdvance = async (advanceId, advance)=>{
    let new_advance = Avance.findByIdAndUpdate(advanceId, advance,{new:true})
    return new_advance
}

deleteAdvance = async (advanceId) => {
    let advance = await Avance.findByIdAndDelete(advanceId)
    return advance
}

UpdateProject = async(advanceId, projectId)=>{
    let advance = await Avance.findByIdAndUpdate(advanceId,{
        $push:{
            idProyecto:projectId
        }
    })
    return user
}

module.exports = {
    createAdvance,
    getAdvances,
    getAdvanceById,
    updateAdvance,
    deleteAdvance,
    UpdateProject

}