/* Generated by Opal 0.11.2 */
Opal.modules["observer"] = function(Opal) {
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $truthy = Opal.truthy, $hash2 = Opal.hash2, $send = Opal.send;

  Opal.add_stubs(['$respond_to?', '$raise', '$new', '$to_s', '$[]=', '$-', '$delete', '$clear', '$size', '$each', '$send']);
  return (function($base, $parent_nesting) {
    var $Observable, self = $Observable = $module($base, 'Observable');

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_Observable_add_observer_1, TMP_Observable_delete_observer_2, TMP_Observable_delete_observers_3, TMP_Observable_count_observers_4, TMP_Observable_changed_5, TMP_Observable_changed$q_6, TMP_Observable_notify_observers_8;

    
    
    Opal.defn(self, '$add_observer', TMP_Observable_add_observer_1 = function $$add_observer(observer, func) {
      var $a, self = this, $writer = nil;
      if (self.observer_peers == null) self.observer_peers = nil;

      if (func == null) {
        func = "update";
      }
      
      if ($truthy((($a = self['observer_peers'], $a != null && $a !== nil) ? 'instance-variable' : nil))) {
        } else {
        self.observer_peers = $hash2([], {})
      };
      if ($truthy(observer['$respond_to?'](func))) {
        } else {
        self.$raise(Opal.const_get_relative($nesting, 'NoMethodError').$new("" + "observer does not respond to `" + (func.$to_s()) + "'", func.$to_s()))
      };
      
      $writer = [observer, func];
      $send(self.observer_peers, '[]=', Opal.to_a($writer));
      return $writer[$rb_minus($writer["length"], 1)];;
    }, TMP_Observable_add_observer_1.$$arity = -2);
    
    Opal.defn(self, '$delete_observer', TMP_Observable_delete_observer_2 = function $$delete_observer(observer) {
      var $a, self = this;
      if (self.observer_peers == null) self.observer_peers = nil;

      if ($truthy((($a = self['observer_peers'], $a != null && $a !== nil) ? 'instance-variable' : nil))) {
        return self.observer_peers.$delete(observer)
        } else {
        return nil
      }
    }, TMP_Observable_delete_observer_2.$$arity = 1);
    
    Opal.defn(self, '$delete_observers', TMP_Observable_delete_observers_3 = function $$delete_observers() {
      var $a, self = this;
      if (self.observer_peers == null) self.observer_peers = nil;

      if ($truthy((($a = self['observer_peers'], $a != null && $a !== nil) ? 'instance-variable' : nil))) {
        return self.observer_peers.$clear()
        } else {
        return nil
      }
    }, TMP_Observable_delete_observers_3.$$arity = 0);
    
    Opal.defn(self, '$count_observers', TMP_Observable_count_observers_4 = function $$count_observers() {
      var $a, self = this;
      if (self.observer_peers == null) self.observer_peers = nil;

      if ($truthy((($a = self['observer_peers'], $a != null && $a !== nil) ? 'instance-variable' : nil))) {
        return self.observer_peers.$size()
        } else {
        return 0
      }
    }, TMP_Observable_count_observers_4.$$arity = 0);
    
    Opal.defn(self, '$changed', TMP_Observable_changed_5 = function $$changed(state) {
      var self = this;

      if (state == null) {
        state = true;
      }
      return (self.observer_state = state)
    }, TMP_Observable_changed_5.$$arity = -1);
    
    Opal.defn(self, '$changed?', TMP_Observable_changed$q_6 = function() {
      var $a, $b, self = this;
      if (self.observer_state == null) self.observer_state = nil;

      if ($truthy(($truthy($a = (($b = self['observer_state'], $b != null && $b !== nil) ? 'instance-variable' : nil)) ? self.observer_state : $a))) {
        return true
        } else {
        return false
      }
    }, TMP_Observable_changed$q_6.$$arity = 0);
    
    Opal.defn(self, '$notify_observers', TMP_Observable_notify_observers_8 = function $$notify_observers($a_rest) {
      var $b, $c, TMP_7, self = this, arg;
      if (self.observer_state == null) self.observer_state = nil;
      if (self.observer_peers == null) self.observer_peers = nil;

      var $args_len = arguments.length, $rest_len = $args_len - 0;
      if ($rest_len < 0) { $rest_len = 0; }
      arg = new Array($rest_len);
      for (var $arg_idx = 0; $arg_idx < $args_len; $arg_idx++) {
        arg[$arg_idx - 0] = arguments[$arg_idx];
      }
      if ($truthy(($truthy($b = (($c = self['observer_state'], $c != null && $c !== nil) ? 'instance-variable' : nil)) ? self.observer_state : $b))) {
        
        if ($truthy((($b = self['observer_peers'], $b != null && $b !== nil) ? 'instance-variable' : nil))) {
          $send(self.observer_peers, 'each', [], (TMP_7 = function(k, v){var self = TMP_7.$$s || this;
if (k == null) k = nil;if (v == null) v = nil;
          return $send(k, 'send', [v].concat(Opal.to_a(arg)))}, TMP_7.$$s = self, TMP_7.$$arity = 2, TMP_7))};
        return (self.observer_state = false);
        } else {
        return nil
      }
    }, TMP_Observable_notify_observers_8.$$arity = -1);
  })($nesting[0], $nesting)
};
