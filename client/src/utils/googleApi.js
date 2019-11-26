import axios from "axios";

export default {


   /**************************************************************************** */
   /***************************  Med lookup APIs Below ***************************** */
   /**************************************************************************** */

   cordToCity: (lat, lng) => {
      let URL = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat +","+lng +
      "&key=AIzaSyCI4cIYuxFXFdVdHu0ffK6BngvBeLv7aD0" + 
      "&result_type=locality"

      console.log(URL)
      return axios.get(URL);
   },

};
