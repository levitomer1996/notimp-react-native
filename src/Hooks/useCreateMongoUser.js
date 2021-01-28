import React from "react";
import notimp from "../api/notimp";
export default () => {
  const createNewMongoUser = async (uid) => {
    try {
      console.log("Trying to fetch mongo user");
      const res = await notimp.post("/auth/signup", { uid });
      console.log("Mongo saved");
    } catch (error) {
      console.log(error);
    }
  };

  return [createNewMongoUser];
};
