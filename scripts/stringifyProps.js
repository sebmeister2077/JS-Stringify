export function stringifyProp(prop) {
  switch (typeof prop) {
    case "bigint":
    case "boolean":
    case "number":
    case "undefined":
    case "symbol":
      return JSON.stringify(prop);
    case "string":
      return prop;
    case "object": {
      if (prop instanceof Array) {
        let keys = Object.keys(prop);
        return JSON.stringify(
          keys.map((key) => {
            return stringifyDeepProps(prop[key]);
          })
        );
      }
      return stringifyDeepProps(prop);
    }
    case "function": {
      const reg = new RegExp("^function");
      let str = prop.toString();
      const isArrowFunction = !reg.test(str);

      if (isArrowFunction) {
        str = "function " + str.replace("=> ", "");
      }

      return str;
    }
    default:
      return "";
  }
}
