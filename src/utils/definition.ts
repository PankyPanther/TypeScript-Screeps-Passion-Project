declare global {
    interface CreepMemory {
          role: string
          workRoom: Room
          sourceID?: Id<Source> | undefined
          target?: any
          path?: any
          previousPos?: any
    }
}

interface SourceMemory {
    creeps: string[]
    openSpots: number
}

declare global {
    interface RoomMemory {
        sources: {[sourceID: Id<Source>]: SourceMemory}
        role: string
        status?: string
        lastEntered?: number
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
