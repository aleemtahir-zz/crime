/**
 * IMM Push notification Service
 *
 * Copyright 2016
 * Developer : Zain Mansoor
 *
 */



/**
 * PgwBrowser - Version 1.3
 *
 * Copyright 2014-2015, Jonathan M. Piat
 * http://pgwjs.com - http://pagawa.com
 *
 * Released under the GNU GPLv3 license - http://opensource.org/licenses/gpl-3.0
 */
;(function($){
  $.pgwBrowser = function() {

    var pgwBrowser = {};
    pgwBrowser.userAgent = navigator.userAgent;
    pgwBrowser.browser = {};
    pgwBrowser.viewport = {};
    pgwBrowser.os = {};
    resizeEvent = null;

    // The order of the following arrays is important, be careful if you change it.

    var browserData = [
      { name: 'Chromium',          group: 'Chrome',   identifier: 'Chromium/([0-9\.]*)'       },
      { name: 'Chrome Mobile',     group: 'Chrome',   identifier: 'Chrome/([0-9\.]*) Mobile', versionIdentifier: 'Chrome/([0-9\.]*)'},
      { name: 'Chrome',            group: 'Chrome',   identifier: 'Chrome/([0-9\.]*)'         },
      { name: 'Chrome for iOS',    group: 'Chrome',   identifier: 'CriOS/([0-9\.]*)'          },
      { name: 'Android Browser',   group: 'Chrome',   identifier: 'CrMo/([0-9\.]*)'           },
      { name: 'Firefox',           group: 'Firefox',  identifier: 'Firefox/([0-9\.]*)'        },
      { name: 'Opera Mini',        group: 'Opera',    identifier: 'Opera Mini/([0-9\.]*)'     },
      { name: 'Opera',             group: 'Opera',    identifier: 'Opera ([0-9\.]*)'          },
      { name: 'Opera',             group: 'Opera',    identifier: 'Opera/([0-9\.]*)',         versionIdentifier: 'Version/([0-9\.]*)' },
      { name: 'IEMobile',          group: 'Explorer', identifier: 'IEMobile/([0-9\.]*)'       },
      { name: 'Internet Explorer', group: 'Explorer', identifier: 'MSIE ([a-zA-Z0-9\.]*)'     },
      { name: 'Internet Explorer', group: 'Explorer', identifier: 'Trident/([0-9\.]*)',       versionIdentifier: 'rv:([0-9\.]*)' },
      { name: 'Spartan',           group: 'Spartan',  identifier: 'Edge/([0-9\.]*)',          versionIdentifier: 'Edge/([0-9\.]*)' },
      { name: 'Safari',            group: 'Safari',   identifier: 'Safari/([0-9\.]*)',        versionIdentifier: 'Version/([0-9\.]*)' }
    ];

    var osData = [
      { name: 'Windows 2000',           group: 'Windows',       identifier: 'Windows NT 5.0',                     version: '5.0' },
      { name: 'Windows XP',             group: 'Windows',       identifier: 'Windows NT 5.1',                     version: '5.1' },
      { name: 'Windows Vista',          group: 'Windows',       identifier: 'Windows NT 6.0',                     version: '6.0' },
      { name: 'Windows 7',              group: 'Windows',       identifier: 'Windows NT 6.1',                     version: '7.0' },
      { name: 'Windows 8',              group: 'Windows',       identifier: 'Windows NT 6.2',                     version: '8.0' },
      { name: 'Windows 8.1',            group: 'Windows',       identifier: 'Windows NT 6.3',                     version: '8.1' },
      { name: 'Windows 10',             group: 'Windows',       identifier: 'Windows NT 10.0',                    version: '10.0' },
      { name: 'Windows Phone',          group: 'Windows Phone', identifier: 'Windows Phone ([0-9\.]*)'            },
      { name: 'Windows Phone',          group: 'Windows Phone', identifier: 'Windows Phone OS ([0-9\.]*)'         },
      { name: 'Windows',                group: 'Windows',       identifier: 'Windows'                             },
      { name: 'Chrome OS',              group: 'Chrome OS',     identifier: 'CrOS'                                },
      { name: 'Android',                group: 'Android',       identifier: 'Android',                            versionIdentifier: 'Android ([a-zA-Z0-9\.-]*)' },
      { name: 'iPad',                   group: 'iOS',           identifier: 'iPad',                               versionIdentifier: 'OS ([0-9_]*)', versionSeparator: '[_|\.]' },
      { name: 'iPod',                   group: 'iOS',           identifier: 'iPod',                               versionIdentifier: 'OS ([0-9_]*)', versionSeparator: '[_|\.]' },
      { name: 'iPhone',                 group: 'iOS',           identifier: 'iPhone OS',                          versionIdentifier: 'OS ([0-9_]*)', versionSeparator: '[_|\.]' },
      { name: 'Mac OS X El Capitan',    group: 'Mac OS',        identifier: 'Mac OS X (10([_|\.])11([0-9_\.]*))', versionSeparator: '[_|\.]' },
      { name: 'Mac OS X Yosemite',      group: 'Mac OS',        identifier: 'Mac OS X (10([_|\.])10([0-9_\.]*))', versionSeparator: '[_|\.]' },
      { name: 'Mac OS X Mavericks',     group: 'Mac OS',        identifier: 'Mac OS X (10([_|\.])9([0-9_\.]*))',  versionSeparator: '[_|\.]' },
      { name: 'Mac OS X Mountain Lion', group: 'Mac OS',        identifier: 'Mac OS X (10([_|\.])8([0-9_\.]*))',  versionSeparator: '[_|\.]' },
      { name: 'Mac OS X Lion',          group: 'Mac OS',        identifier: 'Mac OS X (10([_|\.])7([0-9_\.]*))',  versionSeparator: '[_|\.]' },
      { name: 'Mac OS X Snow Leopard',  group: 'Mac OS',        identifier: 'Mac OS X (10([_|\.])6([0-9_\.]*))',  versionSeparator: '[_|\.]' },
      { name: 'Mac OS X Leopard',       group: 'Mac OS',        identifier: 'Mac OS X (10([_|\.])5([0-9_\.]*))',  versionSeparator: '[_|\.]' },
      { name: 'Mac OS X Tiger',         group: 'Mac OS',        identifier: 'Mac OS X (10([_|\.])4([0-9_\.]*))',  versionSeparator: '[_|\.]' },
      { name: 'Mac OS X Panther',       group: 'Mac OS',        identifier: 'Mac OS X (10([_|\.])3([0-9_\.]*))',  versionSeparator: '[_|\.]' },
      { name: 'Mac OS X Jaguar',        group: 'Mac OS',        identifier: 'Mac OS X (10([_|\.])2([0-9_\.]*))',  versionSeparator: '[_|\.]' },
      { name: 'Mac OS X Puma',          group: 'Mac OS',        identifier: 'Mac OS X (10([_|\.])1([0-9_\.]*))',  versionSeparator: '[_|\.]' },
      { name: 'Mac OS X Cheetah',       group: 'Mac OS',        identifier: 'Mac OS X (10([_|\.])0([0-9_\.]*))',  versionSeparator: '[_|\.]' },
      { name: 'Mac OS',                 group: 'Mac OS',        identifier: 'Mac OS'                              },
      { name: 'Ubuntu',                 group: 'Linux',         identifier: 'Ubuntu',                             versionIdentifier: 'Ubuntu/([0-9\.]*)' },
      { name: 'Debian',                 group: 'Linux',         identifier: 'Debian'                              },
      { name: 'Gentoo',                 group: 'Linux',         identifier: 'Gentoo'                              },
      { name: 'Linux',                  group: 'Linux',         identifier: 'Linux'                               },
      { name: 'BlackBerry',             group: 'BlackBerry',    identifier: 'BlackBerry'                          }
    ];

    //  Set browser data
    var setBrowserData = function() {
      var userAgent = pgwBrowser.userAgent.toLowerCase();

      // Check browser type
      for (i in browserData) {
        var browserRegExp = new RegExp(browserData[i].identifier.toLowerCase());
        var browserRegExpResult = browserRegExp.exec(userAgent);

        if (browserRegExpResult != null && browserRegExpResult[1]) {
          pgwBrowser.browser.name = browserData[i].name;
          pgwBrowser.browser.group = browserData[i].group;

          // Check version
          if (browserData[i].versionIdentifier) {
            var versionRegExp = new RegExp(browserData[i].versionIdentifier.toLowerCase());
            var versionRegExpResult = versionRegExp.exec(userAgent);

            if (versionRegExpResult != null && versionRegExpResult[1]) {
              setBrowserVersion(versionRegExpResult[1]);
            }

          } else {
            setBrowserVersion(browserRegExpResult[1]);
          }

          break;
        }
      }

      return true;
    };

    // Set browser version
    var setBrowserVersion = function(version) {
      var splitVersion = version.split('.', 2);
      pgwBrowser.browser.fullVersion = version;

      // Major version
      if (splitVersion[0]) {
        pgwBrowser.browser.majorVersion = parseInt(splitVersion[0]);
      }

      // Minor version
      if (splitVersion[1]) {
        pgwBrowser.browser.minorVersion = parseInt(splitVersion[1]);
      }

      return true;
    };

    //  Set OS data
    var setOsData = function() {
      var userAgent = pgwBrowser.userAgent.toLowerCase();

      // Check browser type
      for (i in osData) {
        var osRegExp = new RegExp(osData[i].identifier.toLowerCase());
        var osRegExpResult = osRegExp.exec(userAgent);

        if (osRegExpResult != null) {
          pgwBrowser.os.name = osData[i].name;
          pgwBrowser.os.group = osData[i].group;

          // Version defined
          if (osData[i].version) {
            setOsVersion(osData[i].version, (osData[i].versionSeparator) ? osData[i].versionSeparator : '.');

            // Version detected
          } else if (osRegExpResult[1]) {
            setOsVersion(osRegExpResult[1], (osData[i].versionSeparator) ? osData[i].versionSeparator : '.');

            // Version identifier
          } else if (osData[i].versionIdentifier) {
            var versionRegExp = new RegExp(osData[i].versionIdentifier.toLowerCase());
            var versionRegExpResult = versionRegExp.exec(userAgent);

            if (versionRegExpResult != null && versionRegExpResult[1]) {
              setOsVersion(versionRegExpResult[1], (osData[i].versionSeparator) ? osData[i].versionSeparator : '.');
            }
          }

          break;
        }
      }

      return true;
    };

    // Set OS version
    var setOsVersion = function(version, separator) {
      if (separator.substr(0, 1) == '[') {
        var splitVersion = version.split(new RegExp(separator, 'g'), 2);
      } else {
        var splitVersion = version.split(separator, 2);
      }

      if (separator != '.') {
        version = version.replace(new RegExp(separator, 'g'), '.');
      }

      pgwBrowser.os.fullVersion = version;

      // Major version
      if (splitVersion[0]) {
        pgwBrowser.os.majorVersion = parseInt(splitVersion[0]);
      }

      // Minor version
      if (splitVersion[1]) {
        pgwBrowser.os.minorVersion = parseInt(splitVersion[1]);
      }

      return true;
    };

    // Set viewport size
    var setViewportSize = function(init) {
      pgwBrowser.viewport.width = $(window).width();
      pgwBrowser.viewport.height = $(window).height();

      // Resize triggers
      if (typeof init == 'undefined') {
        if (resizeEvent == null) {
          $(window).trigger('PgwBrowser::StartResizing');
        } else {
          clearTimeout(resizeEvent);
        }

        resizeEvent = setTimeout(function() {
          $(window).trigger('PgwBrowser::StopResizing');
          clearTimeout(resizeEvent);
          resizeEvent = null;
        }, 300);
      }

      return true;
    };

    // Set viewport orientation
    var setViewportOrientation = function() {
      if (typeof window.orientation == 'undefined') {

        if (pgwBrowser.viewport.width >= pgwBrowser.viewport.height) {
          pgwBrowser.viewport.orientation = 'landscape';
        } else {
          pgwBrowser.viewport.orientation = 'portrait';
        }

      } else {
        switch(window.orientation) {
          case -90:
          case 90:
            pgwBrowser.viewport.orientation = 'landscape';
            break;
          default:
            pgwBrowser.viewport.orientation = 'portrait';
            break;
        }
      }

      // Orientation trigger
      $(window).trigger('PgwBrowser::OrientationChange');

      return true;
    };

    // Replace default value for the user-agent tester on pgwjs.com
    if (typeof window.pgwJsUserAgentTester != 'undefined') {
      pgwBrowser.userAgent = window.pgwJsUserAgentTester;
    }

    // Initialization
    setBrowserData();
    setOsData();
    setViewportSize(true);
    setViewportOrientation();

    // Triggers
    $(window).on('orientationchange', function(e) {
      setViewportOrientation();
    });

    $(window).resize(function(e) {
      setViewportSize();
    });

    return pgwBrowser;
  }
})(window.Zepto || window.jQuery);


