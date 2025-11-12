import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "postgres",
    username: "my_movies_v3h7_user",
    password: "5IWjdbG4cct0yNX3r2GenLoEepoZadck",
    host: "dpg-d4acgoggjchc73fke980-a.frankfurt-postgres.render.com",
    database: "my_movies_v3h7",
    port: 5432,
    dialectOptions: {
        ssl: true
    }
});

export default sequelize;