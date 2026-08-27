const express = require('express');
const app = express();

// Set the port based on your requirements 
const PORT = 5002;

app.use(express.json());
// API - paymentprocess
app.post('/paymentprocess', (req, res) => {
    console.log("payment process API was hit!");
    res.send("paymentprocess API called successfully.");
});


app.listen(PORT, () => {
    console.log(`Payment Microservice is listening on port ${PORT}`);
});