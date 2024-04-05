# Project Readme

#### By Michael Kimani

## Description

This project is a Node.js application built with Express and MongoDB for managing grades, teachers, and users. It provides RESTful APIs for CRUD operations on each entity. The project uses React Router for client-side routing.

## Prerequisites

Make sure you have Node.js and MongoDB installed on your system.

## Installation

1. Clone the repository:

   > git clone <https://github.com/mikesternk/MongoDB-SBA>

2. Install dependencies:

   > cd ./MongoDB/04-03-2024 <br>
   > npm install

## Usage

1. Start the server:

   > npm start

2. The server will be running on http://localhost:5001.

## Endpoints

- **Grades**:
  - `GET /grades`: Get all grades
  - `POST /grades`: Create a new grade
  - `GET /grades/:id`: Get grade by ID
  - `PUT /grades/:id`: Update grade by ID
  - `DELETE /grades/:id`: Delete grade by ID
- Teachers:
  - `GET /teachers`: Get all teachers
  - `POST /teachers`: Create a new teacher
  - `GET /teachers/:id`: Get teacher by ID
  - `PUT /teachers/:id`: Update teacher by ID
  - `DELETE /teachers/:id`: Delete teacher by ID
- Users:
  - `GET /users`: Get all users
  - `POST /users`: Create a new user
  - `GET /users/:id`: Get user by ID
  - `PUT /users/:id`: Update user by ID
  - `DELETE /users/:id`: Delete user by ID

## Database

The application connects to a MongoDB database hosted on MongoDB Atlas. You may need to provide your own MongoDB connection URL in the code.
