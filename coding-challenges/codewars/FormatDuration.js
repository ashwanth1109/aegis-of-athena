//===========================================
// HUMAN READABLE DURATION FORMAT
// 4 kyu
//===========================================

formatDuration = (time, formatArray = []) => {
    if (time === 0) return "now"; // handling 0 case
    const handleOne = str => `1 ${str}`; // common function to handle one of something
    //===========================================
    // Function to format string and add it to beginning of array
    //===========================================
    const formatString = (
        arr,
        time,
        str,
        divFactor,
        val = time % divFactor
    ) => {
        if (val === 0) {
            time = time / divFactor;
            return [arr, time];
        }
        val === 1 ? arr.unshift(handleOne(str)) : arr.unshift(`${val} ${str}s`);
        time = (time - val) / divFactor;
        return [arr, time];
    };
    //===========================================
    // Calculating seconds
    //===========================================
    [formatArray, time] = formatString(formatArray, time, "second", 60);
    //===========================================
    // Calculating minutes
    //===========================================
    [formatArray, time] = formatString(formatArray, time, "minute", 60);
    //===========================================
    // Calculating hours
    //===========================================
    [formatArray, time] = formatString(formatArray, time, "hour", 24);
    //===========================================
    // Calculating days
    //===========================================
    [formatArray, time] = formatString(formatArray, time, "day", 365);
    //===========================================
    // Calculating years
    //===========================================
    if (time !== 0)
        time === 1
            ? formatArray.unshift(handleOne("year"))
            : formatArray.unshift(`${time} years`);
    //===========================================
    // COMBINE PARTS OF ARRAY WITH COMMAS AND 'AND'
    //===========================================
    if (formatArray.length > 1) {
        const lastTwoParts = [formatArray.pop(), formatArray.pop()];
        formatArray.push(`${lastTwoParts[1]} and ${lastTwoParts[0]}`);
    }
    return formatArray.join(", ");
};

//===========================================
// COOL SOLUTIONS BY OTHERS
//===========================================
function formatDuration(seconds) {
    var time = {
            year: 31536000,
            day: 86400,
            hour: 3600,
            minute: 60,
            second: 1
        },
        res = [];

    if (seconds === 0) return "now";

    for (var key in time) {
        if (seconds >= time[key]) {
            var val = Math.floor(seconds / time[key]);
            res.push((val += val > 1 ? " " + key + "s" : " " + key));
            seconds = seconds % time[key];
        }
    }

    return res.length > 1
        ? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
        : res[0];
}
//===========================================
// NICE. . . I SHOULD LEARN TO USE REGEX
//===========================================

//===========================================
// TEST CASES
//===========================================
console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(3662));
console.log(formatDuration(99999999));
