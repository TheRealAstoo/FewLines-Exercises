import * as error from "../utils/error";
import { ClientSession, Db, UpdateWriteOpResult } from "mongodb";

type UserData = {
  firstName: string;
  lastName: string;
};

export default (db: Db, id: string, data: UserData, session: ClientSession): Promise<UpdateWriteOpResult> => {
  if (error.isPresent()) {
    // ⚠️ Leave this condition
    throw new Error("Operation canceled");
  } else {
    // Code here
  }
};
