
exports.up = async function(knex) {
    await knex.schema.createTable("people", tbl => {
        tbl.increments('id')
        tbl.text('firstname').notNullable()
        tbl.text('lastname').notNullable()
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('people')
  
};
