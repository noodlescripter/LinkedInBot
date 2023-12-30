const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const {exec} = require('child_process');
const {info, log, error} = require('console');
const app = express();


/* Server */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.post('/userCredentials', (req, res) => {
  const {userEmail, userPassword, jobNames, phoneNumber} = req.body;
  const workingDir = '../CypressLinkedInBot'
  const command = 'npm run testOnChrome'
  const options = {
    cwd: workingDir
  }
  try {
    const information = `
var UserInformation = {
    information: {
        username: "${userEmail}",
        password: "${userPassword}",
        phoneNumber: "${phoneNumber}",
    },
    jobNames: "${jobNames}"
};

module.exports = UserInformation;
    `;

    fs.writeFileSync('../CypressLinkedInBot/UserInfo.js', information, 'utf-8');
    res.status(201).send('User credentials saved successfully');
    exec(command, options, (error, stdout, stderr) => {
      if (error)
        return;
      if (stderr)
        return;
      console.log(stdout);
    })
  } catch (error) {
    console.error("Failed to create the file:", error);
    res.status(500).send('Internal Server Error');
  }
});

const port = process.env.PORT || 2000; // Adjust the port if needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
