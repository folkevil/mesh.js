import createOperation from "./operation";
import extend from "xtend/mutable";

export default function(db, options) {
  return function(operation) {
    return db(extend({}, operation, options));
  };
};
