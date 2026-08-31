export const task = sequelize.define 
    'Task',

    title: {
        type: DataTypes.STRING(100),
    }
    