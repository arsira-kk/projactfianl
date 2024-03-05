const express = require('express');
const Sequelize = require('sequelize');
const session = require('express-session');
const bcrypt = require("bcrypt");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({secret:"mysession",resave:false,saveUninitialized:true}));

// Sequelize Configuration
const sequelize = new Sequelize('database', 'username', 'password', {
    host:'localhost',
    dialect: 'sqlite',
    storage: './Database/SanitarywateDB.sqlite'
});

// Define Models
const User = sequelize.define("user", {
    userid:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
    } ,
    username :{
        type: Sequelize.STRING
    } ,
    password :{
        type: Sequelize.STRING
    } ,
    fname :{
        type: Sequelize.STRING
    } ,
    lname :{
        type: Sequelize.STRING
    } ,
    phone :{
        type: Sequelize.STRING
    },
    address :{
        type: Sequelize.STRING
    },
    role:{
        type: Sequelize.STRING,
        defaultValue: 'user'
    }
});

const Product = sequelize.define("product",{
    sanitarywareid:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sanitarywarename:{
        type: Sequelize.STRING
    },
    sanitarywaretype:{
        type: Sequelize.STRING
    },
    sanitarywareprice:{
        type: Sequelize.STRING
    },
    imgurl:{
        type: Sequelize.STRING
    }
});

const Cart = sequelize.define("cart",{
    cartid:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userid:{
        type: Sequelize.INTEGER
    },
    cartuser:{
        type: Sequelize.STRING
    },
    sanitarywareid:{
        type: Sequelize.INTEGER
    }
});

const Order = sequelize.define("order",{
    orderid:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userid:{
        type: Sequelize.INTEGER
    },
    cartuser:{
        type: Sequelize.STRING
    }
});

// Sync Sequelize Models with Database
sequelize.sync();

// Routes
app.post("/createuser",(req,res) => {
    let checksame = false;
    User.findAll().then(data => {
        if (data) {
            for (let i = 0 ; i < data.length ; i++) {
                if (req.body.phone == data[i].dataValues.phone) {
                    checksame = true;
                }
            }
            if (!checksame) {
                User.create(req.body).then(data => {
                    res.json(data);
                }).catch(err => {
                    res.status(500).send(err);
                });
            }
            else{
                res.json({registerfailed:true});
            }
        }
        else{
            res.status(404).send("user not found");
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get("/users", (req, res) => {
    User.findAll({ include: [] })
      .then((users) => {
        if (users) {
          res.json(users);
        } else {
          res.status(404).send("Users not found");
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
});

app.get("/getuser/:id",(req,res) => {
    User.findByPk(req.params.id).then(data => {
        if (data) {
            res.json(data);
        }
        else{
            res.status(404).send("user not found");
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get('/products', (req, res) => {
    Product.findAll().then(data => {
        if (data) {
            res.json(data);
        }
        else{
            res.status(404).send("products not found");
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.get("/products/:id",(req,res) => {
    Product.findByPk(req.params.id).then(data => {
        if (data) {
            res.json(data);
        }
        else{
            res.status(404).send("product not found");
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.post("/createproduct",(req,res) => {
    Product.create({
        sanitarywarename:req.body.sanitarywarename,
        sanitarywaretype:req.body.sanitarywaretype,
        sanitarywareprice:req.body.sanitarywareprice,
        imgurl:req.body.imgurl
    }).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.put("/updateproduct/:id",(req,res) => {
    Product.findByPk(req.params.id).then(data => {
        if (data) {
            data.update(req.body).then(() => {
                res.json(data);
            }).catch(err => {
                res.status(500).send(err);
                console.log(err);
            });
        }
        else{
            res.status(404).send("product not found");
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

app.delete("/deleteproduct/:id",(req,res) => {
    Product.findByPk(req.params.id).then(data => {
        if (data) {
            data.destroy().then(() => {
                res.json({});
            }).catch(err => {
                res.status(500).send(err);
            });
        }
        else{
            res.status(404).send('product not found');
        }
    }).catch(err => {
        res.status(500).send(err);
    });
});

// Server Start
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
