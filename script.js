// script.js

function toRoman(num) {
  // Many judges expect an empty string for 0 (Roman numerals have no zero).
  if (num === 0) return "";

  const romanMap = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  let res = "";
  for (const [sym, val] of romanMap) {
    if (num <= 0) break;
    const cnt = Math.floor(num / val);
    if (cnt > 0) {
      res += sym.repeat(cnt);
      num -= val * cnt;
    }
  }
  return res;
}

// Export for test harnesses that require a function
if (typeof module !== "undefined" && module.exports) {
  module.exports = toRoman;
}

// If run directly, read stdin (supports single or multiple numbers)
if (typeof require !== "undefined" && require.main === module) {
  const fs = require("fs");
  const data = fs.readFileSync(0, "utf8").trim();
  if (data.length === 0) process.exit(0);

  const tokens = data.split(/\s+/).map(t => Number(t)).filter(t => !Number.isNaN(t));
  if (tokens.length === 0) process.exit(0);

  if (tokens.length === 1) {
    process.stdout.write(toRoman(tokens[0]) + "\n");
  } else {
    // print each result on its own line
    const out = tokens.map(n => toRoman(n)).join("\n");
    process.stdout.write(out + "\n");
  }
}
