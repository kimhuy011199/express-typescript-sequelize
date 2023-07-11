# Boilerplate Express Typescript Sequelize

A Node.js API boilerplate built with Express, TypeScript, PostgresQL, Sequelize, Joi, and JsonWebToken.

## Description

This is a boilerplate for building a RESTful API using Node.js and Express. It provides a simple and efficient foundation for creating APIs with CRUD (Create, Read, Update, Delete) operations on resources, validation and authentication.

## Technologies

- Node.js
- Express
- TypeScript
- Sequelize: the ORM (Object-Relational Mapping) for interacting with a database
- PostgreSQL: SQL database
- Joi: for validation
- JsonWebToken: for authentication
- ExpressJS Async Errors: for handling error

## Prerequisites

Before you begin, ensure that you have the following installed:

- Node.js 18 or later
- PostgreSQL

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/kimhuy011199/boilerplate-express-ts-sequelize.git
   ```

2. Install the dependencies:

   ```shell
   npm install
   ```

3. Set up enviroment variables in `.env`:

   ```shell
   POSTGRESQL_HOST=
   POSTGRESQL_USER=
   POSTGRESQL_PASSWORD=
   POSTGRESQL_DATABASE=
   PORT=
   JWT_TOKEN=
   ```

4. Start the development server:

   ```shell
   npm run dev
   ```

   The server should now be running on `http://localhost:8080`.

## API Routes

The API exposes the following routes:

- `POST /tutorials`: Create a new tutorial endpoint.
- `GET /tutorials`: Get all tutorials endpoint.
- `GET /tutorials/:id`: Get a specific tutorial endpoint.
- `PUT /tutorials/:id`: Update a tutorial endpoint.
- `DELETE /tutorials/:id`: Delete a tutorial endpoint.

To use the API, you can utilize tools like Postman or cURL to send requests to the specified endpoints.
