import { CreepRole } from "utils/definition"
import { runStates } from "managers/state_manager"
import { store } from "creeps/actions/action.store";
import { gather } from "creeps/actions/action.gather";

// roleHarvester: CreepRole
const roleHauler: CreepRole = {
    getRoleName() { return 'harvester'; },

    getBody(energyCapacity) {
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

                    if (!data.target){
                        creep.memory.target
                    }

                    if (creep.store.getFreeCapacity() == 0) { return "STORING" }

                    store(creep, {
                        target: data.target
                    }) 

                    return 'GATHERING';
                    
                },
            
                STORING: (data: any, creep: Creep) => {
                    if (creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) { return "GATHERING" }

                    creep.say('gathering')

                    gather(creep, {
                        sourceID: data.target
                    }) 
                    
                    return "STORING"
                },
        
        };
    
        runStates(states, data, creep);
    }
};


export default roleHauler