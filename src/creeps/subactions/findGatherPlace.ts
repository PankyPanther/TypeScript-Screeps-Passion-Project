import { drop } from "lodash"

export function findGatherPlace(creep: Creep) {
    let droppedSource = creep.room.find(FIND_DROPPED_RESOURCES).sort((a, b) => b.amount - a.amount)[0]

    let containers = creep.room.find(FIND_STRUCTURES).filter((struct) => {
        if (struct.structureType == STRUCTURE_CONTAINER){
            if (struct.store){
                return struct.store[RESOURCE_ENERGY] > 0
            }
        } 
        return
    }) as StructureContainer[]

    let container = containers.sort((a, b) => b.store.energy - a.store.energy)[0]

    if (!container){
        if(droppedSource){
            return droppedSource
        }
    } else {
        if (container.store){
            return container
        }
    }

    return undefined
}