import { moveToLocation } from "creeps/PathFinding/moveToLocation"

export function repair(creep: Creep, data: any = {}){
    if (data.target){
        let target = Game.getObjectById(data.target) as Structure<StructureConstant>
        if (target){
            if(target.hits === target.hitsMax){
                delete creep.memory.target
                return
            }
            if (creep.repair(target) != ERR_NOT_IN_RANGE) {
                creep.repair(target)
                return
            }
            moveToLocation(creep, creep.room.name, target)
        } else {
            delete creep.memory.target
        }

    } 
}


