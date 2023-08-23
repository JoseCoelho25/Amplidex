# Amplidex - Pokémon Web Scraper and Database Seeder

Amplidex is a powerful web scraping tool designed to retrieve data about Pokémon from Bulbapedia. This application automates the process of gathering information about various Pokémon species and stores it in a database. It utilizes technologies like Prisma, GraphQL, Docker, and TypeScript to ensure efficient data handling and seamless deployment.

## Features<p>
- Web Scraping: Amplidex performs web scraping on Bulbapedia, extracting comprehensive details about Pokémon species, including their names, types, abilities, evolutions, stats, and more.

- Data Storage: The scraped data is seamlessly stored in a database using Prisma, allowing for easy retrieval and manipulation of Pokémon information.

- GraphQL API: Amplidex offers a GraphQL API that enables users to query and retrieve Pokémon data based on various criteria. This API provides a flexible and efficient way to access the stored information.

- Efficient Seeding: The application is equipped with a seeding mechanism that populates the database with the scraped Pokémon data. This ensures that the database is always up-to-date with the latest Pokémon information.

- Docker Support: Amplidex can be containerized using Docker, making it simple to deploy and manage the application across different environments without worrying about compatibility issues.

## Installation and Setup<p>
1. Clone the Repository: Begin by cloning the Amplidex repository to your local machine:<p>
<code>git clone https://github.com/josecoelho25/amplidex.git</code><p>
2. Install Dependencies: Navigate to the project directory and install the required dependencies using npm or yarn:<p>
<code>cd amplidex
npm install</code><p>
3. Generate prima client:<p>
<code>npm run prisma:generate</code><p>
4. With Docker installed and running, execute the following command:<p>
<code>npm run docker:db</code><p>
5. Run this command to initialize the database by creating the necessary schemas and seeding the database using the logic we added to the customSeed.ts file:<p>
<code>npm run db:init</code><p>
6. To start server:<p>
<code>npm run start</code><p>

Then access the server at localhost:3000/graphql and start querying for your Pokemon :)
