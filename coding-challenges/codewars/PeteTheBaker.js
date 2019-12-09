// https://www.codewars.com/kata/pete-the-baker/train/javascript

// Pete, The Baker
// 5 kyu

//===========================================
// OOH, WORKING WITH OBJECTS, JUICY :)
//===========================================
cakes = (
    recipe,
    available,
    maxNumberOfCakes,
    recipeKeys = Object.keys(recipe),
    recipeValues = Object.values(recipe)
) => {
    //===========================================
    // NOTE: INDEX OF KEYS AND VALUES WILL MATCH
    //===========================================
    for (let i = 0; i < recipeKeys.length; i++) {
        if (available[recipeKeys[i]]) {
            const numberOfCakes = available[recipeKeys[i]] / recipeValues[i];
            //===========================================
            // MAX NUMBER OF CAKES IS LIMITED BY THE LOWEST QUANTITY
            // OF CAKES AMONGST ALL INGREDIENTS TAKEN SEPARATELY
            //===========================================
            maxNumberOfCakes =
                (maxNumberOfCakes > numberOfCakes
                    ? numberOfCakes
                    : maxNumberOfCakes) || numberOfCakes;
        } else return 0;
    }
    return Math.floor(maxNumberOfCakes);
};

//===========================================
// COOL SOLUTIONS BY OTHERS
//===========================================
cakes1 = (recipe, available) => {
    //===========================================
    // WOW, COOL USE OF REDUCE
    // OBJECT KEYS CREATES ARRAY, YOU REDUCE ARRAY TO HAVE MIN VALUE
    //===========================================
    return Object.keys(recipe).reduce((val, ingredient) => {
        //===========================================
        // MIN COMPARES BETWEEN ACCUMULATOR VAL AND CURRENT VAL
        //===========================================
        return Math.min(
            Math.floor(available[ingredient] / recipe[ingredient] || 0), // || 0 HANDLES THE CASES WHEN A RECIPE ITEM IS NOT AVAILABLE
            val
        );
    }, Infinity); // INITIALIZES ACC VALUE TO INFINITY SO THAT FIRST COMPARISON ALWAYS RESULTS IN FIRST VALUE
};

//===========================================
// THIS USES SPREAD OPERATOR, ABOUT TO SWOON XD
//===========================================
const cakes2 = (needs, has) =>
    Math.min(
        ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
    );
//===========================================
// MATH MIN ONLY TAKES IN PARAMETERS => PERFECT USE FOR SPREAD OPERATOR, YAY ES6!
// MAPPING EACH KEY AND CALCULATING QUANTITY OF CAKES THAT CAN BE MADE
// SIMILAR TO PREV SOLN, || 0 HANDLES THE CASE FOR WHEN ITEM DOESNT EXIST
//===========================================

//===========================================
// TEST CASES
//===========================================
// must return 2
console.log(
    cakes2(
        { flour: 500, sugar: 200, eggs: 1 },
        { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
    )
);
// must return 0
console.log(
    cakes2(
        { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
        { sugar: 500, flour: 2000, milk: 2000 }
    )
);
