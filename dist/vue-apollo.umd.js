(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('graphql-tag')) :
  typeof define === 'function' && define.amd ? define(['exports', 'graphql-tag'], factory) :
  (global = global || self, factory(global['vue-apollo'] = {}, global.gql));
}(this, (function (exports, gql) { 'use strict';

  gql = gql && Object.prototype.hasOwnProperty.call(gql, 'default') ? gql['default'] : gql;

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var index_umd = createCommonjsModule(function (module, exports) {
  (function (global, factory) {
  	 factory(exports) ;
  }(commonjsGlobal, (function (exports) {
  	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

  	/**
  	 * Throttle execution of a function. Especially useful for rate limiting
  	 * execution of handlers on events like resize and scroll.
  	 *
  	 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
  	 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
  	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
  	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
  	 *                                    the internal counter is reset).
  	 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
  	 *                                    to `callback` when the throttled-function is executed.
  	 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
  	 *                                    schedule `callback` to execute after `delay` ms.
  	 *
  	 * @returns {Function}  A new, throttled, function.
  	 */
  	function throttle (delay, noTrailing, callback, debounceMode) {
  	  /*
  	   * After wrapper has stopped being called, this timeout ensures that
  	   * `callback` is executed at the proper times in `throttle` and `end`
  	   * debounce modes.
  	   */
  	  var timeoutID;
  	  var cancelled = false; // Keep track of the last time `callback` was executed.

  	  var lastExec = 0; // Function to clear existing timeout

  	  function clearExistingTimeout() {
  	    if (timeoutID) {
  	      clearTimeout(timeoutID);
  	    }
  	  } // Function to cancel next exec


  	  function cancel() {
  	    clearExistingTimeout();
  	    cancelled = true;
  	  } // `noTrailing` defaults to falsy.


  	  if (typeof noTrailing !== 'boolean') {
  	    debounceMode = callback;
  	    callback = noTrailing;
  	    noTrailing = undefined;
  	  }
  	  /*
  	   * The `wrapper` function encapsulates all of the throttling / debouncing
  	   * functionality and when executed will limit the rate at which `callback`
  	   * is executed.
  	   */


  	  function wrapper() {
  	    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
  	      arguments_[_key] = arguments[_key];
  	    }

  	    var self = this;
  	    var elapsed = Date.now() - lastExec;

  	    if (cancelled) {
  	      return;
  	    } // Execute `callback` and update the `lastExec` timestamp.


  	    function exec() {
  	      lastExec = Date.now();
  	      callback.apply(self, arguments_);
  	    }
  	    /*
  	     * If `debounceMode` is true (at begin) this is used to clear the flag
  	     * to allow future `callback` executions.
  	     */


  	    function clear() {
  	      timeoutID = undefined;
  	    }

  	    if (debounceMode && !timeoutID) {
  	      /*
  	       * Since `wrapper` is being called for the first time and
  	       * `debounceMode` is true (at begin), execute `callback`.
  	       */
  	      exec();
  	    }

  	    clearExistingTimeout();

  	    if (debounceMode === undefined && elapsed > delay) {
  	      /*
  	       * In throttle mode, if `delay` time has been exceeded, execute
  	       * `callback`.
  	       */
  	      exec();
  	    } else if (noTrailing !== true) {
  	      /*
  	       * In trailing throttle mode, since `delay` time has not been
  	       * exceeded, schedule `callback` to execute `delay` ms after most
  	       * recent execution.
  	       *
  	       * If `debounceMode` is true (at begin), schedule `clear` to execute
  	       * after `delay` ms.
  	       *
  	       * If `debounceMode` is false (at end), schedule `callback` to
  	       * execute after `delay` ms.
  	       */
  	      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
  	    }
  	  }

  	  wrapper.cancel = cancel; // Return the wrapper function.

  	  return wrapper;
  	}

  	/* eslint-disable no-undefined */
  	/**
  	 * Debounce execution of a function. Debouncing, unlike throttling,
  	 * guarantees that a function is only executed a single time, either at the
  	 * very beginning of a series of calls, or at the very end.
  	 *
  	 * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
  	 * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
  	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
  	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
  	 * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
  	 *                                  to `callback` when the debounced-function is executed.
  	 *
  	 * @returns {Function} A new, debounced function.
  	 */

  	function debounce (delay, atBegin, callback) {
  	  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
  	}

  	exports.debounce = debounce;
  	exports.throttle = throttle;

  	Object.defineProperty(exports, '__esModule', { value: true });

  })));

  });

  unwrapExports(index_umd);

  var utils = createCommonjsModule(function (module, exports) {
    var Globals = exports.Globals = {};

    function factory(action) {
      return function (cb, time) {
        return action(time, cb);
      };
    }

    exports.throttle = factory(index_umd.throttle);
    exports.debounce = factory(index_umd.debounce);

    exports.getMergedDefinition = function (def) {
      return Globals.Vue.util.mergeOptions({}, def);
    };

    exports.reapply = function (options, context) {
      while (typeof options === 'function') {
        options = options.call(context);
      }

      return options;
    };

    exports.omit = function (obj, properties) {
      return Object.entries(obj).filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            key = _ref2[0];

        return !properties.includes(key);
      }).reduce(function (c, _ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            val = _ref4[1];

        c[key] = val;
        return c;
      }, {});
    };

    exports.addGqlError = function (error) {
      if (error.graphQLErrors && error.graphQLErrors.length) {
        error.gqlError = error.graphQLErrors[0];
      }
    };

    exports.noop = function () {};
  });
  var utils_1 = utils.Globals;
  var utils_2 = utils.throttle;
  var utils_3 = utils.debounce;
  var utils_4 = utils.getMergedDefinition;
  var utils_5 = utils.reapply;
  var utils_6 = utils.omit;
  var utils_7 = utils.addGqlError;
  var utils_8 = utils.noop;

  var SmartApollo = /*#__PURE__*/function () {
    function SmartApollo(vm, key, options) {
      var autostart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      _classCallCheck(this, SmartApollo);

      _defineProperty(this, "type", null);

      _defineProperty(this, "vueApolloSpecialKeys", []);

      this.vm = vm;
      this.key = key;
      this.initialOptions = options;
      this.options = Object.assign({}, options);
      this._skip = false;
      this._pollInterval = null;
      this._watchers = [];
      this._destroyed = false;
      this.lastApolloOptions = null;

      if (autostart) {
        this.autostart();
      }
    }

    _createClass(SmartApollo, [{
      key: "autostart",
      value: function autostart() {
        var _this = this;

        if (typeof this.options.skip === 'function') {
          this._skipWatcher = this.vm.$watch(function () {
            return _this.options.skip.call(_this.vm, _this.vm, _this.key);
          }, this.skipChanged.bind(this), {
            immediate: true,
            deep: this.options.deep
          });
        } else if (!this.options.skip) {
          this.start();
        } else {
          this._skip = true;
        }

        if (typeof this.options.pollInterval === 'function') {
          this._pollWatcher = this.vm.$watch(this.options.pollInterval.bind(this.vm), this.pollIntervalChanged.bind(this), {
            immediate: true
          });
        }
      }
    }, {
      key: "pollIntervalChanged",
      value: function pollIntervalChanged(value, oldValue) {
        if (value !== oldValue) {
          this.pollInterval = value;

          if (value == null) {
            this.stopPolling();
          } else {
            this.startPolling(value);
          }
        }
      }
    }, {
      key: "skipChanged",
      value: function skipChanged(value, oldValue) {
        if (value !== oldValue) {
          this.skip = value;
        }
      }
    }, {
      key: "pollInterval",
      get: function get() {
        return this._pollInterval;
      },
      set: function set(value) {
        this._pollInterval = value;
      }
    }, {
      key: "skip",
      get: function get() {
        return this._skip;
      },
      set: function set(value) {
        if (value) {
          this.stop();
        } else {
          this.start();
        }

        this._skip = value;
      }
    }, {
      key: "refresh",
      value: function refresh() {
        if (!this._skip) {
          this.stop();
          this.start();
        }
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        this.starting = true; // Reactive options

        var _loop = function _loop() {
          var prop = _arr[_i];

          if (typeof _this2.initialOptions[prop] === 'function') {
            var queryCb = _this2.initialOptions[prop].bind(_this2.vm);

            _this2.options[prop] = queryCb();

            var cb = function cb(query) {
              _this2.options[prop] = query;

              _this2.refresh();
            };

            if (!_this2.vm.$isServer) {
              cb = _this2.options.throttle ? utils_2(cb, _this2.options.throttle) : cb;
              cb = _this2.options.debounce ? utils_3(cb, _this2.options.debounce) : cb;
            }

            _this2._watchers.push(_this2.vm.$watch(queryCb, cb, {
              deep: _this2.options.deep
            }));
          }
        };

        for (var _i = 0, _arr = ['query', 'document', 'context']; _i < _arr.length; _i++) {
          _loop();
        } // GraphQL Variables


        if (typeof this.options.variables === 'function') {
          var cb = this.executeApollo.bind(this);

          if (!this.vm.$isServer) {
            cb = this.options.throttle ? utils_2(cb, this.options.throttle) : cb;
            cb = this.options.debounce ? utils_3(cb, this.options.debounce) : cb;
          }

          this._watchers.push(this.vm.$watch(function () {
            return _this2.options.variables.call(_this2.vm);
          }, cb, {
            immediate: true,
            deep: this.options.deep
          }));
        } else {
          this.executeApollo(this.options.variables);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var _iterator = _createForOfIteratorHelper(this._watchers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var unwatch = _step.value;
            unwatch();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (this.sub) {
          this.sub.unsubscribe();
          this.sub = null;
        }
      }
    }, {
      key: "generateApolloOptions",
      value: function generateApolloOptions(variables) {
        var apolloOptions = utils_6(this.options, this.vueApolloSpecialKeys);
        apolloOptions.variables = variables;
        this.lastApolloOptions = apolloOptions;
        return apolloOptions;
      }
    }, {
      key: "executeApollo",
      value: function executeApollo(variables) {
        this.starting = false;
      }
    }, {
      key: "nextResult",
      value: function nextResult(result) {
        var error = result.error;
        if (error) utils_7(error);
      }
    }, {
      key: "callHandlers",
      value: function callHandlers(handlers) {
        var catched = false;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _iterator2 = _createForOfIteratorHelper(handlers),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var handler = _step2.value;

            if (handler) {
              catched = true;
              var result = handler.apply(this.vm, args);

              if (typeof result !== 'undefined' && !result) {
                break;
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return catched;
      }
    }, {
      key: "errorHandler",
      value: function errorHandler() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this.callHandlers.apply(this, [[this.options.error, this.vm.$apollo.error, this.vm.$apollo.provider.errorHandler]].concat(args));
      }
    }, {
      key: "catchError",
      value: function catchError(error) {
        utils_7(error);
        var catched = this.errorHandler(error, this.vm, this.key, this.type, this.lastApolloOptions);
        if (catched) return;

        if (error.graphQLErrors && error.graphQLErrors.length !== 0) {
          console.error("GraphQL execution errors for ".concat(this.type, " '").concat(this.key, "'"));

          var _iterator3 = _createForOfIteratorHelper(error.graphQLErrors),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var e = _step3.value;
              console.error(e);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } else if (error.networkError) {
          console.error("Error sending the ".concat(this.type, " '").concat(this.key, "'"), error.networkError);
        } else {
          console.error("[vue-apollo] An error has occurred for ".concat(this.type, " '").concat(this.key, "'"));

          if (Array.isArray(error)) {
            var _console;

            (_console = console).error.apply(_console, _toConsumableArray(error));
          } else {
            console.error(error);
          }
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this._destroyed) return;
        this._destroyed = true;
        this.stop();

        if (this._skipWatcher) {
          this._skipWatcher();
        }
      }
    }]);

    return SmartApollo;
  }();

  var VUE_APOLLO_QUERY_KEYWORDS = ['variables', 'watch', 'update', 'result', 'error', 'loadingKey', 'watchLoading', 'skip', 'throttle', 'debounce', 'subscribeToMore', 'prefetch', 'manual'];

  var SmartQuery = /*#__PURE__*/function (_SmartApollo) {
    _inherits(SmartQuery, _SmartApollo);

    var _super = _createSuper(SmartQuery);

    function SmartQuery(vm, key, options) {
      var _this;

      var autostart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      _classCallCheck(this, SmartQuery);

      // Add reactive data related to the query
      if (vm.$data.$apolloData && !vm.$data.$apolloData.queries[key]) {
        vm.$set(vm.$data.$apolloData.queries, key, {
          loading: false
        });
      }

      _this = _super.call(this, vm, key, options, false);

      _defineProperty(_assertThisInitialized(_this), "type", 'query');

      _defineProperty(_assertThisInitialized(_this), "vueApolloSpecialKeys", VUE_APOLLO_QUERY_KEYWORDS);

      _defineProperty(_assertThisInitialized(_this), "_loading", false);

      _defineProperty(_assertThisInitialized(_this), "_linkedSubscriptions", []);

      if (vm.$isServer) {
        _this.firstRun = new Promise(function (resolve, reject) {
          _this._firstRunResolve = resolve;
          _this._firstRunReject = reject;
        });
      }

      if (_this.vm.$isServer) {
        _this.options.fetchPolicy = 'network-only';
      }

      if (!options.manual) {
        _this.hasDataField = Object.prototype.hasOwnProperty.call(_this.vm.$data, key);

        if (_this.hasDataField) {
          Object.defineProperty(_this.vm.$data.$apolloData.data, key, {
            get: function get() {
              return _this.vm.$data[key];
            },
            enumerable: true,
            configurable: true
          });
        } else {
          Object.defineProperty(_this.vm.$data, key, {
            get: function get() {
              return _this.vm.$data.$apolloData.data[key];
            },
            enumerable: true,
            configurable: true
          });
        }
      }

      if (autostart) {
        _this.autostart();
      }

      return _this;
    }

    _createClass(SmartQuery, [{
      key: "client",
      get: function get() {
        return this.vm.$apollo.getClient(this.options);
      }
    }, {
      key: "loading",
      get: function get() {
        return this.vm.$data.$apolloData && this.vm.$data.$apolloData.queries[this.key] ? this.vm.$data.$apolloData.queries[this.key].loading : this._loading;
      },
      set: function set(value) {
        if (this._loading !== value) {
          this._loading = value;

          if (this.vm.$data.$apolloData && this.vm.$data.$apolloData.queries[this.key]) {
            this.vm.$data.$apolloData.queries[this.key].loading = value;
            this.vm.$data.$apolloData.loading += value ? 1 : -1;
          }
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        _get(_getPrototypeOf(SmartQuery.prototype), "stop", this).call(this);

        this.loadingDone();

        if (this.observer) {
          this.observer.stopPolling();
          this.observer = null;
        }
      }
    }, {
      key: "executeApollo",
      value: function executeApollo(variables) {
        var variablesJson = JSON.stringify(variables);

        if (this.sub) {
          if (variablesJson === this.previousVariablesJson) {
            return;
          }

          this.sub.unsubscribe(); // Subscribe to more subs

          var _iterator = _createForOfIteratorHelper(this._linkedSubscriptions),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var sub = _step.value;
              sub.stop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        this.previousVariablesJson = variablesJson; // Create observer

        this.observer = this.vm.$apollo.watchQuery(this.generateApolloOptions(variables));
        this.startQuerySubscription();

        if (this.options.fetchPolicy !== 'no-cache' || this.options.notifyOnNetworkStatusChange) {
          var currentResult = this.maySetLoading();

          if (!currentResult.loading || this.options.notifyOnNetworkStatusChange) {
            this.nextResult(currentResult);
          }
        }

        _get(_getPrototypeOf(SmartQuery.prototype), "executeApollo", this).call(this, variables); // Subscribe to more subs


        var _iterator2 = _createForOfIteratorHelper(this._linkedSubscriptions),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _sub = _step2.value;

            _sub.start();
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }, {
      key: "startQuerySubscription",
      value: function startQuerySubscription() {
        if (this.sub && !this.sub.closed) return; // Create subscription

        this.sub = this.observer.subscribe({
          next: this.nextResult.bind(this),
          error: this.catchError.bind(this)
        });
      }
    }, {
      key: "maySetLoading",
      value: function maySetLoading() {
        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var currentResult = this.observer.getCurrentResult();

        if (force || currentResult.loading) {
          if (!this.loading) {
            this.applyLoadingModifier(1);
          }

          this.loading = true;
        }

        return currentResult;
      }
    }, {
      key: "nextResult",
      value: function nextResult(result) {
        _get(_getPrototypeOf(SmartQuery.prototype), "nextResult", this).call(this, result);

        var data = result.data,
            loading = result.loading,
            error = result.error,
            errors = result.errors;

        if (error || errors) {
          this.firstRunReject();
        }

        if (!loading) {
          this.loadingDone();
        } // If `errorPolicy` is set to `all`, an error won't be thrown
        // Instead result will have an `errors` array of GraphQL Errors
        // so we need to reconstruct an error object similar to the normal one


        if (errors && errors.length) {
          var e = new Error("GraphQL error: ".concat(errors.map(function (e) {
            return e.message;
          }).join(' | ')));
          Object.assign(e, {
            graphQLErrors: errors,
            networkError: null
          }); // We skip query catchError logic
          // as we only want to dispatch the error

          _get(_getPrototypeOf(SmartQuery.prototype), "catchError", this).call(this, e);
        }

        if (this.observer.options.errorPolicy === 'none' && (error || errors)) {
          // Don't apply result
          return;
        }

        var hasResultCallback = typeof this.options.result === 'function';

        if (data == null) ; else if (!this.options.manual) {
          if (typeof this.options.update === 'function') {
            this.setData(this.options.update.call(this.vm, data));
          } else if (typeof data[this.key] === 'undefined' && Object.keys(data).length) {
            console.error("Missing ".concat(this.key, " attribute on result"), data);
          } else {
            this.setData(data[this.key]);
          }
        } else if (!hasResultCallback) {
          console.error("".concat(this.key, " query must have a 'result' hook in manual mode"));
        }

        if (hasResultCallback) {
          this.options.result.call(this.vm, result, this.key);
        }
      }
    }, {
      key: "setData",
      value: function setData(value) {
        this.vm.$set(this.hasDataField ? this.vm.$data : this.vm.$data.$apolloData.data, this.key, value);
      }
    }, {
      key: "catchError",
      value: function catchError(error) {
        _get(_getPrototypeOf(SmartQuery.prototype), "catchError", this).call(this, error);

        this.firstRunReject();
        this.loadingDone(error);
        this.nextResult(this.observer.getCurrentResult()); // The observable closes the sub if an error occurs

        this.resubscribeToQuery();
      }
    }, {
      key: "resubscribeToQuery",
      value: function resubscribeToQuery() {
        var lastError = this.observer.getLastError();
        var lastResult = this.observer.getLastResult();
        this.observer.resetLastResults();
        this.startQuerySubscription();
        Object.assign(this.observer, {
          lastError: lastError,
          lastResult: lastResult
        });
      }
    }, {
      key: "loadingKey",
      get: function get() {
        return this.options.loadingKey || this.vm.$apollo.loadingKey;
      }
    }, {
      key: "watchLoading",
      value: function watchLoading() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.callHandlers.apply(this, [[this.options.watchLoading, this.vm.$apollo.watchLoading, this.vm.$apollo.provider.watchLoading]].concat(args, [this]));
      }
    }, {
      key: "applyLoadingModifier",
      value: function applyLoadingModifier(value) {
        var loadingKey = this.loadingKey;

        if (loadingKey && typeof this.vm[loadingKey] === 'number') {
          this.vm[loadingKey] += value;
        }

        this.watchLoading(value === 1, value);
      }
    }, {
      key: "loadingDone",
      value: function loadingDone() {
        var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (this.loading) {
          this.applyLoadingModifier(-1);
        }

        this.loading = false;

        if (!error) {
          this.firstRunResolve();
        }
      }
    }, {
      key: "fetchMore",
      value: function fetchMore() {
        var _this2 = this;

        if (this.observer) {
          var _this$observer;

          this.maySetLoading(true);
          return (_this$observer = this.observer).fetchMore.apply(_this$observer, arguments).then(function (result) {
            if (!result.loading) {
              _this2.loadingDone();
            }

            return result;
          });
        }
      }
    }, {
      key: "subscribeToMore",
      value: function subscribeToMore() {
        if (this.observer) {
          var _this$observer2;

          return {
            unsubscribe: (_this$observer2 = this.observer).subscribeToMore.apply(_this$observer2, arguments)
          };
        }
      }
    }, {
      key: "refetch",
      value: function refetch(variables) {
        var _this3 = this;

        variables && (this.options.variables = variables);

        if (this.observer) {
          var result = this.observer.refetch(variables).then(function (result) {
            if (!result.loading) {
              _this3.loadingDone();
            }

            return result;
          });
          this.maySetLoading();
          return result;
        }
      }
    }, {
      key: "setVariables",
      value: function setVariables(variables, tryFetch) {
        this.options.variables = variables;

        if (this.observer) {
          var result = this.observer.setVariables(variables, tryFetch);
          this.maySetLoading();
          return result;
        }
      }
    }, {
      key: "setOptions",
      value: function setOptions(options) {
        Object.assign(this.options, options);

        if (this.observer) {
          var result = this.observer.setOptions(options);
          this.maySetLoading();
          return result;
        }
      }
    }, {
      key: "startPolling",
      value: function startPolling() {
        if (this.observer) {
          var _this$observer3;

          return (_this$observer3 = this.observer).startPolling.apply(_this$observer3, arguments);
        }
      }
    }, {
      key: "stopPolling",
      value: function stopPolling() {
        if (this.observer) {
          var _this$observer4;

          return (_this$observer4 = this.observer).stopPolling.apply(_this$observer4, arguments);
        }
      }
    }, {
      key: "firstRunResolve",
      value: function firstRunResolve() {
        if (this._firstRunResolve) {
          this._firstRunResolve();

          this._firstRunResolve = null;
        }
      }
    }, {
      key: "firstRunReject",
      value: function firstRunReject(error) {
        if (this._firstRunReject) {
          this._firstRunReject(error);

          this._firstRunReject = null;
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(SmartQuery.prototype), "destroy", this).call(this);

        if (this.loading) {
          this.watchLoading(false, -1);
        }

        this.loading = false;
      }
    }]);

    return SmartQuery;
  }(SmartApollo);

  var SmartSubscription = /*#__PURE__*/function (_SmartApollo) {
    _inherits(SmartSubscription, _SmartApollo);

    var _super = _createSuper(SmartSubscription);

    function SmartSubscription() {
      var _this;

      _classCallCheck(this, SmartSubscription);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "type", 'subscription');

      _defineProperty(_assertThisInitialized(_this), "vueApolloSpecialKeys", ['variables', 'result', 'error', 'throttle', 'debounce', 'linkedQuery']);

      return _this;
    }

    _createClass(SmartSubscription, [{
      key: "executeApollo",
      value: function executeApollo(variables) {
        var variablesJson = JSON.stringify(variables);

        if (this.sub) {
          // do nothing if subscription is already running using exactly the same variables
          if (variablesJson === this.previousVariablesJson) {
            return;
          }

          this.sub.unsubscribe();
        }

        this.previousVariablesJson = variablesJson;
        var apolloOptions = this.generateApolloOptions(variables);

        if (typeof apolloOptions.updateQuery === 'function') {
          apolloOptions.updateQuery = apolloOptions.updateQuery.bind(this.vm);
        }

        if (this.options.linkedQuery) {
          if (typeof this.options.result === 'function') {
            var rcb = this.options.result.bind(this.vm);
            var ucb = apolloOptions.updateQuery && apolloOptions.updateQuery.bind(this.vm);

            apolloOptions.updateQuery = function () {
              rcb.apply(void 0, arguments);
              return ucb && ucb.apply(void 0, arguments);
            };
          }

          this.sub = this.options.linkedQuery.subscribeToMore(apolloOptions);
        } else {
          // Create observer
          this.observer = this.vm.$apollo.subscribe(apolloOptions); // Create subscription

          this.sub = this.observer.subscribe({
            next: this.nextResult.bind(this),
            error: this.catchError.bind(this)
          });
        }

        _get(_getPrototypeOf(SmartSubscription.prototype), "executeApollo", this).call(this, variables);
      }
    }, {
      key: "nextResult",
      value: function nextResult(data) {
        _get(_getPrototypeOf(SmartSubscription.prototype), "nextResult", this).call(this, data);

        if (typeof this.options.result === 'function') {
          this.options.result.call(this.vm, data, this.key);
        }
      }
    }]);

    return SmartSubscription;
  }(SmartApollo);

  var DollarApollo = /*#__PURE__*/function () {
    function DollarApollo(vm) {
      _classCallCheck(this, DollarApollo);

      this._apolloSubscriptions = [];
      this._watchers = [];
      this.vm = vm;
      this.queries = {};
      this.subscriptions = {};
      this.client = undefined;
      this.loadingKey = undefined;
      this.error = undefined;
    }

    _createClass(DollarApollo, [{
      key: "provider",
      get: function get() {
        return this.vm.$apolloProvider;
      }
    }, {
      key: "getClient",
      value: function getClient() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (!options || !options.client) {
          if (_typeof(this.client) === 'object') {
            return this.client;
          }

          if (this.client) {
            if (!this.provider.clients) {
              throw new Error("[vue-apollo] Missing 'clients' options in 'apolloProvider'");
            } else {
              var _client = this.provider.clients[this.client];

              if (!_client) {
                throw new Error("[vue-apollo] Missing client '".concat(this.client, "' in 'apolloProvider'"));
              }

              return _client;
            }
          }

          return this.provider.defaultClient;
        }

        var client = this.provider.clients[options.client];

        if (!client) {
          throw new Error("[vue-apollo] Missing client '".concat(options.client, "' in 'apolloProvider'"));
        }

        return client;
      }
    }, {
      key: "query",
      value: function query(options) {
        return this.getClient(options).query(options);
      }
    }, {
      key: "watchQuery",
      value: function watchQuery(options) {
        var _this = this;

        var observable = this.getClient(options).watchQuery(options);

        var _subscribe = observable.subscribe.bind(observable);

        observable.subscribe = function (options) {
          var sub = _subscribe(options);

          _this._apolloSubscriptions.push(sub);

          return sub;
        };

        return observable;
      }
    }, {
      key: "mutate",
      value: function mutate(options) {
        return this.getClient(options).mutate(options);
      }
    }, {
      key: "subscribe",
      value: function subscribe(options) {
        var _this2 = this;

        if (!this.vm.$isServer) {
          var observable = this.getClient(options).subscribe(options);

          var _subscribe = observable.subscribe.bind(observable);

          observable.subscribe = function (options) {
            var sub = _subscribe(options);

            _this2._apolloSubscriptions.push(sub);

            return sub;
          };

          return observable;
        }
      }
    }, {
      key: "loading",
      get: function get() {
        return this.vm.$data.$apolloData.loading !== 0;
      }
    }, {
      key: "data",
      get: function get() {
        return this.vm.$data.$apolloData.data;
      }
    }, {
      key: "addSmartQuery",
      value: function addSmartQuery(key, options) {
        var _this3 = this;

        var finalOptions = utils_5(options, this.vm); // Simple query

        if (!finalOptions.query) {
          var query = finalOptions;
          finalOptions = {
            query: query
          };
        }

        var apollo = this.vm.$options.apollo;
        var defaultOptions = this.provider.defaultOptions;
        var $query;

        if (defaultOptions && defaultOptions.$query) {
          $query = defaultOptions.$query;
        }

        if (apollo && apollo.$query) {
          $query = _objectSpread2(_objectSpread2({}, $query || {}), apollo.$query);
        }

        if ($query) {
          // Also replaces 'undefined' values
          for (var _key in $query) {
            if (typeof finalOptions[_key] === 'undefined') {
              finalOptions[_key] = $query[_key];
            }
          }
        }

        var smart = this.queries[key] = new SmartQuery(this.vm, key, finalOptions, false);

        if (!this.vm.$isServer || finalOptions.prefetch !== false) {
          smart.autostart();
        }

        if (!this.vm.$isServer) {
          var subs = finalOptions.subscribeToMore;

          if (subs) {
            if (Array.isArray(subs)) {
              subs.forEach(function (sub, index) {
                _this3.addSmartSubscription("".concat(key).concat(index), _objectSpread2(_objectSpread2({}, sub), {}, {
                  linkedQuery: smart
                }));
              });
            } else {
              this.addSmartSubscription(key, _objectSpread2(_objectSpread2({}, subs), {}, {
                linkedQuery: smart
              }));
            }
          }
        }

        return smart;
      }
    }, {
      key: "addSmartSubscription",
      value: function addSmartSubscription(key, options) {
        if (!this.vm.$isServer) {
          options = utils_5(options, this.vm);
          var smart = this.subscriptions[key] = new SmartSubscription(this.vm, key, options, false);
          smart.autostart();

          if (options.linkedQuery) {
            options.linkedQuery._linkedSubscriptions.push(smart);
          }

          return smart;
        }
      }
    }, {
      key: "defineReactiveSetter",
      value: function defineReactiveSetter(key, func, deep) {
        var _this4 = this;

        this._watchers.push(this.vm.$watch(func, function (value) {
          _this4[key] = value;
        }, {
          immediate: true,
          deep: deep
        }));
      } // eslint-disable-next-line accessor-pairs

    }, {
      key: "skipAllQueries",
      set: function set(value) {
        for (var key in this.queries) {
          this.queries[key].skip = value;
        }
      } // eslint-disable-next-line accessor-pairs

    }, {
      key: "skipAllSubscriptions",
      set: function set(value) {
        for (var key in this.subscriptions) {
          this.subscriptions[key].skip = value;
        }
      } // eslint-disable-next-line accessor-pairs

    }, {
      key: "skipAll",
      set: function set(value) {
        this.skipAllQueries = value;
        this.skipAllSubscriptions = value;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _iterator = _createForOfIteratorHelper(this._watchers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var unwatch = _step.value;
            unwatch();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        for (var key in this.queries) {
          this.queries[key].destroy();
        }

        for (var _key2 in this.subscriptions) {
          this.subscriptions[_key2].destroy();
        }

        this._apolloSubscriptions.forEach(function (sub) {
          sub.unsubscribe();
        });

        this._apolloSubscriptions = null;
        this.vm = null;
      }
    }]);

    return DollarApollo;
  }();

  var ApolloProvider = /*#__PURE__*/function () {
    function ApolloProvider(options) {
      _classCallCheck(this, ApolloProvider);

      if (!options) {
        throw new Error('Options argument required');
      }

      this.clients = options.clients || {};

      if (options.defaultClient) {
        this.clients.defaultClient = this.defaultClient = options.defaultClient;
      }

      this.defaultOptions = options.defaultOptions;
      this.watchLoading = options.watchLoading;
      this.errorHandler = options.errorHandler;
      this.prefetch = options.prefetch;
    }

    _createClass(ApolloProvider, [{
      key: "provide",
      value: function provide() {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$apolloProvider';
        console.warn("<ApolloProvider>.provide() is deprecated. Use the 'apolloProvider' option instead with the provider object directly.");
        return _defineProperty({}, key, this);
      }
    }]);

    return ApolloProvider;
  }();

  function isDataFilled(data) {
    return Object.keys(data).length > 0;
  }

  var CApolloQuery = {
    name: 'ApolloQuery',
    provide: function provide() {
      return {
        getDollarApollo: this.getDollarApollo,
        getApolloQuery: this.getApolloQuery
      };
    },
    props: {
      query: {
        type: [Function, Object],
        required: true
      },
      variables: {
        type: Object,
        "default": undefined
      },
      fetchPolicy: {
        type: String,
        "default": undefined
      },
      pollInterval: {
        type: Number,
        "default": undefined
      },
      notifyOnNetworkStatusChange: {
        type: Boolean,
        "default": undefined
      },
      context: {
        type: Object,
        "default": undefined
      },
      update: {
        type: Function,
        "default": function _default(data) {
          return data;
        }
      },
      skip: {
        type: Boolean,
        "default": false
      },
      debounce: {
        type: Number,
        "default": 0
      },
      throttle: {
        type: Number,
        "default": 0
      },
      clientId: {
        type: String,
        "default": undefined
      },
      deep: {
        type: Boolean,
        "default": undefined
      },
      tag: {
        type: String,
        "default": 'div'
      },
      prefetch: {
        type: Boolean,
        "default": true
      },
      options: {
        type: Object,
        "default": function _default() {
          return {};
        }
      }
    },
    data: function data() {
      return {
        result: {
          data: null,
          loading: false,
          networkStatus: 7,
          error: null
        },
        times: 0
      };
    },
    watch: {
      fetchPolicy: function fetchPolicy(value) {
        this.$apollo.queries.query.setOptions({
          fetchPolicy: value
        });
      },
      pollInterval: function pollInterval(value) {
        this.$apollo.queries.query.setOptions({
          pollInterval: value
        });
      },
      notifyOnNetworkStatusChange: function notifyOnNetworkStatusChange(value) {
        this.$apollo.queries.query.setOptions({
          notifyOnNetworkStatusChange: value
        });
      },
      '$data.$apolloData.loading': function $data$apolloDataLoading(value) {
        this.$emit('loading', !!value);
      }
    },
    apollo: {
      $client: function $client() {
        return this.clientId;
      },
      query: function query() {
        return _objectSpread2(_objectSpread2({
          query: function query() {
            if (typeof this.query === 'function') {
              return this.query(gql);
            }

            return this.query;
          },
          variables: function variables() {
            return this.variables;
          },
          fetchPolicy: this.fetchPolicy,
          pollInterval: this.pollInterval,
          debounce: this.debounce,
          throttle: this.throttle,
          notifyOnNetworkStatusChange: this.notifyOnNetworkStatusChange,
          context: function context() {
            return this.context;
          },
          skip: function skip() {
            return this.skip;
          },
          deep: this.deep,
          prefetch: this.prefetch
        }, this.options), {}, {
          manual: true,
          result: function result(_result) {
            var _result2 = _result,
                errors = _result2.errors,
                loading = _result2.loading,
                networkStatus = _result2.networkStatus;
            var _result3 = _result,
                error = _result3.error;
            _result = Object.assign({}, _result);

            if (errors && errors.length) {
              error = new Error("Apollo errors occurred (".concat(errors.length, ")"));
              error.graphQLErrors = errors;
            }

            var data = {};

            if (loading) {
              Object.assign(data, this.$_previousData, _result.data);
            } else if (error) {
              Object.assign(data, this.$apollo.queries.query.observer.getLastResult() || {}, _result.data);
            } else {
              data = _result.data;
              this.$_previousData = _result.data;
            }

            var dataNotEmpty = isDataFilled(data);
            this.result = {
              data: dataNotEmpty ? this.update(data) : undefined,
              fullData: dataNotEmpty ? data : undefined,
              loading: loading,
              error: error,
              networkStatus: networkStatus
            };
            this.times = ++this.$_times;
            this.$emit('result', this.result);
          },
          error: function error(_error) {
            this.result.loading = false;
            this.result.error = _error;
            this.$emit('error', _error);
          }
        });
      }
    },
    created: function created() {
      this.$_times = 0;
    },
    methods: {
      getDollarApollo: function getDollarApollo() {
        return this.$apollo;
      },
      getApolloQuery: function getApolloQuery() {
        return this.$apollo.queries.query;
      }
    },
    render: function render(h) {
      var result = this.$scopedSlots["default"]({
        result: this.result,
        times: this.times,
        query: this.$apollo.queries.query,
        isLoading: this.$apolloData.loading,
        gqlError: this.result && this.result.error && this.result.error.gqlError
      });

      if (Array.isArray(result)) {
        result = result.concat(this.$slots["default"]);
      } else {
        result = [result].concat(this.$slots["default"]);
      }

      return this.tag ? h(this.tag, result) : result[0];
    }
  };

  var uid = 0;
  var CApolloSubscribeToMore = {
    name: 'ApolloSubscribeToMore',
    inject: ['getDollarApollo', 'getApolloQuery'],
    props: {
      document: {
        type: [Function, Object],
        required: true
      },
      variables: {
        type: Object,
        "default": undefined
      },
      updateQuery: {
        type: Function,
        "default": undefined
      }
    },
    watch: {
      document: 'refresh',
      variables: 'refresh'
    },
    created: function created() {
      this.$_key = "sub_component_".concat(uid++);
    },
    mounted: function mounted() {
      this.refresh();
    },
    beforeDestroy: function beforeDestroy() {
      this.destroy();
    },
    methods: {
      destroy: function destroy() {
        if (this.$_sub) {
          this.$_sub.destroy();
        }
      },
      refresh: function refresh() {
        this.destroy();
        var document = this.document;

        if (typeof document === 'function') {
          document = document(gql);
        }

        this.$_sub = this.getDollarApollo().addSmartSubscription(this.$_key, {
          document: document,
          variables: this.variables,
          updateQuery: this.updateQuery,
          linkedQuery: this.getApolloQuery()
        });
      }
    },
    render: function render(h) {
      return null;
    }
  };

  var CApolloMutation = {
    props: {
      mutation: {
        type: [Function, Object],
        required: true
      },
      variables: {
        type: Object,
        "default": undefined
      },
      optimisticResponse: {
        type: Object,
        "default": undefined
      },
      update: {
        type: Function,
        "default": undefined
      },
      refetchQueries: {
        type: Function,
        "default": undefined
      },
      clientId: {
        type: String,
        "default": undefined
      },
      tag: {
        type: String,
        "default": 'div'
      }
    },
    data: function data() {
      return {
        loading: false,
        error: null
      };
    },
    watch: {
      loading: function loading(value) {
        this.$emit('loading', value);
      }
    },
    methods: {
      mutate: function mutate(options) {
        var _this = this;

        this.loading = true;
        this.error = null;
        var mutation = this.mutation;

        if (typeof mutation === 'function') {
          mutation = mutation(gql);
        }

        this.$apollo.mutate(_objectSpread2({
          mutation: mutation,
          client: this.clientId,
          variables: this.variables,
          optimisticResponse: this.optimisticResponse,
          update: this.update,
          refetchQueries: this.refetchQueries
        }, options)).then(function (result) {
          _this.$emit('done', result);

          _this.loading = false;
        })["catch"](function (e) {
          utils_7(e);
          _this.error = e;

          _this.$emit('error', e);

          _this.loading = false;
        });
      }
    },
    render: function render(h) {
      var result = this.$scopedSlots["default"]({
        mutate: this.mutate,
        loading: this.loading,
        error: this.error,
        gqlError: this.error && this.error.gqlError
      });

      if (Array.isArray(result)) {
        result = result.concat(this.$slots["default"]);
      } else {
        result = [result].concat(this.$slots["default"]);
      }

      return this.tag ? h(this.tag, result) : result[0];
    }
  };

  function hasProperty(holder, key) {
    return typeof holder !== 'undefined' && Object.prototype.hasOwnProperty.call(holder, key);
  }

  function initProvider() {
    var options = this.$options; // ApolloProvider injection

    var optionValue = options.apolloProvider;

    if (optionValue) {
      this.$apolloProvider = typeof optionValue === 'function' ? optionValue() : optionValue;
    } else if (options.parent && options.parent.$apolloProvider) {
      this.$apolloProvider = options.parent.$apolloProvider;
    } else if (options.provide) {
      // TODO remove
      // Temporary retro-compatibility
      var provided = typeof options.provide === 'function' ? options.provide.call(this) : options.provide;

      if (provided && provided.$apolloProvider) {
        this.$apolloProvider = provided.$apolloProvider;
      }
    }
  }

  function proxyData() {
    var _this = this;

    this.$_apolloInitData = {};
    var apollo = this.$options.apollo;

    if (apollo) {
      var _loop = function _loop(key) {
        if (key.charAt(0) !== '$') {
          var options = apollo[key]; // Property proxy

          if (!options.manual && !hasProperty(_this.$options.props, key) && !hasProperty(_this.$options.computed, key) && !hasProperty(_this.$options.methods, key)) {
            Object.defineProperty(_this, key, {
              get: function get() {
                return _this.$data.$apolloData.data[key];
              },
              // For component class constructor
              set: function set(value) {
                return _this.$_apolloInitData[key] = value;
              },
              enumerable: true,
              configurable: true
            });
          }
        }
      };

      // watchQuery
      for (var key in apollo) {
        _loop(key);
      }
    }
  }

  function launch() {
    var _this2 = this;

    var apolloProvider = this.$apolloProvider;
    if (this._apolloLaunched || !apolloProvider) return;
    this._apolloLaunched = true; // Prepare properties

    var apollo = this.$options.apollo;

    if (apollo) {
      this.$_apolloPromises = [];

      if (!apollo.$init) {
        apollo.$init = true; // Default options applied to `apollo` options

        if (apolloProvider.defaultOptions) {
          apollo = this.$options.apollo = Object.assign({}, apolloProvider.defaultOptions, apollo);
        }
      }

      defineReactiveSetter(this.$apollo, 'skipAll', apollo.$skipAll, apollo.$deep);
      defineReactiveSetter(this.$apollo, 'skipAllQueries', apollo.$skipAllQueries, apollo.$deep);
      defineReactiveSetter(this.$apollo, 'skipAllSubscriptions', apollo.$skipAllSubscriptions, apollo.$deep);
      defineReactiveSetter(this.$apollo, 'client', apollo.$client, apollo.$deep);
      defineReactiveSetter(this.$apollo, 'loadingKey', apollo.$loadingKey, apollo.$deep);
      defineReactiveSetter(this.$apollo, 'error', apollo.$error, apollo.$deep);
      defineReactiveSetter(this.$apollo, 'watchLoading', apollo.$watchLoading, apollo.$deep); // Apollo Data

      Object.defineProperty(this, '$apolloData', {
        get: function get() {
          return _this2.$data.$apolloData;
        },
        enumerable: true,
        configurable: true
      }); // watchQuery

      for (var key in apollo) {
        if (key.charAt(0) !== '$') {
          var options = apollo[key];
          var smart = this.$apollo.addSmartQuery(key, options);

          if (this.$isServer) {
            options = utils_5(options, this);

            if (apolloProvider.prefetch !== false && options.prefetch !== false && apollo.$prefetch !== false && !smart.skip) {
              this.$_apolloPromises.push(smart.firstRun);
            }
          }
        }
      }

      if (apollo.subscribe) {
        utils_1.Vue.util.warn('vue-apollo -> `subscribe` option is deprecated. Use the `$subscribe` option instead.');
      }

      if (apollo.$subscribe) {
        for (var _key in apollo.$subscribe) {
          this.$apollo.addSmartSubscription(_key, apollo.$subscribe[_key]);
        }
      }
    }
  }

  function defineReactiveSetter($apollo, key, value, deep) {
    if (typeof value !== 'undefined') {
      if (typeof value === 'function') {
        $apollo.defineReactiveSetter(key, value, deep);
      } else {
        $apollo[key] = value;
      }
    }
  }

  function destroy() {
    if (this.$_apollo) {
      this.$_apollo.destroy();
      this.$_apollo = null;
    }
  }

  function installMixin(Vue, vueVersion) {
    Vue.mixin(_objectSpread2(_objectSpread2(_objectSpread2({}, vueVersion === '1' ? {
      init: initProvider
    } : {}), vueVersion === '2' ? {
      data: function data() {
        return {
          $apolloData: {
            queries: {},
            loading: 0,
            data: this.$_apolloInitData
          }
        };
      },
      beforeCreate: function beforeCreate() {
        var _this3 = this;

        initProvider.call(this);
        proxyData.call(this);

        if (this.$isServer) {
          // Patch render function to cleanup apollo
          var render = this.$options.render;

          this.$options.render = function (h) {
            var result = render.call(_this3, h);
            destroy.call(_this3);
            return result;
          };
        }
      },
      serverPrefetch: function serverPrefetch() {
        if (this.$_apolloPromises) {
          return Promise.all(this.$_apolloPromises);
        }
      }
    } : {}), {}, {
      created: launch,
      destroyed: destroy
    }));
  }

  var keywords = ['$subscribe'];
  function install(Vue, options) {
    if (install.installed) return;
    install.installed = true;
    utils_1.Vue = Vue;
    var vueVersion = Vue.version.substr(0, Vue.version.indexOf('.')); // Options merging

    var merge = Vue.config.optionMergeStrategies.methods;

    Vue.config.optionMergeStrategies.apollo = function (toVal, fromVal, vm) {
      if (!toVal) return fromVal;
      if (!fromVal) return toVal;
      var toData = Object.assign({}, utils_6(toVal, keywords), toVal.data);
      var fromData = Object.assign({}, utils_6(fromVal, keywords), fromVal.data);
      var map = {};

      for (var i = 0; i < keywords.length; i++) {
        var key = keywords[i];
        map[key] = merge(toVal[key], fromVal[key]);
      }

      return Object.assign(map, merge(toData, fromData));
    }; // Lazy creation


    Object.defineProperty(Vue.prototype, '$apollo', {
      get: function get() {
        if (!this.$_apollo) {
          this.$_apollo = new DollarApollo(this);
        }

        return this.$_apollo;
      }
    });
    installMixin(Vue, vueVersion);

    if (vueVersion === '2') {
      Vue.component('apollo-query', CApolloQuery);
      Vue.component('ApolloQuery', CApolloQuery);
      Vue.component('apollo-subscribe-to-more', CApolloSubscribeToMore);
      Vue.component('ApolloSubscribeToMore', CApolloSubscribeToMore);
      Vue.component('apollo-mutation', CApolloMutation);
      Vue.component('ApolloMutation', CApolloMutation);
    }
  }
  ApolloProvider.install = install; // eslint-disable-next-line no-undef

  ApolloProvider.version = "3.1.2"; // Apollo provider

  var ApolloProvider$1 = ApolloProvider; // Components

  var ApolloQuery = CApolloQuery;
  var ApolloSubscribeToMore = CApolloSubscribeToMore;
  var ApolloMutation = CApolloMutation; // Auto-install

  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(ApolloProvider);
  }

  exports.ApolloMutation = ApolloMutation;
  exports.ApolloProvider = ApolloProvider$1;
  exports.ApolloQuery = ApolloQuery;
  exports.ApolloSubscribeToMore = ApolloSubscribeToMore;
  exports.default = ApolloProvider;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
