(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTypeahead"] = factory(require("react"), require("react-dom"));
	else
		root["ReactBootstrapTypeahead"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.tokenBehaviors = exports.Token = exports.MenuItem = exports.Menu = exports.default = undefined;

	var _Typeahead = __webpack_require__(37);

	var _Typeahead2 = _interopRequireDefault(_Typeahead);

	var _Menu2 = __webpack_require__(12);

	var _Menu3 = _interopRequireDefault(_Menu2);

	var _MenuItem2 = __webpack_require__(7);

	var _MenuItem3 = _interopRequireDefault(_MenuItem2);

	var _Token2 = __webpack_require__(13);

	var _Token3 = _interopRequireDefault(_Token2);

	var _tokenBehaviors2 = __webpack_require__(14);

	var _tokenBehaviors3 = _interopRequireDefault(_tokenBehaviors2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Typeahead2.default;

	// Components
	/* eslint-disable object-curly-spacing */

	exports.Menu = _Menu3.default;
	exports.MenuItem = _MenuItem3.default;
	exports.Token = _Token3.default;

	// HOCs

	exports.tokenBehaviors = _tokenBehaviors3.default;
	/* eslint-enable object-curly-spacing */

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isPlainObject2 = __webpack_require__(92);

	var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

	var _invariant = __webpack_require__(48);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Retrieves the display string from an option. Options can be the string
	 * themselves, or an object with a defined display string. Anything else throws
	 * an error.
	 */
	function getOptionLabel(option, labelKey) {
	  var optionLabel = void 0;

	  if (typeof option === 'string') {
	    optionLabel = option;
	  }

	  if ((0, _isPlainObject3.default)(option)) {
	    optionLabel = option[labelKey];
	  }

	  !(typeof optionLabel === 'string') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'One or more options does not have a valid label string. Check the ' + '`labelKey` prop to ensure that it matches the correct option key and ' + 'provides a string for filtering and display.') : (0, _invariant2.default)(false) : void 0;

	  return optionLabel;
	}

	exports.default = getOptionLabel;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * KeyCode
	 *
	 * Map of common (non-printable) keycodes for the `keydown` and `keyup` events.
	 * Note that `keypress` handles things differently and may not return the same
	 * values.
	 */
	module.exports = {
	  BACKSPACE: 8,
	  TAB: 9,
	  RETURN: 13,
	  ESC: 27,
	  SPACE: 32,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(83);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _noop2 = __webpack_require__(10);

	var _noop3 = _interopRequireDefault(_noop2);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _scrollIntoViewIfNeeded = __webpack_require__(45);

	var _scrollIntoViewIfNeeded2 = _interopRequireDefault(_scrollIntoViewIfNeeded);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MenuItem = _react2.default.createClass({
	  displayName: 'MenuItem',

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onClick: _noop3.default
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.active) {
	      // Ensures that if the menu items exceed the bounds of the menu, the
	      // menu will scroll up or down as the user hits the arrow keys.
	      (0, _scrollIntoViewIfNeeded2.default)((0, _reactDom.findDOMNode)(this));
	    }
	  },
	  render: function render() {
	    var _props = this.props,
	        active = _props.active,
	        children = _props.children,
	        className = _props.className,
	        disabled = _props.disabled;


	    return _react2.default.createElement(
	      'li',
	      {
	        className: (0, _classnames2.default)({
	          'active': active,
	          'disabled': disabled
	        }, className) },
	      _react2.default.createElement(
	        'a',
	        { onClick: this._handleClick, role: 'button' },
	        children
	      )
	    );
	  },
	  _handleClick: function _handleClick(e) {
	    var _props2 = this.props,
	        disabled = _props2.disabled,
	        onClick = _props2.onClick;


	    e.preventDefault();
	    !disabled && onClick(e);
	  }
	});

	exports.default = MenuItem;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Gets the first element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias first
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the first element of `array`.
	 * @example
	 *
	 * _.head([1, 2, 3]);
	 * // => 1
	 *
	 * _.head([]);
	 * // => undefined
	 */
	function head(array) {
	  return (array && array.length) ? array[0] : undefined;
	}

	module.exports = head;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * This method returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 11 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _MenuItem = __webpack_require__(7);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BaseMenu = function BaseMenu(props) {
	  return _react2.default.createElement(
	    'ul',
	    _extends({}, props, {
	      className: (0, _classnames2.default)('dropdown-menu', props.className) }),
	    props.children
	  );
	};

	/**
	 * Menu component that automatically handles pagination and empty state when
	 * passed a set of filtered and truncated results.
	 */
	var Menu = _react2.default.createClass({
	  displayName: 'Menu',

	  propTypes: {
	    /**
	     * Specify menu alignment. The default value is `justify`, which makes the
	     * menu as wide as the input and truncates long values. Specifying `left`
	     * or `right` will align the menu to that side and the width will be
	     * determined by the length of menu item values.
	     */
	    align: _react.PropTypes.oneOf(['justify', 'left', 'right']),
	    /**
	     * Message to display in the menu if there are no valid results.
	     */
	    emptyLabel: _react.PropTypes.string,
	    /**
	     * Maximum height of the dropdown menu, in px.
	     */
	    maxHeight: _react.PropTypes.number,
	    /**
	     * Prompt displayed when large data sets are paginated.
	     */
	    paginationText: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      align: 'justify',
	      emptyLabel: 'No matches found.',
	      maxHeight: 300,
	      paginate: true,
	      paginationText: 'Display additional results...'
	    };
	  },
	  render: function render() {
	    var _props = this.props,
	        align = _props.align,
	        children = _props.children,
	        className = _props.className,
	        emptyLabel = _props.emptyLabel,
	        maxHeight = _props.maxHeight;

	    var contents = _react.Children.count(children) === 0 ? _react2.default.createElement(
	      _MenuItem2.default,
	      { disabled: true },
	      emptyLabel
	    ) : children;

	    return _react2.default.createElement(
	      BaseMenu,
	      {
	        className: (0, _classnames2.default)('bootstrap-typeahead-menu', {
	          'dropdown-menu-justify': align === 'justify',
	          'dropdown-menu-right': align === 'right'
	        }, className),
	        style: {
	          maxHeight: maxHeight + 'px',
	          overflow: 'auto'
	        } },
	      contents,
	      this._renderPaginationMenuItem()
	    );
	  },


	  /**
	   * Allow user to see more results, if available.
	   */
	  _renderPaginationMenuItem: function _renderPaginationMenuItem() {
	    var _props2 = this.props,
	        children = _props2.children,
	        onPaginate = _props2.onPaginate,
	        paginate = _props2.paginate,
	        paginationText = _props2.paginationText;


	    if (paginate && _react.Children.count(children)) {
	      return [_react2.default.createElement('li', {
	        className: 'divider',
	        key: 'pagination-item-divider',
	        role: 'separator'
	      }), _react2.default.createElement(
	        _MenuItem2.default,
	        {
	          className: 'bootstrap-typeahead-menu-paginator',
	          key: 'pagination-item',
	          onClick: onPaginate },
	        paginationText
	      )];
	    }
	  }
	});

	exports.default = Menu;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _noop2 = __webpack_require__(10);

	var _noop3 = _interopRequireDefault(_noop2);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _tokenBehaviors = __webpack_require__(14);

	var _tokenBehaviors2 = _interopRequireDefault(_tokenBehaviors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * Token
	 *
	 * Individual token component, generally displayed within the TokenizerInput
	 * component, but can also be rendered on its own.
	 */
	var Token = _react2.default.createClass({
	  displayName: 'Token',

	  propTypes: {
	    /**
	     * Handler for removing/deleting the token. If not defined, the token will
	     * be rendered in a read-only state.
	     */
	    onRemove: _react.PropTypes.func,
	    selected: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onRemove: _noop3.default,
	      selected: false
	    };
	  },
	  render: function render() {
	    return this.props.onRemove && !this.props.disabled ? this._renderRemoveableToken() : this._renderToken();
	  },
	  _renderRemoveableToken: function _renderRemoveableToken() {
	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        onRemove = _props.onRemove,
	        selected = _props.selected,
	        otherProps = _objectWithoutProperties(_props, ['children', 'className', 'onRemove', 'selected']);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, otherProps, {
	        className: (0, _classnames2.default)('token', 'token-removeable', {
	          'token-selected': selected
	        }, className),
	        tabIndex: 0 }),
	      children,
	      _react2.default.createElement(
	        'span',
	        {
	          className: 'close-button',
	          onClick: onRemove,
	          role: 'button' },
	        '\xD7'
	      )
	    );
	  },
	  _renderToken: function _renderToken() {
	    var _props2 = this.props,
	        children = _props2.children,
	        className = _props2.className,
	        disabled = _props2.disabled,
	        href = _props2.href;

	    var classnames = (0, _classnames2.default)('token', className);

	    if (href) {
	      return _react2.default.createElement(
	        'a',
	        { className: classnames, disabled: disabled, href: href },
	        children
	      );
	    }

	    return _react2.default.createElement(
	      'div',
	      { className: classnames, disabled: disabled },
	      children
	    );
	  }
	});

	exports.default = (0, _tokenBehaviors2.default)(Token);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _omit2 = __webpack_require__(95);

	var _omit3 = _interopRequireDefault(_omit2);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactOnclickoutside = __webpack_require__(35);

	var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

	var _keyCode = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Higher-order component that encapsulates Token behaviors, allowing them to
	 * be easily re-used.
	 */
	var tokenBehaviors = function tokenBehaviors(Component) {
	  return (0, _reactOnclickoutside2.default)(_react2.default.createClass({
	    getInitialState: function getInitialState() {
	      return {
	        selected: false
	      };
	    },
	    render: function render() {
	      var tokenProps = (0, _omit3.default)(this.props, ['disableOnClickOutside', 'enableOnClickOutside']);

	      return _react2.default.createElement(Component, _extends({}, tokenProps, this.state, {
	        onBlur: this._handleBlur,
	        onClick: this._handleSelect,
	        onFocus: this._handleSelect,
	        onKeyDown: this._handleKeyDown
	      }));
	    },
	    _handleBlur: function _handleBlur(e) {
	      (0, _reactDom.findDOMNode)(this).blur();
	      this.setState({ selected: false });
	      this.props.disableOnClickOutside && this.props.disableOnClickOutside();
	    },
	    _handleKeyDown: function _handleKeyDown(e) {
	      switch (e.keyCode) {
	        case _keyCode.BACKSPACE:
	          if (this.state.selected) {
	            // Prevent backspace keypress from triggering the browser "back"
	            // action.
	            e.preventDefault();
	            this._handleRemove();
	          }
	          break;
	      }
	    },


	    /**
	     * From `onClickOutside` HOC.
	     */
	    handleClickOutside: function handleClickOutside(e) {
	      this._handleBlur();
	    },
	    _handleRemove: function _handleRemove(e) {
	      this.props.onRemove && this.props.onRemove();
	    },
	    _handleSelect: function _handleSelect(e) {
	      e.stopPropagation();
	      this.setState({ selected: true });
	      this.props.enableOnClickOutside && this.props.enableOnClickOutside();
	    }
	  }));
	};

	exports.default = tokenBehaviors;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = warn;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(104);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {}; /**
	                  * This code is copied from: https://github.com/ReactTraining/react-router/blob/master/modules/routerWarning.js
	                  */

	function warn(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }
	    warned[message] = true;
	  }

	  message = '[react-bootstrap-typeahead] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(49),
	    setCacheAdd = __webpack_require__(77),
	    setCacheHas = __webpack_require__(78);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseFindIndex;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var basePickBy = __webpack_require__(64);

	/**
	 * The base implementation of `_.pick` without support for individual
	 * property identifiers.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 */
	function basePick(object, props) {
	  object = Object(object);
	  return basePickBy(object, props, function(value, key) {
	    return key in object;
	  });
	}

	module.exports = basePick;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(72);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var flatten = __webpack_require__(85),
	    overRest = __webpack_require__(76),
	    setToString = __webpack_require__(79);

	/**
	 * A specialized version of `baseRest` which flattens the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @returns {Function} Returns the new function.
	 */
	function flatRest(func) {
	  return setToString(overRest(func, undefined, flatten), func + '');
	}

	module.exports = flatRest;


