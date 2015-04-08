import operation from "./operation";

export default function(db) {
  return function(operationName, options) {

    if (typeof operationName === "object") {
      return db(operationName);
    }

    return db(operation(operationName, options));
  };
};
