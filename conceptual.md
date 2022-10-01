### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

- What is a single page application?

A single page application is a single page where a lot of information stays the same and only a few pieces need to be updated at a time.

- What are some differences between client side and server side routing?

A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page

A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether.

- What are two ways of handling redirects with React Router? When would you use each?

Redirect and useHistory

- What are two different ways to handle page-not-found user experiences using React Router? 

redirect the user to a different page when they try to go to a page that doesn't exist

- How do you grab URL parameters from within a component using React Router?

use React Router's useParams Hook

- What is context in React? When would you use it?

Context is primarily used when some data needs to be accessible by many components at different nesting levels

- Describe some differences between class-based components and function
  components in React.

The class component, a stateful/container component, is a regular ES6 class that extends the component class of the React library.

Functional components are simply JavaScript functions. Before the advent of hooks in React 16.8, they were mostly referred to as stateless or presentational components because then they only accepted and returned data to be rendered to the DOM.

- What are some of the problems that hooks were designed to solve?

As the ultimate purpose of hooks is to simplify the actual logic, React provides only a reduced set, with the flexibility to respond to various situations in the lifecycle of an application and the possibility to build our own as well.

