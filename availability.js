// Zoey's availability. Easiest way to change this: open owner.html, click the
// days you want to block, then replace this file with the one it gives you.
const AVAILABILITY = {
  // Usual days of the week: 0 = Sunday, 1 = Monday ... 6 = Saturday
  "weekdays": [1, 2, 3, 4, 5, 6],
  // Whole days you are NOT available (YYYY-MM-DD)
  "blockedDates": [],
  // Days you are only partly available, with the note visitors will see
  // e.g. "2026-11-03": "After 4 pm only"
  "limitedDates": {},
  // One-off days you ARE available outside your usual weekdays
  "extraDates": [],
  // How many months ahead visitors can book
  "monthsAhead": 4
};
