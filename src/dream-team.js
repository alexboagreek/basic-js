const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeamStr = "";
  try {
    for ( let member of members){
      if (typeof member !== "string") continue;
      let memberStr = member.split("").join("").trim();
      dreamTeamStr += memberStr[0].toUpperCase();
    }
  } catch (TypeError){
    return false;
  }
  return dreamTeamStr.split("").sort().join("");
};
