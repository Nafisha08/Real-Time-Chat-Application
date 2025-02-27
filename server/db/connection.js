const mongoose = require('mongoose');

// const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zw6hky5.mongodb.net/?retryWrites=true&w=majority`;
const url = `mongodb+srv://mamit5620:eRHMEfx1xdXIFvyu@chatbot.tlhle.mongodb.net/?retryWrites=true&w=majority&appName=chatbot`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))






// require('dotenv').config();
// const mongoose = require('mongoose');

// const MONGO_URI = `mongodb+srv://mamit5620:eRHMEfx1xdXIFvyu@chatbot.tlhle.mongodb.net/?retryWrites=true&w=majority&appName=chatbot`;

// mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 50000, // Increase timeout
//     connectTimeoutMS: 50000
// });

// const db = mongoose.connection;

// db.on('connected', () => console.log('✅ MongoDB Connected Successfully!'));
// db.on('error', (err) => console.error('❌ MongoDB Connection Error:', err));
// db.on('disconnected', () => console.log('❌ MongoDB Disconnected!'));
