import { restParam } from "lodash";
import { findAdjacentRooms } from "./findAdjacentRooms";
import { findValidRemote } from "./findValidRemote";
import { copyFileSync, rmdir } from "fs";

export function findValidRoom(creep: Creep) {

    let currentRoomName = creep.room.name;

    let exits = Game.map.describeExits(currentRoomName);
    let adjacentRooms: string[] = findAdjacentRooms(currentRoomName, 1); 
    
    let unexploredRooms = adjacentRooms.filter(roomName => !Memory.rooms[roomName]);
    
    let homeRoom = creep.memory.homeRoom; 
    let sortedRooms = unexploredRooms.sort((roomA, roomB) => {
        let routeA = Game.map.findRoute(homeRoom, roomA);
        let distanceA = routeA === -2 ? Infinity : routeA.length;
        
        let routeB = Game.map.findRoute(homeRoom, roomB);
        let distanceB = routeB === -2 ? Infinity : routeB.length;
        
        return distanceA - distanceB;
    });

    
    // Step 5: Check If Room Exists
    for (let roomName of sortedRooms) {
        if (Game.map.getRoomStatus(roomName)) {
            // Room is available, you can navigate to it
            return roomName; // Return the first available room after exploration
        } else {
            // Room is not available (e.g., it's owned by another player)
        }
    }
    
    // let oldestCheckedRoom
    // for(let room in Memory.rooms){
    //     if(Memory.rooms[room].role === 'explored'){
    //         // if(Memory.rooms[room].status === 'hostileCreeps' || Memory.rooms[room].status === 'hostileCreeps'){
    //         //   console.log(oldestCheckedRoom, Memory.rooms[room])
    //           if (oldestCheckedRoom && Memory.rooms[room]){
    //             console.log(Game.time - Memory.rooms[room].lastEntered, room)
    //               if (oldestCheckedRoom.lastEntered < Memory.rooms[room].lastEntered){
    //                 // console.log(room)
    //                 oldestCheckedRoom = Memory.rooms[room]
    //                 oldestCheckedRoom.name = room
    //               } 
    //           } else {
    //             oldestCheckedRoom = Memory.rooms[room]
    //             oldestCheckedRoom.name = room
    //           }
    //         // }
    //     }
    // } 

    // if (oldestCheckedRoom){
    //     console.log('oldest', oldestCheckedRoom.name)
    //     return oldestCheckedRoom.name
    // }

    let remote = findValidRemote(creep.memory.homeRoom.name)
    
    if (remote?.length){
        console.log(remote, 'rem')
        return (`${remote}`)
    }

    return undefined
}