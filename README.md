# Todo-Frontend

1. Start by configuring the backend and identifying the required functionality for the app.
    - In this app, the functionalities include:
        - Adding a new Todo description and the status of the Todo
        - Editing a Todo
        - Deleting a Todo
        - Deleting all Todos

2. Once the backend is complete, move on to the frontend. Using the backend functionality, create a web design that can accommodate the required features.

3. Don't spend too much time on design. For color theme inspiration, visit color palette sites like `coolers`, and start building your low-fidelity and high-fidelity frameworks on a design website such as FIGMA.

4. Once the design is established, work on your component tree to define the app structure.
    - My Design: [Figma Design](https://www.figma.com/design/pn84T8sza80kq7uWCstdxJ/TO-DO-lIST?node-id=0-1&t=5QeesTilwdSeMokV-1)

## To Start This Project:
1. Install Next.js by following the steps in this link: [Next.js Installation](https://nextjs.org/docs/getting-started/installation)
    - Ensure the project uses TypeScript and Tailwind.
    - To run the terminal, enter this command: `npm run dev`

2. Build your project according to the design and component tree you have established.

### Tips
- If there are too many props being passed, use the UseContext hook to share data across all components.
- For debugging, use `console.log`.
    - Consider downloading the extensions `Console Ninja` and `Code Spell Checker` to make development easier.

## Running Instructions
1. To start the app, enter these commands in the terminal: `npm i` and then `npm run dev` (Ensure that your terminal is directed to the correct directory: Todo-Frontend/todolist). This runs the frontend of the project.
2. Go to the backend repository and enter this terminal: `npm run dev`. This will run the backend.
3. Ensure that both frontend and backend do not run on the same port.
4. You can now start using the app.

Note: started on the authentication side of the application to secure the app and allow only users with an account to use it,