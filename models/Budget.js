const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Budget', budgetSchema);
