const marker = require('@ajar/marker');
function Slugger(str) {
    const newStr = str.replace(/ /g , '-');
    marker.blue(newStr)
    console.log(newStr);
}




module.exports = Slugger;