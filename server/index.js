const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getInspiration } = require('./controller')
const { getSelfCare } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune);
app.get('/api/inspiration', getInspiration);
app.get('/api/selfcare', getSelfCare);

app.post('/api/savegoal', (req, res) => {
    const { goal } = req.body;
  
    fs.appendFile('goals.txt', goal + '\n', (err) => {
      if (err) {
        console.error('Error saving goal:', err);
        res.status(500).send('Error saving your goal');
      } else {
        console.log('Goal saved successfully')
        res.send('Goal saved successfully');
      }
    });
  });


app.listen(4000, () => console.log("Server running on 4000"));
