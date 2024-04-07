import { create } from "lodash";

export function towerManager(room: Room, tower: StructureTower): void {
    let enemyCreeps = room.find(FIND_HOSTILE_CREEPS && FIND_HOSTILE_POWER_CREEPS)

    if (enemyCreeps){
        tower.attack(enemyCreeps[0])
    }
}