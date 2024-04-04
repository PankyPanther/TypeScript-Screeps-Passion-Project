import { moveToLocation } from "creeps/PathFinding/moveToLocation";

export function store(creep: Creep, data: any = {}) { 
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



    let extensions = creep.room.find(FIND_STRUCTURES).filter((extension) => {
        return extension.structureType === STRUCTURE_EXTENSION && extension.store.getFreeCapacity(RESOURCE_ENERGY) > 0
    });

    if (extensions){
        if (creep.transfer(extensions[0], RESOURCE_ENERGY) != ERR_NOT_IN_RANGE) {
            creep.transfer(extensions[0], RESOURCE_ENERGY);
            return
        } else {
            moveToLocation(creep, extensions[0])
            return
        }
    }

     
}