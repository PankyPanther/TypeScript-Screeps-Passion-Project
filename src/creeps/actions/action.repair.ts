import { moveToLocation } from "creeps/PathFinding/moveToLocation"

export function repair(creep: Creep, data: any = {}){
    let target = Game.getObjectById(data.target.id) as Structure<StructureConstant>
    if (target){
        if (creep.repair(target) != ERR_NOT_IN_RANGE) {
            creep.repair(target)
            return
        }
        moveToLocation(creep, target)
    }
}


