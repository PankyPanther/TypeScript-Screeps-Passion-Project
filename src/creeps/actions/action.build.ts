import { moveToLocation } from "creeps/PathFinding/moveToLocation";

export function build(creep: Creep, data: any = {}) {
    let spot = creep.room.find(FIND_CONSTRUCTION_SITES)[0]

    if (spot) {
        if (creep.build(spot) != ERR_NOT_IN_RANGE) {
            creep.build(spot)
            return
        }

        moveToLocation(creep, spot)       
    }
}