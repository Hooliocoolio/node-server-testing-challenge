const db = require('../data/config')

/*  returns all people  */
function find() {
    return db('people')
}

/*  returns person by id  */
function findById(id) {
    return db('people')
        .where({ id })
        .first()
}

/*  creates a new person then returns new person  */
async function create(data) {
    const [id] = await db('people').insert(data)
    return findById(id)
}

/*  updates a person  */
async function update(id, data) {
    await db('people')
    .where({ id })
    .update(data)
    return findById(id)
}

/*  removes person  */
function remove(id) {
    return db('people')
    .where({ id })
    .del()
}

module.exports = {
    find, 
    findById,
    create,
    update,
    remove,
}