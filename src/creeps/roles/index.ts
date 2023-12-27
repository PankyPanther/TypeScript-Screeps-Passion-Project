import { CreepRole } from 
import roleHarvester from './role.harvester';

interface RoleLookup {
    [roleName: string]: CreepRole
}

const ROLES: RoleLookup = {
    'harvester': roleHarvester,
}