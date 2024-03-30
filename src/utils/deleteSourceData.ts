export function deleteSourceData(sourceID: Id<Source> | undefined, room: Room, name: string): void {
    if (sourceID !== undefined) {
        let sourceArrayofCreep = Memory.rooms[room.name].sources[sourceID].creeps
        sourceArrayofCreep.splice(sourceArrayofCreep.indexOf(name), 1) 
    }
}