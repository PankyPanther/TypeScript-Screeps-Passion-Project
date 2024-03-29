export function deleteSourceData(creep: Creep): void {
    let sourceID = creep.memory.sourceID
    if (sourceID != undefined) {
        Memory.rooms[creep.room.name].sources[sourceID].creeps.filter(item => item !== creep.name);
    }
}