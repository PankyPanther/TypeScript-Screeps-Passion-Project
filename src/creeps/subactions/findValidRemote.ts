import { findAdjacentRooms } from "./findAdjacentRooms"

export function findValidRemote(homeRoom: Room): string | undefined{

    for (let room in Memory.rooms) {
        if (!Memory.rooms[room].status) {
            let adjacentRooms = findAdjacentRooms(homeRoom.name, 1)
            for (let adjacentRoom in adjacentRooms){
                if (adjacentRooms[adjacentRoom] === room){
                    return room
                }
            }
        }
    }

    return undefined
}