import { drop } from "lodash"

export function findGatherPlace(creep: Creep) {
    let droppedSource = creep.room.find(FIND_DROPPED_RESOURCES).sort((a, b) => b.amount - a.amount)[0]

    let containers = creep.room.find(FIND_STRUCTURES).filter((struct) => {
        return struct.structureType == STRUCTURE_CONTAINER
    }) as StructureContainer[]

    let container = containers.sort((a, b) => b.store.energy - a.store.energy)[0]


    if (droppedSource.amount > container.store.energy){
        // console.log('dropped', droppedSource.pos)
        return droppedSource
    }
    else if (container){
        // console.log('container')
        return creep.memory.target = container
    } 
    else {
        return undefined
    }
}