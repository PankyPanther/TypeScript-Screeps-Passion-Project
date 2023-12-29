import { CreepRole } from "utils/definition"
import { runCreepStateMachine, StateMachine } from "managers/state_manager"

interface HarvesterMemory {
    state: string
    previousState: string | null
    assignedSourceId: string | null
}

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
        const machine: StateMachine<HarvesterMemory> = {
            initialContext: () => ({
                state: 'HARVESTING',
                previousState: null,
                assignedSourceId: null
            }),
            states: {
                'HARVESTING': {
                    tick: (context) => {
                        creep.say('yippie')
                        return 'HARVESTING'
                        // return null
                    }
                },
                'STORING': {
                    tick: (context) => {
                        return null
                    }
                }
            }
        };
        runCreepStateMachine(creep, machine, 'roleHarvester');
    }
    
};


export default roleHarvester