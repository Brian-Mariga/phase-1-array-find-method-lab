function superbowlWin(records) {
  for (const element of records) {
    if (element.result === "W") {
      return element.year;
    }
  }
  return undefined;
}

const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];
