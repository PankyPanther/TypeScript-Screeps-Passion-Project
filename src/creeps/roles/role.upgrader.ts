import { CreepRole } from "utils/definition"
import { runStates } from "managers/state_manager"
import { harvest } from "creeps/actions/action.harvest"
import { findValidSource } from "utils/findValidSource"
import { upgrade } from "creeps/actions/action.upgrade"

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
            sourceID: ''
        };

        const states = {
                HARVESTING: (data: any, creep: Creep) => {
                    creep.say('harvesting')

                    if (!data.sourceID){
                        data.sourceID = findValidSource(creep)
                    }

                    if (creep.store.getFreeCapacity() == 0) { return "UPGRADEING" }

                    harvest(creep, {
                        sourceID: data.sourceID
                    }) 

                    return 'HARVESTING';
                    
                    
                },
            
                UPGRADEING: (data: any, creep: Creep) => {
                    if (creep.store.getUsedCapacity(RESOURCE_ENERGY) == 0) { return "HARVESTING" }

                    creep.say('upgrade')
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