/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD (Register as an anonymous module)
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape...
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }

    try {
      // Replace server-side written pluses with spaces.
      // If we can't decode the cookie, ignore it, it's unusable.
      // If we can't parse the cookie, ignore it, it's unusable.
      s = decodeURIComponent(s.replace(pluses, ' '));
      return config.json ? JSON.parse(s) : s;
    } catch(e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }

  var config = $.cookie = function (key, value, options) {

    // Write

    if (arguments.length > 1 && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
      }

      return (document.cookie = [
        encode(key), '=', stringifyCookieValue(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path    ? '; path=' + options.path : '',
        options.domain  ? '; domain=' + options.domain : '',
        options.secure  ? '; secure' : ''
      ].join(''));
    }

    // Read

    var result = key ? undefined : {},
    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all. Also prevents odd result when
    // calling $.cookie().
        cookies = document.cookie ? document.cookie.split('; ') : [],
        i = 0,
        l = cookies.length;

    for (; i < l; i++) {
      var parts = cookies[i].split('='),
          name = decode(parts.shift()),
          cookie = parts.join('=');

      if (key === name) {
        // If second argument (value) is a function it's a converter...
        result = read(cookie, value);
        break;
      }

      // Prevent storing a cookie that we couldn't decode.
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  };

  config.defaults = {};

  $.removeCookie = function (key, options) {
    // Must not alter options, thus extending a fresh object...
    $.cookie(key, '', $.extend({}, options, { expires: -1 }));
    return !$.cookie(key);
  };

}));

