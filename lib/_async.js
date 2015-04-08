import { Writable } from "obj-stream";

export default function(fn) {
  var stream = new Writable();

  process.nextTick(function() {
    fn(stream);
  });

  return stream.reader;
}
