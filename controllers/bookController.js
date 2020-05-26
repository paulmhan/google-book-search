const { Book } = require('../models');

module.exports = {
    findAll: async (req, res) => {
        try {
            const books = await Book.find(req.query);
            return res.json(books);
        } catch (error) {
            return res.status(403).json({ error });
        }
    }
}