export interface creepRoleParts{
    [bodyPart: string]: number
}

interface GameStatsMemory {
    creepCount: {[roleName: string]: number}
    creepRolePartCount: {[roleName: string]: creepRoleParts}
    needRemote: boolean
}

export const bodyParts: Record<BodyPartConstant, any> = {
    move: null,
    work: null,
    carry: null,
    attack: null,
    ranged_attack: null,
    heal: null,
    claim: null,
    tough: null
};

declare global {
    interface Memory {
        GameStats: GameStatsMemory
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

