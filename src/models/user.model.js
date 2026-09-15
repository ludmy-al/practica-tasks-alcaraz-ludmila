import {  DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { Task } from "../models/task.model.js";

export const user = sequelize.define (
    'User',
    {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false,
        },
        
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        person_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
)

//estas son relaciones uno a uno 
User.hasMany(Task,{foreignkey: "user_id", as:"tasks"})