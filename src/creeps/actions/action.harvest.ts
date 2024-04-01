import { moveToLocation } from "creeps/PathFinding/moveToLocation";

export function harvest(creep: Creep, data: any = {}) { 
    let storedSource = Game.getObjectById<Source>(data.sourceID)

    if (storedSource) {
        if (creep.pos.isNearTo(storedSource)) {
            creep.harvest(storedSource)
            return
        }

        moveToLocation(creep, storedSource)      
    }
}