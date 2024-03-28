export function assignSource(creep: Creep): string {
    return creep.room.find(FIND_SOURCES)[0].id
}