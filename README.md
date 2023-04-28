# TodoList-React: With Functionality 

### Live Link :[https://delightful-madeleine-a6bd53.netlify.app/](https://delightful-madeleine-a6bd53.netlify.app/)

### Introduction:

- Added UI of practical-2.
- Added functionality for adding Todos.
- Added functionality for marking Todos done & undone.
- On new Day,older Todos will get automatically discarded.
- Used localstorage for storing data.
- Added delete task functionality


### How to Use?

- Click ``+`` to Add Todos, ``Input field`` will be displayed and autofocused.
- Write Todo and press ``Enter`` to add it at the end of the list.
- Pressing ``Enter`` for empty Todo or Todo with spaces only , Alert will be displayed.
- Press ``ESC`` for closing input field and showing ``+`` button back.
- You can mark Todo as done or undone by clicking on right side field.
- Todos will get discarded on each new day.
- Current day and date is displayed at the top.
- List is scrollable ,dateHeader is sticky at top.

- ``If Input's length is greater than 25, overflow ellipsis is applied , and by hovering over the task you can see the whole task``


### Components:
 - There are Four components:
    - DateHeader: for diplaying Date and day at top.
    - TodoList: List of all the Todos will get displayed.
    - AddTodo: Adding Todos at the end of the List
    - Task: two kinds of tasks, completed and uncompleted are displayed.

### Folder Structure:

        .
        ├── index.html
        ├── package.json
        ├── package-lock.json
        ├── src
        │   ├── App.css
        │   ├── App.jsx
        │   ├── Assets
        │   │   ├── checkedTask.png
        │   │   ├── favicon.ico
        │   │   ├── No_Task.png
        │   │   ├── TodoList_UI.png
        │   │   └── uncheckedTask.png
        │   ├── Components
        │   │   ├── AddTodo
        │   │   │   ├── AddTodo.jsx
        │   │   │   └── AddTodo.module.css
        │   │   ├── DateHeader
        │   │   │   ├── DateHeader.jsx
        │   │   │   └── DateHeader.module.css
        │   │   ├── Task
        │   │   │   ├── CheckedTask.jsx
        │   │   │   ├── Task.module.css
        │   │   │   └── UncheckedTask.jsx
        │   │   └── TodoList
        │   │       ├── TodoList.jsx
        │   │       └── TodoList.module.css
        │   └── main.jsx
        └── vite.config.js


### Git Strategy
- There are five Branches 
    - main
    - dev
    - feature/UI
    - feature/functionality
    - feature/refactor

- feature branches will be merged into dev.
- dev will be merged into main.

### Snapshot

![SnapShot of practical](./client/src/Assets/snapshot.png)