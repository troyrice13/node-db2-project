// STRETCH
const cars = [
    {
        vin: '0000000001',
        make: 'hyundai',
        model: 'elantra',
        mileage: 115000,
        title: 'clean',
        transmission: 'auto'
    },
    {
        vin: '0000000002',
        make: 'toyota',
        model: 'camry',
        mileage: 224000,
        title: 'clean'
    },
    {
        vin: '0000000003',
        make: 'mercedes-benz',
        model: 'g-wagon',
        mileage: 100
    }
];

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars);
};