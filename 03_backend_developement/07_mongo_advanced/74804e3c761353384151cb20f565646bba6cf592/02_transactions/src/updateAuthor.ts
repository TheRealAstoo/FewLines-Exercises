import { MongoClient } from "mongodb";
import updatePosts from "./updatePosts";

type UserData = {
  firstName: string;
  lastName: string;
};

export default (client: MongoClient, id: string, data: UserData): Promise<void> => {
  // Write your code here
};
