import { moveToLocation } from "creeps/PathFinding/moveToLocation";
import { findGatherPlace } from "creeps/subactions/findGatherPlace";
import { drop, find } from "lodash";

export function gather(creep: Creep, data: any = {}) {
    // creep.say('gatherings')
    if (data.target) {
        if (data.target.id){
            let target
            if (data.target.amount > 0){
                target = Game.getObjectById(data.target.id) as Resource<ResourceConstant>
                // console.log(target)
                if (target){
                    if (creep.pickup(target) != ERR_NOT_IN_RANGE) {
                        creep.pickup(target)
                        return
                    }
                    moveToLocation(creep, target)
                } else {
                    delete creep.memory.target
                    return
                }
    
            }
            else if (data.target.structureType == STRUCTURE_CONTAINER){
                target = Game.getObjectById(data.target.id) as StructureContainer
                // console.log(target)
                if (target){
                    if (creep.withdraw(target, RESOURCE_ENERGY) != ERR_NOT_IN_RANGE) {
                        creep.withdraw(target, RESOURCE_ENERGY)
                        return
                    }
                    moveToLocation(creep, target)
                    return
                } else {
                    delete creep.memory.target
                    return
                }
            } else {
                delete creep.memory.target
            }
        } else {
            delete creep.memory.target
        }
    } else {
        creep.memory.target = findGatherPlace(creep)
    }

    
    // console.log(droppedSource.pos)

    

    
}