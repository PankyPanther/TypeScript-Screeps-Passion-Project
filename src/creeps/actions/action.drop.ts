export function drop(creep: Creep, data: any = {}) {
    if (creep.store.getFreeCapacity() == 0){
        creep.drop(RESOURCE_ENERGY)
    }
}