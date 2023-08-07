const express = require('express')
const qr = require('qrcode')
const cors = require('cors');

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
}));


const PORT = 8000


app.get('/generate', async (req, res) => {
    try {
        const { text } = req.query;
        if (!text) {
            return res.status(400).json({ error: 'Text parameter is required.' });
        }

        const qrCode = await qrcode.toDataURL(text);
        res.json({ qrCode });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred.' });
    }
});



app.listen(PORT, () => {
    console.log("server started")
})