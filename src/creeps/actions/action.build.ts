import { moveToLocation } from "creeps/PathFinding/moveToLocation";

export function build(creep: Creep, data: any = {}) {
    let spot = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES)

    if (spot) {
        if (creep.build(spot) != ERR_NOT_IN_RANGE) {
            creep.build(spot)
            return
        }

        moveToLocation(creep, creep.room.name, spot)       
    } else {
        creep.memory.role = 'upgrader'
        creep.memory.runState = 'UPGRADEING'
    }
}