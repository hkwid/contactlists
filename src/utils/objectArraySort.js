export default function getSortedObjectArray(object, key, order) {
  const numA = (order === 'asc') ? 1 : -1;
  const numB = -1 * numA;

  const sortedObject = object.slice().sort(function(a, b) {
    const x = a[key];
    const y = b[key];
    if (x > y) return numA;
    if (x < y) return numB;
    return 0;
  });

  return sortedObject;
}
