import mongoose from 'mongoose';

const database = async () => {
  try {

    const databaseUri = process.env.DATABASE as string;

    const databasePassword = process.env.DATABASE_PASSWORD as string;

    const development = process.env.NODE_ENV === "development";

    // Replace <password> placeholder in connection URI
    const dbUri = databaseUri.replace('<db_password>', encodeURIComponent(databasePassword));

    mongoose.set('strictQuery', true);

    await mongoose.connect(dbUri);

    if (development) console.log("DB connection successful!");
  } catch (err) {
    console.error("Could not connect to database", err);
  }
};

export default database;
