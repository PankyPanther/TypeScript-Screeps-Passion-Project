import { findValidRoom } from "creeps/subactions/findValidRoom";
import { findValidSource } from "creeps/subactions/findValidSource";
import { countCreeps } from "utils/countCreeps";
import { countRoleParts } from "utils/countRoleParts";

export function spawnScoreManager(room: Room): string | undefined{
    let maxPotentialEnergy: number = countRoleParts('harvester', WORK) * 300 * 2  // multiplied by 2 because each work part does 5 energy per tick

    let harvesterAmount = countCreeps('harvester')
    let haulerAmount = countCreeps('hauler')
    let scoutAmount = countCreeps('scout')
    let upgraderAmount = countCreeps('upgrader')
    let builderAmount = countCreeps('builder')

    let creepAmount = harvesterAmount + haulerAmount + scoutAmount + upgraderAmount + builderAmount
    
    let upgraderEnergyUse = countRoleParts('upgrader', WORK) * 300
    let builderEnergyUse = countRoleParts('builder', WORK) * 300 * 5 // multiplied by 5 because each work part does 5 energy per tick
    let energyUse = upgraderEnergyUse + builderEnergyUse

    console.log('energy: ', maxPotentialEnergy - energyUse)

    if ((maxPotentialEnergy == 0 || maxPotentialEnergy - 1000 < energyUse || creepAmount < 2)){
        if (findValidSource(room)){
            return 'harvester'
        } else {

        }
    }
    else if (harvesterAmount > (haulerAmount * 2)){
        return 'hauler'
    }

    // else if (room.controller && room.controller.level > 1 && scoutAmount < 1){
    //     return 'scout'
    // }

    else if (room.find(FIND_CONSTRUCTION_SITES).length > 0 && builderAmount < 3 && upgraderAmount > 0){
        return 'builder'
    }
    
    else if (maxPotentialEnergy - energyUse > 1000 && upgraderAmount < 3){
        return 'upgrader'
    }


    return undefined
}