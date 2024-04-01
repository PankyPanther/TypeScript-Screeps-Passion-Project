import { CreepRole } from "utils/definition"
import { runStates } from "managers/state_manager"
import { findGatherPlace } from "creeps/subactions/findGatherPlace"
import { upgrade } from "creeps/actions/action.upgrade"
import { gather } from "creeps/actions/action.gather"

// roleHarvester: CreepRole
const roleUpgrader: CreepRole = {
    getRoleName() { return 'upgrader'; },

    getBody(energyCapacity) {
        return [
            MOVE, MOVE,
            WORK, CARRY
        ]
    },

    run: function(creep) {
    
        // Define your states as functions
        const data = {
            controllerText: 'Save the trees you must not, but to be saved from them is a bigger problem',
            target: creep.memory.target
        };

        const states = {
                GATHERING: (data: any, creep: Creep) => {        

                    if (!data.target){
                        creep.memory.target = findGatherPlace(creep)
                    }

                    if (creep.store.getFreeCapacity() == 0) { 
                        creep.memory.path = {}
                        return "UPGRADEING" 
                    }

                    gather(creep, {
                        target: data.target
                    }) 

                    return 'GATHERING';
                    
                },
            
                UPGRADEING: (data: any, creep: Creep) => {
                    if (creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) {
                        creep.memory.path = {}
                        return "GATHERING" 
                    }

                    upgrade(creep, {
                        controllerText: data.controllerText
                    })
                    
                    return "UPGRADEING"
                },
        
        };
    
        runStates(states, data, creep);
    }
};


export default roleUpgrader