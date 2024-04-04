export function getNearbyPositions(roomPOS: RoomPosition) {
    const positions = []

    let startX = roomPOS.x-1 || 1
    let startY = roomPOS.y-1 || 1

    for(let x = startX; x <= roomPOS.x + 1 && x < 49; x++) {
        for(let y = startY; y <= roomPOS.y + 1 && y < 49; y++) {
            if (x != roomPOS.x || y != roomPOS.y) {
                positions.push(new RoomPosition(x, y, roomPOS.roomName))
            }
        }
    }

    return positions

}

export function findOpenSourceSpaces(source: Source): number {
    let nearByPositions = getNearbyPositions(source.pos)

    let terrain = Game.map.getRoomTerrain(source.room.name)
    let openSpaces = _.filter(nearByPositions, function(pos){
        return terrain.get(pos.x, pos.y) != TERRAIN_MASK_WALL
    })

    return openSpaces.length
}