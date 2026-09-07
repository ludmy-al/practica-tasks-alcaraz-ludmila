import { Datatype } from "sequelize";
import { sequelize } from "../config/database.js";

export const task = sequelize.define (
    'Task', 
    {
        id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        title: {
            type: Datatype.STRING(100),
            allowNull: false,
        },

        description: {
            type: Datatype.STRING(100),
            allowNull: false,
        },

        isComplete: {
            type: Datatype.BOOLEAN,
            defaultValue: false,
        }
    }
)