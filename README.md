# Superstore
Superstore is an e-commerce backend built with object relational mapping. API routes allow access to categories, products, and tags.

Demo video at (link here)

![Superstore Screenshot](./images/screenshot.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Technologies](#technologies)
- [Credits](#credits)
- [Questions](#questions)

## Installation

Install MySQL on your machine. Use "npm install" to install required modules for this application. Create your own .env file add add your MySQL credentials. Create database by running "SOURCE db/schema.sql". Seed by running "npm run seed". Run "node server" and enter a url listed in the Usage section. 

## Usage

CRUD operations can be done by using the following routes starting with http://localhost:3001/api/
- CREATE: POST "categories" "products" "tags"
- READ: GET "categories" "category/:id" "products" "products/:id" "tags""tags/:id"
- UPDATE: PUT "categories/:id" "products/:id" "tags/:id"
- DELETE: DEL "categories/:id" "products/:id" "tags/:id"

## License

This project is licensed under the MIT license.

![MIT Badge](https://img.shields.io/npm/l/f)

## Contributions

Fork the project and create a pull request. Let me know how you think you can contribute!

## Technologies

Created with Express.js, MySQL, MySQL2, Sequelize, Dotenv, Insomnia, and Node.js.

## Credits

Created by Joshua Schermann

## Questions

Post an issue if you see a bug or suggested improvement.