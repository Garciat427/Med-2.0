import axios from "axios";

export default {

   //Sent Req to Server
   googleUser: (gender, birthYear, symptoms) => {
      return axios.post("/auth/google");
   },

};
