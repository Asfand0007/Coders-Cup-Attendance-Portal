const express= require('express');
const CodersCupAttendance= require('../models/attendanceModel');
const router= express.Router();

router.get('/', async (req, res)=>{
    const teams= await CodersCupAttendance.find({});
    res.status(200).json(teams);
});
module.exports= router;