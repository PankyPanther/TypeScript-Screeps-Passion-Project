import { CreepRole } from "definition"
import { runStates } from "managers/state_manager"
import { harvest } from "creeps/actions/action.harvest"
import { findValidSource } from "creeps/subactions/findValidSource"
import { store } from "creeps/actions/action.store";
import { drop } from "creeps/actions/action.drop";

// roleHarvester: CreepRole
const roleHarvester: CreepRole = {
    getRoleName() { return 'harvester'; },

    getBody(energyCapacity) {
        if (energyCapacity >= 550 && Memory.GameStats.creepCount.hauler > 0) {
            return [
                WORK, WORK,
                WORK, WORK,
                WORK, MOVE,
            ]
        }
        else if (energyCapacity >= 400 && Memory.GameStats.creepCount.hauler > 0) {
            return [
                WORK, WORK,
                WORK, MOVE,
                MOVE
            ]
        }
        return [
            MOVE, MOVE,
            WORK, CARRY
        ]
    },

    run: function(creep) {
        // Define your states as functions
        const data = {
            sourceID: creep.memory.sourceID
        };

        const states = {
                HARVESTING: (data: any, creep: Creep) => {
                    // creep.say('harvesting')
                    
                    if (!data.sourceID){
                        creep.memory.sourceID = findValidSource(creep.room, creep)
                    }

                    if (creep.store.getFreeCapacity() == 0) {
                        creep.memory.path = {}
                        if (Memory.GameStats.creepCount.hauler > 0) { 
                            creep.say('dropping')
                            return "DROPING" 
                        }
                        else {
                            creep.say('storing')
                            return "STORING"
                        }
                    }

                    creep.say('harvesting')
                    harvest(creep, {
                        sourceID: data.sourceID
                    }) 

                    return 'HARVESTING';
                    
                    
                },
            
                STORING: (data: any, creep: Creep) => {
                    if (creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) { 
                        creep.memory.path = {} 
                        return "HARVESTING" 
                    }

                    // creep.say('store')
                    store(creep)
                    
                    return "STORING"
                },

                DROPING: (data: any, creep: Creep) => {
                    drop(creep)
                    return "HARVESTING" 
                },
        };
    
        runStates(states, data, creep);
    }
};


export default roleHarvester