import { moveToLocation } from "creeps/PathFinding/moveToLocation";

export function store(creep: Creep, data: any = {}) { 
    let extensions = creep.room.find(FIND_STRUCTURES).filter((extension) => {
        return extension.structureType === STRUCTURE_EXTENSION && extension.store.getFreeCapacity(RESOURCE_ENERGY) > 0
    });
    
    if (extensions.length){
        let extension = creep.pos.findClosestByRange(extensions) as StructureContainer
        if (creep.transfer(extension, RESOURCE_ENERGY) != ERR_NOT_IN_RANGE) {
            creep.transfer(extension, RESOURCE_ENERGY);
            return
        } else {
            moveToLocation(creep, extensions[0])
            return
        }
    }

    let spawn = creep.room.find(FIND_MY_SPAWNS)[0];



    if (spawn && spawn.store.energy < 300) {
        if (creep.transfer(spawn, RESOURCE_ENERGY) != ERR_NOT_IN_RANGE) {
            creep.transfer(spawn, RESOURCE_ENERGY);
            return
        } else {
            moveToLocation(creep, spawn)
            return
        }
    }

     
}