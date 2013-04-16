/* Octopress fingerprint: 0cfcbaf3df8a99b665e872bfaf0d36c1 */
/*! Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-video-shiv-cssclasses-addtest-testprop-testallprops-domprefixes-forms_placeholder-load
 */
;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.6.2',

    Modernizr = {},

    enableClasses = true,

    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  = document.createElement('input')  ,

    smile = ':)',

    toString = {}.toString,    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),


    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName,



    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) {
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

            try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                            bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };
    function webforms() {
                                            Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
                                  attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
                            Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                                                    if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                                        bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                                                                                  (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                                                                                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                                        bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        }
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    Modernizr.input || webforms();


     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr;
     };


    setCss('');
    modElem = inputElem = null;

    ;(function(window, document) {
        var options = window.html5 || {};

        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        var supportsHtml5Styles;

        var expando = '_html5shiv';

        var expanID = 0;

        var expandoData = {};

        var supportsUnknownElements;

      (function() {
        try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
                    supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                        (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
        } catch(e) {
          supportsHtml5Styles = true;
          supportsUnknownElements = true;
        }

      }());        function addStyleSheet(ownerDocument, cssText) {
        var p = ownerDocument.createElement('p'),
            parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

        p.innerHTML = 'x<style>' + cssText + '</style>';
        return parent.insertBefore(p.lastChild, parent.firstChild);
      }

        function getElements() {
        var elements = html5.elements;
        return typeof elements == 'string' ? elements.split(' ') : elements;
      }

          function getExpandoData(ownerDocument) {
        var data = expandoData[ownerDocument[expando]];
        if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
        }
        return data;
      }

        function createElement(nodeName, ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
        }
        if (!data) {
            data = getExpandoData(ownerDocument);
        }
        var node;

        if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
        } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
        } else {
            node = data.createElem(nodeName);
        }

                                    return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
      }

        function createDocumentFragment(ownerDocument, data){
        if (!ownerDocument) {
            ownerDocument = document;
        }
        if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
        }
        data = data || getExpandoData(ownerDocument);
        var clone = data.frag.cloneNode(),
            i = 0,
            elems = getElements(),
            l = elems.length;
        for(;i<l;i++){
            clone.createElement(elems[i]);
        }
        return clone;
      }

        function shivMethods(ownerDocument, data) {
        if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
        }


        ownerDocument.createElement = function(nodeName) {
                if (!html5.shivMethods) {
              return data.createElem(nodeName);
          }
          return createElement(nodeName, ownerDocument, data);
        };

        ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
          'var n=f.cloneNode(),c=n.createElement;' +
          'h.shivMethods&&(' +
                    getElements().join().replace(/\w+/g, function(nodeName) {
              data.createElem(nodeName);
              data.frag.createElement(nodeName);
              return 'c("' + nodeName + '")';
            }) +
          ');return n}'
        )(html5, data.frag);
      }        function shivDocument(ownerDocument) {
        if (!ownerDocument) {
            ownerDocument = document;
        }
        var data = getExpandoData(ownerDocument);

        if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
          data.hasCSS = !!addStyleSheet(ownerDocument,
                    'article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}' +
                    'mark{background:#FF0;color:#000}'
          );
        }
        if (!supportsUnknownElements) {
          shivMethods(ownerDocument, data);
        }
        return ownerDocument;
      }        var html5 = {

            'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video',

            'shivCSS': (options.shivCSS !== false),

            'supportsUnknownElements': supportsUnknownElements,

            'shivMethods': (options.shivMethods !== false),

            'type': 'default',

            'shivDocument': shivDocument,

            createElement: createElement,

            createDocumentFragment: createDocumentFragment
      };        window.html5 = html5;

        shivDocument(document);

    }(this, document));

    Modernizr._version      = version;

    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;



    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;

    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                                                    (enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);
