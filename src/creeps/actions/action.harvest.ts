import { moveToLocation } from "creeps/PathFinding/moveToLocation";

export function harvest(creep: Creep, data: any = {}) { 
    let storedSource = Game.getObjectById<Source>(data.sourceID)

    if (storedSource) {
        if (creep.harvest(storedSource) != ERR_NOT_IN_RANGE) {
            creep.harvest(storedSource)
            return
        }

        moveToLocation(creep, storedSource)      
    }
}