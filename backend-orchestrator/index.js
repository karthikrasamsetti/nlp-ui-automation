// backend-orchestrator/index.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const AI_DIR = path.resolve(__dirname, '../automation-framework/tests/ai-generated');

app.post('/generate-test', async (req, res) => {
  try {
    const { testName, code } = req.body;
    if (!testName || !code) return res.status(400).send({ error: 'testName and code required' });

    const safe = testName.replace(/[^a-z0-9_\-]/gi, '_').toLowerCase();
    const filePath = path.join(AI_DIR, `${safe}.spec.js`);
    await fs.outputFile(filePath, code, 'utf8');

    return res.send({ status: 'saved', path: `automation-framework/tests/ai-generated/${safe}.spec.ts` });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: 'save_failed', details: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend orchestrator listening on ${PORT}`));