/*yepnope1.5.4|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};
// testing for placeholder attribute in inputs and textareas
// re-using Modernizr.input if available

Modernizr.addTest('placeholder', function(){

  return !!( 'placeholder' in ( Modernizr.input    || document.createElement('input')    ) &&
             'placeholder' in ( Modernizr.textarea || document.createElement('textarea') )
           );

});
;

/*!	SWFObject v2.2 modified by Brandon Mathis to contain only what is necessary to dynamically embed flash objects
  * <http://code.google.com/p/swfobject/>
	released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

var swfobject = function() {

	var UNDEF = "undefined",
		OBJECT = "object",
		SHOCKWAVE_FLASH = "Shockwave Flash",
		SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
		FLASH_MIME_TYPE = "application/x-shockwave-flash",
		EXPRESS_INSTALL_ID = "SWFObjectExprInst",

		win = window,
		doc = document,
		nav = navigator,

		plugin = false,
		regObjArr = [],
		objIdArr = [],
		storedAltContent,
		storedAltContentId,
		storedCallbackFn,
		storedCallbackObj,
		autoHideShow = true,

	/* Centralized function for browser feature detection
		- User agent string detection is only used when no good alternative is possible
		- Is executed directly for optimal performance
	*/
	ua = function() {
		var w3cdom = typeof doc.getElementById != UNDEF && typeof doc.getElementsByTagName != UNDEF && typeof doc.createElement != UNDEF,
			u = nav.userAgent.toLowerCase(),
			p = nav.platform.toLowerCase(),
			windows = p ? /win/.test(p) : /win/.test(u),
			mac = p ? /mac/.test(p) : /mac/.test(u),
			webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
			ie = !+"\v1", // feature detection based on Andrea Giammarchi's solution: http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
			playerVersion = [0,0,0],
			d = null;
		if (typeof nav.plugins != UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] == OBJECT) {
			d = nav.plugins[SHOCKWAVE_FLASH].description;
			if (d && !(typeof nav.mimeTypes != UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) { // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
				plugin = true;
				ie = false; // cascaded feature detection for Internet Explorer
				d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
				playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
				playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
				playerVersion[2] = /[a-zA-Z]/.test(d) ? parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
			}
		}
		else if (typeof win.ActiveXObject != UNDEF) {
			try {
				var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
				if (a) { // a will return null when ActiveX is disabled
					d = a.GetVariable("$version");
					if (d) {
						ie = true; // cascaded feature detection for Internet Explorer
						d = d.split(" ")[1].split(",");
						playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
					}
				}
			}
			catch(e) {}
		}
		return { w3:w3cdom, pv:playerVersion, wk:webkit, ie:ie, win:windows, mac:mac };
	}()


	/* Main function
		- Will preferably execute onDomLoad, otherwise onload (as a fallback)
	*/
	function main() {
		if (plugin) { testPlayerVersion(); }
		else { matchVersions(); }
	}

	/* Detect the Flash Player version for non-Internet Explorer browsers
		- Detecting the plug-in version via the object element is more precise than using the plugins collection item's description:
		  a. Both release and build numbers can be detected
		  b. Avoid wrong descriptions by corrupt installers provided by Adobe
		  c. Avoid wrong descriptions by multiple Flash Player entries in the plugin Array, caused by incorrect browser imports
		- Disadvantage of this method is that it depends on the availability of the DOM, while the plugins collection is immediately available
	*/
	function testPlayerVersion() {
		var b = doc.getElementsByTagName("body")[0];
		var o = createElement(OBJECT);
		o.setAttribute("type", FLASH_MIME_TYPE);
		var t = b.appendChild(o);
		if (t) {
			var counter = 0;
			(function(){
				if (typeof t.GetVariable != UNDEF) {
					var d = t.GetVariable("$version");
					if (d) {
						d = d.split(" ")[1].split(",");
						ua.pv = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
					}
				}
				else if (counter < 10) {
					counter++;
					setTimeout(arguments.callee, 10);
					return;
				}
				b.removeChild(o);
				t = null;
				matchVersions();
			})();
		}
		else {
			matchVersions();
		}
	}


	/* Cross-browser dynamic SWF creation
	*/
	function createSWF(attObj, parObj, id) {
		var r, el = getElementById(id);
		if (ua.wk && ua.wk < 312) { return r; }
		if (el) {
			if (typeof attObj.id == UNDEF) { // if no 'id' is defined for the object element, it will inherit the 'id' from the alternative content
				attObj.id = id;
			}
			if (ua.ie && ua.win) { // Internet Explorer + the HTML object element + W3C DOM methods do not combine: fall back to outerHTML
				var att = "";
				for (var i in attObj) {
					if (attObj[i] != Object.prototype[i]) { // filter out prototype additions from other potential libraries
						if (i.toLowerCase() == "data") {
							parObj.movie = attObj[i];
						}
						else if (i.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
							att += ' class="' + attObj[i] + '"';
						}
						else if (i.toLowerCase() != "classid") {
							att += ' ' + i + '="' + attObj[i] + '"';
						}
					}
				}
				var par = "";
				for (var j in parObj) {
					if (parObj[j] != Object.prototype[j]) { // filter out prototype additions from other potential libraries
						par += '<param name="' + j + '" value="' + parObj[j] + '" />';
					}
				}
				el.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + att + '>' + par + '</object>';
				objIdArr[objIdArr.length] = attObj.id; // stored to fix object 'leaks' on unload (dynamic publishing only)
				r = getElementById(attObj.id);
			}
			else { // well-behaving browsers
				var o = createElement(OBJECT);
				o.setAttribute("type", FLASH_MIME_TYPE);
				for (var m in attObj) {
					if (attObj[m] != Object.prototype[m]) { // filter out prototype additions from other potential libraries
						if (m.toLowerCase() == "styleclass") { // 'class' is an ECMA4 reserved keyword
							o.setAttribute("class", attObj[m]);
						}
						else if (m.toLowerCase() != "classid") { // filter out IE specific attribute
							o.setAttribute(m, attObj[m]);
						}
					}
				}
				for (var n in parObj) {
					if (parObj[n] != Object.prototype[n] && n.toLowerCase() != "movie") { // filter out prototype additions from other potential libraries and IE specific param element
						createObjParam(o, n, parObj[n]);
					}
				}
				el.parentNode.replaceChild(o, el);
				r = o;
			}
		}
		return r;
	}

	function createObjParam(el, pName, pValue) {
		var p = createElement("param");
		p.setAttribute("name", pName);
		p.setAttribute("value", pValue);
		el.appendChild(p);
	}

	/* Cross-browser SWF removal
		- Especially needed to safely and completely remove a SWF in Internet Explorer
	*/
	/* Functions to optimize JavaScript compression
	*/
	function getElementById(id) {
		var el = null;
		try {
			el = doc.getElementById(id);
		}
		catch (e) {}
		return el;
	}

	function createElement(el) {
		return doc.createElement(el);
	}

	/* Flash Player and SWF content version matching
	*/
	function hasPlayerVersion(rv) {
		var pv = ua.pv, v = rv.split(".");
		v[0] = parseInt(v[0], 10);
		v[1] = parseInt(v[1], 10) || 0; // supports short notation, e.g. "9" instead of "9.0.0"
		v[2] = parseInt(v[2], 10) || 0;
		return (pv[0] > v[0] || (pv[0] == v[0] && pv[1] > v[1]) || (pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2])) ? true : false;
	}


	/* Filter to avoid XSS attacks
	*/
	function urlEncodeIfNecessary(s) {
		var regex = /[\\\"<>\.;]/;
		var hasBadChars = regex.exec(s) != null;
		return hasBadChars && typeof encodeURIComponent != UNDEF ? encodeURIComponent(s) : s;
	}

	return {
		/* Public API
			- Reference: http://code.google.com/p/swfobject/wiki/documentation
		*/

		embedSWF: function(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, flashvarsObj, parObj, attObj, callbackFn) {
			var callbackObj = {success:false, id:replaceElemIdStr};
			if (ua.w3 && !(ua.wk && ua.wk < 312) && swfUrlStr && replaceElemIdStr && widthStr && heightStr && swfVersionStr) {
              widthStr += ""; // auto-convert to string
              heightStr += "";
              var att = {};
              if (attObj && typeof attObj === OBJECT) {
                for (var i in attObj) { // copy object to avoid the use of references, because web authors often reuse attObj for multiple SWFs
                  att[i] = attObj[i];
                }
              }
              att.data = swfUrlStr;
              att.width = widthStr;
              att.height = heightStr;
              var par = {};
              if (parObj && typeof parObj === OBJECT) {
                for (var j in parObj) { // copy object to avoid the use of references, because web authors often reuse parObj for multiple SWFs
                  par[j] = parObj[j];
                }
              }
              if (flashvarsObj && typeof flashvarsObj === OBJECT) {
                for (var k in flashvarsObj) { // copy object to avoid the use of references, because web authors often reuse flashvarsObj for multiple SWFs
                  if (typeof par.flashvars != UNDEF) {
                    par.flashvars += "&" + k + "=" + flashvarsObj[k];
                  }
                  else {
                    par.flashvars = k + "=" + flashvarsObj[k];
                  }
                }
              }
              if (hasPlayerVersion(swfVersionStr)) { // create SWF
                var obj = createSWF(att, par, replaceElemIdStr);
                callbackObj.success = true;
                callbackObj.ref = obj;
              }
              if (callbackFn) { callbackFn(callbackObj); }
			}
			else if (callbackFn) { callbackFn(callbackObj);	}
		},

		ua: ua,

		getFlashPlayerVersion: function() {
			return { major:ua.pv[0], minor:ua.pv[1], release:ua.pv[2] };
		},

		hasFlashPlayerVersion: hasPlayerVersion,

		createSWF: function(attObj, parObj, replaceElemIdStr) {
			if (ua.w3) {
				return createSWF(attObj, parObj, replaceElemIdStr);
			}
			else {
				return undefined;
			}
		},

		getQueryParamValue: function(param) {
			var q = doc.location.search || doc.location.hash;
			if (q) {
				if (/\?/.test(q)) { q = q.split("?")[1]; } // strip question mark
				if (param == null) {
					return urlEncodeIfNecessary(q);
				}
				var pairs = q.split("&");
				for (var i = 0; i < pairs.length; i++) {
					if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
						return urlEncodeIfNecessary(pairs[i].substring((pairs[i].indexOf("=") + 1)));
					}
				}
			}
			return "";
		}
	};
}();

