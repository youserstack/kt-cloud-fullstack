const express = require('express');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cors = require('cors');
const fs = require('fs');
const util = require('util');
const log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
const log_stdout = process.stdout;

console.error = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

dotenv.config();

if (!process.env.API_KEY || process.env.API_KEY === "YOUR_API_KEY") {
    console.error('FATAL ERROR: API_KEY is not defined in your .env file, or it is still set to the default placeholder.');
    process.exit(1);
}

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.post('/api/chat', async (req, res) => {
    console.log("New request to /api/chat");
    try {
        const { message } = req.body;
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
        const result = await model.generateContent(message);
        const response = await result.response;
        const text = response.text();
        res.json({ message: text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to process chat message' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
