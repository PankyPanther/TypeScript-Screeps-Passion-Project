export function cachePath(creep: Creep, path: PathStep[]) {
    try {
        creep.memory.path = Room.serializePath(path);
    } catch (error) {
        return
    }
}