const data = [
  { id: 0, x: 0, y: 0, height: 40, width: 100 },
  { id: 1, x: 120, y: 0, height: 40, width: 100 },
  { id: 2, x: 0, y: 60, height: 40, width: 220 },
  { id: 3, x: 0, y: 120, height: 40, width: 60 },
  { id: 4, x: 80, y: 120, height: 40, width: 60 },
  { id: 5, x: 160, y: 120, height: 40, width: 60 },
  { id: 6, x: 0, y: 180, height: 40, width: 220 },
  { id: 7, x: 240, y: 0, height: 100, width: 80 },
  { id: 8, x: 240, y: 120, height: 70, width: 80 },
  { id: 9, x: 240, y: 200, height: 20, width: 80 },
];

const set = new Set();
const zones = [];
data.forEach((rec) => {
  const start = rec.y;
  const end = rec.y + rec.height;
  const feature = `${start}-${end}`;
  if (!set.has(feature)) {
    set.add(feature);
    zones.push([start, end]);
  }
});

zones.sort((a, b) => a[0] - b[0]);

const results = [];
for (const z of zones) {
  if (!results.length) results.push(z);
  else {
    const [last_s, last_e] = results[results.length - 1];
    const [cur_s, cur_e] = z;
    if (cur_s <= last_e) {
      const final = [Math.min(cur_s, last_s), Math.max(cur_e, last_e)];
      results.pop();
      results.push(final);
    } else {
      results.push(z);
    }
  }
}

for (const r of results) {
  console.log(r);
}

console.log(results.length);