(function ($) {
  window.selectedCat=[];
  var app = {

        isIos : navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/),

        isChrome : /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()),

        isFireFox : navigator.userAgent.toLowerCase().indexOf('firefox') > -1,

        isOpera : navigator.userAgent.toLowerCase().indexOf("opera") > -1,

        osDetails : $.pgwBrowser(),

        reg : "",

        categories : [],

        coreData : {
          saveSubscriber : "feeds/push_subscribe",
          removeSubscriber: "feeds/push_unsubscribe"
        }
      },
      request =function ( type, url, data, callback) {

        var responseData,
            ajaxUrl = url;

        $.ajax({
          url: ajaxUrl,
          async: true,
          type: type,
          data: (data !== null ? data : ""),
          success: function (response) {

            responseData = (response);

          },
          complete: function (event, xhr) {

            if (xhr === "error") {


            } else {

              if (typeof callback === "function") {

                callback((responseData));

              }

            }
          }

        });

      },
      subscribe = function () {

        var platrFormDetail = typeof app.osDetails !== "undefined" ? app.osDetails : "";

        var data = {

          "user_id": localStorage.regID,
          "ip_address": app.ip,
          "plateform": platrFormDetail,
          "auth_token": "3KcKGcTWd4Hy7DCZjsbVRmSTCWzAjQkEMPK6ba55DQEWeBLa9A",
          "site_id": app.site_id,
          "category" : app.categories

        };



        request("POST", app.liveUrl+app.coreData.saveSubscriber, data, function (result) {

          localStorage.isSubscribe = true;
          localStorage.selectedCategories = JSON.stringify(app.categories);
          $('input[type="checkbox"][name="categories\\[\\]"]').prop({"disabled":false});
          $.each(app.categories,function (i,k) {

            $('input[type="checkbox"][name="categories\\[\\]"][value="'+k+'"]').prop({"checked":true});

          });

          /*window.close();*/

        });

      };
      PnSubscribe = function (settings) {

      app = $.extend(app, {},settings);


      if ('serviceWorker' in window.navigator) {

        navigator.serviceWorker.register('/sw.js?'+Math.random(),{scope: '/'})
            .then(function (registration) {

              app.reg = registration;
              if (navigator.serviceWorker.controller) {
               /*navigator.serviceWorker.controller.postMessage({
                  "notifyURL": app.notificationURL
                });*/
              }


              registration.onupdatefound = function () {

                var installingWorker = registration.installing;

                installingWorker.onstatechange = function () {

                  switch (installingWorker.state) {

                    case 'installed':

                      if (navigator.serviceWorker.controller) {

                        console.log('New or updated content is available.');


                      } else {


                        console.log('Content is now available offline!');


                      }
                      break;

                    case 'redundant':
                      // 'The installing service worker became redundant.');
                      break;
                  }

                };

              };

            }).catch(function (error) {

        });

      }

  };

  PnSubscribe.prototype.saveCategories =  function (categories) {

    if(categories){

      app.categories = categories;
    }
    $("#categoryModal").modal("hide");
    subscribe();

  };

  PnSubscribe.prototype.subscribe =  function () {

    if(app.reg !== ""){


      if(typeof localStorage.regID === "undefined"){

        app.reg.pushManager.subscribe({userVisibleOnly: true}).then(function (pushSubscription) {

          var subsID = pushSubscription.endpoint.split("/").slice(-1);

          if(typeof subsID[0] !== "undefined") {

            localStorage.regID = subsID[0];
            subscribe();

          }

        });

      }else{

        app.reg.pushManager.getSubscription().then(function (subscription) {

          if ((subscription === "null" || subscription === null)) {

            app.reg.pushManager.subscribe({userVisibleOnly: true}).then(function (pushSubscription) {

              var subsID = pushSubscription.endpoint.split("/").slice(-1);

              if(typeof subsID[0] !== "undefined") {
                localStorage.regID = subsID[0];
                subscribe();

              }

            });

          }else{

            subscribe();

          }

        });

      }







    }

  };

  PnSubscribe.prototype.unsubscribe = function () {

    if(typeof app.reg.pushManager !== "undefined"){

      app.reg.pushManager.getSubscription().then(function (subscription) {

        if ((subscription !== "null" && subscription !== null)) {

          //subscription.unsubscribe().then(function (event) {

          var platrFormDetail = typeof app.osDetails !== "undefined" ? app.osDetails : "";

          var data = {

            "user_id": localStorage.regID,
            "ip_address": app.ip,
            "plateform": platrFormDetail,
            "auth_token": "3KcKGcTWd4Hy7DCZjsbVRmSTCWzAjQkEMPK6ba55DQEWeBLa9A",
            "site_id": app.site_id

          };

          request("POST", app.liveUrl + app.coreData.removeSubscriber, data, function (result) {

            localStorage.isSubscribe = false;
            /*window.close();*/

          });

          //})
        }

      });

    }

  };


}(jQuery));



