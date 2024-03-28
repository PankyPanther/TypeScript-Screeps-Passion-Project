declare global {
    interface CreepMemory {
          role: string
    }
}

interface SourcePostion {
    posX: number
    posY: number
    roomName: string
}

interface SourceMemory {
    pos: SourcePostion
    creepParts: string[]
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
