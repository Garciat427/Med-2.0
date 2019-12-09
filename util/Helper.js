
// Helper class that will contain generic helper methods
class Helper {

  // take a geneder of "male, female, m, f" and converts it to M or F. If passed an undefined value, then it will return M
  convertGender(input) {

    let loweredInput = input.toLowerCase();
    if (loweredInput === "female") {
      return "F";
    } else {
      return "M";
    }
  }


  standardDiviation(array) {
    const n = array.length;
    const mean = array.reduce((a, b) => a + b) / n;
    return (Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n));

  }

}


module.exports = Helper;
