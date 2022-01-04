const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;


const app = express();
app.use(express.json());
app.use(cors({
  origin: ["https://3000-tomato-butterfly-ad2u3ute.ws-us25.gitpod.io"],  
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  key: "userId",
  secret: "subscribe",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  },
})
);

 const db = mysql.createConnection({
     user: "root",
     host: "localhost",
     password: "frtysk489",
     database: "syst"
 })


  app.post("/register", (req, res) => {
      const username = req.body.username;
      const password = req.body.password;

      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          console.log(err);
        } else {
  db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hash], 
     (err, result) => {
         console.log(err);
     });
     res.send()
    } 
   }) 
  }) 

  app.post("/choice", (req) => {
    const choice = req.body.select;

db.query("INSERT INTO bookmark (bookmark) VALUES (?)", [choice], 
   (err) => {
       console.log(err);
   });  
 }) 

  app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user })
    } else {
      res.send({ loggedIn: false })
    }  
  })

  app.get("/logout", (req, res) => {
    if (req.session.user) {
            res.clearCookie('userId');
            res.send({loggedIn: false})
        }
    })
    
  app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

   db.query("SELECT * FROM users WHERE username = ?;",
    username, (err, result) => {
     if (err) {
      res.send({err: err})
    } 
       if (result.length > 0) {
         bcrypt.compare(password, result[0].password, (error, response) => {
           if (response) {
            req.session.user = result;
             console.log(req.session.user);
            res.send(result)
           } else {
            res.send({ message: "Wrong username/password combination!"})
           }
         })
       } else {
         res.send({ message: "User doesn't exist"})
       }
     });
  })


app.listen(5001, () => {
  console.log("running server");
});