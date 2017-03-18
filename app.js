// var name 


var dateRegex = /(\d\d?):(\d\d)(am|pm)?/;
function parseTime(timeString)
{
  var match = dateRegex.exec(timeString);
  if(!match) return null;
  return {
    hours: match[1]-0, // Subtracting zero converts to a number
    minutes: match[2]-0,
    isPM: match[3].toLowerCase === "pm"
  };
}
console.log(parseTime("10:50pm"));


Document.Submit.click() = var traininfo
