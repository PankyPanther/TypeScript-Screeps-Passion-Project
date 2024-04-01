export function findGatherPlace(creep: Creep) {
    let droppedSource = creep.room.find(FIND_DROPPED_RESOURCES)
    let largestDroppedSource = [...droppedSource].sort((a, b) => a.amount - b.amount).slice(-1)[0]
    return largestDroppedSource
}