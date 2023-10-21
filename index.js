
function shout(string){
return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string);
    console.log(string.toUpperCase());
    console.log(string===string.toUpperCase());
}
function logWhisper(string){
    console.log(string);
    console.log(string.toLowerCase());
    console.log(string===string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    if (string.toLowerCase()===string){
        return "I can't hear you!";
    }
    else if (string.toUpperCase()===string){
        return "YES INDEED!";
    }
    else if ("Let's have dinner together!"===string){
        return "I would love to!";
    }
}
