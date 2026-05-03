const express = require('express');
const {spawn} = require('child_process');
const fs = require('fs');

const app = express();
const PORT = 7771;

const CONFIG = {
  videoFilter: 'scale=-1:min(1370\\,ih)',
  nircmdPath: 'C:/PATH_programs/nircmd.exe'
};

app.use(express.json());

/**
 * Checks if NirCmd exists at the specified path
 */
function checkNirCmd() {
  if (fs.existsSync(CONFIG.nircmdPath)) {
    console.log('\x1b[32m[System]\x1b[0m NirCmd found and ready.');
  } else {
    console.log('\x1b[31m[Warning]\x1b[0m NirCmd NOT found at:', CONFIG.nircmdPath);
    console.log('\x1b[31m[Warning]\x1b[0m Window auto-focus features will not work.');
  }
}

/**
 * Logic to force the window to the foreground
 */
function runWindowFocusLogic(fullTitle) {
  // 1. Make the window "Always on Top"
  spawn(CONFIG.nircmdPath, ['win', 'settopmost', 'title', fullTitle, '1']);
  // 2. Activate/Focus the window
  spawn(CONFIG.nircmdPath, ['win', 'activate', 'title', fullTitle]);

  // After 3 seconds, remove "Always on Top" so it's a normal window
  setTimeout(() => {
    spawn(CONFIG.nircmdPath, ['win', 'settopmost', 'title', fullTitle, '0']);
  }, 3000);
}

app.post('/play', (req, res) => {
  const {streamUrl, elementId} = req.body;

  if (!streamUrl) {
    return res.status(400).send('Stream URL missing');
  }

  const titleTag = elementId || 'TikTok Live';
  const windowTitle = `[FFPLAY] TikTok - ${titleTag}`;

  console.log(`[FFplay] Launching: ${titleTag}`);

  const ffplay = spawn('ffplay', [
    '-an',
    '-window_title', windowTitle,
    '-vf', CONFIG.videoFilter,
    streamUrl
  ], {
    detached: true,
    stdio: 'ignore'
  });

  ffplay.unref();

  // Polling logic - tries to focus the window at different intervals
  // as FFplay might take 1 to 4 seconds to actually open the window
  const poll = () => runWindowFocusLogic(windowTitle);

  // setTimeout(poll, 1000);
  // setTimeout(poll, 2500);
  // setTimeout(poll, 4000);

  res.send('FFplay command sent');
});

app.listen(PORT, () => {
  console.log('=========================================');
  console.log(` Server: http://localhost:${PORT}`);
  checkNirCmd(); // Run the check when server starts
  console.log('=========================================');
});