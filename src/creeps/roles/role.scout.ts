import { CreepRole } from "utils/definition"
import { runStates } from "managers/state_manager"
import { findGatherPlace } from "creeps/subactions/findGatherPlace";

// roleHarvester: CreepRole
const roleScout: CreepRole = {
    getRoleName() { return 'scout'; },

    getBody(energyCapacity) {
        return [
            MOVE, MOVE
        ]
    },

    run: function(creep) {
        // Define your states as functions
        const data = {
            
        };

        const states = {
                EXPLORING: (data: any, creep: Creep) => {

                    return 'EXPLORING';
                    
                },
            
                FLEEING: (data: any, creep: Creep) => {
                    
                    return "FLEEING";
                },
        
        };
    
        runStates(states, data, creep);
    }
};


export default roleScout