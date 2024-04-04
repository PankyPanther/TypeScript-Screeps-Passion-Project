import { moveToLocation } from "creeps/PathFinding/moveToLocation";

export function gather(creep: Creep, data: any = {}) {
    let droppedSource = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES) 

    if (droppedSource) {
        if (creep.pickup(droppedSource) != ERR_NOT_IN_RANGE) {
            creep.pickup(droppedSource)
            return
        }
        moveToLocation(creep, droppedSource)
        return
    }
}