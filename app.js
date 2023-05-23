const express = require('express');
const dotenv = require('dotenv');
// config
dotenv.config();

// init app
const app = express();

// router
app.get('/order', (req, res) => {
    const time = new Date().getTime();
    console.log(`Time request::::: ${time}`);

    // number inventory
    const numInventory = 10;
    // name item
    const name = 'Iphone13';

    const sellNumber = 1;



    return res.json({
        status: 'success',
        message: 'ok',
        time
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running in port ${process.env.PORT}`);
});
