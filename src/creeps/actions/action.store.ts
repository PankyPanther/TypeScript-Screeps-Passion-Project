import { cachePath } from "creeps/PathFinding/cachePath";
import { getCachedPath } from "creeps/PathFinding/getCachedPath";

export function store(creep: Creep, data: any = {}) { 
    let spawn = creep.room.find(FIND_MY_SPAWNS)[0];

    if (spawn) {
        if (creep.pos.isNearTo(spawn)) {
            creep.transfer(spawn, RESOURCE_ENERGY);
            return
        }

        const cachedPath: PathStep[] | null = getCachedPath(creep);
        const path: PathStep[] | null = creep.pos.findPathTo(spawn.pos);

        if (!cachedPath) {
            if (path) {
                cachePath(creep, path);
            }

            return  
        } 

        if (creep.moveByPath(cachedPath) !== 0) {
            creep.memory.path = {}
            cachePath(creep, path)
            creep.moveByPath(cachedPath);
        }

        creep.moveByPath(cachedPath);        
    }
}