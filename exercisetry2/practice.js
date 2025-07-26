const express = require('express');
const mongoose = require('mongoose');
const Employee = require('./models/Employee');



mongoose.connect('mongodb://localhost:27017/company');


const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get('/generate', async (req, res) => {
    await Employee.deleteMany({})
    let rname = [
        "Ali Raza", "Fatima Khan", "Omar Siddiqui", "Hira Sheikh", "Zain Malik",
        "Ayesha Noor", "Bilal Ahmed", "Sara Nadeem", "Usman Tariq", "Mehak Iqbal"
    ];

    let randomlang = [
        "JavaScript", "Python", "Java", "C#", "Go",
        "Ruby", "TypeScript", "Swift", "PHP", "Kotlin"
    ];

    let randomcity = [
        "Lahore", "Karachi", "Islamabad", "Faisalabad", "Multan",
        "Rawalpindi", "Peshawar", "Quetta", "Hyderabad", "Sialkot"
    ];

  
    const getrndom=(arr)=>{
        let rno=Math.floor(Math.random()*(arr.length-1))
        return arr[rno]
    }
    let randomsalary = [
        55000, 72000, 60000, 83000, 91000,
        47000, 99000, 68000, 75000, 86000
    ];


    for (let i = 0; i < 10; i++) {
        
        let e = await Employee.create({


            Name: getrndom(rname),
            salary: getrndom(randomsalary),
            Language:getrndom(randomlang),
            city: getrndom(randomcity),
            Ismanager: (Math.random()>0)?true:false
        }
        )
        console.log(e)

    }
    res.render("index", { foo: "FOO" });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});