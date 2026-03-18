# Contributing

Thank you for wanting to contribute to the Dev Cheatsheet Site! Adding new cheatsheets is easy.

## How to Add a New Cheatsheet

1. **Open `data.js`** in your text editor
2. **Find the `cheatsheetData` array**
3. **Add a new object** to the array with these fields:

```javascript
{
    title: "Your Cheatsheet Title",
    category: "git",  // or "terminal", "javascript", "css"
    description: "A short description of what this cheatsheet does",
    code: "your code snippet here"
}
```

### Example

```javascript
var cheatsheetData = [
    {
        title: "Git Clone Repository",
        category: "git",
        description: "Clone a remote repository to your local machine",
        code: "git clone https://github.com/username/repo.git"
    },
    // Add your new cheatsheet here!
    {
        title: "Git Create Branch",
        category: "git",
        description: "Create and switch to a new branch",
        code: "git checkout -b my-new-branch"
    }
];
```

## Guidelines

- **Title**: Keep it short and clear (3-5 words typically)
- **Category**: Choose one from: `git`, `terminal`, `javascript`, `css`
- **Description**: 1-2 sentences explaining what the cheatsheet does
- **Code**: Paste the actual command or code snippet. Multi-line code is supported using `\n`

### Multi-line Code Example

```javascript
{
    title: "JavaScript Fetch with Then",
    category: "javascript",
    description: "Make an HTTP request and handle the response",
    code: "fetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));"
}
```

## Testing Your Changes

1. Save your changes to `data.js`
2. Open `index.html` in your browser (just double-click it!)
3. Verify your new cheatsheet appears on the page
4. Test the search and filter features to make sure everything works

## Submitting Your Contribution

1. Fork or clone this repository
2. Make your changes to `data.js`
3. Test locally to ensure it works
4. Create a pull request with a clear title like "Add Git Merge cheatsheet"

That's it! Thank you for contributing to making this resource better for everyone. 🎉
