import { type } from "node:os";
import { title } from "node:process";

export const task = sequelize.define 
    'Task',

    title: {
        type: DataTypes.STRING(100),
    }
    
