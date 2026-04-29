# TikTok Hook

## Installation

### Step 1: Install Tampermonkey
Make sure you have the [Tampermonkey](https://www.tampermonkey.net/) extension installed in your browser (Chrome, Edge, or Firefox).

### Step 2: Enable Local File Access (CRITICAL)
Since this script uses a local file `favorites.js`, you must allow the extension to access local links:
1. Open your browser **Extensions** page (`chrome://extensions` or `edge://extensions`).
2. Find **Tampermonkey** and click **Details**.
3. Toggle ON **"Allow access to file URLs"**.

### Step 3: Install the Script
Click the link below and press the **Install** button in the opened tab:
[Install TikTok Hook](https://raw.githubusercontent.com/Marksmanship256/ttk-hook/main/tiktok-hook.user.js)

---

## Configuration

After installation, you need to set up your local favorites file:

1. **Download `favorites.js`** from this repository and save it on your computer (e.g., `C:/Scripts/favorites.js`).
2. **Set your local path**:
   - Open Tampermonkey Dashboard.
   - Edit the **TikTok Hook** script.
   - Find this line: 
     `// @require file:///D:/Hub/ttk/favorites.js`
   - Change it to your actual file path (e.g., `// @require file:///C:/Scripts/favorites.js`).
3. **Set your API/Fetch URL**:
   - Open your local `favorites.js` file.
   - Find `const fetchUrl = '';` and insert your actual link.
4. **Save and Refresh**: Refresh your TikTok page to apply changes.

---

## Updates
The script will automatically check for updates from this repository. Your local `favorites.js` will remain untouched during updates.