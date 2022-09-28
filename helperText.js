export const capitalize = (str) => {
    if (!str) return "";
  
    const arrStr = str.split(" ");
    const capitalizeArrWord = arrStr.map(e => {
        var _a;
        const capWord = (_a = e[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        if (e.length > 1)
            return capWord + e.slice(1).toLowerCase();
        return capWord;
    });
  
    return capitalizeArrWord.join(" ");
};

export const replaceAll = (value, find, replace) => {
    if (!value) return "";
  
    const searchRegExp = new RegExp(find, "g");
    return value.replace(searchRegExp, replace);
};

export const arrayToString = (arr, separator) => {
    return arr
        .filter(char => typeof char === "number" || typeof char === "string")
        .join(separator ?? " ");
};
