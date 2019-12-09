// https://www.codewars.com/kata/dubstep/train/javascript

// Dubstep
// 6 kyu

//===========================================
// FIRST ATTEMPT
//===========================================
songDecoder = song => {
    let arr = song.split("WUB");
    const length = arr.length;
    arr.forEach(word => {
        if (word) arr.push(word);
    });
    arr = arr.slice(length);
    return arr.join(" ");
};

//===========================================
// REFACTORING SOLN
//===========================================
songDecoder1 = song => {
    arr = song.split("WUB");
    arr = arr.filter(word => word);
    return arr.join(" ");
};

//===========================================
// MINIFYING SOLN FOR FUN
//===========================================
songDecoder2 = song =>
    song
        .split("WUB")
        .filter(word => word)
        .join(" ");

//===========================================
// COOL SOLUTIONS BY OTHERS
// NOTE TO SELF - find some time to learn regex in detail
// Make notes on github based on what you learn in regex
//===========================================
songDecoder3 = song => song.replace(/(WUB)+/g, " ").trim();

//===========================================
// VARIATION ON MY SOLUTION
// Boolean is passed as a callback param in filter
// Boolean() converts the parameter passed in, into a boolean value
// Interesting to know.
//===========================================
songDecoder4 = song =>
    song
        .split("WUB")
        .filter(Boolean)
        .join(" ");

console.log(songDecoder4("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));

//===========================================
// NOTE: ALSO LOOK INTO JS PERF
// IT WAS USED BY SOMEONE TO COMPARE THE
// PERFORMANCE OF DIFFERENT SOLUTIONS
// CHECK OUT COMMENTS ON THE FIRST SOLN FOR MORE INFO
//===========================================