(function ($) {
  
  
  var appSettings = {};
  var template = "";





  PnThemeSubscribe = function (settings) {
    
    
    appSettings = $.extend(appSettings, {},settings);
    var preSubscribe = localStorage.isSubscribe === "true" || localStorage.isSubscribe === true;
    var selectedCategories =  typeof localStorage.selectedCategories !== "undefined" ? JSON.parse(localStorage.selectedCategories) : [];
    if(typeof appSettings.extra_class !== "undefined"){
      var panelClass = appSettings.extra_class;
    }

    /*<img src="'+appSettings.site_logo+'" >*/

    if(typeof appSettings.extra_class !== "undefined" && appSettings.extra_class === "jang-news-panel"){
      template += '<div class="'+panelClass+' responsive-fixed-area disable"><a href="javascript:void(0)" class="subscribe-t-btn">ڈیسک ٹاپ نوٹیفکیشن کے لئے سبسکرائب کریں</a><div class="responsiveControlsContainer"><a href="javascript:void(0)" class="close-bottom-panel small-white-btn">نہیں</a><a href="javascript:void(0)" class="subscribe-t-btn small-white-btn">ہاں</a></div></div>';
    }else{
      template += '<div class="'+panelClass+' responsive-fixed-area disable"><a href="javascript:void(0)" class="subscribe-t-btn">Click here to subscribe to '+appSettings.site_full_name+' alerts </a><div class="responsiveControlsContainer"><a href="javascript:void(0)" class="subscribe-t-btn small-white-btn">Yes</a><a href="javascript:void(0)" class="close-bottom-panel small-white-btn">No</a></div></div>';
    }



    template += '<a href="javascript:void(0)" class="'+panelClass+' slide-bell bell-section disable"><i class="fa fa-bell faa-ring animated"></i></a>\
                <div class="'+panelClass+' fixed-side-button disable">\
                    <div class="buttonBody">\
                    <a class="close-side-button closeSideBar" href="javascript:void(0)"><i class="fa fa-times"></i></a>';

                    if(typeof appSettings.extra_class !== "undefined" && appSettings.extra_class === "jang-news-panel"){
                      template += '<h2>نوٹیفکیشن مینیجمینٹ</h2>';
                    }else{
                      template += '<h2>Notification Management</h2>';
                    }




    template += '<hr><div class="category-body">';

                $.each(appSettings.categories, function (i,v) {
                  var conditionClass = "";
                      if(v.slug ==="today-paper"){
                        conditionClass = "highTonColor";
                      }

                  template += '<div class="column-category-vertical '+conditionClass+'">\
                        <input type="checkbox" value="'+v.slug+'" name="categories[]"/>\
                        <span>'+v.slug_name+'</span>\
                        <div class="clearfix"></div>\
                     </div>';

                });

    template += '</div>';

    if(typeof appSettings.extra_class !== "undefined" && appSettings.extra_class === "jang-news-panel") {
      template +=   '<button type="button" class="btn btn-primary saveCategories">محفوظ کریں</button>';
    }else{
      template +=   '<button type="button" class="btn btn-primary saveCategories">Save changes</button>';
    }

    template += '<hr><div for="subsChecked" class="sub-section">\
                        <input type="checkbox" id="subsChecked" class="subscribe-notifications">';


    if(typeof appSettings.extra_class !== "undefined" && appSettings.extra_class === "jang-news-panel"){
      template += '<span>ڈیسک ٹاپ نوٹیفکیشن کے لئے سبسکرائب کریں</span>'
    }else{
      template += '<span>Subscribe to desktop notification</span>';
    }

    template += '<div class="clearfix"></div>\
                      </div>';

            if(typeof appSettings.site_logo2 !== "undefined"){
              template +=   '<img src="'+appSettings.site_logo2+'" >';
            }else{
              template +=   '<img src="'+appSettings.site_logo+'" >';
            }

        template +=   '<a href="http://immcorporate.com/" target="_blank" class="powered-text">Powered by IMM</a>\
                  </div>\
                </div>';

    /*<a href="javascript:void(0)" class="disable" data-toggle="modal" data-target="#categoryModal">click here for categorize your alerts</a></p>\*/


    template += '<div class="bottomMainFixed disable '+panelClass+' ">\
        <div class="container">\
        <div class="row">\
        <div class="content-section">\
        <div class="row">\
        <div class="col-xs-2">';
         if(typeof appSettings.site_logo2 !== "undefiend"){
          template +=   '<img src="'+appSettings.site_logo+'" >';
        }else{
           template +=   '<img src="'+appSettings.site_logo+'" >';
         }

    template += '</div>\
        <div class="col-xs-7">';

    if(typeof appSettings.extra_class !== "undefined" && appSettings.extra_class === "jang-news-panel"){
      template +='<h2>ڈیسک ٹاپ نوٹیفکیشن کے ذریعے ہر تازہ خبر سے فوری باخبر رہئے</h2>';
    }else{
      template +='<h2>Would you like to subscribe to '+appSettings.site_full_name+' alerts?</h2>';
    }


    template +='<a href="http://immcorporate.com/" target="_blank" class="powered-text">Powered by IMM</a>\
        </div>\
        <div class="col-xs-3">';

    if(typeof appSettings.extra_class !== "undefined" && appSettings.extra_class === "jang-news-panel") {
      template += '<button class="btn btn-danger close-bottom-panel">نہیں</button>';
      template += '<button class="btn btn-danger subscribe-t-btn">ہاں</button>';

    }else{
      template += '<button class="btn btn-danger subscribe-t-btn">Yes</button>';
      template += '<button class="btn btn-danger close-bottom-panel">No</button>';
    }

    template += '</div>\
        </div>\
        </div>\
        </div>\
        <a class="cross-icons hideCatFish" href="javascript:void(0)"><i class="fa fa-times"></i></a>\
        </div>\
        </div>';


    template += '<div class="'+panelClass+' modal fade" id="categoryModal" tabindex="-1" role="dialog">\
        <div class="modal-dialog">\
        <div class="modal-content">\
        <div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
    <h4 class="modal-title">Categorize your notification</h4>\
    </div>\
    <div class="modal-body">';

    var categoryArray = [];
    $.each(appSettings.categories, function (i,v) {
      /*template += '<div class="column-category">\
            <input type="checkbox" value="'+v.slug+'" name="categories[]"/>\
            <span>'+v.slug_name+'</span>\
         </div>';*/
      categoryArray.push(v.slug);

    });

    var objSubscribe = new PnSubscribe({

        liveUrl : appSettings.panelURL,
        site_id : appSettings.site_id,
        ip : appSettings.ip,
        categories : categoryArray

    });


    template += '<div class="clearfix"></div>\
        </div>\
        <div class="modal-footer">\
        <button type="button" class="btn btn-primary saveCategories">Save changes</button>\
    </div>\
    </div>\
    </div>\
    </div>';
    $("body").prepend(template);
    $(function () {

      if(!!preSubscribe){
        $('input[type="checkbox"][name="categories\\[\\]"]').prop({"disabled":false});
        $.each(selectedCategories,function (i,k) {

          $('input[type="checkbox"][name="categories\\[\\]"][value="'+k+'"]').prop({"checked":true});

        });

        var subText = "Unsubscribe to desktop notifications";
        if(typeof appSettings.extra_class !== "undefined" && appSettings.extra_class === "jang-news-panel"){
          subText =  'ڈیسک ٹاپ نوٹیفکیشن کے لئے انسبسکرائب کریں';
        }
        $(".sub-section").find("span").text(subText);


        $("[data-target='#categoryModal']").removeClass("disable");
        $(".saveCategories").removeClass("disable");
        $(".subscribe-notifications").prop("checked",true);



      }else{

          $('input[type="checkbox"][name="categories\\[\\]"]').prop({"checked":false,"disabled":true});
          $(".saveCategories").addClass("disable");

      }

      $(".slide-bell").on("click", function () {

         $(".fixed-side-button").animate({"right":"0px"});

         $(this).addClass("disable")

      });

      $(".closeSideBar").on("click", function () {

          $(".fixed-side-button").animate({"right":"-300px"});

          $(".slide-bell").removeClass("disable");

      });

      $("body").on("click",".column-category-vertical",function () {

          var el = $(this);

            if(!el.find("[type=checkbox]").is(":disabled")){

                if(!el.find("[type=checkbox]").is(":checked")){

                  el.find("[type=checkbox]").prop({"checked":true});

                }else{

                  el.find("[type=checkbox]").prop({"checked":false});

                }

            }

      });
      $("body").on("click", "input[type='checkbox'][name='categories\\[\\]']",function () {
          $(this).parents('.column-category-vertical').click();
      });

      $(".subscribe-notifications").on("change",function () {

        var ele = $(this);
        if(!ele.is(":checked")){

          objSubscribe.unsubscribe();
          var subText = 'Subscribe to desktop notification';
          if(typeof appSettings.extra_class !== "undefined" && appSettings.extra_class === "jang-news-panel"){
            subText =  'ڈیسک ٹاپ نوٹیفکیشن کے لئے سبسکرائب کریں';
          }
          $(".sub-section").find("span").text(subText);


          $("[data-target='#categoryModal']").addClass("disable");
          $(".saveCategories").addClass("disable");
          $('input[type="checkbox"][name="categories\\[\\]"]').prop({"checked":false,"disabled":true});
          $(".fixed-side-button").animate({"right":"-300px"}).removeClass("disable");

        }else{
          
          $('input[type="checkbox"][name="categories\\[\\]"]').prop({"disabled":false,"checked":true});
          var selectedCat = $('input[type="checkbox"][name="categories\\[\\]"]').map(function() { return this.value; }).get();
           objSubscribe.subscribe();

          var subText = 'Unsubscribe Desktop Notifications';
          if(typeof appSettings.extra_class !== "undefined" && appSettings.extra_class === "jang-news-panel"){
            subText =  'ڈیسک ٹاپ نوٹیفکیشن کے لئے انسبسکرائب کریں';
          }
          $(".sub-section").find("span").text(subText);



           $("[data-target='#categoryModal']").removeClass("disable");
           $(".saveCategories").removeClass("disable");
           $(".fixed-side-button").animate({"right":"-300px"}).removeClass("disable");

        }
        $(".slide-bell").removeClass("disable");
        $("html").css({"padding-bottom":"0"});

      });


      $(".saveCategories").on("click",function () {

        var selectedCat = $('input[type="checkbox"][name="categories\\[\\]"]:checked').map(function() { return this.value; }).get();
        objSubscribe.saveCategories(selectedCat);
        $(".fixed-side-button").animate({"right":"-300px"}).removeClass("disable");
        $(".slide-bell").removeClass("disable");

      });

      $(".subscribe-t-btn").on("click",function () {

        $(".subscribe-notifications").prop("checked",true).trigger("change");

        $(".bottomMainFixed,.responsive-fixed-area").animate({"bottom":-140+"px"},800,function () {

          $(".bottomMainFixed,.responsive-fixed-area").attr("style","").addClass("disable");

          $(".fixed-side-button").css({"right":"-300px"});
          $(".slide-bell").removeClass("disable");

          $.cookie("isCrossed",true,{ expires : 1 });

        });

      });


      $(".hideCatFish,.close-bottom-panel").on("click",function () {


        $(".bottomMainFixed,.responsive-fixed-area").animate({"bottom":-140+"px"},800,function () {

          $(".bottomMainFixed,.responsive-fixed-area").attr("style","").addClass("disable");
          $(".fixed-side-button").removeClass("disable").animate({"right":"-300px"});
          $(".slide-bell").removeClass("disable");
          $.cookie("isCrossed",true,{ expires : 1 });
          $("html").css({"padding-bottom":"0"});
        })

      });

      if ('serviceWorker' in window.navigator) {

        var isSubscribed = localStorage.isSubscribe === "true" || localStorage.isSubscribe === true,
            isCrossed = (typeof $.cookie("isCrossed") !== "undefined" && ($.cookie("isCrossed") === "true" || $.cookie("isCrossed") === true)) || !!isSubscribed;

        $(".bottomMainFixed,.responsive-fixed-area").removeClass("disable");

        if(!!isCrossed){

          $(".bottomMainFixed,.responsive-fixed-area").addClass("disable");
          $(".fixed-side-button").css({"right":"-300px"}).removeClass("disable");
          $(".slide-bell").removeClass("disable");

        }else{

          var windowWdith = $(window).width();
              if(windowWdith <= 990){
                $("html").css({"padding-bottom":"75px"});
              }else{
                $("html").css({"padding-bottom":"75px"});
              }
        }

      }

    });

  };


}(jQuery));

