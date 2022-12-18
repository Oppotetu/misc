
function getDaysInMonth(month, year) {
  return new Date(new Date(year, month + 1) - 1).getDate()
}

console.log(getDaysInMonth(2, 2023));
console.log(getDaysInMonth(2, 2024));
console.log(getDaysInMonth(2, 2025));
console.log(getDaysInMonth(2, 2026));
console.log(getDaysInMonth(2, 2027));
console.log(getDaysInMonth(2, 2028));
console.log(getDaysInMonth(2, 2029));