
exports.seed =  async function(knex) {
  await knex('people').truncate()
  await knex('people').insert([
    { firstname: 'Janet', lastname: 'Jackson' },
    { firstname: 'Britney', lastname: 'Spears' },
    { firstname: 'Paula', lastname: 'Abdul' },
    { firstname: 'Beyonce', lastname: 'Knowles' }

  ])
};
