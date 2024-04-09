import { findAdjacentRooms } from "./findAdjacentRooms"

export function findValidRemote(homeRoomName: string): string | undefined{
    for(let room in Memory.rooms){
        if(Memory.rooms[room].role === 'explored'){
            if(Memory.rooms[room].status !== 'hostileCreeps' || Memory.rooms[room].status == 'hostileCreeps'){
                // console.log(room)
                let adjacentRooms = findAdjacentRooms(homeRoomName, 1)
                for (let adjacentRoom of adjacentRooms){
                    if (adjacentRoom === room){
                        console.log(room)
                        return room
                    }
                }
            }
        }
    } 

    return undefined
}