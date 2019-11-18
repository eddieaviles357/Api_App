const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useFindAndModify: false,
//             useUnifiedTopology: true
//         });
//         console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
//     } catch (err) {
//         console.log(err);
//     }
// }

// Use only for local production storage, when no bandwidth available
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/dev_camper', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;