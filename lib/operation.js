import extend from "xtend/mutable";

/**
 */

function Operation(name, options) {
  if (!options) options = {};
  extend(this, options);
  this.name = name;
}

/**
 */

export default function(name, options) {
  return new Operation(name, options);
};
