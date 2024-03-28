export function upgrade(creep: Creep, data: any = {}) { 
    let controller = creep.room.controller;

    // if has source - go to source and harvest
    if(controller){
        if(creep.pos.isNearTo(controller)){
            creep.transfer(controller, RESOURCE_ENERGY   );
        } else {
            creep.moveTo(controller, {visualizePathStyle: {stroke: '#E0115F'}});
        }
    }
}