// iOS scaling bug fix
// By @mathias, @cheeaun and @jdalton
// Source url: https://gist.github.com/901295

var addEvent = 'addEventListener',
    type = 'gesturestart',
    qsa = 'querySelectorAll',
    scales = [1, 1],
    meta = qsa in document ? document[qsa]('meta[name=viewport]') : [];
function fix() {
  meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
  document.removeEventListener(type, fix, true);
}
if ((meta = meta[meta.length - 1]) && addEvent in document) {
  fix();
  scales = [0.25, 1.6];
  document[addEvent](type, fix, true);
}

/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			$.cookie(key, '', $.extend(options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));

var octopress = (function(){
  return {
    addMobileNav: function () {
      var mainNav = $('ul.main-navigation, ul[role=main-navigation]').before('<fieldset class="mobile-nav">')
      var mobileNav = $('fieldset.mobile-nav').append('<select>');
      mobileNav.find('select').append('<option value="">Navigate&hellip;</option>');
      var addOption = function(i, option) {
        mobileNav.find('select').append('<option value="' + this.href + '">&raquo; ' + $(this).text() + '</option>');
      }
      mainNav.find('a').each(addOption);
      $('ul.subscription a').each(addOption);
      mobileNav.find('select').bind('change', function(event) {
        if (event.target.value) { window.location.href = event.target.value; }
      });
    }

    , addSidebarToggler: function () {
      if(!$('body').hasClass('sidebar-footer')) {
        $('#content').append('<span class="toggle-sidebar"></span>');
        $('.toggle-sidebar').bind('click', function(e) {
          e.preventDefault();
          if ($('body').hasClass('collapse-sidebar')) {
            $('body').removeClass('collapse-sidebar');
          } else {
            $('body').addClass('collapse-sidebar');
          }
        });
      }
      var sections = $('.sidebar section');
      if (sections.length > 1) {
        sections.each(function(index){
          if ((sections.length >= 3) && index % 3 === 0) {
            $(this).addClass("first");
          }
          var count = ((index +1) % 2) ? "odd" : "even";
          $(this).addClass(count);
        });
      }
      if (sections.length >= 3){ $('aside.sidebar').addClass('thirds'); }
    }

    , testFeature: function (features) {
      getTestClasses = function (tests) {
        classes = '';
        if (typeof(tests.join) == 'function') {
          for (var i=0; i < features.length; i++)
            classes += getClass(features[i]) + ' ';
        } else {
          classes = getClass(tests);
        }
        return classes;
      }

      getClass = function (test) {
        return ((Modernizr.testAllProps(test) ? test : "no-"+test).toLowerCase())
      }

      $('html').addClass(getTestClasses(features));
    }

    , flashVideoFallback: function (){
      var flashplayerlocation = "/assets/jwplayer/player.swf",
          flashplayerskin = "/assets/jwplayer/glow/glow.xml";
      $('video').each(function(i, video){
        video = $(video);
        if (!Modernizr.video.h264 && swfobject.getFlashPlayerVersion() || window.location.hash.indexOf("flash-test") !== -1){
          video.children('source[src$=mp4]').first().map(i, function(source){
            var src = $(source).attr('src'),
                id = 'video_'+Math.round(1 + Math.random()*(100000)),
                width = video.attr('width'),
                height = parseInt(video.attr('height'), 10) + 30;
                video.after('<div class="flash-video"><div><div id='+id+'>');
            swfobject.embedSWF(flashplayerlocation, id, width, height + 30, "9.0.0",
              { file : src, image : video.attr('poster'), skin : flashplayerskin } ,
              { movie : src, wmode : "opaque", allowfullscreen : "true" }
            );
          });
          video.remove();
        }
      });
    }

    , wrapFlashVideos: function () {
      $('object').each(function(i, object) {
        if( $(object).find('param[name=movie]').length ){
          $(object).wrap('<div class="flash-video">')
        }
      });
      $('iframe[src*=vimeo],iframe[src*=youtube]').wrap('<div class="flash-video">')
    }
  }
})();

