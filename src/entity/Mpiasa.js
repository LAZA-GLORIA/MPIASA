const EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
    name: "Mpiasa",
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        name: {
            type: 'text',
        },
    },
})