import { moveToLocation } from "creeps/PathFinding/moveToLocation";
import { findValidRoom } from "creeps/subactions/findValidRoom";

export function explore(creep: Creep, data: any = {}){
    if (creep.room.name == data.target || data.target === null){
        creep.memory.target = findValidRoom(creep)
        return
    }

    moveToLocation(creep, data.target, null)

    if (creep.room.memory.role == "explored"){
        creep.room.memory.lastEntered = Game.time

        if (creep.room.find(FIND_HOSTILE_STRUCTURES).length){
            creep.room.memory.status = 'hostile'
        }
        if (creep.room.find(FIND_HOSTILE_CREEPS).length > 0 || creep.room.find(FIND_HOSTILE_POWER_CREEPS).length > 0){
            creep.room.memory.status = 'hostileCreeps'
        }
    }
}


