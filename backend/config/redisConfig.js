const Redis = require('ioredis')

const redisDemo = async()=>{
    const redisClient = new Redis({
        host : '127.0.0.1',
        port : 6379,
    });
    
    await redisClient.set('Username','Navid');
    const value = await redisClient.get('Username');
    console.log(value);




    redisClient.quit();

};
redisDemo();