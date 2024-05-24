// STRETCH
const cars = [
    {
        vin: '1G1JA5SH9E4225687',
        make: 'hyundai',
        model: 'elantra',
        mileage: 115000,
        title: 'clean',
        transmission: 'auto'
    },
    {
        vin: 'JH2SC59448M054402',
        make: 'toyota',
        model: 'camry',
        mileage: 224000,
        title: 'clean'
    },
    {
        vin: '1FDKF37G1VEB85547',
        make: 'mercedes-benz',
        model: 'g-wagon',
        mileage: 100
    }
];

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars);
};