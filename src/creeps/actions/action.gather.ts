import { moveToLocation } from "creeps/PathFinding/moveToLocation";
import { drop } from "lodash";

export function gather(creep: Creep, data: any = {}) {
    let droppedSource = creep.room.find(FIND_DROPPED_RESOURCES).sort((a, b) => b.amount - a.amount)[0]
    // console.log(droppedSource.pos)
    if (droppedSource) {
        if (creep.pickup(droppedSource) != ERR_NOT_IN_RANGE) {
            creep.pickup(droppedSource)
            return
        }
        moveToLocation(creep, droppedSource)
        return
    }
}