/***/ },
/* 23 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(5);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(5);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(5);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(5);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var createFind = __webpack_require__(67),
	    findIndex = __webpack_require__(84);

	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = createFind(findIndex);

	module.exports = find;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(28);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * A higher-order-component for handling onClickOutside for React components.
	 */
	(function(root) {

	  // administrative
	  var registeredComponents = [];
	  var handlers = [];
	  var IGNORE_CLASS = 'ignore-react-onclickoutside';
	  var DEFAULT_EVENTS = ['mousedown', 'touchstart'];

	  /**
	   * Check whether some DOM node is our Component's node.
	   */
	  var isNodeFound = function(current, componentNode, ignoreClass) {
	    if (current === componentNode) {
	      return true;
	    }
	    // SVG <use/> elements do not technically reside in the rendered DOM, so
	    // they do not have classList directly, but they offer a link to their
	    // corresponding element, which can have classList. This extra check is for
	    // that case.
	    // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
	    // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17
	    if (current.correspondingElement) {
	      return current.correspondingElement.classList.contains(ignoreClass);
	    }
	    return current.classList.contains(ignoreClass);
	  };

	  /**
	   * Generate the event handler that checks whether a clicked DOM node
	   * is inside of, or lives outside of, our Component's node tree.
	   */
	  var generateOutsideCheck = function(componentNode, componentInstance, eventHandler, ignoreClass, preventDefault, stopPropagation) {
	    return function(evt) {
	      if (preventDefault) {
	        evt.preventDefault();
	      }
	      if (stopPropagation) {
	        evt.stopPropagation();
	      }
	      var current = evt.target;
	      var found = false;
	      // If source=local then this event came from 'somewhere'
	      // inside and should be ignored. We could handle this with
	      // a layered approach, too, but that requires going back to
	      // thinking in terms of Dom node nesting, running counter
	      // to React's 'you shouldn't care about the DOM' philosophy.
	      while(current.parentNode) {
	        found = isNodeFound(current, componentNode, ignoreClass);
	        if(found) return;
	        current = current.parentNode;
	      }
	      // If element is in a detached DOM, consider it 'not clicked
	      // outside', as it cannot be known whether it was outside.
	      if(current !== document) return;
	      eventHandler(evt);
	    };
	  };


	  /**
	   * This function generates the HOC function that you'll use
	   * in order to impart onOutsideClick listening to an
	   * arbitrary component. It gets called at the end of the
	   * bootstrapping code to yield an instance of the
	   * onClickOutsideHOC function defined inside setupHOC().
	   */
	  function setupHOC(root, React, ReactDOM) {

	    // The actual Component-wrapping HOC:
	    return function onClickOutsideHOC(Component, config) {
	      var wrapComponentWithOnClickOutsideHandling = React.createClass({
	        statics: {
	          /**
	           * Access the wrapped Component's class.
	           */
	          getClass: function() {
	            if (Component.getClass) {
	              return Component.getClass();
	            }
	            return Component;
	          }
	        },

	        /**
	         * Access the wrapped Component's instance.
	         */
	        getInstance: function() {
	          return Component.prototype.isReactComponent ? this.refs.instance : this;
	        },

	        // this is given meaning in componentDidMount
	        __outsideClickHandler: function() {},

	        /**
	         * Add click listeners to the current document,
	         * linked to this component's state.
	         */
	        componentDidMount: function() {
	          // If we are in an environment without a DOM such 
	          // as shallow rendering or snapshots then we exit 
	          // early to prevent any unhandled errors being thrown.
	          if (typeof document === 'undefined' || !document.createElement){
	            return;
	          }

	          var instance = this.getInstance();
	          var clickOutsideHandler;

	          if(config && typeof config.handleClickOutside === 'function') {
	            clickOutsideHandler = config.handleClickOutside(instance);
	            if(typeof clickOutsideHandler !== 'function') {
	              throw new Error('Component lacks a function for processing outside click events specified by the handleClickOutside config option.');
	            }
	          } else if(typeof instance.handleClickOutside === 'function') {
	            if (React.Component.prototype.isPrototypeOf(instance)) {
	              clickOutsideHandler = instance.handleClickOutside.bind(instance);
	            } else {
	              clickOutsideHandler = instance.handleClickOutside;
	            }
	          } else if(typeof instance.props.handleClickOutside === 'function') {
	            clickOutsideHandler = instance.props.handleClickOutside;
	          } else {
	            throw new Error('Component lacks a handleClickOutside(event) function for processing outside click events.');
	          }

	          var fn = this.__outsideClickHandler = generateOutsideCheck(
	            ReactDOM.findDOMNode(instance),
	            instance,
	            clickOutsideHandler,
	            this.props.outsideClickIgnoreClass || IGNORE_CLASS,
	            this.props.preventDefault || false,
	            this.props.stopPropagation || false
	          );

	          var pos = registeredComponents.length;
	          registeredComponents.push(this);
	          handlers[pos] = fn;

	          // If there is a truthy disableOnClickOutside property for this
	          // component, don't immediately start listening for outside events.
	          if (!this.props.disableOnClickOutside) {
	            this.enableOnClickOutside();
	          }
	        },

	        /**
	        * Track for disableOnClickOutside props changes and enable/disable click outside
	        */
	        componentWillReceiveProps: function(nextProps) {
	          if (this.props.disableOnClickOutside && !nextProps.disableOnClickOutside) {
	            this.enableOnClickOutside();
	          } else if (!this.props.disableOnClickOutside && nextProps.disableOnClickOutside) {
	            this.disableOnClickOutside();
	          }
	        },

	        /**
	         * Remove the document's event listeners
	         */
	        componentWillUnmount: function() {
	          this.disableOnClickOutside();
	          this.__outsideClickHandler = false;
	          var pos = registeredComponents.indexOf(this);
	          if( pos>-1) {
	            // clean up so we don't leak memory
	            if (handlers[pos]) { handlers.splice(pos, 1); }
	            registeredComponents.splice(pos, 1);
	          }
	        },

	        /**
	         * Can be called to explicitly enable event listening
	         * for clicks and touches outside of this element.
	         */
	        enableOnClickOutside: function() {
	          var fn = this.__outsideClickHandler;
	          if (typeof document !== 'undefined') {
	            var events = this.props.eventTypes || DEFAULT_EVENTS;
	            if (!events.forEach) {
	              events = [events];
	            }
	            events.forEach(function (eventName) {
	              document.addEventListener(eventName, fn);
	            });
	          }
	        },

	        /**
	         * Can be called to explicitly disable event listening
	         * for clicks and touches outside of this element.
	         */
	        disableOnClickOutside: function() {
	          var fn = this.__outsideClickHandler;
	          if (typeof document !== 'undefined') {
	            var events = this.props.eventTypes || DEFAULT_EVENTS;
	            if (!events.forEach) {
	              events = [events];
	            }
	            events.forEach(function (eventName) {
	              document.removeEventListener(eventName, fn);
	            });
	          }
	        },

	        /**
	         * Pass-through render
	         */
	        render: function() {
	          var passedProps = this.props;
	          var props = {};
	          Object.keys(this.props).forEach(function(key) {
	            props[key] = passedProps[key];
	          });
	          if (Component.prototype.isReactComponent) {
	            props.ref = 'instance';
	          }
	          props.disableOnClickOutside = this.disableOnClickOutside;
	          props.enableOnClickOutside = this.enableOnClickOutside;
	          return React.createElement(Component, props);
	        }
	      });

	      // Add display name for React devtools
	      (function bindWrappedComponentName(c, wrapper) {
	        var componentName = c.displayName || c.name || 'Component';
	        wrapper.displayName = 'OnClickOutside(' + componentName + ')';
	      }(Component, wrapComponentWithOnClickOutsideHandling));

	      return wrapComponentWithOnClickOutsideHandling;
	    };
	  }

	  /**
	   * This function sets up the library in ways that
	   * work with the various modulde loading solutions
	   * used in JavaScript land today.
	   */
	  function setupBinding(root, factory) {
	    if (true) {
	      // AMD. Register as an anonymous module.
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, ReactDom) {
	        return factory(root, React, ReactDom);
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	      // Node. Note that this does not work with strict
	      // CommonJS, but only CommonJS-like environments
	      // that support module.exports
	      module.exports = factory(root, require('react'), require('react-dom'));
	    } else {
	      // Browser globals (root is window)
	      root.onClickOutside = factory(root, React, ReactDOM);
	    }
	  }

	  // Make it all happen
	  setupBinding(root, setupHOC);

	}(this));


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactInputAutosize = __webpack_require__(103);

	var _reactInputAutosize2 = _interopRequireDefault(_reactInputAutosize);

	var _Token = __webpack_require__(13);

	var _Token2 = _interopRequireDefault(_Token);

	var _getOptionLabel = __webpack_require__(2);

	var _getOptionLabel2 = _interopRequireDefault(_getOptionLabel);

	var _keyCode = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * TokenizerInput
	 *
	 * Accepts multiple selections from a Typeahead component and renders them as
	 * tokens within an input.
	 */
	var TokenizerInput = _react2.default.createClass({
	  displayName: 'TokenizerInput',

	  /**
	   * In addition to the propTypes below, the following props are automatically
	   * passed down by `Typeahead.react`:
	   *
	   *  - activeIndex
	   *  - labelKey
	   *  - onAdd
	   *  - onBlur
	   *  - onChange
	   *  - onClick
	   *  - onFocus
	   *  - onKeydown
	   *  - onRemove
	   *  - options
	   *  - selected
	   *  - text
	   */
	  propTypes: {
	    /**
	     * Whether to disable the input and all selections.
	     */
	    disabled: _react.PropTypes.bool,
	    /**
	     * Placeholder text for the input.
	     */
	    placeholder: _react.PropTypes.string,
	    /**
	     * Provides a hook for customized rendering of tokens when multiple
	     * selections are enabled.
	     */
	    renderToken: _react.PropTypes.func
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isFocused: false
	    };
	  },
	  render: function render() {
	    var _props = this.props,
	        disabled = _props.disabled,
	        placeholder = _props.placeholder,
	        selected = _props.selected,
	        text = _props.text;


	    return _react2.default.createElement(
	      'div',
	      {
	        className: (0, _classnames2.default)('bootstrap-tokenizer', 'clearfix', 'form-control', { 'focus': this.state.isFocused }),
	        disabled: disabled,
	        onClick: this._handleInputFocus,
	        onFocus: this._handleInputFocus,
	        style: {
	          cursor: 'text',
	          height: 'auto'
	        },
	        tabIndex: -1 },
	      selected.map(this._renderToken),
	      _react2.default.createElement(_reactInputAutosize2.default, {
	        className: 'bootstrap-tokenizer-input',
	        disabled: disabled,
	        inputStyle: {
	          backgroundColor: 'inherit',
	          border: 0,
	          boxShadow: 'none',
	          cursor: 'inherit',
	          outline: 'none',
	          padding: 0
	        },
	        onBlur: this._handleBlur,
	        onChange: this._handleChange,
	        onFocus: this.props.onFocus,
	        onKeyDown: this._handleKeydown,
	        placeholder: selected.length ? null : placeholder,
	        ref: 'input',
	        type: 'text',
	        value: text
	      })
	    );
	  },
	  blur: function blur() {
	    this.refs.input.blur();
	  },
	  focus: function focus() {
	    this._handleInputFocus();
	  },
	  _renderToken: function _renderToken(option, idx) {
	    var _props2 = this.props,
	        disabled = _props2.disabled,
	        labelKey = _props2.labelKey,
	        onRemove = _props2.onRemove,
	        renderToken = _props2.renderToken;

	    var onRemoveWrapped = function onRemoveWrapped() {
	      return onRemove(option);
	    };

	    if (renderToken) {
	      return renderToken(option, onRemoveWrapped, idx);
	    }

	    return _react2.default.createElement(
	      _Token2.default,
	      {
	        disabled: disabled,
	        key: idx,
	        onRemove: onRemoveWrapped },
	      (0, _getOptionLabel2.default)(option, labelKey)
	    );
	  },
	  _handleBlur: function _handleBlur(e) {
	    this.setState({ isFocused: false });
	    this.props.onBlur(e);
	  },
	  _handleChange: function _handleChange(e) {
	    this.props.onChange(e.target.value);
	  },
	  _handleKeydown: function _handleKeydown(e) {
	    switch (e.keyCode) {
	      case _keyCode.BACKSPACE:
	        var inputNode = (0, _reactDom.findDOMNode)(this.refs.input);
	        if (inputNode && inputNode.contains(document.activeElement) && !this.props.text) {
	          // If the input is selected and there is no text, select the last
	          // token when the user hits backspace.
	          var sibling = inputNode.previousSibling;
	          sibling && sibling.focus();

	          // Prevent browser "back" action.
	          e.preventDefault();
	        }
	        break;
	    }

	    this.props.onKeyDown(e);
	  },
	  _handleInputFocus: function _handleInputFocus(e) {
	    if (this.props.disabled) {
	      e.target.blur();
	      return;
	    }

	    // If the user clicks anywhere inside the tokenizer besides a token,
	    // focus the input.
	    this.refs.input.focus();
	    this.setState({ isFocused: true });
	  }
	});

	exports.default = TokenizerInput;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _noop2 = __webpack_require__(10);

	var _noop3 = _interopRequireDefault(_noop2);

	var _isEqual2 = __webpack_require__(89);

	var _isEqual3 = _interopRequireDefault(_isEqual2);

	var _find2 = __webpack_require__(30);

	var _find3 = _interopRequireDefault(_find2);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactOnclickoutside = __webpack_require__(35);

	var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TokenizerInput = __webpack_require__(36);

	var _TokenizerInput2 = _interopRequireDefault(_TokenizerInput);

	var _TypeaheadInput = __webpack_require__(38);

	var _TypeaheadInput2 = _interopRequireDefault(_TypeaheadInput);

	var _TypeaheadMenu = __webpack_require__(39);

	var _TypeaheadMenu2 = _interopRequireDefault(_TypeaheadMenu);

	var _addCustomOption = __webpack_require__(40);

	var _addCustomOption2 = _interopRequireDefault(_addCustomOption);

	var _defaultFilterBy = __webpack_require__(41);

	var _defaultFilterBy2 = _interopRequireDefault(_defaultFilterBy);

	var _getOptionLabel = __webpack_require__(2);

	var _getOptionLabel2 = _interopRequireDefault(_getOptionLabel);

	var _getTruncatedOptions = __webpack_require__(44);

	var _getTruncatedOptions2 = _interopRequireDefault(_getTruncatedOptions);

	var _warn = __webpack_require__(15);

	var _warn2 = _interopRequireDefault(_warn);

	var _keyCode = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// TODO: Remove once `paginateResults` is completely deprecated.
	function getMaxResults(props) {
	  var maxResults = props.maxResults,
	      paginateResults = props.paginateResults;

	  // Use `maxResults` unless `paginateResults` is set.

	  return paginateResults == null ? maxResults : paginateResults;
	}

	/**
	 * Typeahead
	 */
	var Typeahead = _react2.default.createClass({
	  displayName: 'Typeahead',

	  propTypes: {
	    /**
	     * Allows the creation of new selections on the fly. Note that any new items
	     * will be added to the list of selections, but not the list of original
	     * options unless handled as such by `Typeahead`'s parent.
	     */
	    allowNew: _react.PropTypes.bool,
	    /**
	     * Whether or not filtering should be case-sensitive.
	     */
	    caseSensitive: _react.PropTypes.bool,
	    /**
	     * Specify any pre-selected options. Use only if you want the component to
	     * be uncontrolled.
	     */
	    defaultSelected: _react.PropTypes.array,
	    /**
	     * Specify whether the menu should appear above the input.
	     */
	    dropup: _react.PropTypes.bool,
	    /**
	     * Either an array of fields in `option` to search, or a custom filtering
	     * callback.
	     */
	    filterBy: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string.isRequired), _react.PropTypes.func]),
	    /**
	     * Specify which option key to use for display. By default, the selector
	     * will use the `label` key.
	     */
	    labelKey: _react.PropTypes.string,
	    /**
	     * Maximum number of results to display by default. Mostly done for
	     * performance reasons so as not to render too many DOM nodes in the case of
	     * large data sets.
	     */
	    maxResults: _react.PropTypes.number,
	    /**
	     * Number of input characters that must be entered before showing results.
	     */
	    minLength: _react.PropTypes.number,
	    /**
	     * Whether or not multiple selections are allowed.
	     */
	    multiple: _react.PropTypes.bool,
	    /**
	     * Callback fired when the input is blurred. Receives an event.
	     */
	    onBlur: _react.PropTypes.func,
	    /**
	     * Callback fired whenever items are added or removed. Receives an array of
	     * the selected options.
	     */
	    onChange: _react.PropTypes.func,
	    /**
	     * Callback fired when the input is focused. Receives an event.
	     */
	    onFocus: _react.PropTypes.func,
	    /**
	     * Callback for handling changes to the user-input text.
	     */
	    onInputChange: _react.PropTypes.func,
	    /**
	     * Full set of options, including pre-selected options. Must either be an
	     * array of objects (recommended) or strings.
	     */
	    options: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.object.isRequired), _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired)]).isRequired,
	    /**
	     * Give user the ability to display additional results if the number of
	     * results exceeds `maxResults`.
	     */
	    paginate: _react.PropTypes.bool,
	    /**
	     * DEPRECATED. Use `maxResults` and `paginate` instead.
	     */
	    paginateResults: _react.PropTypes.number,
	    /**
	     * The selected option(s) displayed in the input. Use this prop if you want
	     * to control the component via its parent.
	     */
	    selected: _react.PropTypes.array
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      allowNew: false,
	      caseSensitive: false,
	      defaultSelected: [],
	      dropup: false,
	      filterBy: [],
	      labelKey: 'label',
	      maxResults: 100,
	      onBlur: _noop3.default,
	      onChange: _noop3.default,
	      onFocus: _noop3.default,
	      onInputChange: _noop3.default,
	      minLength: 0,
	      multiple: false,
	      paginate: true,
	      selected: []
	    };
	  },
	  getInitialState: function getInitialState() {
	    var defaultSelected = this.props.defaultSelected;


	    var selected = this.props.selected.slice();
	    if (defaultSelected && defaultSelected.length) {
	      selected = defaultSelected;
	    }

	    return {
	      activeIndex: -1,
	      selected: selected,
	      showMenu: false,
	      shownResults: getMaxResults(this.props),
	      text: ''
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    (0, _warn2.default)(this.props.paginateResults == null, 'The `paginateResults` prop is deprecated and will be removed in an ' + 'upcoming release. Use `maxResults` and `paginate` instead.');
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var multiple = nextProps.multiple,
	        selected = nextProps.selected;


	    if (!(0, _isEqual3.default)(selected, this.props.selected)) {
	      // If new selections are passed in via props, treat the component as a
	      // controlled input.
	      this.setState({ selected: selected });
	    }

	    if (multiple !== this.props.multiple) {
	      this.setState({ text: '' });
	    }
	  },
	  render: function render() {
	    var _props = this.props,
	        allowNew = _props.allowNew,
	        className = _props.className,
	        dropup = _props.dropup,
	        labelKey = _props.labelKey,
	        paginate = _props.paginate;
	    var _state = this.state,
	        shownResults = _state.shownResults,
	        text = _state.text;

	    // First filter the results by the input string.

	    var results = this._getFilteredResults();

	    // This must come before we truncate.
	    var shouldPaginate = paginate && results.length > shownResults;

	    // Truncate if necessary.
	    results = (0, _getTruncatedOptions2.default)(results, shownResults);

	    // Add the custom option.
	    if (allowNew) {
	      results = (0, _addCustomOption2.default)(results, text, labelKey);
	    }

	    return _react2.default.createElement(
	      'div',
	      {
	        className: (0, _classnames2.default)('bootstrap-typeahead', 'open', {
	          'dropup': dropup
	        }, className),
	        style: { position: 'relative' } },
	      _react2.default.createElement(
	        'div',
	        null,
	        'test'
	      ),
	      this._renderInput(results),
	      this._renderMenu(results, shouldPaginate)
	    );
	  },
	  _getFilteredResults: function _getFilteredResults() {
	    var _props2 = this.props,
	        caseSensitive = _props2.caseSensitive,
	        labelKey = _props2.labelKey,
	        minLength = _props2.minLength,
	        multiple = _props2.multiple,
	        options = _props2.options;
	    var _state2 = this.state,
	        selected = _state2.selected,
	        text = _state2.text;


	    if (text.length < minLength) {
	      return [];
	    }

	    var filterBy = this.props.filterBy;

	    if (Array.isArray(filterBy)) {
	      (function () {
	        var fields = filterBy;
	        filterBy = function filterBy(option) {
	          return (0, _defaultFilterBy2.default)(option, labelKey, multiple && !!(0, _find3.default)(selected, function (o) {
	            return (0, _isEqual3.default)(o, option);
	          }), text, { caseSensitive: caseSensitive, fields: fields });
	        };
	      })();
	    }

	    return options.filter(filterBy);
	  },
	  blur: function blur() {
	    this.refs.input.blur();
	  },


	  /**
	   * Public method to allow external clearing of the input. Clears both text
	   * and selection(s).
	   */
	  clear: function clear() {
	    var _getInitialState = this.getInitialState(),
	        activeIndex = _getInitialState.activeIndex,
	        showMenu = _getInitialState.showMenu;

	    var selected = [];
	    var text = '';

	    this.setState({
	      activeIndex: activeIndex,
	      selected: selected,
	      showMenu: showMenu,
	      text: text
	    });

	    this.props.onChange(selected);
	    this.props.onInputChange(text);
	  },
	  focus: function focus() {
	    this.refs.input.focus();
	  },
	  _renderInput: function _renderInput(optionsToDisplay) {
	    var _this = this;

	    var _props3 = this.props,
	        disabled = _props3.disabled,
	        labelKey = _props3.labelKey,
	        multiple = _props3.multiple,
	        name = _props3.name,
	        placeholder = _props3.placeholder,
	        renderToken = _props3.renderToken;
	    var _state3 = this.state,
	        activeIndex = _state3.activeIndex,
	        selected = _state3.selected,
	        text = _state3.text;

	    var Input = multiple ? _TokenizerInput2.default : _TypeaheadInput2.default;
	    var inputProps = { disabled: disabled, name: name, placeholder: placeholder, renderToken: renderToken };

	    return _react2.default.createElement(Input, _extends({}, inputProps, {
	      activeIndex: activeIndex,
	      labelKey: labelKey,
	      onAdd: this._handleAddOption,
	      onBlur: this._handleBlur,
	      onChange: this._handleTextChange,
	      onFocus: this._handleFocus,
	      onKeyDown: function onKeyDown(e) {
	        return _this._handleKeydown(optionsToDisplay, e);
	      },
	      onRemove: this._handleRemoveOption,
	      options: optionsToDisplay,
	      ref: 'input',
	      selected: selected.slice(),
	      text: text
	    }));
	  },
	  _renderMenu: function _renderMenu(optionsToDisplay, shouldPaginate) {
	    var _props4 = this.props,
	        align = _props4.align,
	        emptyLabel = _props4.emptyLabel,
	        labelKey = _props4.labelKey,
	        maxHeight = _props4.maxHeight,
	        minLength = _props4.minLength,
	        newSelectionPrefix = _props4.newSelectionPrefix,
	        paginationText = _props4.paginationText,
	        renderMenuItemChildren = _props4.renderMenuItemChildren;
	    var _state4 = this.state,
	        activeIndex = _state4.activeIndex,
	        showMenu = _state4.showMenu,
	        text = _state4.text;


	    if (!(showMenu && text.length >= minLength)) {
	      return null;
	    }

	    var menuProps = {
	      align: align,
	      emptyLabel: emptyLabel,
	      maxHeight: maxHeight,
	      newSelectionPrefix: newSelectionPrefix,
	      paginationText: paginationText,
	      renderMenuItemChildren: renderMenuItemChildren
	    };

	    return _react2.default.createElement(_TypeaheadMenu2.default, _extends({}, menuProps, {
	      activeIndex: activeIndex,
	      labelKey: labelKey,
	      onClick: this._handleAddOption,
	      onPaginate: this._handlePagination,
	      options: optionsToDisplay,
	      paginate: shouldPaginate,
	      text: text
	    }));
	  },
	  _handleBlur: function _handleBlur(e) {
	    // Note: Don't hide the menu here, since that interferes with other actions
	    // like making a selection by clicking on a menu item.
	    this.props.onBlur(e);
	  },
	  _handleFocus: function _handleFocus(e) {
	    this.props.onFocus(e);
	    this.setState({ showMenu: true });
	  },
	  _handleTextChange: function _handleTextChange(text) {
	    var _getInitialState2 = this.getInitialState(),
	        activeIndex = _getInitialState2.activeIndex;

	    this.setState({
	      activeIndex: activeIndex,
	      showMenu: true,
	      text: text
	    });

	    this.props.onInputChange(text);
	  },
	  _handleKeydown: function _handleKeydown(options, e) {
	    var activeIndex = this.state.activeIndex;


	    switch (e.keyCode) {
	      case _keyCode.UP:
	      case _keyCode.DOWN:
	        // Don't cycle through the options if the menu is hidden.
	        if (!this.state.showMenu) {
	          return;
	        }

	        // Prevents input cursor from going to the beginning when pressing up.
	        e.preventDefault();

	        // Increment or decrement index based on user keystroke.
	        activeIndex += e.keyCode === _keyCode.UP ? -1 : 1;

	        // If we've reached the end, go back to the beginning or vice-versa.
	        if (activeIndex === options.length) {
	          activeIndex = -1;
	        } else if (activeIndex === -2) {
	          activeIndex = options.length - 1;
	        }

	        this.setState({ activeIndex: activeIndex });
	        break;
	      case _keyCode.ESC:
	      case _keyCode.TAB:
	        // Prevent closing dialogs.
	        e.keyCode === _keyCode.ESC && e.preventDefault();

	        this._hideDropdown();
	        break;
	      case _keyCode.RETURN:
	        // Prevent submitting forms.
	        e.preventDefault();

	        if (this.state.showMenu) {
	          var selected = options[activeIndex];
	          selected && this._handleAddOption(selected);
	        }
	        break;
	    }
	  },
	  _handleAddOption: function _handleAddOption(selectedOption) {
	    var _props5 = this.props,
	        multiple = _props5.multiple,
	        labelKey = _props5.labelKey,
	        onChange = _props5.onChange,
	        onInputChange = _props5.onInputChange;


	    var selected = void 0;
	    var text = void 0;

	    if (multiple) {
	      // If multiple selections are allowed, add the new selection to the
	      // existing selections.
	      selected = this.state.selected.concat(selectedOption);
	      text = '';
	    } else {
	      // If only a single selection is allowed, replace the existing selection
	      // with the new one.
	      selected = [selectedOption];
	      text = (0, _getOptionLabel2.default)(selectedOption, labelKey);
	    }

	    this.setState({ selected: selected, text: text });
	    this._hideDropdown();

	    onChange(selected);
	    onInputChange(text);
	  },
	  _handlePagination: function _handlePagination(e) {
	    var shownResults = this.state.shownResults + getMaxResults(this.props);

	    // Keep the input focused when paginating.
	    this.focus();

	    this.setState({ shownResults: shownResults });
	  },
	  _handleRemoveOption: function _handleRemoveOption(removedOption) {
	    var selected = this.state.selected.slice();
	    selected = selected.filter(function (option) {
	      return !(0, _isEqual3.default)(option, removedOption);
	    });

	    // Make sure the input stays focused after the item is removed.
	    this.focus();

	    this.setState({ selected: selected });
	    this._hideDropdown();

	    this.props.onChange(selected);
	  },


	  /**
	   * From `listensToClickOutside` HOC.
	   */
	  handleClickOutside: function handleClickOutside(e) {
	    this._hideDropdown();
	  },
	  _hideDropdown: function _hideDropdown() {
	    var _getInitialState3 = this.getInitialState(),
	        activeIndex = _getInitialState3.activeIndex,
	        showMenu = _getInitialState3.showMenu,
	        shownResults = _getInitialState3.shownResults;

	    this.setState({
	      activeIndex: activeIndex,
	      showMenu: showMenu,
	      shownResults: shownResults
	    });
	  }
	});

	exports.default = (0, _reactOnclickoutside2.default)(Typeahead);

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _head2 = __webpack_require__(9);

	var _head3 = _interopRequireDefault(_head2);

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _getHintText = __webpack_require__(42);

	var _getHintText2 = _interopRequireDefault(_getHintText);

	var _getInputText = __webpack_require__(43);

	var _getInputText2 = _interopRequireDefault(_getInputText);

	var _keyCode = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * TypeaheadInput
	 *
	 * Handles a single selection from the Typeahead component.
	 */
	var TypeaheadInput = _react2.default.createClass({
	  displayName: 'TypeaheadInput',

	  /**
	   * In addition to the propTypes below, the following props are automatically
	   * passed down by `Typeahead.react`:
	   *
	   *  - activeIndex
	   *  - labelKey
	   *  - onAdd
	   *  - onBlur
	   *  - onChange
	   *  - onClick
	   *  - onFocus
	   *  - onKeydown
	   *  - onRemove
	   *  - options
	   *  - selected
	   *  - text
	   */
	  propTypes: {
	    /**
	     * Whether to disable the input and any selection, if present.
	     */
	    disabled: _react.PropTypes.bool,
	    /**
	     * Name property for the input.
	     */
	    name: _react.PropTypes.string,
	    /**
	     * Placeholder text for the input.
	     */
	    placeholder: _react.PropTypes.string
	  },

	  getInitialState: function getInitialState() {
	    return {
	      isFocused: false
	    };
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    if (this.props.activeIndex !== prevProps.activeIndex) {
	      var inputText = (0, _getInputText2.default)(this.props);
	      this.refs.input.selectionStart = inputText.length;
	    }
	  },
	  render: function render() {
	    var _props = this.props,
	        className = _props.className,
	        disabled = _props.disabled,
	        name = _props.name,
	        onFocus = _props.onFocus,
	        placeholder = _props.placeholder,
	        selected = _props.selected;


	    var inputProps = { disabled: disabled, name: name, onFocus: onFocus, placeholder: placeholder };

	    return _react2.default.createElement(
	      'div',
	      {
	        className: (0, _classnames2.default)('bootstrap-typeahead-input', className),
	        onClick: this._handleInputFocus,
	        onFocus: this._handleInputFocus,
	        style: {
	          outline: 'none',
	          position: 'relative'
	        },
	        tabIndex: -1 },
	      _react2.default.createElement('input', _extends({}, inputProps, {
	        autoComplete: 'off',
	        className: (0, _classnames2.default)('bootstrap-typeahead-input-main', 'form-control', {
	          'has-selection': !!selected.length
	        }),
	        onBlur: this._handleBlur,
	        onChange: this._handleChange,
	        onKeyDown: this._handleKeydown,
	        ref: 'input',
	        style: {
	          backgroundColor: !disabled && 'transparent',
	          display: 'block',
	          position: 'relative',
	          zIndex: 1
	        },
	        type: 'text',
	        value: (0, _getInputText2.default)(this.props)
	      })),
	      _react2.default.createElement('input', {
	        className: 'bootstrap-typeahead-input-hint form-control',
	        style: {
	          borderColor: 'transparent',
	          bottom: 0,
	          boxShadow: 'none',
	          display: 'block',
	          opacity: 0.6,
	          position: 'absolute',
	          top: 0,
	          width: '100%',
	          zIndex: 0
	        },
	        tabIndex: -1,
	        type: 'text',
	        value: (0, _getHintText2.default)(this.props, this.state.isFocused)
	      })
	    );
	  },
	  blur: function blur() {
	    this.refs.input.blur();
	  },
	  focus: function focus() {
	    this._handleInputFocus();
	  },
	  _handleBlur: function _handleBlur(e) {
	    this.setState({ isFocused: false });
	    this.props.onBlur(e);
	  },
	  _handleChange: function _handleChange(e) {
	    // Clear any selections when text is entered.
	    var _props2 = this.props,
	        onRemove = _props2.onRemove,
	        selected = _props2.selected;

	    !!selected.length && onRemove((0, _head3.default)(selected));

	    this.props.onChange(e.target.value);
	  },


	  /**
	   * If the containing parent div is focused or clicked, focus the input.
	   */
	  _handleInputFocus: function _handleInputFocus(e) {
	    this.setState({ isFocused: true });
	    this.refs.input.focus();
	  },
	  _handleKeydown: function _handleKeydown(e) {
	    var _props3 = this.props,
	        activeIndex = _props3.activeIndex,
	        options = _props3.options,
	        onAdd = _props3.onAdd,
	        selected = _props3.selected,
	        text = _props3.text;


	    switch (e.keyCode) {
	      case _keyCode.RIGHT:
	      case _keyCode.TAB:
	        var cursorPos = this.refs.input.selectionStart;
	        var hasHintText = !!(0, _getHintText2.default)(this.props, this.state.isFocused);

	        // Autocomplete the selection if all of the following are true:
	        if (
	        // There's a hint or a menu item is highlighted.
	        (hasHintText || activeIndex !== -1) &&
	        // There's no current selection.
	        !selected.length &&
	        // The input cursor is at the end of the text string when the user
	        // hits the right arrow key.
	        !(e.keyCode === _keyCode.RIGHT && cursorPos !== text.length)) {
	          e.preventDefault();

	          var selectedOption = hasHintText ? (0, _head3.default)(options) : options[activeIndex];

	          onAdd && onAdd(selectedOption);
	        }
	        break;
	    }

	    this.props.onKeyDown(e);
	  }
	});

	exports.default = TypeaheadInput;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _pick2 = __webpack_require__(96);

	var _pick3 = _interopRequireDefault(_pick2);

	var _reactHighlighter = __webpack_require__(101);

	var _reactHighlighter2 = _interopRequireDefault(_reactHighlighter);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Menu = __webpack_require__(12);

	var _Menu2 = _interopRequireDefault(_Menu);

	var _MenuItem = __webpack_require__(7);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _getOptionLabel = __webpack_require__(2);

	var _getOptionLabel2 = _interopRequireDefault(_getOptionLabel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TypeaheadMenu = _react2.default.createClass({
	  displayName: 'TypeaheadMenu',

	  /**
	   * In addition to the propTypes below, the following props are automatically
	   * passed down by `Typeahead.react`:
	   *
	   *  - activeIndex
	   *  - labelKey
	   *  - onClick
	   *  - onPaginate
	   *  - options
	   *  - paginate
	   *  - text
	   */
	  propTypes: {
	    /**
	     * Provides the ability to specify a prefix before the user-entered text to
	     * indicate that the selection will be new. No-op unless `allowNew={true}`.
	     */
	    newSelectionPrefix: _react.PropTypes.string,
	    /**
	     * Provides a hook for customized rendering of menu item contents.
	     */
	    renderMenuItemChildren: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      newSelectionPrefix: 'New selection: '
	    };
	  },
	  render: function render() {
	    var menuProps = (0, _pick3.default)(this.props, ['align', 'emptyLabel', 'maxHeight', 'onPaginate', 'paginate', 'paginationText']);

	    return _react2.default.createElement(
	      _Menu2.default,
	      menuProps,
	      this.props.options.map(this._renderMenuItem)
	    );
	  },
	  _renderMenuItem: function _renderMenuItem(option, idx) {
	    var _props = this.props,
	        activeIndex = _props.activeIndex,
	        labelKey = _props.labelKey,
	        newSelectionPrefix = _props.newSelectionPrefix,
	        _onClick = _props.onClick,
	        renderMenuItemChildren = _props.renderMenuItemChildren,
	        text = _props.text;


	    var menuItemProps = {
	      active: idx === activeIndex,
	      disabled: option.disabled,
	      key: idx,
	      onClick: function onClick() {
	        return _onClick(option);
	      }
	    };

	    if (option.customOption) {
	      return _react2.default.createElement(
	        _MenuItem2.default,
	        menuItemProps,
	        newSelectionPrefix,
	        _react2.default.createElement(
	          _reactHighlighter2.default,
	          { search: text },
	          option[labelKey]
	        )
	      );
	    }

	    return renderMenuItemChildren ? _react2.default.createElement(
	      _MenuItem2.default,
	      menuItemProps,
	      renderMenuItemChildren(this.props, option, idx)
	    ) : _react2.default.createElement(
	      _MenuItem2.default,
	      menuItemProps,
	      _react2.default.createElement(
	        _reactHighlighter2.default,
	        { search: text },
	        (0, _getOptionLabel2.default)(option, labelKey)
	      )
	    );
	  }
	});

	exports.default = TypeaheadMenu;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _uniqueId2 = __webpack_require__(100);

	var _uniqueId3 = _interopRequireDefault(_uniqueId2);

	var _find2 = __webpack_require__(30);

	var _find3 = _interopRequireDefault(_find2);

	var _getOptionLabel = __webpack_require__(2);

	var _getOptionLabel2 = _interopRequireDefault(_getOptionLabel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addCustomOption(results, text, labelKey) {
	  results = results.slice();

	  var exactMatchFound = (0, _find3.default)(results, function (o) {
	    return (0, _getOptionLabel2.default)(o, labelKey) === text;
	  });

	  if (!text.trim() || exactMatchFound) {
	    return results;
	  }

	  var newOption = {
	    id: (0, _uniqueId3.default)('new-id-'),
	    customOption: true
	  };
	  newOption[labelKey] = text;
	  results.push(newOption);

	  return results;
	}

	exports.default = addCustomOption;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _some2 = __webpack_require__(97);

	var _some3 = _interopRequireDefault(_some2);

	exports.default = defaultFilterBy;

	var _warn = __webpack_require__(15);

	var _warn2 = _interopRequireDefault(_warn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isMatch(input, string, caseSensitive) {
	  if (!caseSensitive) {
	    input = input.toLowerCase();
	    string = string.toLowerCase();
	  }
	  return string.indexOf(input) !== -1;
	}

	/**
	 * Default algorithm for filtering results.
	 */
	function defaultFilterBy(option, labelKey, isTokenized, text, filterOptions) {
	  // Don't show selected options in the menu for the multi-select case.
	  if (isTokenized) {
	    return false;
	  }

	  var caseSensitive = filterOptions.caseSensitive;

	  var fields = filterOptions.fields.slice();

	  // Add the `labelKey` field to the list of fields if it isn't already there.
	  if (fields.indexOf(labelKey) === -1) {
	    fields.unshift(labelKey);
	  }

	  if (typeof option === 'string') {
	    (0, _warn2.default)(fields.length === 1, 'You cannot filter by properties when `option` is a string.');

	    return isMatch(text, option, caseSensitive);
	  }

	  return (0, _some3.default)(fields, function (field) {
	    var value = option[field];

	    if (typeof value !== 'string') {
	      (0, _warn2.default)(false, 'Fields passed to `filterBy` should have string values. Value will ' + 'be converted to a string; results may be unexpected.');

	      // Coerce to string since `toString` isn't null-safe.
	      value = value + '';
	    }

	    return isMatch(text, value, caseSensitive);
	  });
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _head2 = __webpack_require__(9);

	var _head3 = _interopRequireDefault(_head2);

	var _getOptionLabel = __webpack_require__(2);

	var _getOptionLabel2 = _interopRequireDefault(_getOptionLabel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getHintText(props, isFocused) {
	  var activeIndex = props.activeIndex,
	      labelKey = props.labelKey,
	      options = props.options,
	      selected = props.selected,
	      text = props.text;

	  var firstOption = (0, _head3.default)(options);
	  var firstOptionString = firstOption && (0, _getOptionLabel2.default)(firstOption, labelKey);

	  // Only show the hint if:
	  if (
	  // The input is focused.
	  isFocused &&
	  // The input contains text.
	  !!text &&
	  // None of the menu options are focused.
	  activeIndex === -1 &&
	  // There are no current selections.
	  !selected.length &&
	  // The input text corresponds to the beginning of the first option.
	  firstOptionString && firstOptionString.toLowerCase().indexOf(text.toLowerCase()) === 0) {
	    // Text matching is case-insensitive, so to display the hint correctly,
	    // splice the input text with the rest of the actual string.
	    return text + firstOptionString.slice(text.length, firstOptionString.length);
	  }

	  return '';
	}

	exports.default = getHintText;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _head2 = __webpack_require__(9);

	var _head3 = _interopRequireDefault(_head2);

	var _getOptionLabel = __webpack_require__(2);

	var _getOptionLabel2 = _interopRequireDefault(_getOptionLabel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getInputText(props) {
	  var activeIndex = props.activeIndex,
	      labelKey = props.labelKey,
	      options = props.options,
	      selected = props.selected,
	      text = props.text;


	  var selectedItem = !!selected.length && (0, _head3.default)(selected);
	  if (selectedItem) {
	    return (0, _getOptionLabel2.default)(selectedItem, labelKey);
	  }

	  if (activeIndex >= 0) {
	    return (0, _getOptionLabel2.default)(options[activeIndex], labelKey);
	  }

	  return text;
	}

	exports.default = getInputText;

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Truncates the result set based on `maxResults` and returns the new set.
	 */
	function getTruncatedOptions(options, maxResults) {
	  if (!maxResults || maxResults >= options.length) {
	    return options;
	  }

	  return options.slice(0, maxResults);
	}

	exports.default = getTruncatedOptions;

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Partial polyfill for webkit `scrollIntoViewIfNeeded()` method. Addresses
	 * vertical scrolling only.
	 *
	 * Inspired by https://gist.github.com/hsablonniere/2581101, but uses
	 * `getBoundingClientRect`.
	 */
	function scrollIntoViewIfNeeded(node) {
	  // Webkit browsers
	  if (Element.prototype.scrollIntoViewIfNeeded) {
	    node.scrollIntoViewIfNeeded();
	    return;
	  }

	  // FF, IE, etc.
	  var rect = node.getBoundingClientRect();
	  var parent = node.parentNode;
	  var parentRect = parent.getBoundingClientRect();

	  var parentComputedStyle = window.getComputedStyle(parent, null);
	  var parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue('border-top-width'));

	  if (rect.top < parentRect.top || rect.bottom > parentRect.bottom) {
	    parent.scrollTop = node.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + node.clientHeight / 2;
	  }
	}

	exports.default = scrollIntoViewIfNeeded;

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = function blacklist (src) {
	  var copy = {}
	  var filter = arguments[1]

	  if (typeof filter === 'string') {
	    filter = {}
	    for (var i = 1; i < arguments.length; i++) {
	      filter[arguments[i]] = true
	    }
	  }

	  for (var key in src) {
	    // blacklist?
	    if (filter[key]) continue

	    copy[key] = src[key]
	  }

	  return copy
	}


/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

	module.exports = function (str) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}

		return str.replace(matchOperatorsRe, '\\$&');
	};


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(23),
	    listCacheDelete = __webpack_require__(24),
	    listCacheGet = __webpack_require__(25),
	    listCacheHas = __webpack_require__(26),
	    listCacheSet = __webpack_require__(27);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(23),
	    listCacheDelete = __webpack_require__(24),
	    listCacheGet = __webpack_require__(25),
	    listCacheHas = __webpack_require__(26),
	    listCacheSet = __webpack_require__(27);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(60);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(21);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(16),
	    arrayIncludes = __webpack_require__(52),
	    arrayIncludesWith = __webpack_require__(53),
	    arrayMap = __webpack_require__(8),
	    baseUnary = __webpack_require__(66),
	    cacheHas = __webpack_require__(20);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of methods like `_.difference` without support
	 * for excluding multiple arrays or iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      isCommon = true,
	      length = array.length,
	      result = [],
	      valuesLength = values.length;

	  if (!length) {
	    return result;
	  }
	  if (iteratee) {
	    values = arrayMap(values, baseUnary(iteratee));
	  }
	  if (comparator) {
	    includes = arrayIncludesWith;
	    isCommon = false;
	  }
	  else if (values.length >= LARGE_ARRAY_SIZE) {
	    includes = cacheHas;
	    isCommon = false;
	    values = new SetCache(values);
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === computed) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (!includes(values, computed, comparator)) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * Gets the first element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias first
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the first element of `array`.
	 * @example
	 *
	 * _.head([1, 2, 3]);
	 * // => 1
	 *
	 * _.head([]);
	 * // => undefined
	 */
	function head(array) {
	  return (array && array.length) ? array[0] : undefined;
	}

	module.exports = head;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(54),
	    isArray = __webpack_require__(31);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(17),
	    baseIsNaN = __webpack_require__(63),
	    strictIndexOf = __webpack_require__(81);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  return value === value
	    ? strictIndexOf(array, value, fromIndex)
	    : baseFindIndex(array, baseIsNaN, fromIndex);
	}

	module.exports = baseIndexOf;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(62),
	    isObject = __webpack_require__(32),
	    isObjectLike = __webpack_require__(33);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(50),
	    equalArrays = __webpack_require__(68),
	    equalByTag = __webpack_require__(69),
	    equalObjects = __webpack_require__(70),
	    getTag = __webpack_require__(75),
	    isArray = __webpack_require__(31),
	    isBuffer = __webpack_require__(88),
	    isTypedArray = __webpack_require__(93);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 63 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	function baseIsNaN(value) {
	  return value !== value;
	}

	module.exports = baseIsNaN;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(56);

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property identifiers to pick from.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, props, predicate) {
	  var index = -1,
	      length = props.length,
	      result = {};

	  while (++index < length) {
	    var key = props[index],
	        value = object[key];

	    if (predicate(value, key)) {
	      baseAssignValue(result, key, value);
	    }
	  }
	  return result;
	}

	module.exports = basePickBy;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(82),
	    defineProperty = __webpack_require__(21),
	    identity = __webpack_require__(86);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(18),
	    isArrayLike = __webpack_require__(87),
	    keys = __webpack_require__(34);

	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(findIndexFunc) {
	  return function(collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike(collection)) {
	      var iteratee = baseIteratee(predicate, 3);
	      collection = keys(collection);
	      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}

	module.exports = createFind;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(16),
	    arraySome = __webpack_require__(55),
	    cacheHas = __webpack_require__(20);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(34);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(59),
	    getSymbolsIn = __webpack_require__(74),
	    keysIn = __webpack_require__(94);

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	module.exports = getAllKeysIn;


/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(28);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	module.exports = stubArray;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(51);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ },
/* 77 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 78 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(65),
	    shortOut = __webpack_require__(80);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ },
/* 80 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 500,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function strictIndexOf(array, value, fromIndex) {
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = strictIndexOf;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ },
/* 83 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var baseFindIndex = __webpack_require__(17),
	    baseIteratee = __webpack_require__(18),
	    toInteger = __webpack_require__(98);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}

	module.exports = findIndex;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(58);

	/**
	 * Flattens `array` a single level deep.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to flatten.
	 * @returns {Array} Returns the new flattened array.
	 * @example
	 *
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */
	function flatten(array) {
	  var length = array ? array.length : 0;
	  return length ? baseFlatten(array, 1) : [];
	}

	module.exports = flatten;


