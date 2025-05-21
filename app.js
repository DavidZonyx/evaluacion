const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir recursos estáticos de /public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas explícitas (opcional, ya cubierto por static)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/about.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor arrancado en http://localhost:${PORT}`);
});
