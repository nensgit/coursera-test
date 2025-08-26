
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let bookings = [];

app.get('/teachers', (req, res) => {
    res.json([
        { id: 1, name: 'Marko Marković', subject: 'Matematika', rating: 5 },
        { id: 2, name: 'Jovana Jovanović', subject: 'Fizika', rating: 4.8 },
        { id: 3, name: 'Petar Petrović', subject: 'Hemija', rating: 4.9 }
    ]);
});

app.post('/bookings', (req, res) => {
    bookings.push(req.body);
    console.log(req.body);
    res.json({ message: 'Rezervacija uspešna', booking: req.body });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
