import { cachePath } from "creeps/PathFinding/cachePath";
import { getCachedPath } from "creeps/PathFinding/getCachedPath";

export function harvest(creep: Creep, data: any = {}) { 
    let storedSource = Game.getObjectById<Source>(data.sourceID)

    if (storedSource) {
        if (creep.pos.isNearTo(storedSource)) {
            creep.harvest(storedSource)
            return
        }

        const cachedPath: PathStep[] | null = getCachedPath(creep);
        const path: PathStep[] | null = creep.pos.findPathTo(storedSource.pos);

        if (!cachedPath) {
            if (path) {
                cachePath(creep, path);
            }

            return  
        } 

        if (Game.time % 4 == 0 || creep.moveByPath(cachedPath) !== 0) {
            creep.memory.path = {}
            cachePath(creep, path)
            creep.moveByPath(cachedPath);
        }

        creep.moveByPath(cachedPath);        
    }
}