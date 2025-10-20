# Data-Table
A lightweight, flexible data table for displaying and interacting with tabular data in web projects. This repository contains a small, dependency-free JavaScript table implementation with common features such as sorting, filtering, pagination, and row selection. The project is intentionally simple and easy to customize or extend.

![Screenshot data table project](Selected%20Mordad%2009%201404%2010%3A30%3A41.png)





---

## Features

* Sorting on columns
* Client-side filtering / search
* Pagination (configurable page size)
* Row selection (single / multiple)
* Simple styling in `css/` and behavior in `js/`
* Minimal dependencies — works by opening `index.html` or serving the folder with any static server

---

## Contents

```
/data-table
  ├─ css/           # styles for the table and demo pages
  ├─ js/            # table implementation and example initialization
  ├─ index.html     # demo / example usage
  ├─ detail.html    # example detail view
  └─ README.md      # this file
```

---

## Quick start

### 1. Clone the repo

```bash
git clone https://github.com/thisalireza/data-table.git
cd data-table
```

### 2. Open locally

You can simply open `index.html` in your browser for a quick demo.

---

## Usage (example)

The repository includes a demo initialization in `js/`. The table is built from a JavaScript array or a JSON source — open `index.html` and inspect the example to see how data and columns are provided.

A minimal usage pattern looks like:

```html
<!-- include CSS -->
<link rel="stylesheet" href="css/style.css">
<!-- include JS -->
<script src="js/data-table.js"></script>

<div id="my-table"></div>
<script>
  // example: create table from an array of objects
  const data = [
    { id: 1, name: 'Alice', score: 92 },
    { id: 2, name: 'Bob', score: 85 }
  ];

  // check the demo file for the actual init function name and options
  // DataTable.init('#my-table', { data, columns, sortable: true, pageSize: 10 });
</script>
```

---

## Customization

* Edit CSS in `css/` to match your design system
* Configure columns, sorting and pagination in the JS demo code
* Replace the demo data with a fetch call to load JSON from an API or server

---

## Development

* Make small, focused commits
* Add examples in `index.html` or create new demo pages
* Open an issue or a pull request if you want to propose features or fixes

---

## License

This project currently has no license file. If you want to make it open-source, consider adding an OSI-approved license such as MIT by creating a `LICENSE` file.

---

## Author

Repository: `thisalireza/data-table` — created as a small and practical data-table example for front-end projects.

If you want me to adapt this README to include exact API names, config options, or code snippets taken from the repo source files, I can update it to be more specific.

