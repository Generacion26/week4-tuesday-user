const catchError = require('../utils/catchError');
const Todo = require('../models/Todo');

const getAll = catchError(async (req, res) => {
    const userId = req.user.id
    const results = await Todo.findAll({ where: { userId } });
    return res.json(results);
});

const create = catchError(async (req, res) => {
    const userId = req.user.id

    //OPTION 1
    // const { task, isCompleted } = req.body
    // const body = { task, isCompleted, userId}

    //OPTIONS 2
    const body = { ...req.body, userId }

    const result = await Todo.create(body);
    return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Todo.findByPk(id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Todo.destroy({ where: { id } });
    if (!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await Todo.update(
        req.body,
        { where: { id }, returning: true }
    );
    if (result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}