export interface StateMachine<M extends EmptyMemoryContext> {
    states: {
        [name: string]: State<M>
    },
    initialContext: () => M
}

export interface State<M> {
    tick: (context: M) => string | null
}

export interface EmptyMemoryContext {
    state: string
    previousState: string | null
}

export function runCreepStateMachine<M extends EmptyMemoryContext> (
    creep: Creep,
    machine: StateMachine<M>,
    memoryNamespace: keyof CreepMemory
) {
    if (!creep.memory[memoryNamespace]) {
        creep.memory[memoryNamespace] = machine.initialContext();
    }

    const memoryContext = creep.memory[memoryNamespace] as M;
    const currentState = memoryContext.state;

    const newState = machine.states[currentState].tick(memoryContext);

    memoryContext.previousState = currentState;

    if (newState) {
        memoryContext.state = newState;

        // if (Memory.debug.creepId) {
        //     creep.say(newState);
        // }
    }
}