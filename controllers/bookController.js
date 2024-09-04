// Import Model
const exports = require("exports");
const books = require("../models/books");
// Function add and export
exports.add = async (req, res) => {
    try {
        const { title, author, published_year, genre, available } = req.body
        const books = new Book({ title, author, published_year, genre, available });
        const savebooks = await books.save();
        res.status(201).json(savebooks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Function update and export
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const books = await Book.findById(id);
        if (!books) return res.status(404).json({ message: 'not found' });
        const update = req.body;
        Object.assign(books.update);
        const updated = await books.save();
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Function delete and export
exports.deletebooks = async (req, res) => {
    try {
        const { id } = req.params;
        const books = await books.findById(id);
        if (!books) return res.status(404).json({ message: 'Product not found' });
        await books.findByIdAndDelete(id);
        res.json({ message: 'books deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Function get all data and export
exports.getbooks = async (req, res) => {
    try{
        const books = await books.find();
        res.status(200).json(books);
    }catch (error){
        res.status(500).json({message:error.message});
    }
};
// Function get data by genre and export
exports.getid = async (req, res) => {
    try {
        const { id } = req.params;
        const books = await books.findById(id);
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};