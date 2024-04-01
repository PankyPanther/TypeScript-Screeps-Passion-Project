import { cachePath } from "creeps/PathFinding/cachePath";
import { getCachedPath } from "creeps/PathFinding/getCachedPath";
import { creepIsStuck } from "./creepIsStuck";

export function moveToLocation(creep: Creep, location: any) {
    const cachedPath: PathStep[] | null = getCachedPath(creep);
    const path: PathStep[] | null = creep.pos.findPathTo(location.pos);

    if (!cachedPath) {
        if (path) {
            cachePath(creep, path);
            creep.moveByPath(path)
        }
    } 

    if (cachedPath){
        if (creep.moveByPath(cachedPath) !== 0 || creepIsStuck(creep)){
            creep.memory.path = {}
            cachePath(creep, path)
        }
    
        creep.moveByPath(cachedPath);  
    }
}