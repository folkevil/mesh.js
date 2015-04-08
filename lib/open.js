import { through } from "obj-stream";

export default function(db) {
  return through(function(operation, next) {
    var self = this;
    db(operation).on("data", function(data) {
      self.push(data);
    }).on("end", next);
  });
};
