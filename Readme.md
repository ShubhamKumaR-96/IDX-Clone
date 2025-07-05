🌟 IDX Clone: React Project Manager
A sleek, full-stack React Project Manager app designed to simplify your development workflow. Create new React apps, explore project structures in a VS Code-like tree view, and (coming soon!) edit file content with ease. 🚀

🎯 Features

Create React Projects: Spin up new React apps with a single API call.
Interactive Tree View: Browse project folder/file structures recursively, with expand/collapse functionality.
File Icon Support: Display icons for JavaScript files (.js) using FaJs from React Icons.
State Management: Seamless integration of Zustand and React Query for efficient data fetching and caching.
Modern UI: Clean, navigable interface styled with flexbox and inline styles.


🗓️ Project Progress Timeline
✅ Day 1: Laying the Foundation

Initialized Express.js backend with versioned API routes (/api/v1).
Set up a /test endpoint to verify server functionality.

✅ Day 2: React Project Creation

Generated unique project IDs using uuid.
Created a service to:
Set up a /projects folder.
Run npx create-react-app . using execPromisified.


Built createProjectController and connected it to API routes.
Fixed folder creation issues by pre-creating the projects/ directory.

✅ Day 3: Project Directory Tree

Utilized directory-tree to fetch full folder/file structures.
Created getProjectTreeService and exposed it via a GET route.
Confirmed JSON tree structure output for frontend use.

✅ Day 4: State Management

Implemented treeStructureStore with Zustand for global state.
Managed projectId and treeStructure state.
Integrated React Query for fetching and caching tree data.
Synced project ID from URL using useParams().

✅ Day 5: Recursive Tree View

Built the Tree component for recursive folder/file display.
Added expand/collapse toggling with arrow icons.
Supported nested folders with recursive rendering.
Styled with inline CSS for clean padding and visibility.

✅ Day 6: File Icon Integration

Created FileIcon component to render icons based on file extensions (.js with FaJs).
Integrated FileIcon into the Tree component for file rows.
Styled file rows with flexbox for a polished UI.


🔧 Tech Stack



Category
Technologies



Frontend
React 19, React Router DOM, Zustand, React Query, React Icons


Backend
Node.js, Express.js


File Handling
directory-tree, uuid, child_process, fs/promises



🚀 Getting Started

Clone the Repository:
git clone <repository-url>


Install Dependencies:
cd idx-clone
npm install


Run the Backend:
cd backend
npm start


Run the Frontend:
cd frontend
npm start


Access the App:Open http://localhost:3000 in your browser to start managing your React projects!



🌈 Future Enhancements

File Editing: Add functionality to edit file content directly in the UI.
More File Icons: Expand FileIcon to support additional file types (e.g., .ts, .css, .json).
Drag-and-Drop: Enable drag-and-drop for reorganizing project structures.
Real-Time Updates: Sync file changes in real-time with WebSocket integration.


🤝 Contributing
We welcome contributions! To get started:

Fork the repository.
Create a feature branch (git checkout -b feat/your-feature).
Commit your changes with clear messages (e.g., feat(ui): add new component).
Push to your branch and open a pull request.


📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

Built with 💻 and ☕ by the IDX Clone Team