/***/ },
/* 86 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(90),
	    isLength = __webpack_require__(91);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(61);

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are **not** supported.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}

	module.exports = isEqual;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(73),
	    isObjectLike = __webpack_require__(33);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 93 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 94 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(8),
	    baseDifference = __webpack_require__(57),
	    basePick = __webpack_require__(19),
	    flatRest = __webpack_require__(22),
	    getAllKeysIn = __webpack_require__(71),
	    toKey = __webpack_require__(29);

	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable string keyed properties of `object` that are
	 * not omitted.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property identifiers to omit.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.omit(object, ['a', 'c']);
	 * // => { 'b': '2' }
	 */
	var omit = flatRest(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  props = arrayMap(props, toKey);
	  return basePick(object, baseDifference(getAllKeysIn(object), props));
	});

	module.exports = omit;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(8),
	    basePick = __webpack_require__(19),
	    flatRest = __webpack_require__(22),
	    toKey = __webpack_require__(29);

	/**
	 * Creates an object composed of the picked `object` properties.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {...(string|string[])} [props] The property identifiers to pick.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pick(object, ['a', 'c']);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var pick = flatRest(function(object, props) {
	  return object == null ? {} : basePick(object, arrayMap(props, toKey));
	});

	module.exports = pick;


/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 98 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(99);

	/** Used to generate unique IDs. */
	var idCounter = 0;

	/**
	 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {string} [prefix=''] The value to prefix the ID with.
	 * @returns {string} Returns the unique ID.
	 * @example
	 *
	 * _.uniqueId('contact_');
	 * // => 'contact_104'
	 *
	 * _.uniqueId();
	 * // => '105'
	 */
	function uniqueId(prefix) {
	  var id = ++idCounter;
	  return toString(prefix) + id;
	}

	module.exports = uniqueId;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var RegExpPropType = __webpack_require__(102);
	var escapeStringRegexp = __webpack_require__(47);
	var blacklist = __webpack_require__(46);

	var Highlighter = React.createClass({displayName: "Highlighter",
	  count: 0,

	  propTypes: {
	    search: React.PropTypes.oneOfType([
	      React.PropTypes.string,
	      React.PropTypes.number,
	      React.PropTypes.bool,
	      RegExpPropType
	    ]).isRequired,
	    caseSensitive: React.PropTypes.bool,
	    matchElement: React.PropTypes.string,
	    matchClass: React.PropTypes.string,
	    matchStyle: React.PropTypes.object
	  },

	  getDefaultProps: function() {
	    return {
	      caseSensitive: false,
	      matchElement: 'strong',
	      matchClass: 'highlight',
	      matchStyle: {}
	    }
	  },

	  render: function() {
	    var props = blacklist(this.props, 'search', 'caseSensitive', 'matchElement', 'matchClass', 'matchStyle');

	    return React.createElement('span', props, this.renderElement(this.props.children));
	  },

	  /**
	   * A wrapper to the highlight method to determine when the highlighting
	   * process should occur.
	   *
	   * @param  {string} subject
	   *   The body of text that will be searched for highlighted words.
	   *
	   * @return {Array}
	   *   An array of ReactElements
	   */
	  renderElement: function(subject) {
	    if (this.isScalar() && this.hasSearch()) {
	      var search = this.getSearch();
	      return this.highlightChildren(subject, search);
	    }

	    return this.props.children;
	  },

	  /**
	   * Determine if props are valid types for processing.
	   *
	   * @return {Boolean}
	   */
	  isScalar: function() {
	    return (/string|number|boolean/).test(typeof this.props.children);
	  },

	  /**
	   * Determine if required search prop is defined and valid.
	   *
	   * @return {Boolean}
	   */
	  hasSearch: function() {
	    return (typeof this.props.search !== 'undefined') && this.props.search;
	  },

	  /**
	   * Get the search prop, but always in the form of a regular expression. Use
	   * this as a proxy to this.props.search for consistency.
	   *
	   * @return {RegExp}
	   */
	  getSearch: function() {
	    if (this.props.search instanceof RegExp) {
	      return this.props.search;
	    }

	    var flags = '';
	    if (!this.props.caseSensitive) {
	      flags +='i';
	    }

	    var search = this.props.search;
	    if (typeof this.props.search === 'string') {
	      search = escapeStringRegexp(search);
	    }

	    return new RegExp(search, flags);
	  },

	  /**
	   * Get the indexes of the first and last characters of the matched string.
	   *
	   * @param  {string} subject
	   *   The string to search against.
	   *
	   * @param  {RegExp} search
	   *   The regex search query.
	   *
	   * @return {Object}
	   *   An object consisting of "first" and "last" properties representing the
	   *   indexes of the first and last characters of a matching string.
	   */
	  getMatchBoundaries: function(subject, search) {
	    var matches = search.exec(subject);
	    if (matches) {
	      return {
	        first: matches.index,
	        last: matches.index + matches[0].length
	      };
	    }
	  },

	  /**
	   * Determines which strings of text should be highlighted or not.
	   *
	   * @param  {string} subject
	   *   The body of text that will be searched for highlighted words.
	   * @param  {string} search
	   *   The search used to search for highlighted words.
	   *
	   * @return {Array}
	   *   An array of ReactElements
	   */
	  highlightChildren: function(subject, search) {
	    var children = [];
	    var matchElement = this.props.matchElement;
	    var remaining = subject;

	    while (remaining) {
	      if (!search.test(remaining)) {
	        children.push(this.renderPlain(remaining));
	        return children;
	      }

	      var boundaries = this.getMatchBoundaries(remaining, search);

	      // Capture the string that leads up to a match...
	      var nonMatch = remaining.slice(0, boundaries.first);
	      if (nonMatch) {
	        children.push(this.renderPlain(nonMatch));
	      }

	      // Now, capture the matching string...
	      var match = remaining.slice(boundaries.first, boundaries.last);
	      if (match) {
	        children.push(this.renderHighlight(match, matchElement));
	      }

	      // And if there's anything left over, recursively run this method again.
	      remaining = remaining.slice(boundaries.last);

	    }

	    return children;
	  },

	  /**
	   * Responsible for rending a non-highlighted element.
	   *
	   * @param  {string} string
	   *   A string value to wrap an element around.
	   *
	   * @return {ReactElement}
	   */
	  renderPlain: function(string) {
	    this.count++;
	    return React.DOM.span({'key': this.count}, string);
	  },

	  /**
	   * Responsible for rending a highlighted element.
	   *
	   * @param  {string} string
	   *   A string value to wrap an element around.
	   *
	   * @return {ReactElement}
	   */
	  renderHighlight: function(string) {
	    this.count++;
	    return React.DOM[this.props.matchElement]({
	      key: this.count,
	      className: this.props.matchClass,
	      style: this.props.matchStyle
	    }, string);
	  }
	});

	module.exports = Highlighter;


