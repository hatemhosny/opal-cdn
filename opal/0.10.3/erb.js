/* Generated by Opal 0.10.3 */
Opal.modules["template"] = function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $hash2 = Opal.hash2;

  Opal.add_stubs(['$[]', '$[]=', '$keys', '$attr_reader', '$instance_exec', '$to_proc', '$new', '$<<', '$join']);
  return (function($base, $super) {
    function $Template(){};
    var self = $Template = $klass($base, $super, 'Template', $Template);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_3, TMP_4, TMP_5, TMP_6;

    def.name = def.body = nil;
    self._cache = $hash2([], {});

    Opal.defs(self, '$[]', TMP_1 = function(name) {
      var $a, self = this;
      if (self._cache == null) self._cache = nil;

      return ((($a = self._cache['$[]'](name)) !== false && $a !== nil && $a != null) ? $a : self._cache['$[]']("templates/" + (name)));
    }, TMP_1.$$arity = 1);

    Opal.defs(self, '$[]=', TMP_2 = function(name, instance) {
      var self = this;
      if (self._cache == null) self._cache = nil;

      return self._cache['$[]='](name, instance);
    }, TMP_2.$$arity = 2);

    Opal.defs(self, '$paths', TMP_3 = function $$paths() {
      var self = this;
      if (self._cache == null) self._cache = nil;

      return self._cache.$keys();
    }, TMP_3.$$arity = 0);

    self.$attr_reader("body");

    Opal.defn(self, '$initialize', TMP_4 = function $$initialize(name) {
      var $a, self = this, $iter = TMP_4.$$p, body = $iter || nil;

      TMP_4.$$p = null;
      $a = [name, body], self.name = $a[0], self.body = $a[1], $a;
      return $scope.get('Template')['$[]='](name, self);
    }, TMP_4.$$arity = 1);

    Opal.defn(self, '$inspect', TMP_5 = function $$inspect() {
      var self = this;

      return "#<Template: '" + (self.name) + "'>";
    }, TMP_5.$$arity = 0);

    Opal.defn(self, '$render', TMP_6 = function $$render(ctx) {
      var $a, $b, self = this;

      if (ctx == null) {
        ctx = self;
      }
      return ($a = ($b = ctx).$instance_exec, $a.$$p = self.body.$to_proc(), $a).call($b, $scope.get('OutputBuffer').$new());
    }, TMP_6.$$arity = -1);

    return (function($base, $super) {
      function $OutputBuffer(){};
      var self = $OutputBuffer = $klass($base, $super, 'OutputBuffer', $OutputBuffer);

      var def = self.$$proto, $scope = self.$$scope, TMP_7, TMP_8, TMP_9;

      def.buffer = nil;
      Opal.defn(self, '$initialize', TMP_7 = function $$initialize() {
        var self = this;

        return self.buffer = [];
      }, TMP_7.$$arity = 0);

      Opal.defn(self, '$append', TMP_8 = function $$append(str) {
        var self = this;

        return self.buffer['$<<'](str);
      }, TMP_8.$$arity = 1);

      Opal.alias(self, 'append=', 'append');

      return (Opal.defn(self, '$join', TMP_9 = function $$join() {
        var self = this;

        return self.buffer.$join();
      }, TMP_9.$$arity = 0), nil) && 'join';
    })($scope.base, null);
  })($scope.base, null)
};
/* Generated by Opal 0.10.3 */
Opal.modules["erb"] = function(Opal) {
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $module = Opal.module;

  Opal.add_stubs(['$require', '$module_function']);
  self.$require("template");
  return (function($base, $super) {
    function $ERB(){};
    var self = $ERB = $klass($base, $super, 'ERB', $ERB);

    var def = self.$$proto, $scope = self.$$scope;

    return (function($base) {
      var $Util, self = $Util = $module($base, 'Util');

      var def = self.$$proto, $scope = self.$$scope, TMP_1;

      var escapes = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'};

      var escape_regexp = /[&<>"']/g;

      Opal.defn(self, '$html_escape', TMP_1 = function $$html_escape(str) {
        var self = this;

        return ("" + str).replace(escape_regexp, function (m) { return escapes[m] });
      }, TMP_1.$$arity = 1);

      Opal.alias(self, 'h', 'html_escape');

      self.$module_function("h");

      self.$module_function("html_escape");
    })($scope.base)
  })($scope.base, null);
};
