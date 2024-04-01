import { findValidSource } from "creeps/subactions/findValidSource";

export function spawnScoreManager(room: Room): string | undefined{
    // Energy Usage

    // lodash functions bad - fix
    let maxPotentialEnergy: number = 0
    _.forEach(Memory.rooms, (room) => {
        _.forEach(room.sources, (source) => {
            if (source.creeps != undefined) {
                maxPotentialEnergy += source.creeps
                .map(name => {
                    return Game.creeps[name]?.getActiveBodyparts(WORK) || 0
                }) 
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            }
        })

    });
    maxPotentialEnergy *= 300 * 2
    // creeps already spawned

    let harvesterAmount = 0
    let haulerAmount = 0
    let scoutAmount = 0
    let upgraderAmount = 0

    

    _.forEach(Memory.creeps, (creep) => {
        if (creep.role === 'harvester'){
            harvesterAmount++
        }
        else if (creep.role === 'hauler'){
            haulerAmount++
        }
        else if (creep.role === 'scout'){
            scoutAmount++
        }
        else if (creep.role === 'upgrader'){
            upgraderAmount++
        }   
    })

    let creepAmount = harvesterAmount + haulerAmount + scoutAmount + upgraderAmount 
    let upgraderEnergyUse = upgraderAmount * 300
    // I plan for there to be more than 1 energy use so that why it looks a lil wonky
    let energyUse = upgraderEnergyUse

    // console.log(`
    //     harvester: ${harvesterAmount}
    //     hauler: ${haulerAmount}
    //     upgrader: ${upgraderAmount}
    // `)
    // console.log(maxPotentialEnergy, energyUse)
    //   console.log(`energy leftover: ${maxPotentialEnergy - energyUse}
    //                creeps: ${creepAmount}`)

    if ((maxPotentialEnergy == 0 || maxPotentialEnergy - 1000 < energyUse || creepAmount < 2) && findValidSource(room)){
        return 'harvester'
    }
    else if (harvesterAmount > (haulerAmount * 2)){
        return 'hauler'
    }

    if (room.controller && room.controller.level > 1 && scoutAmount < 1){
        return 'scout'
    }
    
    else if (maxPotentialEnergy - energyUse > 0){
        return 'upgrader'
    }


    return undefined
}