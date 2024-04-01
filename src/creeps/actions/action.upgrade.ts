import { cachePath } from "creeps/PathFinding/cachePath";
import { getCachedPath } from "creeps/PathFinding/getCachedPath";


export function upgrade(creep: Creep, data: any = {}) { 
    let controller = creep.room.controller;

    // if has source - go to source and harvest
    if (controller){
        if (creep.transfer(controller, RESOURCE_ENERGY) != ERR_NOT_IN_RANGE) {
            creep.upgradeController(controller)
            return
        }         
        
        const cachedPath: PathStep[] | null = getCachedPath(creep);
        const path: PathStep[] | null = creep.pos.findPathTo(controller.pos);

        if (!cachedPath) {
            if (path) {
                cachePath(creep, path);
            }

            return  
        } 

        if (Game.time % 10 == 0 || creep.moveByPath(cachedPath) !== 0) {
            creep.memory.path = {}
            cachePath(creep, path)
            creep.moveByPath(cachedPath);
        }

        creep.moveByPath(cachedPath);   
    }
}