import { cachePath } from "creeps/PathFinding/cachePath";
import { getCachedPath } from "creeps/PathFinding/getCachedPath";

export function gather(creep: Creep, data: any = {}) {
    let spot = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES)

    if (spot) {

        if (creep.pos.isNearTo(spot)) {
            creep.pickup(spot)
            return
        }

        const cachedPath: PathStep[] | null = getCachedPath(creep);
        const path: PathStep[] | null = creep.pos.findPathTo(spot.pos);

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