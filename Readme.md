                                                                     To-Do List Application
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Overview :-

This is a To-Do List application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to add, edit, toggle (complete/incomplete), and delete tasks. It features a simple front-end built with React.js and a backend API powered by Express.js and MongoDB.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                                                                               Installation


 Prerequisites :-

- Node.js (>= 14.x)
- MongoDB (Make sure MongoDB server is running locally)



Clone the Repository :-

git clone https://github.com/your-username/todo-app.git
cd todo-app

 Backend Setup :-

1. Navigate to the server directory:

    cd server

2. Install backend dependencies:

    npm install

3. Start the backend server:

    npm start

 Frontend Setup :-

1. Navigate to the client directory:

    cd client

2. Install frontend dependencies:

    npm install

3. Start the frontend development server:

    npm start

The application should now be running on http://localhost:3000 for the frontend and http://localhost:5000 for the backend API.

Usage  :-

- **Add Task:** Enter a task in the input field and click "Add Task" to create a new task.
- **Edit Task:** Click "Edit" next to a task to change its title. Save the changes by clicking "Save".
- **Toggle Task:** Click the checkbox to mark a task as complete or incomplete.
- **Delete Task:** Click "Delete" next to a task to remove it from the list.

 API Endpoints :-

- **GET /api/tasks** - Retrieve all tasks
- **POST /api/tasks** - Create a new task
- **PUT /api/tasks/:id** - Update a task by ID
- **DELETE /api/tasks/:id** - Delete a task by ID

 Contributing :-

This Project is Made by Shivam Pandey.

 Acknowledgements :-

- MongoDB
- Express.js
- React.js
- Node.js
