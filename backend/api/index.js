const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const contactRoutes = require('../routes/contactRoutes');

dotenv.config({ path: '../.env' });
connectDB();
console.log(process.env.MONGO_URI);
const app = express();
app.use(express.json());

app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));

app.get("/", (req, res) => res.send("Express on Vercel"));

module.exports = app;