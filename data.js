// all cheatsheet data
// each entry has: title, category, description, and code
// categories: git, terminal, javascript, css
var cheatsheetData = [
  {
    title: "Git Clone Repository",
    category: "git",
    description: "Clone a remote repository to your local machine",
    code: "git clone https://github.com/username/repo.git",
  },
  {
    title: "Git Commit Changes",
    category: "git",
    description: "Commit staged changes with a descriptive message",
    code: "git commit -m 'Add new feature description'",
  },
  {
    title: "Git Push to Remote",
    category: "git",
    description: "Push your commits to a remote branch",
    code: "git push origin main",
  },
  {
    title: "Git Pull Latest Changes",
    category: "git",
    description: "Fetch and merge the latest changes from remote",
    code: "git pull origin main",
  },
  {
    title: "List Files in Directory",
    category: "terminal",
    description: "Display all files and folders in the current directory",
    code: "ls -la",
  },
  {
    title: "Change Directory",
    category: "terminal",
    description: "Navigate to a different folder",
    code: "cd /path/to/directory",
  },
  {
    title: "JavaScript Array Map",
    category: "javascript",
    description: "Transform each element in an array using a function",
    code: "const doubled = numbers.map(n => n * 2);",
  },
  {
    title: "JavaScript Object Destructuring",
    category: "javascript",
    description: "Extract values from objects into separate variables",
    code: "const { name, age } = person;",
  },
  {
    title: "JavaScript Fetch API",
    category: "javascript",
    description: "Make an HTTP request to fetch data from an API",
    code: "fetch('https://api.example.com/data')\n  .then(res => res.json())\n  .then(data => console.log(data));",
  },
  {
    title: "CSS Flexbox Container",
    category: "css",
    description: "Create a flexible container that layouts children in a row",
    code: ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
  },
  {
    title: "CSS Grid Layout",
    category: "css",
    description: "Create a responsive grid layout for organizing content",
    code: ".grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}",
  },
  {
    title: "CSS Media Query",
    category: "css",
    description: "Apply styles that only work on mobile screens",
    code: "@media (max-width: 768px) {\n  .responsive {\n    font-size: 14px;\n  }\n}",
  },
  {
    title: "Print Working Directory",
    category: "terminal",
    description: "Show the current directory path",
    code: "pwd",
  },
  {
    title: "Create Directory",
    category: "terminal",
    description: "Create a new folder",
    code: "mkdir folder-name",
  },
  {
    title: "Remove File",
    category: "terminal",
    description: "Clear the terminal screen",
    code: "clear",
  },
  {
    title: "Git View Status",
    category: "git",
    description:
      "Check the current state of your repository including staged and unstaged changes.",
    code: "git status",
  },
  // --- SQL COMMANDS ---
  {
    title: "SQL Select All",
    category: "sql",
    description: "Fetch all columns and rows from a specific table.",
    code: `SELECT * FROM table_name;`,
  },
  {
    title: "SQL Filter Results",
    category: "sql",
    description: "Retrieve rows that meet specific conditions.",
    code: `SELECT * FROM users
WHERE age >= 18 AND status = 'active';`,
  },
  {
    title: "SQL Insert Record",
    category: "sql",
    description: "Add a new row of data to a table.",
    code: `INSERT INTO products (name, price)
VALUES ('Laptop', 999.99);`,
  },
  {
    title: "SQL Update Data",
    category: "sql",
    description: "Modify existing records in a table.",
    code: `UPDATE users
SET email = 'new@example.com'
WHERE id = 1;`,
  },
  {
    title: "SQL Inner Join",
    category: "sql",
    description: "Combine rows from two tables based on a related column.",
    code: `SELECT orders.id, users.name
FROM orders
INNER JOIN users ON orders.user_id = users.id;`,
  },
  {
    title: "React useState Hook",
    category: "react",
    description: "Manage state inside a functional component using useState",
    code: "const [count, setCount] = useState(0);",
  },
  {
    title: "React useEffect Hook",
    category: "react",
    description: "Run side effects like fetching data when component mounts",
    code: "useEffect(() => {\n  fetchData();\n}, []);",
  },
  {
    title: "React Props",
    category: "react",
    description:
      "Pass data from parent component to child component using props",
    code: "function Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}",
  },
  {
    title: "React Map List",
    category: "react",
    description: "Render a list of items dynamically using the map function",
    code: "fruits.map((fruit) => (\n  <li key={fruit}>{fruit}</li>\n));",
  },
  {
    title: "React Conditional Rendering",
    category: "react",
    description: "Show or hide elements based on a condition in React",
    code: "{isLoggedIn ? <h2>Welcome!</h2> : <h2>Please log in.</h2>}",
  },
  {
    title: "React Custom Hook",
    category: "react",
    description:
      "Create a reusable custom hook to share logic across components",
    code: "function useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  useEffect(() => {\n    window.addEventListener('resize', () =>\n      setWidth(window.innerWidth));\n  }, []);\n  return width;\n}",
  },
];
