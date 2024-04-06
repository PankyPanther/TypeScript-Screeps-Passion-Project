import { moveToLocation } from "creeps/PathFinding/moveToLocation"

export function repair(creep: Creep, data: any = {}){
    if (data.target){
        if (data.target.id){
            let target = Game.getObjectById(data.target.id) as Structure<StructureConstant>
                        // console.log(target)
            if (creep.repair(target) != ERR_NOT_IN_RANGE) {
                creep.repair(target)
                return
            }
                moveToLocation(creep, target)

        } else {
            delete creep.memory.target
        }

    } else {
        delete creep.memory.target
    }
}


