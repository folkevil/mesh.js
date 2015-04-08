import _async from "./_async";
import _toArray from "./_toArray";

export default function(callback) {
  return function(operation) {
    return _async(function(writer) {
      callback(operation, function(err, data) {
        if (err) return writer.reader.emit("error", err);

        _toArray(data).forEach(function(data) {
          writer.write(data);
        });

        writer.end();
      });
    });
  };
};
