import { moveToLocation } from "creeps/PathFinding/moveToLocation";
import { findValidRoom } from "creeps/subactions/findValidRoom";
import { copyFileSync } from "fs";

export function explore(creep: Creep, data: any = {}){
    const targetRoom = data.target;

    // Find a route from the current room to the target room
    const route = Game.map.findRoute(creep.room.name, targetRoom);

    // If a route is found (route is an array), move the creep to the next room along the route
    if (Array.isArray(route) && route.length > 0) {
        const exit = creep.pos.findClosestByPath(route[0].exit) as RoomPosition | undefined;
        if (exit) {
            creep.moveTo(exit, { visualizePathStyle: { stroke: '#ffffff' } });
        }
    }
}


