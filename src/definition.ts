declare global {
    interface Memory {
        GameStats: object
    }
}

declare global {
    interface CreepMemory {
          role: string
          workRoom: Room
          homeRoom: any
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
        creepCounter?: {[roleName: string]: number}
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


declare global {
    const WhiteList: string[];
}


export const WhiteList: string[] = ["BobGuo"];

