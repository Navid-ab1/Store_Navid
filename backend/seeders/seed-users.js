const { User } = require('../models'); // Import the User model

const seedUsers = async () => {
    await User.bulkCreate([
        {
            first_name: 'John',
            last_name: 'Doe',
            address: '123 Main St',
            phone_number: '1234567890',
            password: 'password123', // Assuming you handle hashing in the model
            role: 'user'
        },
        {
            first_name: 'Jane',
            last_name: 'Smith',
            address: '456 Oak St',
            phone_number: '9876543210',
            password: 'password123',
            role: 'admin'
        }
    ]);
    console.log('Users seeded successfully');
};

module.exports = seedUsers;
