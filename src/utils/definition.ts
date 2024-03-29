declare global {
    interface CreepMemory {
          role: string
          sourceID: Id<Source> | undefined 
    }
}

interface SourceMemory {
    creeps: string[]
}

declare global {
    interface RoomMemory {
        sources: {[sourceID: Id<Source>]: SourceMemory}
        role: string
    }
}

export interface CreepRole {
    getRoleName(): string
    getBody(energyCapacity: number): BodyPartConstant[]
    run(creep: Creep): void
}


export interface RoomRole {
    run(room: Room): void
}
