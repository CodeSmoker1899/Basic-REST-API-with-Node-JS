//first intialize the npm using : npm init -y command
//it will create package.json file.
//next you have to install express and nodemon
//express is used to create the server and nodemon is used to run over server continiously.
// lets start

const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json())

// i am not using database so i will create the simple json 
const studentData = [{
    roll_no: 1,
    name: "codesmoker"
}]

//create first endpoint to test the app in postman
app.get('/test', (req, res) => {
    // res.send('Welcome to CodeSmoker'); //its working 
    //lets llisten the student data
    res.send(studentData);
})

//create an endpoint for post the data 
app.post('/test/add', (req, res) => {
    const { name } = req.body

    const newData = {
        roll_no: studentData.length + 1,
        name
    }

    studentData.push(newData)
    return res.json(studentData);
})

//create an endpoint for delete the data
app.delete('/test/delete/:roll_no', (req, res) => {
    const { roll_no } = req.params
    const deleteIndex = studentData.findIndex(ele => ele.roll_no == roll_no)
    studentData.splice(deleteIndex, 1)
    return res.json(studentData)
})

//create endpoint for update the name
app.put('/test/update/:id', (req, res) => {
    const { id } =req.params
    const { name } =req.body

    const updateIndex = studentData.findIndex(ele => ele.roll_no==id)
    studentData[updateIndex].name = name
    return res.json(studentData)
})



//listening the app on port 5000
app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
})


// this is our simple REST API using NodeJs that we tested on Postman

// source code is in the description.