---

## 📘 **students-entry**

A simple Angular application demonstrating CRUD operations (Create, Read, Update) on student records using **NgRx**, Angular Material UI, and **JSON Server** as a mock backend.

---

### 🧠 **Project Overview**

This project allows users to:

* Fetch and list student records
* Add new student records
* Edit existing student records
* Use NgRx for state management
* Demo form & table UI using Angular Material
* Login and Authentication partially implemented

---

## 🚀 **Getting Started**

### 📌 Prerequisites

Before you begin, make sure you have:

* **Node.js & npm** installed (Node >= 14)
* Angular CLI installed globally:

```bash
npm install -g @angular/cli
```

---

## 📦 **Setup & Run**

### 👉 1. Clone Repository

```bash
git clone https://github.com/nakks-007/students-entry.git
```

### 👉 2. Switch to `dev` branch

```bash
git checkout dev
```

This branch contains the Angular frontend work and state management practice using NgRx.

---

## 🛠 **Install Dependencies**

Install project dependencies:

```bash
cd students-entry
npm install
```

---

## 📡 **Run JSON Server (Mock API)**

To start the mock API (using JSON Server), run:

```bash
npm run server
```

This will start JSON Server and expose REST endpoints based on your `db.json`.
Example endpoints:

* `GET /studentsRecords`
* `POST /studentsRecords`
* `PUT /studentsRecords/:id`
* `PATCH /studentsRecords/:id`

📌 This acts as the backend for the frontend application.

---

## ▶️ **Start Angular Frontend**

Start the Angular application:

```bash
npm start
```

or

```bash
npm run start
```

Then open your browser at:

```
http://localhost:4200
```

---

## 📌 **Available Scripts**

| Script           | What it does                  |
| ---------------- | ----------------------------- |
| `npm start`      | Runs the Angular application  |
| `npm run server` | Runs JSON Server mock backend |
| `npm install`    | Installs dependencies         |

---

## 📎 **Features**

✔ List all student records
✔ Search student by ID
✔ Add new student
✔ Edit existing student
✔ State management with NgRx
✔ UI with Angular Material

---

## 📁 Project Structure

```
students-entry/
├── db.json                       # JSON Server mock database
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.guard.ts
│   │   │   └── login.component.ts
│   │   ├── services/
│   │   │   └── students-records.service.ts
│   │   ├── state/
│   │   │   ├── actions/
│   │   │   ├── reducers/
│   │   │   ├── selectors/
│   │   │   └── effects/
│   │   ├── students-table/
│   │   ├── student-records/
│   │   ├── dashboard/
│   │   └── contact-us/
├── proxy.conf.json               # Proxy configuration
├── package.json
└── README.md
```

---

## 🛠 **Developing**

You can modify the Angular components, NgRx state, or JSON Server data to extend functionality.

Because the `dev` branch is the main development branch for the frontend, it’s recommended to run this branch when working locally.

### 🧩 Auth Features

* Login-based access
* Auth service for handling login state
* Route guard protection
* On browser refresh → user is redirected to Login page

### 📌 Behavior

If a user refreshes the browser while on a protected route (e.g., Dashboard):

* Authentication state is cleared (since it’s stored in memory)
* Route Guard blocks access
* User is redirected to the Login page

This ensures protected routes cannot be accessed without authentication.

## 🧠 State Management

NgRx is used for:

* Loading students list
* Adding student records
* Updating student records
* Managing state immutably using reducers
* Handling side effects using Effects

---

## 🔁 Important Behavior

* After successful Add/Update → user is redirected back to list tab
* Date values are normalized for Angular Material Datepicker compatibility
* JSON Server acts as mock REST backend

---

## 📝 Notes

* JSON Server endpoints are proxied via Angular dev server (if proxy is configured).
* Student IDs must be unique for update to work.
* Angular Material Datepicker expects proper date formats (ISO strings).

---

## ❓ Troubleshooting

### ❗ JSON Server 404 Errors

If update calls return 404:

* Confirm your JSON Server is running
* Confirm data path (`http://localhost:3000/api/studentsRecords/ID`)
* Ensure IDs are correctly stored in `db.json`

---

## 🎓 License

This project is for learning purposes.

---