$(document).ready(function() {
  octopress.wrapFlashVideos();
  octopress.testFeature(['maskImage', 'transform']);
  octopress.flashVideoFallback();
  octopress.addMobileNav();
  octopress.addSidebarToggler();
});

(function(/*! Stitch !*/) {
  if (!this.require) {
    var modules = {}, cache = {};
    var require = function(name, root) {
      var path = expand(root, name), indexPath = expand(path, './index'), module, fn;
      module   = cache[path] || cache[indexPath];
      if (module) {
        return module;
      } else if (fn = modules[path] || modules[path = indexPath]) {
        module = {id: path, exports: {}};
        cache[path] = module.exports;
        fn(module.exports, function(name) {
          return require(name, dirname(path));
        }, module);
        return cache[path] = module.exports;
      } else {
        throw 'module ' + name + ' not found';
      }
    };
    var expand = function(root, name) {
      var results = [], parts, part;
      // If path is relative
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    };
    var dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };
    this.require = function(name) {
      return require(name, '');
    };
    this.require.define = function(bundle) {
      for (var key in bundle) {
        modules[key] = bundle[key];
      }
    };
    this.require.modules = modules;
    this.require.cache   = cache;
  }
  return this.require.define;
}).call(this)({
  ".": function(exports, require, module) {
(function() {
  var Adn, helpers;

  helpers = require('helpers');

  Adn = {
    timeline: [],
    cookie: 'adn-feed',
    classname: 'adn-feed',
    template: function() {
      return helpers.statusFeed(this.timeline, this.classname);
    },
    errorTemplate: function() {
      return helpers.errorTemplate("Failed to load posts.", this.classname);
    },
    parseHtml: function(post) {
      var hashtag, mention, text, _i, _j, _len, _len1, _ref, _ref1;

      text = helpers.trimDisplayUrls(post.html);
      _ref = post.entities.mentions;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        mention = _ref[_i];
        text = text.replace("@" + mention.name, "<a href='https://alpha.app.net/" + mention.name + "'>@" + mention.name + "</a>");
      }
      _ref1 = post.entities.hashtags;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        hashtag = _ref1[_j];
        text = text.replace("#" + hashtag.name, "<a href='https://alpha.app.net/hashtags/" + hashtag.name + "'>#" + hashtag.name + "</a>");
      }
      return text;
    },
    getPost: function(post) {
      var type;

      type = post.repost_of ? 'repost' : 'post';
      post = type === 'repost' ? post.repost_of : post;
      return {
        type: type,
        url: post.canonical_url,
        date: post.created_at,
        author: type === 'repost' ? {
          user: post.user.username,
          name: post.user.name,
          url: post.user.canonical_url
        } : void 0,
        text: this.parseHtml(post)
      };
    },
    format: function(posts, user, options) {
      var post, postList, _i, _len;

      postList = [];
      for (_i = 0, _len = posts.length; _i < _len; _i++) {
        post = posts[_i];
        if (!(post.repost_of && !options.reposts)) {
          postList.push(this.getPost(post));
        }
      }
      return postList;
    },
    init: function(user, options, callback) {
      var posts, url,
        _this = this;

      posts = $.cookie(this.cookie);
      if (posts) {
        this.timeline = JSON.parse(posts);
        if (this.timeline.length !== options.count) {
          $.removeCookie(this.cookie);
          this.timeline = [];
          return init(user, options, callback);
        } else {
          return callback(this.template());
        }
      } else {
        url = "https://alpha-api.app.net/stream/0/users/@" + user + "/posts?";
        if (options.max_id) {
          url += "&max_id=" + options.max_id;
        }
        if (!options.replies) {
          url += "&include_directed_posts=0";
        }
        url += "&callback=?";
        return $.ajax({
          url: url,
          dataType: 'jsonp',
          error: function(err) {
            return callback(_this.errorTemplate);
          },
          success: function(response) {
            _this.timeline = _this.timeline.concat(response.data);
            if (_this.timeline.length < options.count) {
              options.max_id = response.meta.max_id;
              return init(user, options, callback);
            } else {
              _this.timeline = _this.format(_this.timeline.slice(0, options.count), user, options);
              $.cookie(_this.cookie, JSON.stringify(_this.timeline, {
                path: '/'
              }));
              return callback(_this.template());
            }
          }
        });
      }
    }
  };

  module.exports = Adn;

}).call(this);

}, ".": function(exports, require, module) {
(function() {
  var Delicious, helpers;

  helpers = require('helpers');

  Delicious = {
    cookie: 'delicious-feed',
    classname: 'delicious-feed',
    template: function(data) {
      return helpers.linkFeed(data, this.classname);
    },
    errorTemplate: function() {
      return helpers.errorTemplate("Failed to load bookmarks.", this.classname);
    },
    format: function(feed) {
      var item, tag, _i, _len, _results;

      _results = [];
      for (_i = 0, _len = feed.length; _i < _len; _i++) {
        item = feed[_i];
        _results.push({
          url: item.u,
          date: item.dt,
          title: item.d,
          text: item.n,
          meta: "Tagged: " + ((function() {
            var _j, _len1, _ref, _results1;

            _ref = item.t;
            _results1 = [];
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
              tag = _ref[_j];
              _results1.push("<a title='view items " + item.a + " tagged " + tag + "' href='http://delicious.com/" + item.a + "/" + tag + "'>" + tag + "</a>");
            }
            return _results1;
          })()).join(' ')
        });
      }
      return _results;
    },
    init: function(user, options, callback) {
      var feed,
        _this = this;

      feed = $.cookie(this.cookie);
      if (feed) {
        return callback(this.template(JSON.parse(feed)));
      } else {
        return $.ajax({
          url: "http://feeds.delicious.com/v2/json/" + user + "?&count=" + options.count + "&callback=?",
          dataType: 'jsonp',
          error: function(err) {
            return callback(_this.errorTemplate);
          },
          success: function(data) {
            data = _this.format(data);
            $.cookie(_this.cookie, JSON.stringify(data, {
              path: '/'
            }));
            return callback(_this.template(data));
          }
        });
      }
    }
  };

  module.exports = Delicious;

}).call(this);

}, ".": function(exports, require, module) {
(function() {
  var GitHub, helpers;

  helpers = require('helpers');

  GitHub = {
    cookie: 'github-feed',
    classname: 'github-feed',
    template: function(data) {
      return helpers.linkFeed(data, this.classname);
    },
    errorTemplate: function() {
      return helpers.errorTemplate("Failed to load repo list.", this.classname);
    },
    addRepo: function(repo) {
      return {
        title: repo.name,
        url: repo.url,
        text: repo.description,
        meta: repo.meta
      };
    },
    format: function(repos, options) {
      var filter, i, repo, repoList, _i, _j, _len, _len1, _ref;

      repoList = [];
      if (options.repos) {
        filter = [];
        _ref = options.repos.split(',');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          filter.push(i.trim().toLowerCase());
        }
      }
      for (_j = 0, _len1 = repos.length; _j < _len1; _j++) {
        repo = repos[_j];
        if (repoList.length !== options.count) {
          if (options.forks || options.watchers) {
            repo.meta = '';
            if (options.watchers) {
              repo.meta += "Watchers: " + repo.watchers;
            }
            if (options.forks) {
              if (repo.meta.length > 0) {
                repo.meta += ' ,';
              }
              repo.meta += "Forks: " + repo.forks;
            }
          }
          if (filter && filter.indexOf(repo.name.toLowerCase() > -1)) {
            repoList[filter.indexOf(repo.name)] = this.addRepo(repo, options);
          } else if (!filter) {
            if (!(options.skipForks && repo.fork)) {
              repoList.push(this.addRepo(repo, options));
            }
          }
        }
      }
      return repoList;
    },
    init: function(user, options, callback) {
      var feed,
        _this = this;

      if (options.count || options.repos) {
        feed = $.cookie(this.cookie);
        if (feed) {
          return callback(this.template(JSON.parse(feed)));
        } else {
          return $.ajax({
            url: "https://api.github.com/users/" + user + "/repos?callback=?",
            dataType: 'jsonp',
            error: function(err) {
              return callback(_this.errorTemplate);
            },
            success: function(data) {
              data = _this.format(data.data, options);
              $.cookie(_this.cookie, JSON.stringify(data, {
                path: '/'
              }));
              return callback(_this.template(data));
            }
          });
        }
      }
    }
  };

  module.exports = GitHub;

}).call(this);

}, ".": function(exports, require, module) {
(function() {
  var GitHub, helpers;

  helpers = require('helpers');

  GitHub = {
    cookie: 'github-feed',
    classname: 'github-feed',
    template: function(data) {
      return helpers.linkFeed(data, this.classname);
    },
    errorTemplate: function() {
      return helpers.errorTemplate("Failed to load repo list.", this.classname);
    },
    addRepo: function(repo) {
      return {
        title: repo.name,
        url: repo.url,
        text: repo.description,
        meta: repo.meta
      };
    },
    format: function(repos, options) {
      var filter, i, repo, repoList, _i, _j, _len, _len1, _ref;

      repoList = [];
      if (options.repos) {
        filter = [];
        _ref = options.repos.split(',');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          filter.push(i.trim().toLowerCase());
        }
      }
      for (_j = 0, _len1 = repos.length; _j < _len1; _j++) {
        repo = repos[_j];
        if (!(repoList.length === options.count && options.count > 1)) {
          if (options.forks || options.watchers) {
            repo.meta = '';
            if (options.watchers) {
              repo.meta += "Watchers: " + repo.watchers;
            }
            if (options.forks) {
              if (repo.meta.length > 0) {
                repo.meta += ' ,';
              }
              repo.meta += "Forks: " + repo.forks;
            }
          }
          if (filter && filter.indexOf(repo.name.toLowerCase() > -1)) {
            repoList[filter.indexOf(repo.name)] = this.addRepo(repo, options);
          } else if (!filter) {
            if (!(options.skipForks && repo.fork)) {
              repoList.push(this.addRepo(repo, options));
            }
          }
        }
      }
      return repoList;
    },
    init: function(user, options, callback) {
      var feed,
        _this = this;

      if (options.count || options.repos) {
        feed = $.cookie(this.cookie);
        if (feed) {
          return callback(this.template(JSON.parse(feed)));
        } else {
          return $.ajax({
            url: "https://api.github.com/users/" + user + "/repos?callback=?",
            dataType: 'jsonp',
            error: function(err) {
              return callback(_this.errorTemplate);
            },
            success: function(data) {
              data = _this.format(data.data, options);
              $.cookie(_this.cookie, JSON.stringify(data, {
                path: '/'
              }));
              return callback(_this.template(data));
            }
          });
        }
      }
    }
  };

  module.exports = GitHub;

}).call(this);

}, ".": function(exports, require, module) {
(function() {
  var Helpers;

  Helpers = {
    linkFeed: function(feed, classname) {
      var item, text;

      return ("<ul class='" + classname + "'>") + ((function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = feed.length; _i < _len; _i++) {
          item = feed[_i];
          text = "<li class='feed-item'>";
          text += "<p class='title'><a href='" + item.url + "'>" + (item.title.replace('<', '&lt;')) + "</a></p>";
          text += "<p class='text'>" + (item.text.replace('<', '&lt;')) + "</p>";
          if (item.meta) {
            text += "<p class='meta'>" + item.meta + "</p>";
          }
          _results.push(text += "</li>");
        }
        return _results;
      })()).join('') + "</ul>";
    },
    statusFeed: function(feed, classname) {
      var post, text;

      if (classname == null) {
        classname = '';
      }
      return ("<ul class='" + classname + "'>") + ((function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = feed.length; _i < _len; _i++) {
          post = feed[_i];
          text = "<li class='status-item'>";
          text += "<p><a href='" + post.url + "'>" + (this.timeago(post.date)) + "</a>" + post.text + "</p>";
          _results.push(text += "</li>");
        }
        return _results;
      }).call(this)).join('') + "</ul>";
    },
    errorTemplate: function(message, service) {
      if (service == null) {
        service = '';
      }
      return "<p class='" + service + " feed-error'>" + message + "</p>";
    },
    htmlEscape: function(str) {
      return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    },
    trimUrl: function(url) {
      var part, parts, _i, _len, _ref;

      parts = [];
      _ref = url.split('/');
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        part = _ref[_i];
        if (parts.concat(part).join('/').length < 35) {
          parts.push(part);
        }
      }
      parts = parts.join('/');
      if (parts.length < url.length) {
        return parts + '&hellip;';
      } else {
        return parts;
      }
    },
    linkify: function(text, marker, url) {
      return text.replace(new RegExp("(^|\\W|>)(" + marker + ")([^\\s<]+)", 'g'), "$1<a href='" + url + "$3'>$2$3</a>");
    },
    trimDisplayUrls: function(text) {
      var _this = this;

      return text.replace(/>https?:\/\/([^\s<]+)/gi, function(match, p1) {
        return ">" + (_this.trimUrl(p1));
      });
    },
    sortByKey: function(list, key, order) {
      if (order == null) {
        order = 'asc';
      }
      list = list.sort(function(a, b) {
        if (a[key] > b[key]) {
          return 1;
        } else if (b[key] > a[key]) {
          return -1;
        } else {
          return 0;
        }
      });
      if (order === 'desc') {
        return list.reverse();
      } else {
        return list;
      }
    },
    timeago: function(time) {
      var days, hours, mins, say, secs, weeks;

      say = {
        just_now: "now",
        minute_ago: "1m",
        minutes_ago: "m",
        hour_ago: "1h",
        hours_ago: "h",
        yesterday: "1d",
        days_ago: "d",
        last_week: "1w",
        weeks_ago: "w"
      };
      time = time.replace(/-/g, "/").replace(/[TZ]/g, " ");
      secs = (new Date().getTime() - new Date(time).getTime()) / 1000;
      mins = Math.floor(secs / 60);
      hours = Math.floor(secs / 3600);
      days = Math.floor(secs / 86400);
      weeks = Math.floor(days / 7);
      if (isNaN(secs) || days < 0) {
        return '#';
      }
      if (days === 0) {
        if (secs < 60) {
          return say.just_now;
        } else if (secs < 120) {
          return say.minute_ago;
        } else if (secs < 3600) {
          return mins + say.minutes_ago;
        } else if (secs < 7200) {
          return say.hour_ago;
        } else {
          return hours + say.hours_ago;
        }
      } else {
        if (days === 1) {
          return say.yesterday;
        } else if (days < 7) {
          return days + say.days_ago;
        } else if (days === 7) {
          return say.last_week;
        } else {
          return weeks + say.weeks_ago;
        }
      }
    }
  };

  module.exports = Helpers;

}).call(this);

}, ".": function(exports, require, module) {
(function() {
  var Pinboard, helpers;

  helpers = require('helpers');

  Pinboard = {
    cookie: 'pinboard-feed',
    classname: 'pinboard-feed',
    template: function(data) {
      return helpers.linkFeed(data, this.classname);
    },
    errorTemplate: function() {
      return helpers.errorTemplate("Failed to load pins.", this.classname);
    },
    format: function(feed) {
      var item, tag, _i, _len, _results;

      _results = [];
      for (_i = 0, _len = feed.length; _i < _len; _i++) {
        item = feed[_i];
        _results.push({
          url: item.u,
          date: item.dt,
          title: item.d,
          text: item.n,
          meta: "Tagged: " + ((function() {
            var _j, _len1, _ref, _results1;

            _ref = item.t;
            _results1 = [];
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
              tag = _ref[_j];
              _results1.push("<a title='view items " + item.a + " tagged " + tag + "' href='http://pinboard.in/u:" + item.a + "/t:" + tag + "'>" + tag + "</a>");
            }
            return _results1;
          })()).join(' ')
        });
      }
      return _results;
    },
    init: function(user, options, callback) {
      var feed, url,
        _this = this;

      feed = $.cookie(this.cookie);
      if (feed) {
        return callback(this.template(JSON.parse(feed)));
      } else {
        url = "http://feeds.pinboard.in/json/v1/u:" + user;
        url += "&count=" + options.count;
        return $.ajax({
          url: url,
          dataType: 'jsonp',
          jsonp: 'cb',
          error: function(err) {
            return callback(_this.errorTemplate);
          },
          success: function(data) {
            data = _this.format(data);
            $.cookie(_this.cookie, JSON.stringify(data, {
              path: '/'
            }));
            return callback(_this.template(data));
          }
        });
      }
    }
  };

  module.exports = Pinboard;

}).call(this);

}, ".": function(exports, require, module) {
(function() {
  var Site, adn, delicious, github, pinboard;

  adn = require('adn');

  pinboard = require('pinboard');

  delicious = require('delicious');

  github = require('github');

  Site = {
    init: function() {
      return adn.init('imathis', {
        count: 3
      }, function(posts) {
        return console.log(posts);
      });
    }
  };

  module.exports = Site;

}).call(this);

}
});