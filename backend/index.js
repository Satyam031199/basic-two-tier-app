import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for frontend running on localhost:5173
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

// Example route
app.get('/api', (req, res) => {
    res.status(200).json({message: 'Hello from backend!', success: true});
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});