/* Generated by Opal 0.10.4 */
Opal.modules["delegate"] = function(Opal) {
  var TMP_5, self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass;

  Opal.add_stubs(['$__setobj__', '$__getobj__', '$respond_to?', '$__send__', '$to_proc']);
  (function($base, $super) {
    function $Delegator(){};
    var self = $Delegator = $klass($base, $super, 'Delegator', $Delegator);

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_2;

    Opal.defn(self, '$initialize', TMP_1 = function $$initialize(obj) {
      var self = this;

      return self.$__setobj__(obj);
    }, TMP_1.$$arity = 1);

    return (Opal.defn(self, '$method_missing', TMP_2 = function $$method_missing(m, $a_rest) {
      var $b, $c, $d, self = this, args, $iter = TMP_2.$$p, block = $iter || nil, target = nil;

      var $args_len = arguments.length, $rest_len = $args_len - 1;
      if ($rest_len < 0) { $rest_len = 0; }
      args = new Array($rest_len);
      for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
        args[$arg_idx - 1] = arguments[$arg_idx];
      }
      TMP_2.$$p = null;
      target = self.$__getobj__();
      if ((($b = target['$respond_to?'](m)) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        return ($b = ($c = target).$__send__, $b.$$p = block.$to_proc(), $b).apply($c, [m].concat(Opal.to_a(args)))
        } else {
        return ($b = ($d = self, Opal.find_super_dispatcher(self, 'method_missing', TMP_2, false)), $b.$$p = block.$to_proc(), $b).apply($d, [m].concat(Opal.to_a(args)))
      };
    }, TMP_2.$$arity = -2), nil) && 'method_missing';
  })($scope.base, $scope.get('BasicObject'));
  (function($base, $super) {
    function $SimpleDelegator(){};
    var self = $SimpleDelegator = $klass($base, $super, 'SimpleDelegator', $SimpleDelegator);

    var def = self.$$proto, $scope = self.$$scope, TMP_3, TMP_4;

    def.delegate_sd_obj = nil;
    Opal.defn(self, '$__getobj__', TMP_3 = function $$__getobj__() {
      var self = this;

      return self.delegate_sd_obj;
    }, TMP_3.$$arity = 0);

    return (Opal.defn(self, '$__setobj__', TMP_4 = function $$__setobj__(obj) {
      var self = this;

      return self.delegate_sd_obj = obj;
    }, TMP_4.$$arity = 1), nil) && '__setobj__';
  })($scope.base, $scope.get('Delegator'));
  return (Opal.defn(Opal.Object, '$DelegateClass', TMP_5 = function $$DelegateClass(superklass) {
    var self = this;

    return $scope.get('SimpleDelegator');
  }, TMP_5.$$arity = 1), nil) && 'DelegateClass';
};
