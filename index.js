const server = require('./server.js');
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
