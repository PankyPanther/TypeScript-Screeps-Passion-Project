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
                        let hauler = null
                        for (let creepName in Memory.creeps) {
                            if (Memory.creeps.hasOwnProperty(creepName)) {
                                let creep = Memory.creeps[creepName];
                                if (creep.role === 'hauler') {
                                    hauler = true;
                                }
                            }
                        }
                        if (hauler) { return "DROPING" }
                        return "STORING"
                    }

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
                }

        
        };
    
        runStates(states, data, creep);
    }
};


export default roleHarvester