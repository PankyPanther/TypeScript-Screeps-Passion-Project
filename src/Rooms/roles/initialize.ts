export function isInitialize(room: Room): boolean {
    if (!room.memory.role) {
        console.log("Initializeing room data")
        return false
    }
    return true
}

export function initialize(room: Room): void {
    let spawns = room.find(FIND_MY_STRUCTURES, { filter: s => s.structureType === STRUCTURE_SPAWN });
    room.memory.sources = { }


    room
        .find(FIND_SOURCES)
        .forEach((source) => {
            room.memory.sources[source.id] = {
                creeps: []
            }
        })
    
    
    if (spawns.length) {
        room.memory.role = 'home'
    } else {
        room.memory.role = 'explored'
    }
}