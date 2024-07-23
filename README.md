# Amazon-Clone-Web-Application

This is a simple clone of Amazon's web application built using HTML, CSS, JavaScript, NodeJs, Express.js and EJS templates. The project includes dynamic content rendering and serves static files.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/) or [MariaDB](https://mariadb.org/)
- [phpMyAdmin](https://www.phpmyadmin.net/)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/Aarzo24/Amazon-Clone-Web-Application.git
    cd Amazon-Clone-Web-Application
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up the database**:
    - Start your MySQL or MariaDB server.
    - Create a new database, e.g., `amazon_clone`.
    - Use phpMyAdmin or the MySQL command line to create the database and necessary tables. For example:
      ```sql
      CREATE DATABASE amazon_clone;
      USE amazon_clone;
      -- Add your table creation SQL here
      ```

4. **Configure database connection**:
    - Create a `.env` file in the root directory of your project and add the following (replace with your actual database credentials):
      ```
      DB_HOST=localhost
      DB_USER=your_username
      DB_PASS=your_password
      DB_NAME=amazon_clone
      ```

5. **Start the server**:
    ```sh
    npm start
    ```
    This will start your Express server on `http://localhost:3000`.

### Accessing the Application

Once your server is running, visit `http://localhost:3000` in your browser to see the application in action.

### Deployment to a Production Environment (Optional)

If you want to deploy this application to a production environment using Apache or another web server, you may need to set up a reverse proxy. This step is optional and primarily for users who want to make the application accessible on a public server.

#### Deploying Static Files to GitHub Pages

1. **Create a `gh-pages` branch**:
    ```sh
    git checkout --orphan gh-pages
    git rm -rf .
    ```

2. **Add your static files (optional)**:
    - Create an `index.html` file and include any other static files you want to serve.

3. **Push to GitHub**:
    ```sh
    git add .
    git commit -m "Deploy static files to GitHub Pages"
    git push origin gh-pages
    ```

### Additional Information

- For more details on running and deploying the application, refer to the official [Express.js documentation](https://expressjs.com/).
- For help with database setup, refer to the [MySQL documentation](https://dev.mysql.com/doc/) or the [phpMyAdmin documentation](https://docs.phpmyadmin.net/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
