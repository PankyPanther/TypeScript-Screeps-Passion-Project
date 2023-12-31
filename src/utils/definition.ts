import { EmptyMemoryContext } from "managers/state_manager"

declare global {
    interface CreepMemory {
        role: string
        [memoryNamespace: string]: EmptyMemoryContext
    }
}

declare global {
    interface RoomMemory {
        role: string
    }
}



export interface CreepRole {
    getRoleName(): string
    getBody(energyCapacity: number): string[]
    run(creep: Creep): void
}


export interface RoomRole {
    run(room: Room): void
}
