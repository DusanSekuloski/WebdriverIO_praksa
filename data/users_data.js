//
// Exports data
// users_data.js
//

import * as dotenv from "dotenv";
dotenv.config();

export default {} = {
  username: "standard_user",
  password: process.env.password,
  invalidUsername: "blablatruc",
  invalidPassword: "qwerty123",
};
