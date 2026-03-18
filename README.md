# Dev Cheatsheet Site

A fast, simple, beautiful cheatsheet reference for developers. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools required.

## Quick Start

1. **Open `index.html`** in your web browser (just double-click it or drag it to your browser)
2. That's it! The site is ready to use.

## Features

✅ **Search** - Find cheatsheets by title or description in real time  
✅ **Filter** - View cheatsheets by category (Git, Terminal, JavaScript, CSS)  
✅ **Copy to Clipboard** - One-click copying of code snippets  
✅ **Responsive** - Works on desktop, tablet, and mobile  
✅ **Lightweight** - No dependencies, fast loading, ~100KB total  
✅ **Easy to Customize** - Just edit `data.js` to add new cheatsheets  

## File Structure

```
index.html      - Main HTML page
style.css       - All styling
script.js       - Search, filter, and copy functionality
data.js         - Array of cheatsheet objects
CONTRIBUTING.md - Guide for adding new cheatsheets
README.md       - This file
```

## How It Works

1. **`data.js`** contains all cheatsheet data as a simple array of objects
2. **`script.js`** handles search, filtering, rendering, and copy-to-clipboard
3. **`style.css`** provides a clean, minimal design
4. **`index.html`** brings it all together

## Adding Cheatsheets

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed instructions.

Quick version: Add a new object to the `cheatsheetData` array in `data.js`:

```javascript
{
    title: "Your Title",
    category: "git",  // or "terminal", "javascript", "css"
    description: "What this does",
    code: "your code here"
}
```

Save and refresh the browser — your new cheatsheet appears instantly!

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). For older browsers, the copy-to-clipboard falls back to a manual copy method.

## Why This Approach?

- **No setup needed** - Open HTML, it works
- **Easy to extend** - Just add objects to `data.js`
- **Easy to understand** - No frameworks, no complex abstractions
- **Fast** - No build process, minimal dependencies
- **Sharable** - Send `index.html` to friends, they can use it immediately
- **Beginner-friendly** - Clean code with comments explaining each function

Enjoy! 🚀
