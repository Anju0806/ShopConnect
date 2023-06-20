# ShopConnect
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

https://drive.google.com/file/d/1PMe0YuS7yMZbIsJlUbmwE_Y0sisYwSeC/view

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your contribution.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request explaining your changes.

## Screenshots

![screenshot1](https://github.com/Anju0806/ShopConnect/assets/126565826/326845ec-2640-42b0-bbf8-ba33943d558d)
![screenshot2](https://github.com/Anju0806/ShopConnect/assets/126565826/385772c5-af20-42c0-9288-c3aedc0bb563)
![screenshot3](https://github.com/Anju0806/ShopConnect/assets/126565826/66512a0f-2ef4-4bc4-aef5-ff38e10c8d73)
![screenshot4](https://github.com/Anju0806/ShopConnect/assets/126565826/b1d0c1d9-d7d3-44de-8431-f56add30dfed)
![screenshot5](https://github.com/Anju0806/ShopConnect/assets/126565826/0172f7e6-002e-4e2e-9c72-cf97a06c656b)
![screenshot6](https://github.com/Anju0806/ShopConnect/assets/126565826/437add12-5f53-4faa-a6fe-6c1cd5f64b90)

## Questions
If you have any questions about the repo, please open an issue or contact me at anjualfino@gmail.com. 
