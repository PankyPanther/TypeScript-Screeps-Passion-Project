import { moveToLocation } from "creeps/PathFinding/moveToLocation"

export function repair(creep: Creep, data: any = {}){
    if (data.target){
        let target = Game.getObjectById(data.target) as Structure<StructureConstant>
        if(target.hits === target.hitsMax){
            delete creep.memory.target
            return
        }
        console.log(target.pos)
        if (creep.repair(target) != ERR_NOT_IN_RANGE) {
            creep.repair(target)
            return
        }
        moveToLocation(creep, target)
    } 
}


