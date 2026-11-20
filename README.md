# AuthNest

**Student ID:** C243491

**Project Title:** AuthNest – A Secure User Authentication and Navigation Application Using React and Firebase.

## Project Description

AuthNest is a React-based web application designed to provide a simple and secure user authentication experience. It allows users to create accounts, log in, log out, and navigate between different pages. The application uses Firebase Authentication for user management and React Router for smooth navigation and protected page access.

## Technologies Used

- React.js
- React Router DOM
- Firebase Authentication
- JavaScript
- CSS
- Vite

## Features

- Home Page
- User Registration
- User Login
- Dashboard Page
- Profile Page
- Navigation Bar
- Email and Password Authentication
- Logout Functionality
- Protected Routes
- Authentication State Persistence

## Pages and Routes

| Page | Route | Access |
|---|---|---|
| Home | `/` | Public |
| Login | `/login` | Public |
| Register | `/register` | Public |
| Dashboard | `/dashboard` | Protected |
| Profile | `/profile` | Protected |

## Authentication System

AuthNest uses Firebase Authentication to manage user accounts.

- New users can register using email and password.
- Registered users can log in.
- Logged-in users can log out.
- Authentication status is monitored using `onAuthStateChanged()`.

## Protected Route System

The Dashboard and Profile pages are accessible only to authenticated users. If an unauthenticated user tries to access these pages, they are redirected to the Login page.

## React Concepts Used

- BrowserRouter
- Routes and Route
- Link
- useNavigate
- Navigate
- ProtectedRoute
- useState
- useEffect
- useContext
- Conditional Rendering

## Conclusion

AuthNest demonstrates the implementation of React Routing and Firebase Authentication in a simple web application. This project provides practical experience in page navigation, user authentication, protected routes, and authentication state management.
