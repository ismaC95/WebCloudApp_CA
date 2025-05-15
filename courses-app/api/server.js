// api/server.js
const express = require('express');
const fs      = require('fs');
const path    = require('path');
const cors    = require('cors');

const app  = express();
const PORT = 4000;                 // backend runs on http://localhost:4000

app.use(express.json());           // read JSON request bodies
app.use(cors());                   // allow the Vite dev-server (port 5173) to call us


const USERS_PATH = path.join(__dirname, 'Users.js');

/** load Users.js and return the array of users */
function loadUsers() {
  delete require.cache[USERS_PATH];
  try   { return require(USERS_PATH); }
  catch { return []; }
}

/** overwrite Users.js with the latest array contents */
function saveUsers(arr) {
  const body = `module.exports = ${JSON.stringify(arr, null, 2)};\n`;
  fs.writeFileSync(USERS_PATH, body, 'utf8');
}

app.post('/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !email || !password) {
    return res.status(400).json({ msg: 'Missing required fields' });
  }

  const users = loadUsers();

  if (users.find(u => u.email === email)) {
    return res.status(409).json({ msg: 'Email already registered' });
  }

  const newUser = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    password          
  };

  users.push(newUser);
  saveUsers(users);

  console.log('✅ wrote user', newUser.email);
  res.status(201).json({ msg: 'Saved', user: { id: newUser.id, firstName } });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Email and password required' });
  }

  const users = loadUsers();
  const user  = users.find(u => u.email === email);

  if (!user) {
    return res.status(404).json({ msg: 'No account with that e-mail' });
  }

  if (user.password !== password) {
    return res.status(401).json({ msg: 'Incorrect password' });
  }

  console.log('🔓 login ok', email);
  res.json({ msg: 'Login OK', user: { id: user.id, firstName: user.firstName } });
});


app.listen(PORT, () =>
  console.log(`User API listening on http://localhost:${PORT}`)
);
