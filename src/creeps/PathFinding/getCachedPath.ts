export function getCachedPath(creep: Creep): PathStep[] | null {
    if (!creep.memory.path) return null; // No cached path found, return null
    
    try {
        return Room.deserializePath(creep.memory.path);
    } catch (error) {
        return null;
    }
}