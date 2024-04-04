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
        if (creep.harvest(storedSource) != ERR_NOT_IN_RANGE) {
            creep.harvest(storedSource)
            return
        }

        moveToLocation(creep, storedSource)
        return     
    }
}