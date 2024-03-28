export function getSourceBodyParts(room: Room, source: Source): number{
    let parts = room.memory.sources[source.id].creepParts
    return parts.length
}