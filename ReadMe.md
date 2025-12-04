# Task Tracker CLI

A lightweight and efficient command-line task manager built with Node.js.  
Use this tool to **add**, **update**, **delete**, **list**, and **change the status** of tasks directly from your terminal.

The application stores tasks in a local `tasks.json` file and can be installed globally using `npm link`, allowing you to run commands like:
```
task-cli add "Buy groceries"
task-cli list
```

---

## Features

- Add new tasks
- Update existing tasks
- Delete tasks by ID
- Mark tasks as **done** or **in-progress**
- List tasks:
  - All tasks
  - Only `todo` tasks
  - Only `in-progress` tasks
  - Only `done` tasks
- JSON file-based storage
- Clean and readable CLI output
- Install globally as a command (`task-cli`)

---

## Installation

### Clone the repository

```
git clone https://github.com/WesamAboAqel/task-tracker.git
cd task-tracker
```

### Install dependencies

(This project does not require additional dependencies.)

### Link the CLI globally

```
npm link
```

You can now run:

```
task-cli
```

from anywhere on your system.

---

## Usage

### Add a new task

```bash
task-cli add "Buy milk"
```

### List all tasks

```bash
task-cli list
```

### List tasks by status

```bash
task-cli list todo
task-cli list in-progress
task-cli list done
```

### Update a task description

```bash
task-cli update 3 "Clean the house"
```

### Delete a task

```bash
task-cli delete 2
```

### Mark a task as done

```bash
task-cli mark-done 4
```

### Mark a task as in-progress

```bash
task-cli mark-in-progress 1
```

---

## File Structure

```
task-tracker-cli/
│
├── app.js          # Main CLI logic
├── tasks.json      # Local task storage
├── package.json    # CLI configuration and bin setup
└── README.md       # Project documentation
```

---

## How It Works

* Tasks are stored in `tasks.json`
* Each task contains:

  * `id`
  * `description`
  * `status` (`todo`, `in-progress`, `done`)
  * `createdAt`
  * `updatedAt`
* Commands are parsed using `process.argv`
* File operations use Node.js `fs` module

---

## Example Output

```
Description: Buy milk         | Status: todo        | ID: 1
Description: Clean desk       | Status: in-progress | ID: 2
Description: Study JavaScript | Status: done        | ID: 3
```

---

## Future Improvements

* Add colored CLI output (chalk)
* Add sorting options
* Add tagging system
* Add due dates
* Convert into a REST API (Express.js)
* Add database support (SQLite / PostgreSQL)
* Publish as an npm package

---

## License

MIT License

---

## Contributing

Contributions, issues, and suggestions are welcome!
