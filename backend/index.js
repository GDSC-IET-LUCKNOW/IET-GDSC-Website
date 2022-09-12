// * This is the starting point of our server.
// * This is how we import external modules/libraries or other JS files using built-in "require" function.
const express = require('express');
const DummyRoutes = require('./routes/Dummy');

// * Creating an Express App/Server
const app = express();

/**
 * * These lines are important, they are used to parse the body(data) coming from a request(client).
 * * NOTE: express.json and express.urlencoded are middleware functions.
 * ! You can ignore this for now, but it is important.
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ? How to define routes? (1)
/**
 * * NOTE: You can use (these are most common ones)
 * * app.get
 * * app.post
 * * app.put
 * * app.patch
 * * app.delete
 */
app.get('/', (_req, res) => {
  res.send('Hello World!');
});

// ? How to define routes? (2) - Using Express Router for better code splitting
app.use('/api/dummy', DummyRoutes);

// * This will start the server and listen for requests on the port 5000.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
