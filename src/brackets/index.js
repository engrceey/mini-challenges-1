/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
  let countCurvedOpen = 0;
  let countCurvedClosed = 0;

  let countSquareOpen = 0;
  let countSquareClosed = 0;

  let countCurlyOpen = 0;
  let countCurlyClosed = 0;

  if (
    str.includes("(}") ||
    str.includes("{)") ||
    str.includes("[}") ||
    str.includes("{]") ||
    str.includes("[)") ||
    str.includes("(]")
  ) {
    return "invalid";
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      countCurvedOpen++;
    } else if (str[i] === ")") {
      countCurvedClosed++;
    } else if (str[i] === "{") {
      countCurlyOpen++;
    } else if (str[i] === "}") {
      countCurlyClosed++;
    } else if (str[i] === "[") {
      countSquareOpen++;
    } else if (str[i] === "]") {
      countSquareClosed++;
    }
  }

  if (
    countCurlyOpen !== countCurlyClosed ||
    countCurvedOpen !== countCurvedClosed ||
    countSquareOpen !== countSquareClosed
  ) {
    return "invalid";
  }

  return "valid";
}


module.exports = isValid;
