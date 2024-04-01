import { moveToLocation } from "creeps/PathFinding/moveToLocation";

export function store(creep: Creep, data: any = {}) { 
    let spawn = creep.room.find(FIND_MY_SPAWNS)[0];

    if (spawn) {
        if (creep.pos.isNearTo(spawn)) {
            creep.transfer(spawn, RESOURCE_ENERGY);
            return
        }

        moveToLocation(creep, spawn)      
    }
}