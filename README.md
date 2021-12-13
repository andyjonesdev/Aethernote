# Welcome to Aethernote！



Want to clone and run Aethernote locally？Here's how!
1. Clone Aethernote in your desired directory by running the command: ```git clone https://github.com/andyrose507/Aethernote```.
2. Install necessary dependencies by running ```npm install``` in both the 'frontend' and 'backend' directories.
3. Using the example in .env.example, create a .env file at the root of the project, replacing <'password'> with a secure password for your local database, 
and <'secret'> with a strong secret that cannot be guessed. I recommend generating one using an encryption tool such as https://jwt.io/. 
You may rename the database and its user to whatever you please, but make sure to create a Postgres user and database which match those set in .env.
4. Create a user in Postgres that has the name you set for DB_USERNAME, and the password you set for DB_PASSWORD. Give this user CREATEDB privileges. 
5. Create your local Aethernote database by running the command: ```npx dotenv sequelize db:create```
6. Migrate the new database by running the command: ```npx dotenv sequelize db:migrate```
7. Seed the new database by running the command: ```npx dotenv sequelize db:seed:all```
8. Run ```npm start``` in both the 'frontend' and 'backend' directories, in separate terminals.
