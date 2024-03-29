export function deleteSourceData(creep: Creep, sourceID: Id<Source> | undefined): void {
    if (sourceID !== undefined) {
        Memory.rooms[creep.room.name].sources[sourceID].creeps.filter(item => item !== creep.name);
    }
}