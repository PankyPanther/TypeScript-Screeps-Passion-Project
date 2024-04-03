import { CreepRole } from "definition"
import { runStates } from "managers/state_manager"

// roleHarvester: CreepRole
const roleremoteHauler: CreepRole = {
    getRoleName() { return 'remoteHauler'; },

    getBody(energyCapacity) {
        return [
            MOVE, MOVE,
            CARRY, CARRY,
            MOVE, CARRY
        ]
    },

    run: function(creep) {
        // Define your states as functions
        const data = {
        };

        const states = {
                GATHERING: (data: any, creep: Creep) => {

                    return 'GATHERING';
                    
                },
            
                STORING: (data: any, creep: Creep) => {
                    return "STORING"
                },
        
        };
    
        runStates(states, data, creep);
    }
};


export default roleremoteHauler