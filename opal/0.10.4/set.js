/* Generated by Opal 0.10.4 */
Opal.modules["set"] = function(Opal) {
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $module = Opal.module;

  Opal.add_stubs(['$include', '$new', '$nil?', '$===', '$raise', '$each', '$add', '$call', '$merge', '$class', '$respond_to?', '$subtract', '$dup', '$join', '$to_a', '$equal?', '$instance_of?', '$==', '$instance_variable_get', '$is_a?', '$size', '$all?', '$include?', '$[]=', '$enum_for', '$[]', '$<<', '$replace', '$delete', '$select', '$each_key', '$to_proc', '$empty?', '$eql?', '$instance_eval', '$clear', '$<', '$<=', '$keys']);
  (function($base, $super) {
    function $Set(){};
    var self = $Set = $klass($base, $super, 'Set', $Set);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2, TMP_4, TMP_5, TMP_6, TMP_8, TMP_9, TMP_10, TMP_13, TMP_15, TMP_16, TMP_17, TMP_20, TMP_21, TMP_22, TMP_24, TMP_25, TMP_26, TMP_28, TMP_29, TMP_30, TMP_32, TMP_33, TMP_35, TMP_37, TMP_39, TMP_41, TMP_42;

    def.hash = nil;
    self.$include($scope.get('Enumerable'));

    Opal.defs(self, '$[]', TMP_1 = function($a_rest) {
      var self = this, ary;

      var $args_len = arguments.length, $rest_len = $args_len - 0;
      if ($rest_len < 0) { $rest_len = 0; }
      ary = new Array($rest_len);
      for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
        ary[$arg_idx - 0] = arguments[$arg_idx];
      }
      return self.$new(ary);
    }, TMP_1.$$arity = -1);

    Opal.defn(self, '$initialize', TMP_2 = function $$initialize(enum$) {
      var $a, $b, TMP_3, self = this, $iter = TMP_2.$$p, block = $iter || nil;

      if (enum$ == null) {
        enum$ = nil;
      }
      TMP_2.$$p = null;
      self.hash = $scope.get('Hash').$new();
      if ((($a = enum$['$nil?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return nil};
      if ((($a = $scope.get('Enumerable')['$==='](enum$)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise($scope.get('ArgumentError'), "value must be enumerable")
      };
      if (block !== false && block !== nil && block != null) {
        return ($a = ($b = enum$).$each, $a.$$p = (TMP_3 = function(item){var self = TMP_3.$$s || this;
if (item == null) item = nil;
        return self.$add(block.$call(item))}, TMP_3.$$s = self, TMP_3.$$arity = 1, TMP_3), $a).call($b)
        } else {
        return self.$merge(enum$)
      };
    }, TMP_2.$$arity = -1);

    Opal.defn(self, '$dup', TMP_4 = function $$dup() {
      var self = this, result = nil;

      result = self.$class().$new();
      return result.$merge(self);
    }, TMP_4.$$arity = 0);

    Opal.defn(self, '$-', TMP_5 = function(enum$) {
      var $a, self = this;

      if ((($a = enum$['$respond_to?']("each")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise($scope.get('ArgumentError'), "value must be enumerable")
      };
      return self.$dup().$subtract(enum$);
    }, TMP_5.$$arity = 1);

    Opal.alias(self, 'difference', '-');

    Opal.defn(self, '$inspect', TMP_6 = function $$inspect() {
      var self = this;

      return "#<Set: {" + (self.$to_a().$join(",")) + "}>";
    }, TMP_6.$$arity = 0);

    Opal.defn(self, '$==', TMP_8 = function(other) {
      var $a, $b, TMP_7, self = this;

      if ((($a = self['$equal?'](other)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return true
      } else if ((($a = other['$instance_of?'](self.$class())) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return self.hash['$=='](other.$instance_variable_get("@hash"))
      } else if ((($a = ($b = other['$is_a?']($scope.get('Set')), $b !== false && $b !== nil && $b != null ?self.$size()['$=='](other.$size()) : $b)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return ($a = ($b = other)['$all?'], $a.$$p = (TMP_7 = function(o){var self = TMP_7.$$s || this;
          if (self.hash == null) self.hash = nil;
if (o == null) o = nil;
        return self.hash['$include?'](o)}, TMP_7.$$s = self, TMP_7.$$arity = 1, TMP_7), $a).call($b)
        } else {
        return false
      };
    }, TMP_8.$$arity = 1);

    Opal.defn(self, '$add', TMP_9 = function $$add(o) {
      var self = this;

      self.hash['$[]='](o, true);
      return self;
    }, TMP_9.$$arity = 1);

    Opal.alias(self, '<<', 'add');

    Opal.defn(self, '$classify', TMP_10 = function $$classify() {
      var $a, $b, TMP_11, $c, TMP_12, self = this, $iter = TMP_10.$$p, block = $iter || nil, result = nil;

      TMP_10.$$p = null;
      if ((block !== nil)) {
        } else {
        return self.$enum_for("classify")
      };
      result = ($a = ($b = $scope.get('Hash')).$new, $a.$$p = (TMP_11 = function(h, k){var self = TMP_11.$$s || this;
if (h == null) h = nil;if (k == null) k = nil;
      return h['$[]='](k, self.$class().$new())}, TMP_11.$$s = self, TMP_11.$$arity = 2, TMP_11), $a).call($b);
      ($a = ($c = self).$each, $a.$$p = (TMP_12 = function(item){var self = TMP_12.$$s || this;
if (item == null) item = nil;
      return result['$[]'](Opal.yield1(block, item)).$add(item)}, TMP_12.$$s = self, TMP_12.$$arity = 1, TMP_12), $a).call($c);
      return result;
    }, TMP_10.$$arity = 0);

    Opal.defn(self, '$collect!', TMP_13 = function() {
      var $a, $b, TMP_14, self = this, $iter = TMP_13.$$p, block = $iter || nil, result = nil;

      TMP_13.$$p = null;
      if ((block !== nil)) {
        } else {
        return self.$enum_for("collect!")
      };
      result = self.$class().$new();
      ($a = ($b = self).$each, $a.$$p = (TMP_14 = function(item){var self = TMP_14.$$s || this;
if (item == null) item = nil;
      return result['$<<'](Opal.yield1(block, item))}, TMP_14.$$s = self, TMP_14.$$arity = 1, TMP_14), $a).call($b);
      return self.$replace(result);
    }, TMP_13.$$arity = 0);

    Opal.alias(self, 'map!', 'collect!');

    Opal.defn(self, '$delete', TMP_15 = function(o) {
      var self = this;

      self.hash.$delete(o);
      return self;
    }, TMP_15.$$arity = 1);

    Opal.defn(self, '$delete?', TMP_16 = function(o) {
      var $a, self = this;

      if ((($a = self['$include?'](o)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        self.$delete(o);
        return self;
        } else {
        return nil
      };
    }, TMP_16.$$arity = 1);

    Opal.defn(self, '$delete_if', TMP_17 = function $$delete_if() {try {

      var $a, $b, TMP_18, $c, $d, TMP_19, self = this, $iter = TMP_17.$$p, $yield = $iter || nil;

      TMP_17.$$p = null;
      ((($a = ($yield !== nil)) !== false && $a !== nil && $a != null) ? $a : Opal.ret(self.$enum_for("delete_if")));
      ($a = ($b = ($c = ($d = self).$select, $c.$$p = (TMP_19 = function(o){var self = TMP_19.$$s || this;
if (o == null) o = nil;
      return Opal.yield1($yield, o);}, TMP_19.$$s = self, TMP_19.$$arity = 1, TMP_19), $c).call($d)).$each, $a.$$p = (TMP_18 = function(o){var self = TMP_18.$$s || this;
        if (self.hash == null) self.hash = nil;
if (o == null) o = nil;
      return self.hash.$delete(o)}, TMP_18.$$s = self, TMP_18.$$arity = 1, TMP_18), $a).call($b);
      return self;
      } catch ($returner) { if ($returner === Opal.returner) { return $returner.$v } throw $returner; }
    }, TMP_17.$$arity = 0);

    Opal.defn(self, '$add?', TMP_20 = function(o) {
      var $a, self = this;

      if ((($a = self['$include?'](o)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return nil
        } else {
        return self.$add(o)
      };
    }, TMP_20.$$arity = 1);

    Opal.defn(self, '$each', TMP_21 = function $$each() {
      var $a, $b, self = this, $iter = TMP_21.$$p, block = $iter || nil;

      TMP_21.$$p = null;
      if ((block !== nil)) {
        } else {
        return self.$enum_for("each")
      };
      ($a = ($b = self.hash).$each_key, $a.$$p = block.$to_proc(), $a).call($b);
      return self;
    }, TMP_21.$$arity = 0);

    Opal.defn(self, '$empty?', TMP_22 = function() {
      var self = this;

      return self.hash['$empty?']();
    }, TMP_22.$$arity = 0);

    Opal.defn(self, '$eql?', TMP_24 = function(other) {
      var $a, $b, TMP_23, self = this;

      return self.hash['$eql?'](($a = ($b = other).$instance_eval, $a.$$p = (TMP_23 = function(){var self = TMP_23.$$s || this;
        if (self.hash == null) self.hash = nil;

      return self.hash}, TMP_23.$$s = self, TMP_23.$$arity = 0, TMP_23), $a).call($b));
    }, TMP_24.$$arity = 1);

    Opal.defn(self, '$clear', TMP_25 = function $$clear() {
      var self = this;

      self.hash.$clear();
      return self;
    }, TMP_25.$$arity = 0);

    Opal.defn(self, '$include?', TMP_26 = function(o) {
      var self = this;

      return self.hash['$include?'](o);
    }, TMP_26.$$arity = 1);

    Opal.alias(self, 'member?', 'include?');

    Opal.defn(self, '$merge', TMP_28 = function $$merge(enum$) {
      var $a, $b, TMP_27, self = this;

      ($a = ($b = enum$).$each, $a.$$p = (TMP_27 = function(item){var self = TMP_27.$$s || this;
if (item == null) item = nil;
      return self.$add(item)}, TMP_27.$$s = self, TMP_27.$$arity = 1, TMP_27), $a).call($b);
      return self;
    }, TMP_28.$$arity = 1);

    Opal.defn(self, '$replace', TMP_29 = function $$replace(enum$) {
      var self = this;

      self.$clear();
      self.$merge(enum$);
      return self;
    }, TMP_29.$$arity = 1);

    Opal.defn(self, '$size', TMP_30 = function $$size() {
      var self = this;

      return self.hash.$size();
    }, TMP_30.$$arity = 0);

    Opal.alias(self, 'length', 'size');

    Opal.defn(self, '$subtract', TMP_32 = function $$subtract(enum$) {
      var $a, $b, TMP_31, self = this;

      ($a = ($b = enum$).$each, $a.$$p = (TMP_31 = function(item){var self = TMP_31.$$s || this;
if (item == null) item = nil;
      return self.$delete(item)}, TMP_31.$$s = self, TMP_31.$$arity = 1, TMP_31), $a).call($b);
      return self;
    }, TMP_32.$$arity = 1);

    Opal.defn(self, '$|', TMP_33 = function(enum$) {
      var $a, self = this;

      if ((($a = enum$['$respond_to?']("each")) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        } else {
        self.$raise($scope.get('ArgumentError'), "value must be enumerable")
      };
      return self.$dup().$merge(enum$);
    }, TMP_33.$$arity = 1);

    Opal.defn(self, '$superset?', TMP_35 = function(set) {
      var $a, $b, TMP_34, self = this;

      ((($a = set['$is_a?']($scope.get('Set'))) !== false && $a !== nil && $a != null) ? $a : self.$raise($scope.get('ArgumentError'), "value must be a set"));
      if ((($a = $rb_lt(self.$size(), set.$size())) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return false};
      return ($a = ($b = set)['$all?'], $a.$$p = (TMP_34 = function(o){var self = TMP_34.$$s || this;
if (o == null) o = nil;
      return self['$include?'](o)}, TMP_34.$$s = self, TMP_34.$$arity = 1, TMP_34), $a).call($b);
    }, TMP_35.$$arity = 1);

    Opal.alias(self, '>=', 'superset?');

    Opal.defn(self, '$proper_superset?', TMP_37 = function(set) {
      var $a, $b, TMP_36, self = this;

      ((($a = set['$is_a?']($scope.get('Set'))) !== false && $a !== nil && $a != null) ? $a : self.$raise($scope.get('ArgumentError'), "value must be a set"));
      if ((($a = $rb_le(self.$size(), set.$size())) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return false};
      return ($a = ($b = set)['$all?'], $a.$$p = (TMP_36 = function(o){var self = TMP_36.$$s || this;
if (o == null) o = nil;
      return self['$include?'](o)}, TMP_36.$$s = self, TMP_36.$$arity = 1, TMP_36), $a).call($b);
    }, TMP_37.$$arity = 1);

    Opal.alias(self, '>', 'proper_superset?');

    Opal.defn(self, '$subset?', TMP_39 = function(set) {
      var $a, $b, TMP_38, self = this;

      ((($a = set['$is_a?']($scope.get('Set'))) !== false && $a !== nil && $a != null) ? $a : self.$raise($scope.get('ArgumentError'), "value must be a set"));
      if ((($a = $rb_lt(set.$size(), self.$size())) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return false};
      return ($a = ($b = self)['$all?'], $a.$$p = (TMP_38 = function(o){var self = TMP_38.$$s || this;
if (o == null) o = nil;
      return set['$include?'](o)}, TMP_38.$$s = self, TMP_38.$$arity = 1, TMP_38), $a).call($b);
    }, TMP_39.$$arity = 1);

    Opal.alias(self, '<=', 'subset?');

    Opal.defn(self, '$proper_subset?', TMP_41 = function(set) {
      var $a, $b, TMP_40, self = this;

      ((($a = set['$is_a?']($scope.get('Set'))) !== false && $a !== nil && $a != null) ? $a : self.$raise($scope.get('ArgumentError'), "value must be a set"));
      if ((($a = $rb_le(set.$size(), self.$size())) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
        return false};
      return ($a = ($b = self)['$all?'], $a.$$p = (TMP_40 = function(o){var self = TMP_40.$$s || this;
if (o == null) o = nil;
      return set['$include?'](o)}, TMP_40.$$s = self, TMP_40.$$arity = 1, TMP_40), $a).call($b);
    }, TMP_41.$$arity = 1);

    Opal.alias(self, '<', 'proper_subset?');

    Opal.alias(self, '+', '|');

    Opal.alias(self, 'union', '|');

    return (Opal.defn(self, '$to_a', TMP_42 = function $$to_a() {
      var self = this;

      return self.hash.$keys();
    }, TMP_42.$$arity = 0), nil) && 'to_a';
  })($scope.base, null);
  return (function($base) {
    var $Enumerable, self = $Enumerable = $module($base, 'Enumerable');

    var def = self.$$proto, $scope = self.$$scope, TMP_43;

    Opal.defn(self, '$to_set', TMP_43 = function $$to_set(klass, $a_rest) {
      var $b, $c, self = this, args, $iter = TMP_43.$$p, block = $iter || nil;

      if (klass == null) {
        klass = $scope.get('Set');
      }
      var $args_len = arguments.length, $rest_len = $args_len - 1;
      if ($rest_len < 0) { $rest_len = 0; }
      args = new Array($rest_len);
      for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
        args[$arg_idx - 1] = arguments[$arg_idx];
      }
      TMP_43.$$p = null;
      return ($b = ($c = klass).$new, $b.$$p = block.$to_proc(), $b).apply($c, [self].concat(Opal.to_a(args)));
    }, TMP_43.$$arity = -1)
  })($scope.base);
};
