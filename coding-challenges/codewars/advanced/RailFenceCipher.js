// ------------------------------------------------------------
// Rail Fence Cipher: Encoding and Decoding
//
// https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript
// 3 kyu - THE BIG LEAGUES *WOOHOO*
// ------------------------------------------------------------

encodeRailFenceCipher = (string, numberRails) => {
    // ------------------------------------------------------------
    // initialize variables
    // ------------------------------------------------------------
    let encodedString = "",
        arrOfarrays = [],
        strArray = string.split(""),
        iterator = 0,
        railStep = 0,
        railStepIncreasing = true;
    // ------------------------------------------------------------
    // create an array of arrays
    // ------------------------------------------------------------
    for (let i = 0; i < numberRails; i++) {
        arrOfarrays.push([]);
    }
    // ------------------------------------------------------------
    // while loop to iterate through each letter of passed in string
    // ------------------------------------------------------------
    while (iterator < string.length) {
        // ------------------------------------------------------------
        // store each letter in respective rail
        // ------------------------------------------------------------
        arrOfarrays[railStep].push(strArray[iterator]);
        // ------------------------------------------------------------
        // logic to move from rail to rail in described fashion
        // ------------------------------------------------------------
        if (railStepIncreasing) {
            // ------------------------------------------------------------
            // rail step should be increasing unless it hit the end
            // ------------------------------------------------------------
            if (railStep === numberRails - 1) {
                // ------------------------------------------------------------
                // set railStepIncreasing value to false
                // ------------------------------------------------------------
                railStepIncreasing = false;
                railStep--;
            } else railStep++; // else increase railStep value
        } else {
            // ------------------------------------------------------------
            // rail step should be decreasing unless it hit the beginning
            // ------------------------------------------------------------
            if (railStep === 0) {
                // ------------------------------------------------------------
                // set railStepIncreasing value to true
                // ------------------------------------------------------------
                railStepIncreasing = true;
                railStep++;
            } else railStep--; // else decrease railStep value
        }
        iterator++; // go to next letter in string
    }
    // ------------------------------------------------------------
    // combine encoded string
    // ------------------------------------------------------------
    for (const arr of arrOfarrays) {
        const arrString = arr.join("");
        encodedString += arrString;
    }
    return encodedString;
};

// ------------------------------------------------------------
// made it work for a 3 rail case. need to tweak midPart stuff to make it work for general case
// ------------------------------------------------------------
decodeRailFenceCipher = (string, numberRails) => {
    // ------------------------------------------------------------
    // get remainder from dividing by 4
    // ------------------------------------------------------------
    const remainder = string.length % 4;
    // ------------------------------------------------------------
    // split string into the rails
    // ------------------------------------------------------------
    let topPartLength, botPartLength, midPartLength;
    topPartLength = botPartLength = (string.length - remainder) / 4;
    midPartLength = topPartLength * 2;
    switch (remainder) {
        case 3:
            botPartLength++;
        case 2:
            midPartLength++;
        case 1:
            topPartLength++;
        default:
            break;
    }
    let arrOfArrays = [];
    for (let i = 0; i < numberRails; i++) {
        arrOfArrays.push([]);
    }
    // ------------------------------------------------------------
    // extract top part
    // ------------------------------------------------------------
    arrOfArrays[0].push(string.substr(0, topPartLength));
    // ------------------------------------------------------------
    // extract bot part
    // ------------------------------------------------------------
    arrOfArrays[arrOfArrays.length - 1].push(
        string.substr(string.length - botPartLength, botPartLength)
    );
    // ------------------------------------------------------------
    // extract mid part
    // ------------------------------------------------------------
    arrOfArrays[1].push(string.substr(topPartLength, midPartLength));
    return arrOfArrays;
};

console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3));
console.log(encodeRailFenceCipher("Hello, World!", 3));
console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3));
