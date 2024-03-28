declare global {
    interface CreepMemory {
          role: string
    }
}

declare global {
    interface RoomMemory {
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
