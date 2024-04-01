export function cachePath(creep: Creep, path: PathStep[]) {
    creep.say('help')
    if (Room.serializePath(path)) {
        creep.memory.path = Room.serializePath(path)
    } else {
        creep.memory.path = {}
    }
}