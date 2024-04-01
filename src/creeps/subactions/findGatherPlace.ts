export function findGatherPlace(creep: Creep) {
    return creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES)
}