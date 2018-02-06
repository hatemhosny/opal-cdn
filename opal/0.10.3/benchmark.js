/* Generated by Opal 0.10.3 */
Opal.modules["benchmark"] = function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  var self = Opal.top, $scope = Opal, nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass, $gvars = Opal.gvars;

  Opal.add_stubs(['$sync', '$sync=', '$+', '$empty?', '$print', '$*', '$new', '$===', '$each', '$ljust', '$shift', '$label', '$format', '$grep', '$list', '$nil?', '$benchmark', '$to_proc', '$width', '$puts', '$length', '$inject', '$measure', '$rjust', '$map', '$start', '$tap', '$times', '$clock_gettime', '$-', '$utime', '$stime', '$cutime', '$cstime', '$module_function', '$raise', '$to_s', '$<', '$<<', '$attr_reader', '$real', '$memberwise', '$gsub', '$%', '$total', '$dup', '$protected', '$__send__']);
  return (function($base) {
    var $Benchmark, self = $Benchmark = $module($base, 'Benchmark');

    var def = self.$$proto, $scope = self.$$scope, TMP_1, TMP_3, TMP_4, $a, TMP_8, TMP_9;

    Opal.cdecl($scope, 'BENCHMARK_VERSION', "2002-04-25");

    Opal.defn(self, '$benchmark', TMP_1 = function $$benchmark(caption, label_width, format, $a_rest) {
      var $b, $c, $d, TMP_2, self = this, labels, $iter = TMP_1.$$p, $yield = $iter || nil, sync = nil, report = nil, results = nil;

      if (caption == null) {
        caption = "";
      }
      if (label_width == null) {
        label_width = nil;
      }
      if (format == null) {
        format = nil;
      }
      var $args_len = arguments.length, $rest_len = $args_len - 3;
      if ($rest_len < 0) { $rest_len = 0; }
      labels = new Array($rest_len);
      for (var $arg_idx = 3; $arg_idx < $args_len; $arg_idx++) {
        labels[$arg_idx - 3] = arguments[$arg_idx];
      }
      TMP_1.$$p = null;
      try {
      sync = $scope.get('STDOUT').$sync();
      (($b = [true]), $c = $scope.get('STDOUT'), $c['$sync='].apply($c, $b), $b[$b.length-1]);
      ((($b = label_width) !== false && $b !== nil && $b != null) ? $b : label_width = 0);
      label_width = $rb_plus(label_width, 1);
      ((($b = format) !== false && $b !== nil && $b != null) ? $b : format = $scope.get('FORMAT'));
      if ((($b = caption['$empty?']()) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
        } else {
        self.$print($rb_plus($rb_times(" ", label_width), caption))
      };
      report = $scope.get('Report').$new(label_width, format);
      results = Opal.yield1($yield, report);
      ($b = $scope.get('Array')['$==='](results), $b !== false && $b !== nil && $b != null ?($c = ($d = results.$grep($scope.get('Tms'))).$each, $c.$$p = (TMP_2 = function(t){var self = TMP_2.$$s || this, $a, $e;
if (t == null) t = nil;
      return self.$print((((($a = ((($e = labels.$shift()) !== false && $e !== nil && $e != null) ? $e : t.$label())) !== false && $a !== nil && $a != null) ? $a : "")).$ljust(label_width), t.$format(format))}, TMP_2.$$s = self, TMP_2.$$arity = 1, TMP_2), $c).call($d) : $b);
      return report.$list();
      } finally {
        if ((($b = sync['$nil?']()) !== nil && $b != null && (!$b.$$is_boolean || $b == true))) {
          } else {
          (($b = [sync]), $c = $scope.get('STDOUT'), $c['$sync='].apply($c, $b), $b[$b.length-1])
        }
      };
    }, TMP_1.$$arity = -1);

    Opal.defn(self, '$bm', TMP_3 = function $$bm(label_width, $a_rest) {
      var $b, $c, self = this, labels, $iter = TMP_3.$$p, blk = $iter || nil;

      if (label_width == null) {
        label_width = 0;
      }
      var $args_len = arguments.length, $rest_len = $args_len - 1;
      if ($rest_len < 0) { $rest_len = 0; }
      labels = new Array($rest_len);
      for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
        labels[$arg_idx - 1] = arguments[$arg_idx];
      }
      TMP_3.$$p = null;
      return ($b = ($c = self).$benchmark, $b.$$p = blk.$to_proc(), $b).apply($c, [$scope.get('CAPTION'), label_width, $scope.get('FORMAT')].concat(Opal.to_a(labels)));
    }, TMP_3.$$arity = -1);

    Opal.defn(self, '$bmbm', TMP_4 = function $$bmbm(width) {
      var $a, $b, TMP_5, $c, TMP_6, $d, self = this, $iter = TMP_4.$$p, $yield = $iter || nil, job = nil, sync = nil, ets = nil;

      if (width == null) {
        width = 0;
      }
      TMP_4.$$p = null;
      try {
      job = $scope.get('Job').$new(width);
      Opal.yield1($yield, job);
      width = $rb_plus(job.$width(), 1);
      sync = $scope.get('STDOUT').$sync();
      (($a = [true]), $b = $scope.get('STDOUT'), $b['$sync='].apply($b, $a), $a[$a.length-1]);
      self.$puts("Rehearsal ".$ljust($rb_plus(width, $scope.get('CAPTION').$length()), "-"));
      ets = ($a = ($b = job.$list()).$inject, $a.$$p = (TMP_5 = function(sum, $c){var self = TMP_5.$$s || this, $c_args, label, item, $d, $e, res = nil;

        if ($c == null) {
          $c = nil;
        }
        $c = Opal.to_ary($c);
        $c_args = Opal.slice.call($c, 0, $c.length);
        label = $c_args.splice(0,1)[0];
        if (label == null) {
          label = nil;
        }
        item = $c_args.splice(0,1)[0];
        if (item == null) {
          item = nil;
        }if (sum == null) sum = nil;
      self.$print(label.$ljust(width));
        res = ($d = ($e = $scope.get('Benchmark')).$measure, $d.$$p = item.$to_proc(), $d).call($e);
        self.$print(res.$format());
        return $rb_plus(sum, res);}, TMP_5.$$s = self, TMP_5.$$arity = 2, TMP_5.$$has_top_level_mlhs_arg = true, TMP_5), $a).call($b, $scope.get('Tms').$new()).$format("total: %tsec");
      self.$print((((" ") + (ets)) + "\n\n").$rjust($rb_plus($rb_plus(width, $scope.get('CAPTION').$length()), 2), "-"));
      self.$print($rb_plus($rb_times(" ", width), $scope.get('CAPTION')));
      return ($a = ($c = job.$list()).$map, $a.$$p = (TMP_6 = function(label, item){var self = TMP_6.$$s || this, $d, $e, TMP_7, $f, $g;
if (label == null) label = nil;if (item == null) item = nil;
      $scope.get('GC').$start();
        self.$print(label.$ljust(width));
        return ($d = ($e = ($f = ($g = $scope.get('Benchmark')).$measure, $f.$$p = item.$to_proc(), $f).call($g, label)).$tap, $d.$$p = (TMP_7 = function(res){var self = TMP_7.$$s || this;
if (res == null) res = nil;
        return self.$print(res)}, TMP_7.$$s = self, TMP_7.$$arity = 1, TMP_7), $d).call($e);}, TMP_6.$$s = self, TMP_6.$$arity = 2, TMP_6), $a).call($c);
      } finally {
        if ((($a = sync['$nil?']()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          } else {
          (($a = [sync]), $d = $scope.get('STDOUT'), $d['$sync='].apply($d, $a), $a[$a.length-1])
        }
      };
    }, TMP_4.$$arity = -1);

    if ((($a = (function(){ try { return (((($scope.get('Process')).$$scope.get('CLOCK_MONOTONIC'))) != null ? 'constant' : nil); } catch (err) { if (err.$$class === Opal.NameError) { return nil; } else { throw(err); }}; })()) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {Opal.cdecl($scope, 'BENCHMARK_CLOCK', (($scope.get('Process')).$$scope.get('CLOCK_MONOTONIC')))}else {Opal.cdecl($scope, 'BENCHMARK_CLOCK', (($scope.get('Process')).$$scope.get('CLOCK_REALTIME')))};

    Opal.defn(self, '$measure', TMP_8 = function $$measure(label) {
      var $a, self = this, $iter = TMP_8.$$p, $yield = $iter || nil, t0 = nil, r0 = nil, t1 = nil, r1 = nil;

      if (label == null) {
        label = "";
      }
      TMP_8.$$p = null;
      $a = [$scope.get('Process').$times(), $scope.get('Process').$clock_gettime($scope.get('BENCHMARK_CLOCK'))], t0 = $a[0], r0 = $a[1], $a;
      Opal.yieldX($yield, []);
      $a = [$scope.get('Process').$times(), $scope.get('Process').$clock_gettime($scope.get('BENCHMARK_CLOCK'))], t1 = $a[0], r1 = $a[1], $a;
      return (($scope.get('Benchmark')).$$scope.get('Tms')).$new($rb_minus(t1.$utime(), t0.$utime()), $rb_minus(t1.$stime(), t0.$stime()), $rb_minus(t1.$cutime(), t0.$cutime()), $rb_minus(t1.$cstime(), t0.$cstime()), $rb_minus(r1, r0), label);
    }, TMP_8.$$arity = -1);

    Opal.defn(self, '$realtime', TMP_9 = function $$realtime() {
      var self = this, $iter = TMP_9.$$p, $yield = $iter || nil, r0 = nil;

      TMP_9.$$p = null;
      r0 = $scope.get('Process').$clock_gettime($scope.get('BENCHMARK_CLOCK'));
      Opal.yieldX($yield, []);
      return $rb_minus($scope.get('Process').$clock_gettime($scope.get('BENCHMARK_CLOCK')), r0);
    }, TMP_9.$$arity = 0);

    self.$module_function("benchmark", "measure", "realtime", "bm", "bmbm");

    (function($base, $super) {
      function $Job(){};
      var self = $Job = $klass($base, $super, 'Job', $Job);

      var def = self.$$proto, $scope = self.$$scope, TMP_10, TMP_11;

      def.width = def.list = nil;
      Opal.defn(self, '$initialize', TMP_10 = function $$initialize(width) {
        var self = this;

        self.width = width;
        return self.list = [];
      }, TMP_10.$$arity = 1);

      Opal.defn(self, '$item', TMP_11 = function $$item(label) {
        var $a, self = this, $iter = TMP_11.$$p, blk = $iter || nil, w = nil;

        if (label == null) {
          label = "";
        }
        TMP_11.$$p = null;
        if ((blk !== nil)) {
          } else {
          self.$raise($scope.get('ArgumentError'), "no block")
        };
        label = label.$to_s();
        w = label.$length();
        if ((($a = $rb_lt(self.width, w)) !== nil && $a != null && (!$a.$$is_boolean || $a == true))) {
          self.width = w};
        self.list['$<<']([label, blk]);
        return self;
      }, TMP_11.$$arity = -1);

      Opal.alias(self, 'report', 'item');

      self.$attr_reader("list");

      return self.$attr_reader("width");
    })($scope.base, null);

    (function($base, $super) {
      function $Report(){};
      var self = $Report = $klass($base, $super, 'Report', $Report);

      var def = self.$$proto, $scope = self.$$scope, TMP_12, TMP_13;

      def.width = def.list = def.format = nil;
      Opal.defn(self, '$initialize', TMP_12 = function $$initialize(width, format) {
        var $a, self = this;

        if (width == null) {
          width = 0;
        }
        if (format == null) {
          format = nil;
        }
        return $a = [width, format, []], self.width = $a[0], self.format = $a[1], self.list = $a[2], $a;
      }, TMP_12.$$arity = -1);

      Opal.defn(self, '$item', TMP_13 = function $$item(label, $a_rest) {
        var $b, $c, self = this, format, $iter = TMP_13.$$p, blk = $iter || nil, res = nil;

        if (label == null) {
          label = "";
        }
        var $args_len = arguments.length, $rest_len = $args_len - 1;
        if ($rest_len < 0) { $rest_len = 0; }
        format = new Array($rest_len);
        for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
          format[$arg_idx - 1] = arguments[$arg_idx];
        }
        TMP_13.$$p = null;
        self.$print(label.$to_s().$ljust(self.width));
        self.list['$<<'](res = ($b = ($c = $scope.get('Benchmark')).$measure, $b.$$p = blk.$to_proc(), $b).call($c, label));
        self.$print(($b = res).$format.apply($b, [self.format].concat(Opal.to_a(format))));
        return res;
      }, TMP_13.$$arity = -1);

      Opal.alias(self, 'report', 'item');

      return self.$attr_reader("list");
    })($scope.base, null);

    (function($base, $super) {
      function $Tms(){};
      var self = $Tms = $klass($base, $super, 'Tms', $Tms);

      var def = self.$$proto, $scope = self.$$scope, TMP_14, TMP_15, TMP_16, TMP_17, TMP_18, TMP_19, TMP_20, TMP_28, TMP_29, TMP_30, TMP_31;

      def.utime = def.stime = def.cutime = def.cstime = def.label = def.real = nil;
      Opal.cdecl($scope, 'CAPTION', "      user     system      total        real\n");

      Opal.cdecl($scope, 'FORMAT', "%10.6u %10.6y %10.6t %10.6r\n");

      self.$attr_reader("utime");

      self.$attr_reader("stime");

      self.$attr_reader("cutime");

      self.$attr_reader("cstime");

      self.$attr_reader("real");

      self.$attr_reader("total");

      self.$attr_reader("label");

      Opal.defn(self, '$initialize', TMP_14 = function $$initialize(utime, stime, cutime, cstime, real, label) {
        var $a, self = this;

        if (utime == null) {
          utime = 0.0;
        }
        if (stime == null) {
          stime = 0.0;
        }
        if (cutime == null) {
          cutime = 0.0;
        }
        if (cstime == null) {
          cstime = 0.0;
        }
        if (real == null) {
          real = 0.0;
        }
        if (label == null) {
          label = nil;
        }
        $a = [utime, stime, cutime, cstime, real, label.$to_s()], self.utime = $a[0], self.stime = $a[1], self.cutime = $a[2], self.cstime = $a[3], self.real = $a[4], self.label = $a[5], $a;
        return self.total = $rb_plus($rb_plus($rb_plus(self.utime, self.stime), self.cutime), self.cstime);
      }, TMP_14.$$arity = -1);

      Opal.defn(self, '$add', TMP_15 = function $$add() {
        var $a, $b, self = this, $iter = TMP_15.$$p, blk = $iter || nil;

        TMP_15.$$p = null;
        return $rb_plus(self, ($a = ($b = $scope.get('Benchmark')).$measure, $a.$$p = blk.$to_proc(), $a).call($b));
      }, TMP_15.$$arity = 0);

      Opal.defn(self, '$add!', TMP_16 = function() {
        var $a, $b, self = this, $iter = TMP_16.$$p, blk = $iter || nil, t = nil;

        TMP_16.$$p = null;
        t = ($a = ($b = $scope.get('Benchmark')).$measure, $a.$$p = blk.$to_proc(), $a).call($b);
        self.utime = $rb_plus(self.$utime(), t.$utime());
        self.stime = $rb_plus(self.$stime(), t.$stime());
        self.cutime = $rb_plus(self.$cutime(), t.$cutime());
        self.cstime = $rb_plus(self.$cstime(), t.$cstime());
        self.real = $rb_plus(self.$real(), t.$real());
        return self;
      }, TMP_16.$$arity = 0);

      Opal.defn(self, '$+', TMP_17 = function(other) {
        var self = this;

        return self.$memberwise("+", other);
      }, TMP_17.$$arity = 1);

      Opal.defn(self, '$-', TMP_18 = function(other) {
        var self = this;

        return self.$memberwise("-", other);
      }, TMP_18.$$arity = 1);

      Opal.defn(self, '$*', TMP_19 = function(x) {
        var self = this;

        return self.$memberwise("*", x);
      }, TMP_19.$$arity = 1);

      Opal.defn(self, '$/', TMP_20 = function(x) {
        var self = this;

        return self.$memberwise("/", x);
      }, TMP_20.$$arity = 1);

      Opal.defn(self, '$format', TMP_28 = function $$format(format, $a_rest) {
        var $b, $c, TMP_21, $d, $e, TMP_22, $f, $g, TMP_23, $h, $i, TMP_24, $j, $k, TMP_25, $l, $m, TMP_26, $n, $o, TMP_27, $p, self = this, args, str = nil;

        if (format == null) {
          format = nil;
        }
        var $args_len = arguments.length, $rest_len = $args_len - 1;
        if ($rest_len < 0) { $rest_len = 0; }
        args = new Array($rest_len);
        for (var $arg_idx = 1; $arg_idx < $args_len; $arg_idx++) {
          args[$arg_idx - 1] = arguments[$arg_idx];
        }
        str = ($b = ($c = ($d = ($e = ($f = ($g = ($h = ($i = ($j = ($k = ($l = ($m = ($n = ($o = (((($p = format) !== false && $p !== nil && $p != null) ? $p : $scope.get('FORMAT'))).$dup()).$gsub, $n.$$p = (TMP_27 = function(){var self = TMP_27.$$s || this, $a;

        return ((("") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "s")['$%'](self.$label())}, TMP_27.$$s = self, TMP_27.$$arity = 0, TMP_27), $n).call($o, /(%[-+.\d]*)n/)).$gsub, $l.$$p = (TMP_26 = function(){var self = TMP_26.$$s || this, $a;

        return ((("") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "f")['$%'](self.$utime())}, TMP_26.$$s = self, TMP_26.$$arity = 0, TMP_26), $l).call($m, /(%[-+.\d]*)u/)).$gsub, $j.$$p = (TMP_25 = function(){var self = TMP_25.$$s || this, $a;

        return ((("") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "f")['$%'](self.$stime())}, TMP_25.$$s = self, TMP_25.$$arity = 0, TMP_25), $j).call($k, /(%[-+.\d]*)y/)).$gsub, $h.$$p = (TMP_24 = function(){var self = TMP_24.$$s || this, $a;

        return ((("") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "f")['$%'](self.$cutime())}, TMP_24.$$s = self, TMP_24.$$arity = 0, TMP_24), $h).call($i, /(%[-+.\d]*)U/)).$gsub, $f.$$p = (TMP_23 = function(){var self = TMP_23.$$s || this, $a;

        return ((("") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "f")['$%'](self.$cstime())}, TMP_23.$$s = self, TMP_23.$$arity = 0, TMP_23), $f).call($g, /(%[-+.\d]*)Y/)).$gsub, $d.$$p = (TMP_22 = function(){var self = TMP_22.$$s || this, $a;

        return ((("") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "f")['$%'](self.$total())}, TMP_22.$$s = self, TMP_22.$$arity = 0, TMP_22), $d).call($e, /(%[-+.\d]*)t/)).$gsub, $b.$$p = (TMP_21 = function(){var self = TMP_21.$$s || this, $a;

        return ((("(") + ((($a = $gvars['~']) === nil ? nil : $a['$[]'](1)))) + "f)")['$%'](self.$real())}, TMP_21.$$s = self, TMP_21.$$arity = 0, TMP_21), $b).call($c, /(%[-+.\d]*)r/);
        if (format !== false && format !== nil && format != null) {
          return str['$%'](args)
          } else {
          return str
        };
      }, TMP_28.$$arity = -1);

      Opal.defn(self, '$to_s', TMP_29 = function $$to_s() {
        var self = this;

        return self.$format();
      }, TMP_29.$$arity = 0);

      Opal.defn(self, '$to_a', TMP_30 = function $$to_a() {
        var self = this;

        return [self.label, self.utime, self.stime, self.cutime, self.cstime, self.real];
      }, TMP_30.$$arity = 0);

      self.$protected();

      return (Opal.defn(self, '$memberwise', TMP_31 = function $$memberwise(op, x) {
        var self = this, $case = nil;

        return (function() {$case = x;if ((($scope.get('Benchmark')).$$scope.get('Tms'))['$===']($case)) {return (($scope.get('Benchmark')).$$scope.get('Tms')).$new(self.$utime().$__send__(op, x.$utime()), self.$stime().$__send__(op, x.$stime()), self.$cutime().$__send__(op, x.$cutime()), self.$cstime().$__send__(op, x.$cstime()), self.$real().$__send__(op, x.$real()))}else {return (($scope.get('Benchmark')).$$scope.get('Tms')).$new(self.$utime().$__send__(op, x), self.$stime().$__send__(op, x), self.$cutime().$__send__(op, x), self.$cstime().$__send__(op, x), self.$real().$__send__(op, x))}})();
      }, TMP_31.$$arity = 2), nil) && 'memberwise';
    })($scope.base, null);

    Opal.cdecl($scope, 'CAPTION', (((($scope.get('Benchmark')).$$scope.get('Tms'))).$$scope.get('CAPTION')));

    Opal.cdecl($scope, 'FORMAT', (((($scope.get('Benchmark')).$$scope.get('Tms'))).$$scope.get('FORMAT')));
  })($scope.base)
};
