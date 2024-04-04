import { findValidRoom } from "creeps/subactions/findValidRoom";
import { findValidSource } from "creeps/subactions/findValidSource";
import { countCreeps } from "utils/GameStats/countCreeps";
import { countRoleParts } from "utils/GameStats/countRoleParts";

export function spawnScoreManager(room: Room): string | undefined{
    // let maxPotentialEnergy: number = Memory.GameStats.creepRolePartCount.harvester.work * 300 * 2  // multiplied by 2 because each work part does 5 energy per tick

    // let harvesterAmount = Memory.GameStats.creepCount.harvester
    // let haulerAmount = Memory.GameStats.creepCount.hauler
    // let scoutAmount = Memory.GameStats.creepCount.scout
    // let upgraderAmount = Memory.GameStats.creepCount.upgrader
    // let builderAmount = Memory.GameStats.creepCount.builder

    // let creepAmount = harvesterAmount + haulerAmount + scoutAmount + upgraderAmount + builderAmount
    
    // let upgraderEnergyUse = Memory.GameStats.creepRolePartCount.upgrader.work * 300
    // let builderEnergyUse = Memory.GameStats.creepRolePartCount.builder.work * 300 * 5 // multiplied by 5 because each work part does 5 energy per tick
    // let energyUse = upgraderEnergyUse + builderEnergyUse

    // console.log('energy: ', maxPotentialEnergy - energyUse)

    // let energyAmount = maxPotentialEnergy - energyUse

    // if ((maxPotentialEnergy == 0 || maxPotentialEnergy - 1000 < energyUse || creepAmount < 2)){
    //     if (findValidSource(room)){
    //         return 'harvester'
    //     } else {

    //     }
    // }
    // else if (harvesterAmount > (haulerAmount * 2)){
    //     return 'hauler'
    // }

    // // else if (room.controller && room.controller.level > 1 && scoutAmount < 1){
    // //     return 'scout'
    // // }

    // else if (room.find(FIND_CONSTRUCTION_SITES).length > 0 && builderAmount < 3 && upgraderAmount > 0 && energyAmount > 0){
    //     return 'builder'
    // }
    
    // else if (energyAmount > 1000 && upgraderAmount < 3){
    //     return 'upgrader'
    // }


    return 'harvester'
}