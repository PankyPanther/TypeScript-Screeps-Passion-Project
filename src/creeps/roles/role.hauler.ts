import { CreepRole } from "definition"
import { runStates } from "managers/state_manager"
import { store } from "creeps/actions/action.store";
import { gather } from "creeps/actions/action.gather";
import { findGatherPlace } from "creeps/subactions/findGatherPlace";

// roleHarvester: CreepRole
const roleHauler: CreepRole = {
    getRoleName() { return 'hauler'; },

    getBody(energyCapacity) {
        if (energyCapacity >= 500) {
            return [
                MOVE, MOVE,
                MOVE, MOVE,
                MOVE, CARRY,
                CARRY, CARRY,
                CARRY, CARRY
            ]
        }

        return [
            MOVE, MOVE,
            CARRY, CARRY
        ]
    },

    run: function(creep) {
        // Define your states as functions
        const data = {
            target: creep.memory.target
        };

        const states = {
                GATHERING: (data: any, creep: Creep) => {
                    // console.log(data.target)
                    if (!data.target){
                        // console.log(findGatherPlace(creep))
                        creep.memory.target = findGatherPlace(creep)
                    }

                    if (creep.store.getFreeCapacity() == 0) {
                        creep.memory.target = {}
                        creep.memory.path = {}
                        return "STORING" 
                    }

                    gather(creep, {
                        target: data.target
                    }) 

                    return 'GATHERING';
                    
                },
            
                STORING: (data: any, creep: Creep) => {
                    if (creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) {
                        creep.memory.target = {}
                        creep.memory.path = {}
                        return "GATHERING" 
                    }
                
                    store(creep, {
                        sourceID: data.target
                    }) 
                    
                    return "STORING"
                },
        
        };
    
        runStates(states, data, creep);
    }
};


export default roleHauler