import { moveToLocation } from "creeps/PathFinding/moveToLocation";

export function gather(creep: Creep, data: any = {}) {
    let spot = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES)

    if (spot) {
        if (creep.pos.isNearTo(spot)) {
            creep.pickup(spot)
            return
        }

        moveToLocation(creep, spot)       
    }
}