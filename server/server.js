const express = require( "express" );
const bodyParser = require("body-parser");
var nodemailer = require('nodemailer');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');

    if('OPTIONS' == req.method){
        res.sendStatus(200);
    }else{
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Successful");
})

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tkwodu@gmail.com',
      pass: 'grad@2019'
    }
});

app.post("/contact", (req, res) => {
    var mailOptions = {
        from: req.body.email,
        to: 'karebiwodu@gmail.com',
        subject: 'Response From Contact Form',
        html: `<html><div style="background-image: linear-gradient(to bottom right, #abbaab, #ffffff); height: 100%; width: 100%; 
        font-family: Raleway, sans-serif;">
        <div style="height: 100%; width: 100%; position:relative;">
            <div class="element" style="background-color: #ffffff; width: 60%; height: 60%; padding: 50px; position:absolute; 
            top: 0; bottom: 0; left: 0; right: 0; margin: auto; height: 20px;">
                <h1 style="text-align: center; margin: auto; width: auto; height: auto;">
                    New Contact Form Message
                </h1>
                <h3 style="padding: 20px; text-align: center; top: 50px; margin: auto; width: auto; height: auto;">
                    Name: ` + req.body.firstName + `
                </h3>
                <p>Message: ` + req.body.message +`</p>
            </div>
        </div>
    </div></html>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error)
          res.sendStatus(500)
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
})

app.listen(4300, () => {
    console.log('Server is listening on 4300');
})