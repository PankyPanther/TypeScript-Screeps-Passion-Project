import { cachePath } from "creeps/PathFinding/cachePath";
import { getCachedPath } from "creeps/PathFinding/getCachedPath";
import { creepIsStuck } from "./creepIsStuck";

export function moveToLocation(creep: Creep, targetRoomName: string, location: any) {
    if (creep.room.name !== targetRoomName) {
        const route = Game.map.findRoute(creep.room.name, targetRoomName);
        if (route !== ERR_NO_PATH && route.length > 0) {
            let exit = creep.pos.findClosestByRange(route[0].exit);
            if (exit) {
                creep.moveTo(exit, {visualizePathStyle: { stroke: '#ffffff' }});
                return
            }
        }
        return
    }

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