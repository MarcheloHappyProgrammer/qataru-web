# Copilot Instructions for the Qataru Web Project

## Overview
This project is a web application built using [Next.js](https://nextjs.org) and follows a structured architecture that emphasizes modularity and reusability. Understanding the architecture is crucial for effective contributions.

## Architecture
- **Components**: The application is divided into reusable components located in the `app/ui/` directory. Key components include `Footer.tsx` and `Navbar.tsx`.
- **Pages**: The main entry point is `app/page.tsx`, which serves as the landing page. Other pages can be added under the `app/` directory.
- **Styles**: Global styles are defined in `app/globals.css`, ensuring a consistent look and feel across the application.

## Developer Workflows
- **Running the Development Server**: Use the following command to start the development server:
  ```bash
  npm run dev
  ```
  This will allow you to view changes live at [http://localhost:3000](http://localhost:3000).

- **Building for Production**: To create an optimized build, run:
  ```bash
  npm run build
  ```

- **Testing**: Ensure to run tests after making changes. Use the command:
  ```bash
  npm test
  ```

## Project Conventions
- **File Naming**: Use PascalCase for component files (e.g., `Footer.tsx`, `Navbar.tsx`).
- **Styling**: CSS modules are preferred for component-specific styles, while global styles are kept in `globals.css`.

## Integration Points
- **API Routes**: Any API routes should be defined in the `pages/api/` directory, following Next.js conventions.
- **State Management**: Use React Context or other state management libraries as needed for global state.

## External Dependencies
- **Next.js**: The core framework for building the application.
- **React**: The underlying library for building UI components.
- **PostCSS**: Used for processing CSS files.

## Communication Patterns
- **Props and State**: Components communicate through props. Ensure to manage state effectively to avoid unnecessary re-renders.
- **Context API**: For global state management, utilize the Context API to avoid prop drilling.

## Examples
- **Creating a New Component**: When creating a new component, ensure to follow the structure of existing components in `app/ui/` and document its usage in the README.
- **Adding a New Page**: To add a new page, create a new file in the `app/` directory and ensure it exports a React component.

## Conclusion
These guidelines should help AI agents and developers quickly understand the structure and conventions of the Qataru web project. For further details, refer to the [Next.js Documentation](https://nextjs.org/docs).