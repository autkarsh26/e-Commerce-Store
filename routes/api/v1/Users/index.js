//const { query } = require('express');
const express = require('express');

const connection = require('../../../../database/mysql/connection');

const router = express.Router();

router.post('/create', (req, res) => {
    let users = req.body;
    var query = "insert into users(email, password, type) values(?,?,?)";
    connection.query(query,[users.email, users.password, users.type],(err,results)=>{
        if(!err){
            return res.status(200).json({message: "User Added"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.get('/all',(req,res,next)=>{
    var query = "select * from users";
    connection.query(query,(err,results)=>{
        if(!err)
            return res.status(200).json(results);
        else 
            return res.status(500).json(err);

    });
});

router.patch('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let users = req.body;
    var query = "update users set email=?, password=?, type=? where id=?";
    connection.query(query,[users.email, users.password, users.type, id],(err,results)=>{
        if(!err){
            if(results.affectedRows==0){
                return res.status(404).json({message: "User's id does not found"});
            }
            return res.status(200).json({message: "User updated successfully!"});
        }
        else{
            return req.status(500).json(err);
        }  
    });
});

router.delete('/delete/:id',(req,res,next)=>{
    const id=req.params.id;
    var query = "Delete from users where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows==0){
                return res.status(404).json({message: "User's id does not found"});
            }
            return res.status(200).json({message: "User deleted successfully!"});
        }
        else{
            return req.status(500).json(err);
        }
    });
});


module.exports = router;