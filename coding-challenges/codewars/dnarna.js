const DNAtoRNA = dna => {
    const dnaArray = dna.split("");
    const rnaArray = [];
    dnaArray.forEach(nucleicAcid => {
        if (nucleicAcid === "T") {
            rnaArray.push("U");
        } else {
            rnaArray.push(nucleicAcid);
        }
    });
    return rnaArray.join("");
};

const DNAtoRNA1 = dna => {
    const dnaArray = dna.split("");
    for (let i = 0; i < dnaArray.length; i++) {
        if (dnaArray[i] === "T") {
            dnaArray[i] = "U";
        }
    }
    rnaString = dnaArray.join("");
    return rnaString;
};

/*
1) There is a replace method - check it out
2) Instead of converting 
*/

console.log(DNAtoRNA("GCAT"));
console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GACCGCCGCC"));
