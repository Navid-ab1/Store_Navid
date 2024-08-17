const seedUsers = require('./seed-users');

const seedDatabase = async () => {
    try {
        await seedUsers();  // Run the users seeder
        console.log('All seeders ran successfully');
    } catch (error) {
        console.error('Failed to seed the database:', error);
    }
};

seedDatabase().then(() => process.exit());
