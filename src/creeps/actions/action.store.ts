export function store(creep: Creep, data: any = {}) { 
    let spawn = creep.room.find(FIND_MY_SPAWNS)[0];

    // if has source - go to source and harvest
    if(spawn){
        if(creep.pos.isNearTo(spawn)){
            creep.transfer(spawn, RESOURCE_ENERGY   );
        } else {
            creep.moveTo(spawn, {visualizePathStyle: {stroke: '#E0115F'}});
        }
    }
}