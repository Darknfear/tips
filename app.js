const express = require('express');
const dotenv = require('dotenv');
const { set, get, setNx, decryBy, exists, incrBy, client } = require('./src/redis/redis.v1');

// config
dotenv.config();

// init app
const app = express();

// config redis
client.connect().then(() => {
    console.log(`Connect redis success!`);
}).catch(err => console.log(`error when connect redis ${err}`));

// router
app.get('/order', async (req, res) => {
    const time = new Date().getTime();
    console.log(`Time request::::: ${time}`);

    // number inventory
    const numInventory = 10;
    // name item
    const name = 'Iphone13';

    const sellNumber = 1;
    console.log(`debug1`);
    const key = await exists(name);
    console.log(`debug`);

    if (!key) {
        await set(name, 0);
    }

    let boughtNumber = await get(name);
    console.log(`Before user order success ${boughtNumber}`);
    if (+boughtNumber + sellNumber > numInventory) {
        console.log(`Out of stock`);
        return res.json({ success: 'error', message: 'error'});
    }

    boughtNumber = await incrBy(name, 1);
    console.log(`After user order success ${boughtNumber}`);
    return res.json({
        status: 'success',
        message: 'ok',
        time
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`);
});
