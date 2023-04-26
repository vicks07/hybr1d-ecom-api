# Ecomm APP

## Steps to execute the application
1. Clone the repository
    
    ```jsx
    git clone [https://github.com/vicks07/hybr1d-ecom-api.git](https://github.com/vicks07/hybr1d-ecom-api.git)
    ```
    
2. Install Node Modules

    ```jsx
    npm install
    ```

3. Setup the environment files

    [sample.env](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c7224ef-c71d-416c-8583-4dbb8171c64f/sample.env)

4. Once the env is setup, we now need to migrate the database. This ensures the tables are created accordingly based on the models

    ```jsx
    npm run set-database-dev
    OR
    npm run set-database-prod
    ```

5. Run the seeder file based on the environment (dev, prod). This should create the basic user types in the database.

    ```jsx
    npm run seed:<dev/prod>
    ```

6. Once all the process has been followed, the application can be started based on the required environment.
    
    ```jsx
    production -->  npm start
    development --> npm run dev
    ```

