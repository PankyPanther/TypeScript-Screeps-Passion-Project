import { findValidSource } from "creeps/subactions/findValidSource";

export function spawnScoreManager(room: Room): string | undefined{
    let maxPotentialEnergy: number = Memory.GameStats.creepRolePartCount.harvester.work * 300 * 3  // multiplied by 2 because each work part does 5 energy per tick

    let harvesterAmount = Memory.GameStats.creepCount.harvester
    let haulerAmount = Memory.GameStats.creepCount.hauler
    let repairerAmount = Memory.GameStats.creepCount.repairer
    let scoutAmount = Memory.GameStats.creepCount.scout
    let upgraderAmount = Memory.GameStats.creepCount.upgrader
    let builderAmount = Memory.GameStats.creepCount.builder

    let creepAmount = harvesterAmount + haulerAmount + scoutAmount + upgraderAmount + builderAmount + repairerAmount
    
    let upgraderEnergyUse = Memory.GameStats.creepRolePartCount.upgrader.work * 300
    let builderEnergyUse = Memory.GameStats.creepRolePartCount.builder.work * 300 // multiplied by 5 because each work part does 5 energy per tick
    let energyUse = upgraderEnergyUse + builderEnergyUse

    console.log('energy: ', maxPotentialEnergy - energyUse)

    let energyAmount = maxPotentialEnergy - energyUse //buffer
    if ((maxPotentialEnergy == 0 || maxPotentialEnergy - 1000 < energyUse || creepAmount < 2) && findValidSource(room)){
        return 'harvester'
    }
    else if (harvesterAmount > Math.floor(haulerAmount * 2) - 1){
        return 'hauler'
    }

    // else if (room.controller && room.controller.level > 1 && scoutAmount < 1){
    //     return 'scout'
    // }
    else if (room.find(FIND_CONSTRUCTION_SITES).length > 0 && Memory.GameStats.creepRolePartCount.builder.work < 20 && upgraderAmount > 0 && energyAmount > 0){
        return 'builder'
    }

    else if (room.controller && room.controller.level > 1 && repairerAmount < 2 && upgraderAmount > 0){
        return 'repairer'
    }

    else if (energyAmount > 0 && Memory.GameStats.creepRolePartCount.upgrader.work < 30){
        return 'upgrader'
    }
    



    return undefined
}