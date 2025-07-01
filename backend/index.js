import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for frontend running on localhost:5173
app.use(cors({
  origin: '*', 
}));

app.use(express.json());

// Example route
app.get('/api/example', (req, res) => {
    res.status(200).json({message: 'Hello from backend!', success: true});
});

const PORT = 8000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port: ${PORT}`);
});