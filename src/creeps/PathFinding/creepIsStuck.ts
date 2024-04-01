export function creepIsStuck(creep: Creep): boolean | null {
    if (!creep.memory.previousPos) { 
        creep.memory.previousPos = {}
        return null
    }

    if (creep.pos.x === creep.memory.previousPos.x && creep.pos.y === creep.memory.previousPos.y){
        creep.say('im stuck')
        return true
    }

    creep.memory.previousPos = creep.pos
    return false

}