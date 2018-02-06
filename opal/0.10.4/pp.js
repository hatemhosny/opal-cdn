/* Generated by Opal 0.10.4 */
Opal.modules["pp"] = function(Opal) {
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass, $gvars = Opal.gvars;

  Opal.add_stubs(['$inspect', '$each', '$pp', '$<=', '$size', '$first', '$module_function', '$p', '$args', '$===', '$+', '$<<']);
  (function($base) {
    var $Kernel, self = $Kernel = $module($base, 'Kernel');

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_3;

    Opal.defn(self, '$pretty_inspect', TMP_1 = function $$pretty_inspect() {
      var self = this;

      return self.$inspect();
    }, TMP_1.$$arity = 0);

    Opal.defn(self, '$pp', TMP_3 = function $$pp($a_rest) {
      var $b, $c, TMP_2, self = this, objs;

      var $args_len = arguments.length, $rest_len = $args_len - 0;
      if ($rest_len < 0) { $rest_len = 0; }
      objs = new Array($rest_len);
      for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
        objs[$arg_idx - 0] = arguments[$arg_idx];
      }
      ($b = ($c = objs).$each, $b.$$p = (TMP_2 = function(obj){var self = TMP_2.$$s || this;
if (obj == null) obj = nil;
      return $scope.get('PP').$pp(obj)}, TMP_2.$$s = self, TMP_2.$$arity = 1, TMP_2), $b).call($c);
      if ((($b = $rb_le(objs.$size(), 1)) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        return objs.$first()
        } else {
        return objs
      };
    }, TMP_3.$$arity = -1);

    self.$module_function("pp");
  })($scope.base);
  return (function($base, $super) {
    function $PP(){};
    var self = $PP = $klass($base, $super, 'PP', $PP);

    var def = self.$$proto, $scope = self.$$scope;

    return (function(self) {
      var $scope = self.$$scope, def = self.$$proto, $a, TMP_4, TMP_5;

      if ((($a = (typeof(console) === "undefined" || typeof(console.log) === "undefined")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        Opal.defn(self, '$pp', TMP_4 = function $$pp(obj, out, width) {
          var $a, self = this;
          if ($gvars.stdout == null) $gvars.stdout = nil;

          if (out == null) {
            out = $gvars.stdout;
          }
          if (width == null) {
            width = 79;
          }
          return ($a = self).$p.apply($a, Opal.to_a(self.$args()));
        }, TMP_4.$$arity = -2)
        } else {
        Opal.defn(self, '$pp', TMP_5 = function $$pp(obj, out, width) {
          var $a, self = this;
          if ($gvars.stdout == null) $gvars.stdout = nil;

          if (out == null) {
            out = $gvars.stdout;
          }
          if (width == null) {
            width = 79;
          }
          if ((($a = $scope.get('String')['$==='](out)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
            return $rb_plus($rb_plus(out, obj.$inspect()), "\n")
            } else {
            return out['$<<']($rb_plus(obj.$inspect(), "\n"))
          };
        }, TMP_5.$$arity = -2)
      };
      return Opal.alias(self, 'singleline_pp', 'pp');
    })(Opal.get_singleton_class(self))
  })($scope.base, null);
};
