# E-commerce Back End Starter Code
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

 ShopConnect is a back-end application for an e-commerce website that leverages the latest technologies to provide a robust and efficient platform. With ShopConnect, internet retail companies can compete with other e-commerce businesses by having a reliable and feature-rich back end.

## Description

This project utilizes Express.js as the framework for building the API and Sequelize as the Object-Relational Mapping (ORM) tool to interact with a MySQL database. By following the provided acceptance criteria, you can set up and run the application smoothly.

## Table of Contents

 - Installation
 - Usage
 - API Routes
 - License
 - Walkthrough Video link
 - Contributing
 - Screenshots
 - Questions

## Installation

To install the Shopconnect application, please follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the project's root directory.
3. Run the command npm install to install the required dependencies.
4. If you want to populate data into database for testing - Run the command: source db/schema.sql;
and then npm run seed
5. Run the command node server.js to start the application
6. Open Heroku to test the application.

## Usage

1. To start using the DepartmentTracker application, please follow these steps:
2. Edit the .env file by adding your DB_USER and DB_PASSWORD.
3. Navigate to the project's root directory and Open the integrated terminal with server.
4. Run the command node server.js to start the application.

## API Routes
ShopConnect provides the following API routes:

- GET /api/categories: Retrieves all categories along with their associated products.

- GET /api/categories/:id: Retrieves a single category by its ID along with its associated products.

- POST /api/categories: Creates a new category.

- PUT /api/categories/:id: Updates a category by its ID.

- DELETE /api/categories/:id: Deletes a category by its ID.

- GET /api/products: Retrieves all products along with their associated category and tags.

- GET /api/products/:id: Retrieves a single product by its ID along with its associated category and tags.

- POST /api/products: Creates a new product.

- PUT /api/products/:id: Updates a product by its ID.

- DELETE /api/products/:id: Deletes a product by its ID.

- GET /api/tags: Retrieves all tags along with their associated products.

- GET /api/tags/:id: Retrieves a single tag by its ID along with its associated products.

- POST /api/tags: Creates a new tag.

- PUT /api/tags/:id: Updates a tag by its ID.

- DELETE /api/tags/:id: Deletes a tag by its ID.

Use a tool like Insomnia Core to test the API routes and perform CRUD operations on the database.

## License

This project is licensed under the MIT .

## Walkthrough Video link


## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your contribution.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request explaining your changes.

## Screenshots

## Questions
If you have any questions about the repo, please open an issue or contact me at anjualfino@gmail.com. 
