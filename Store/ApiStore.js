const express= require('express')
const bodyParser= require('body-parser')
const Books= require('../Database/schemaApi')

const app=express()

app.use(bodyParser.json())
// For All Data Fetch
const getAllBooks=async (req,res)=>{
    try {
        const books=await Books.find({})
        res.json(books)
    } catch (error) {
        res.status(500).json({error:'Unabl to find Books'})
    }
}

// For Create
const createBook= async (req,res)=>{
    try {
        const book = new Books(req.body)
        const savedBook= await book.save();
        res.json(savedBook)
    } catch (error) {
        res.status(400).json({error:'Unable to create'})
    }
}

// Get Books by Id
const getAllBooksbyId=async (req,res)=>{
    try {
        const books=await Books.findById(req.params.id)
        if (!books) {
            res.status(404).json({error:'not able to fetch by Id'})
        } else {
            res.json(books)
        }
       
    } catch (error) {
        res.status(500).json({error:'Unabl to find Books'})
    }
}

// Update Books

const updateBook=async (req,res)=>{
    try {
        const books=await Books.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if (!books) {
            res.status(404).json({error:'not able to Update by Id'})
        } else {
            res.json(books)
        }
       
    } catch (error) {
        res.status(500).json({error:'Unabl to Update Books'})
    }
}

// delete Books

const deleteBook=async (req,res)=>{
    try {
        const books=await Books.findByIdAndRemove(req.params.id)
        if (!books) {
            res.status(404).json({error:'not able to Delete by Id'})
        } else {
            res.json(books)
        }
       
    } catch (error) {
        res.status(500).json({error:'Unabl to Delete Books'})
    }
}

module.exports={
    app,
    getAllBooks,
    createBook,
    getAllBooksbyId,
    updateBook,
    deleteBook
}