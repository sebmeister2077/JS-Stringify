export function stringify(obj) {
  return JSON.stringify(stringifyDeepProps(obj));
}

export function stringifyDeepProps(obj) {
  let keys = Object.keys(obj);
  let o = {};
  keys.forEach((key) => {
    o[key] = stringifyProp(obj[key]);
  });
  return o;
}
