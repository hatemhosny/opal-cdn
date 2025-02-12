/* Generated by Opal 1.3.0.dev */
Opal.modules["gjs/io"] = function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.$$$, $$ = Opal.$$;

  
  /* global imports */;
  
  var GLib = imports.gi.GLib;
  var ByteArray = imports.byteArray;

  var stdin = GLib.IOChannel.unix_new(0);
  var stdout = GLib.IOChannel.unix_new(1);
  var stderr = GLib.IOChannel.unix_new(2);

  Opal.gvars.stdout.write_proc = function(s) {
    var buf = ByteArray.fromString(s);
    stdout.write_chars(buf, buf.length);
    stdout.flush();
  }

  Opal.gvars.stderr.write_proc = function(s) {
    var buf = ByteArray.fromString(s);
    stderr.write_chars(buf, buf.length);
    stderr.flush();
  }
;
};

/* Generated by Opal 1.3.0.dev */
Opal.modules["gjs/kernel"] = function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.$$$, $$ = Opal.$$;

  
  /* global ARGV */;
  Opal.const_set($nesting[0], 'ARGV', ARGV);
  return Opal.exit = imports.system.exit;;
};

/* Generated by Opal 1.3.0.dev */
Opal.modules["gjs"] = function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.$$$, $$ = Opal.$$;

  Opal.add_stubs(['$require']);
  
  self.$require("gjs/io");
  return self.$require("gjs/kernel");
};
