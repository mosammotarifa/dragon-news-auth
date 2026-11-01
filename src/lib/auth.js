import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_BETTER_AUTH_URL);
const db = client.db("dragon-news");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_URL_ID,
      clientSecret:process.env.GOOGLE_URL_SECRET
    },
    github: {
      clientId: process.env.GITHUB_URL_ID,
      clientSecret:process.env.GITHUB_URL_SECRET
    },
    
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
