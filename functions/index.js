const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")('sk_test_51IkYWLAzHw5WdDoERePeD2s1mB3xFNplA01PhlB4v2PtjEuLA2GpbDHYN4NR2AtmuSSyFLX8mnFGnzevqr1i3Haz00fN2CknDS')

//API

// App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/',(request, response) => response.status(200).send('Hello World'))

app.post('/payments/create',async(request, response) =>{
   const total = request.query.total;
   
   console.log('Payment Request Received for this Amount >>>', total)

   const paymentIntent = await stripe.paymentIntents.create({
       amount: total,
       currency: "usd",
   });

   //OK - Created
   response.status(201).send({
        clientSecret: paymentIntent.client_secret,
   })
    
})

//Listen command
exports.api = functions.https.onRequest(app)
