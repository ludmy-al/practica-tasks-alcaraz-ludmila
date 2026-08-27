import { PersonModel } from "";
import { TaskModel } from "";
import { UserModel } from "";

export const createTask = async (req, res) => {
  try {
    const { title, description, user_id } = req.body;

    const task = await TaskModel.create({ title, description, user_id });
    return res.status(201).json(task);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor " });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const task = await TaskModel.findAll({
      attributes: {
        exclude: ["user_id"],
      },
      include: [
        {
          model: UserModel,
          as: "author",
          attributes: {
            exclude: ["password", person_id],
          },
          include: [
            {
              model: PersonModel,
              as: "owner",
            },
          ],
        },
      ],
    });
    return res.status(201).json(task);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
