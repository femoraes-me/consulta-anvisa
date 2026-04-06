const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// rota simples para teste
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});