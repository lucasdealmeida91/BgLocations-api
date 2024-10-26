const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota POST para receber dados de localização
app.post('/location', (req, res) => {
    const { latitude, longitude, deviceName } = req.body;

    if (!latitude || !longitude || !deviceName) {
        return res.status(400).json({ message: 'Dados incompletos!' });
    }

    // Processar os dados como necessário (ex: salvar no banco de dados)
    console.log(`Recebido: Latitude ${latitude}, Longitude ${longitude}, Device ${deviceName}`);

    // Retornar uma resposta de sucesso
    res.status(200).json({ message: 'Localização recebida com sucesso!' });
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
