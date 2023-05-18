import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }
  const mongoURI = process.env.MONGO_URI;
  try {
    if (mongoURI === undefined) {
      console.error('MONGO_URI is not set in the environment variables.');
    } else {
      await mongoose.connect(mongoURI, { dbName: 'multistepperDB' });

      isConnected = true;

      console.log('MongoDB connected');
    }
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };
