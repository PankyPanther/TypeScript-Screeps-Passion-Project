import { CreepRole } from "definition"
import { runStates } from "managers/state_manager"

// roleHarvester: CreepRole
const roleremoteHarvester: CreepRole = {
    getRoleName() { return 'remoteHarvester'; },

    getBody(energyCapacity) {
        return [
            MOVE, MOVE,
            WORK, WORK
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


export default roleremoteHarvester