/***/ },
/* 102 */
/***/ function(module, exports) {

	var regExpPropType = function (props, propName, componentName, location) {
	  if (!(props[propName] instanceof RegExp)) {
	    var propType = typeof props[propName];

	    return new Error(
	      ("Invalid " + location + " `" + propName + "` of type `" + propType + "` ") +
	        ("supplied to `" + componentName + "`, expected `RegExp`.")
	    );
	  }
	};

	module.exports = regExpPropType;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);

	var sizerStyle = { position: 'absolute', top: 0, left: 0, visibility: 'hidden', height: 0, overflow: 'scroll', whiteSpace: 'pre' };

	var AutosizeInput = React.createClass({
		displayName: 'AutosizeInput',

		propTypes: {
			className: React.PropTypes.string, // className for the outer element
			defaultValue: React.PropTypes.any, // default field value
			inputClassName: React.PropTypes.string, // className for the input element
			inputStyle: React.PropTypes.object, // css styles for the input element
			minWidth: React.PropTypes.oneOfType([// minimum width for input element
			React.PropTypes.number, React.PropTypes.string]),
			onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
			placeholder: React.PropTypes.string, // placeholder text
			placeholderIsMinWidth: React.PropTypes.bool, // don't collapse size to less than the placeholder
			style: React.PropTypes.object, // css styles for the outer element
			value: React.PropTypes.any },
		// field value
		getDefaultProps: function getDefaultProps() {
			return {
				minWidth: 1
			};
		},
		getInitialState: function getInitialState() {
			return {
				inputWidth: this.props.minWidth
			};
		},
		componentDidMount: function componentDidMount() {
			this.copyInputStyles();
			this.updateInputWidth();
		},
		componentDidUpdate: function componentDidUpdate() {
			this.updateInputWidth();
		},
		copyInputStyles: function copyInputStyles() {
			if (!this.isMounted() || !window.getComputedStyle) {
				return;
			}
			var inputStyle = window.getComputedStyle(this.refs.input);
			if (!inputStyle) {
				return;
			}
			var widthNode = this.refs.sizer;
			widthNode.style.fontSize = inputStyle.fontSize;
			widthNode.style.fontFamily = inputStyle.fontFamily;
			widthNode.style.fontWeight = inputStyle.fontWeight;
			widthNode.style.fontStyle = inputStyle.fontStyle;
			widthNode.style.letterSpacing = inputStyle.letterSpacing;
			if (this.props.placeholder) {
				var placeholderNode = this.refs.placeholderSizer;
				placeholderNode.style.fontSize = inputStyle.fontSize;
				placeholderNode.style.fontFamily = inputStyle.fontFamily;
				placeholderNode.style.fontWeight = inputStyle.fontWeight;
				placeholderNode.style.fontStyle = inputStyle.fontStyle;
				placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
			}
		},
		updateInputWidth: function updateInputWidth() {
			if (!this.isMounted() || typeof this.refs.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = undefined;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.refs.sizer.scrollWidth, this.refs.placeholderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.refs.sizer.scrollWidth + 2;
			}
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		},
		getInput: function getInput() {
			return this.refs.input;
		},
		focus: function focus() {
			this.refs.input.focus();
		},
		blur: function blur() {
			this.refs.input.blur();
		},
		select: function select() {
			this.refs.input.select();
		},
		render: function render() {
			var sizerValue = this.props.defaultValue || this.props.value || '';
			var wrapperStyle = this.props.style || {};
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';
			var inputStyle = _extends({}, this.props.inputStyle);
			inputStyle.width = this.state.inputWidth + 'px';
			inputStyle.boxSizing = 'content-box';
			var inputProps = _extends({}, this.props);
			inputProps.className = this.props.inputClassName;
			inputProps.style = inputStyle;
			// ensure props meant for `AutosizeInput` don't end up on the `input`
			delete inputProps.inputClassName;
			delete inputProps.inputStyle;
			delete inputProps.minWidth;
			delete inputProps.placeholderIsMinWidth;
			return React.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				React.createElement('input', _extends({}, inputProps, { ref: 'input' })),
				React.createElement(
					'div',
					{ ref: 'sizer', style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? React.createElement(
					'div',
					{ ref: 'placeholderSizer', style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	});

	module.exports = AutosizeInput;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }
/******/ ])
});
;