/* Generated by Opal 1.3.0.dev */
Opal.modules["headless_chrome"] = function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.$$$, $$ = Opal.$$;

  
  Opal.exit = function(code) {
    // You can't exit from the browser.
    // The first call to Opal.exit should save an exit code.
    // All next invocations must be ignored.

    if (typeof(window.OPAL_EXIT_CODE) === "undefined") {
      window.OPAL_EXIT_CODE = code;
    }
  }

};
