export function cachePath(creep: Creep, path: PathStep[]) {
    if (Room.serializePath(path)) {
        creep.memory.path = Room.serializePath(path)
    } else {
        creep.memory.path = {}
    }
}