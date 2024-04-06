import { moveToLocation } from "creeps/PathFinding/moveToLocation";

export function harvest(creep: Creep, data: any = {}) {
    let ruins: Ruin[] = creep.room.find(FIND_RUINS).filter((ruin) => {
        return ruin.store[RESOURCE_ENERGY] > 0; 
    });
    
    if (ruins.length > 0) {
        if (creep.withdraw(ruins[0], RESOURCE_ENERGY) != ERR_NOT_IN_RANGE) {
            creep.withdraw(ruins[0], RESOURCE_ENERGY);
            return;
        }
        moveToLocation(creep, ruins[0]);
        return; 
    }


    let storedSource = Game.getObjectById<Source>(data.sourceID)
    if (storedSource) {
        let container = creep.pos.findInRange(FIND_STRUCTURES, 2).filter((struct) => {
            return struct.structureType == STRUCTURE_CONTAINER
        })
    
        if(container[0]){
            if (creep.pos.x != container[0].pos.x && creep.pos.y != container[0].pos.y){
                creep.say('moving Con')
                moveToLocation(creep, container[0])
                return
            }
        }

        if (creep.harvest(storedSource) != ERR_NOT_IN_RANGE) {
            creep.harvest(storedSource)
            return
        }

        moveToLocation(creep, storedSource)
        return     
    }
}