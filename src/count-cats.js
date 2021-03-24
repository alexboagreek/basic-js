const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catCounter = 0;
     matrix.forEach(function(item){
       for (let i = 0; i < item.length; i++){
         item[i] == "^^" && catCounter ++;
       }
     })
 
  return catCounter;
};
