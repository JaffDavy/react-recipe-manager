## React Recipe Manager

## Overview
React Recipe Manager is a frontend application built with React, Tailwind CSS, and Context API that allows users to create, manage, search, and favorite recipes.

The application stores all recipe data in the user's browser using local storage, ensuring that recipes remain available between sessions without requiring a backend service.

The project focuses on state management, component architecture, and creating a responsive user experience using React's Context API.

## Problem Statement
Many users collect recipes from different sources but lack a simple way to organize and manage them in one place.

This project was created to provide an easy-to-use recipe management system where users can create, update, delete, search, and favorite recipes while maintaining all data locally in their browser.

## Project Goals
- Build a React application using Context API.
- Implement full CRUD operations for recipes.
- Allow users to search recipes efficiently.
- Enable users to favorite and unfavorite recipes.
- Store application data using browser local storage.
- Create a responsive and user-friendly interface.

## Technical Architecture

## Frontend
The application was built using React and Vite.
Responsibilities:
- User interface rendering
- State management
- Form handling
- Search functionality
- Local storage integration
- State Management
- React Context API is used to manage application state globally.
- The Context API handles:
- Recipe creation
- Recipe updates
- Recipe deletion
- Favorites management
- Search functionality

## Data Storage

All application data is stored in the browser's local storage.
This allows users to retain their recipes even after refreshing or reopening the application.

## Tech Stack

- React
- Vite
- Tailwind CSS
- State Management
- Context API
- Storage
- Local Storage

## Tools
- Git
- GitHub
- VS Code

## Features

Recipe Management
- Create recipes
- View recipe list
- Update recipes
- Delete recipes
- Search Functionality
- Search recipes by name
- Real-time filtering of recipe results
- Favorites System
- Mark recipes as favorite
- Remove recipes from favorites
- Recipe Details
- View detailed recipe information
- Right-side drawer component for displaying recipe details
- Data Persistence
- Store recipes in local storage
- Automatically restore saved recipes on application reload
- Responsive Design
- Mobile-friendly interface
- Tablet support
- Desktop support

## Folder Structure
src/
├── assets/
├── components/
│ ├── RecipeCard.jsx
│ ├── RecipeDrawer.jsx
│ └── RecipeForm.jsx
├── context/
├── App.jsx

## Installation

Clone Repository
git clone https://github.com/JaffDavy/react-recipe-site.git
Install Dependencies
npm install
Start Development Server
npm run dev

## Challenges Faced
State Management Challenge
Managing application state across multiple components became increasingly complex as new features were added.
To solve this problem, React Context API was implemented to centralize recipe data and provide a single source of truth throughout the application.
UI Development Challenge
Designing a right-hand-side recipe drawer that could display recipe details while maintaining a clean and responsive user experience required careful component organization and state management.
Debugging Experience
Synchronizing Context API state with browser local storage occasionally caused inconsistencies during updates and deletions. This was resolved by ensuring local storage updates occurred whenever the application state changed.

## What I Learned
Technical Lesson
I gained hands-on experience using React Context API for global state management and learned how to build a scalable component structure for React applications.
Workflow Lesson
I improved my ability to break large features into smaller reusable components, making the codebase easier to maintain and extend.
Code Organization Lesson
I learned the importance of separating UI components, state management, and business logic into dedicated folders to improve project readability and maintainability.

## Future Improvements
Add recipe categories
Add recipe tags
Upload custom recipe images
Add sorting options
Add ingredient filtering
Add user authentication
Integrate a backend API for cloud storage

## My Role
Frontend Developer
Responsibilities:
UI development
State management using Context API
Local storage implementation
Responsive design
Testing and debugging

Live Demo
https://react-recipe-site-git-development-jaffdavys-projects.vercel.