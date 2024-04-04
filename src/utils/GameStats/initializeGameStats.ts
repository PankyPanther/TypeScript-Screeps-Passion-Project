import { ROLES } from "creeps/roles"
import { countCreeps } from "./countCreeps"
import { countRoleParts } from "./countRoleParts"

export function initializeGameStats(){
    Memory.GameStats = {
        creepCount: {},
        creepRolePartCount: {},
        needRemote: false
    }
    countCreeps()
    countRoleParts()
    console.log("Initializeing Game Stats")
}