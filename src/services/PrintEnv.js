// src/services/PrintEnv.js

import dotenv from 'dotenv';

// Load the .env file from the root directory
dotenv.config({ path: '../.env' });

// Print the specific environment variable
const apiKey = process.env.VITE_GOOGLE_BOOKS_API_KEY;

if (apiKey) {
  console.log(`VITE_GOOGLE_BOOKS_API_KEY: ${apiKey}`);
} else {
  console.error('VITE_GOOGLE_BOOKS_API_KEY is not defined!');
}
