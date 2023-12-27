interface HarvesterMemory {
    state: string
    previousState: string | null
    assignedSourceId: string | null
}

// roleHarvester: CreepRole
const roleHarvester: CreepRole = {
    getRoleName() { return 'harvester'; },

    // getBody(energyCapacity) {
    //     if (energyCapacity >= (CAPACITY_RCL_1 + (CAPACITY_EXT * 2))){
    //         return [
    //             MOVE, MOVE,
    //             WORK, WORK,
    //             CARRY, CARRY
    //         ]
    //     } else {
    //         // return some default body type
    //     }
    // },

    run: function(creep) {
        const machine: StateMachine<HarvesterMemory> = {
            initialContext: () => ({
                state: 'HARVESTING',
                previousState: null,
                assignedSourceId: null
            }),
            states: {
                'HARVESTING': {

                },
                'STORING': {
                    
                }
            }
        };
    }
    // run some state machine
}


export default roleHarvester