export function findAdjacentRooms(startingRoom: string, radius: number): string[] {
    const roomsAroundStartingRoom: string[] = [];
    
    function findRoomsWithinRadius(roomName: string, currentRadius: number): void {
        roomsAroundStartingRoom.push(roomName);
        
        if (currentRadius > 0) {
            const exits = Game.map.describeExits(roomName) || {};
            const directions = Object.keys(exits) as Array<keyof typeof exits>;
            
            for (const direction of directions) {
                const nextRoomName = exits[direction]!;
                findRoomsWithinRadius(nextRoomName, currentRadius - 1);
            }
        }
    }
    
    findRoomsWithinRadius(startingRoom, radius);
    
    // console.log(roomsAroundStartingRoom)
    return roomsAroundStartingRoom;
}