import { moveToLocation } from "creeps/PathFinding/moveToLocation";

export function upgrade(creep: Creep, data: any = {}) { 
    let controller = creep.room.controller;

    // if has source - go to source and harvest
    if (controller){
        if (creep.transfer(controller, RESOURCE_ENERGY) != ERR_NOT_IN_RANGE) {
            creep.upgradeController(controller)
            return
        }         
        
        moveToLocation(creep, controller)
 
    }
}