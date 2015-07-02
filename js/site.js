function isDate(sDate){
    var sSeparator = '/';
    if(!sDate.match("^[0-9]{2}/[0-9]{2}/[0-9]{4}$")) return false;
    var arDate = sDate.split(sSeparator);
    var iDay = parseInt(arDate[0]);
    var iMonth = parseInt(arDate[1]);
    var iYear = parseInt(arDate[2]);
    var arDayPerMonth = [31,(isLeapYear(iYear))?29:28,31,30,31,30,31,31,30,31,30,31];
    if(!arDayPerMonth[iMonth-1]) return false;
    return (iDay <= arDayPerMonth[iMonth-1] && iDay > 0);
}

function isHour(sHour){
    var sSeparator = ':';
    var withSeconds = false;
    if(sHour.match("^[0-9]{2}:[0-9]{2}:[0-9]{2}$")) var withSeconds = true;
    else if(!sHour.match("^[0-9]{2}:[0-9]{2}$")) return false;
    var arHour = sHour.split(sSeparator);
    var iHour = parseInt(arHour[0]);
    var iMinute = parseInt(arHour[1]);
    if(withSeconds)	var iSecs = parseInt(arHour[2]);
    else 						var iSecs = 0;
    return 	(iHour >= 0 && iHour < 24) && (iMinute >= 0 && iMinute < 60) && (iSecs >= 0 && iSecs < 60);
}

function isLeapYear(iYear){
    return ((iYear%4==0 && iYear%100!=0) || iYear%400==0);
}

function isDateHour(sDateHour){
    var sSeparator = ' ';
    var arDateHour = sDateHour.split(sSeparator);
    return (arDateHour[0] && arDateHour[1] && isDate(arDateHour[0]) && isHour(arDateHour[1]));
}

function setMajToAllWords(toFirstWord, texte){
    var newText = (toFirstWord == true) ? texte.charAt(0).toUpperCase() : texte.charAt(0);
    for (var i=0 ; i<texte.length-1 ; i++){
        if (texte.charAt(i).match(/[-\s]/) && texte.charAt(i+1).match(/\S/)){
            newText += texte.charAt(i+1).toUpperCase();
        } else {
            newText += texte.charAt(i+1);
        }
    }
    return newText;
}

/*function setTitleInfos(infos){
           return infos.nom;
        }*/


function isMail(sMail){
    if(!sMail.match(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/i)){
        return false;
    } else {
        return true;
    }
}