require('dotenv').config();
const express= require('express');
const attendancRoutes= require('./routes/attendance.js');
const cors= require('cors');
const mongoose= require('mongoose');

//express app
const app= express()

app.use(cors());
app.use(express.json())

//routes
app.use('/api/markAttendance', attendancRoutes)
app.get('/', (req,res)=>{
    res.json({msg:'Coders Cup attendance'});
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listening to requests
    app.listen(process.env.PORT, ()=>{
        console.log('Connected and listening to requests on', process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})

