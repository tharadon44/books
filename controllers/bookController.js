// Import Model
const Book = require("../models/books");
// Function add and export
exports.add = async (req, res) => {
    try {
        const { title, author, published_year, genre, available } = req.body
        const books = new book({ title, author, published_year, genre, available });
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
        const books = await book.findById(id);
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
        const books = await book.findById(id);
        if (!books) return res.status(404).json({
            title, author, published_year, genre, available
        });
        await book.findByIdAnddelete(id);
        res.json({ message: 'delete' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Function get all data and export
exports.getbooks = async (req, res) => {
    try {
        const books = await book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Function get data by genre and export
exports.getid = async (req, res) => {
    try {
        const { id } = req.params
        const books = await book.findById(id);
        res.status(200).json(books);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};