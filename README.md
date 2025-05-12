Todo List Application
This is a simple Todo List application built using React. The app allows users to add, delete, edit, and mark tasks as completed. It also supports saving tasks to local storage, so tasks persist even after the page is refreshed.

Features
Add Todo: Add new tasks with a description.

Delete Todo: Remove tasks with a confirmation prompt.

Edit Todo: Edit existing tasks.

Complete Todo: Mark tasks as completed, and toggle visibility of completed tasks.

Local Storage: Automatically saves tasks to the browser’s local storage for persistence.

Tech Stack
Frontend: React, React Icons

State Management: useState, useEffect (React hooks)

UI/Styling: TailwindCSS (optional for additional styling)

Local Storage: Utilizes the browser’s local storage to persist tasks between page reloads.

UUID: For generating unique IDs for each todo.

How to Use
Clone the repository:

git clone https://github.com/yourusername/todo-list-app.git
cd todo-list-app
Install dependencies:
npm install
npm run dev
Start the development server:

bash
Copy
Edit
npm start
Open your browser and visit http://localhost.

Screenshots
Todo List View
Add New Todo: Users can type their task in a textarea and save it by clicking the "Save" button.
![Screenshot 2025-05-12 154843](https://github.com/user-attachments/assets/a489d3ad-b957-43ec-8999-73072ac6598e)


Tasks Display: Each task shows a checkbox to mark completion, and action buttons to delete or edit tasks.
![Screenshot 2025-05-12 154744](https://github.com/user-attachments/assets/16c9851d-1509-4597-a1b7-d29c4def03c4)


Visibility Toggle: Users can toggle between showing or hiding completed tasks.

Example of Todo List Interface:
Completed tasks have a line-through effect and are shown in a red background.
![Screenshot 2025-05-12 154756](https://github.com/user-attachments/assets/36ba8761-8f19-483e-b945-1dc00faf2928)


How it Works
Add Todo: When a user types a todo and clicks "Save", a new todo item is added to the list.

Delete Todo: Clicking the trash icon next to a todo prompts a confirmation dialog, and the todo is removed upon confirmation.

Edit Todo: Clicking the edit icon removes the todo from the list and places its content into the input field for editing.

Mark Complete: The checkbox allows users to mark a todo as completed, toggling between completed (red background, line-through) and incomplete states.

Local Storage: The todos are stored in the browser’s local storage, ensuring they persist even after the page refreshes.

Contributing
Feel free to fork the repository, submit issues, and send pull requests. Contributions are welcome!
