
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const product = new Schema({
    id: { type: ObjectId }, //khóa chính
    name: { type: String },
    price: { type: Number },
    imageUrl: { type: String },
});
module.exports = mongoose.models.product || mongoose.model('product', product);
