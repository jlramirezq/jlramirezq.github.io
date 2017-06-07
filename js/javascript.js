
$(document).ready(function(){
	$('#biografia').click(function(){
		$("#contenido").load("biografia.html");
								 });
	
	$('#inicio').click(function(){
		$("#contenido").load("inicio.html");
								 });

	$('#quehago').click(function(){
		$("#contenido").load("quehago.html");
								 });

	$('#contacto').click(function(){
		$("#contenido").load("contacto.html");
								 });
							});


<script id="__st">
//<![CDATA[
var __st={"a":17758583,"offset":-25200,"reqid":"fe30fbdf-fcce-4581-9f8d-f984a5de2472","pageurl":"themes.materializecss.com\/pages\/demo","s":"pages-199716225","u":"be2484e735db","p":"page","rtyp":"page","rid":199716225};
//]]>
</script><script src="https://cdn.shopify.com/s/javascripts/shopify_stats.js?v=6" type="text/javascript" async="async"></script>
<meta id="shopify-digital-wallet" name="shopify-digital-wallet" content="/17758583/digital_wallets/dialog" />
<script src="//cdn.shopify.com/s/assets/themes_support/ga_urchin_forms-668547562549a84f5dfa01ef82607987f85ecbe1c8301faf25059becfa208199.js" defer="defer"></script>
    <script type="text/javascript">
      
    window.ShopifyAnalytics = window.ShopifyAnalytics || {};
    window.ShopifyAnalytics.meta = window.ShopifyAnalytics.meta || {};
    window.ShopifyAnalytics.meta.currency = 'USD';
    var meta = {"page":{"pageType":"page","resourceType":"page","resourceId":199716225}};
    for (var attr in meta) {
      window.ShopifyAnalytics.meta[attr] = meta[attr];
    }
  


   
      window.ShopifyAnalytics.merchantGoogleAnalytics = function() {
        
      };


    
      (window.gaDevIds=window.gaDevIds||[]).push('BwiEti');
      

      (function () {
        var customDocumentWrite = function(content) {
          var jquery = null;

          if (window.jQuery) {
            jquery = window.jQuery;
          } else if (window.Checkout && window.Checkout.$) {
            jquery = window.Checkout.$;
          }

          if (jquery) {
            jquery('body').append(content);
          }
        };

        var trekkie = window.ShopifyAnalytics.lib = window.trekkie = window.trekkie || [];
        if (trekkie.integrations) {
          return;
        }
        trekkie.methods = [
          'identify',
          'page',
          'ready',
          'track',
          'trackForm',
          'trackLink'
        ];
        trekkie.factory = function(method) {
          return function() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(method);
            trekkie.push(args);
            return trekkie;
          };
        };
        for (var i = 0; i < trekkie.methods.length; i++) {
          var key = trekkie.methods[i];
          trekkie[key] = trekkie.factory(key);
        }
        trekkie.load = function(config) {
          trekkie.config = config;
          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.onerror = function(e) {
            (new Image()).src = '//v.shopify.com/internal_errors/track?error=trekkie_load';
          };
          script.async = true;
          script.src = 'https://cdn.shopify.com/s/javascripts/tricorder/trekkie.storefront.min.js?v=2017.03.29.1';
          var first = document.getElementsByTagName('script')[0];
          first.parentNode.insertBefore(script, first);
        };
        trekkie.load(
          {"Trekkie":{"appName":"storefront","development":false,"defaultAttributes":{"shopId":17758583,"isMerchantRequest":null,"themeId":133945025,"themeCityHash":4543350553031605630}},"Performance":{"navigationTimingApiMeasurementsEnabled":true,"navigationTimingApiMeasurementsSampleRate":0.1},"Google Analytics":{"trackingId":"UA-56218128-1","domain":"auto","siteSpeedSampleRate":"10","enhancedEcommerce":true,"doubleClick":true,"includeSearch":true},"Session Attribution":{}}
        );

        var loaded = false;
        trekkie.ready(function() {
          if (loaded) return;
          loaded = true;

          window.ShopifyAnalytics.lib = window.trekkie;
          
    ga('require', 'linker');
    function addListener(element, type, callback) {
      if (element.addEventListener) {
        element.addEventListener(type, callback);
      }
      else if (element.attachEvent) {
        element.attachEvent('on' + type, callback);
      }
    }
    function decorate(event) {
      event = event || window.event;
      var target = event.target || event.srcElement;
      if (target && (target.getAttribute('action') || target.getAttribute('href'))) {
        ga(function (tracker) {
          var linkerParam = tracker.get('linkerParam');
          document.cookie = '_shopify_ga=' + linkerParam + '; ' + 'path=/';
        });
      }
    }
    addListener(window, 'load', function(){
      for (var i=0; i < document.forms.length; i++) {
        var action = document.forms[i].getAttribute('action');
        if(action && action.indexOf('/cart') >= 0) {
          addListener(document.forms[i], 'submit', decorate);
        }
      }
      for (var i=0; i < document.links.length; i++) {
        var href = document.links[i].getAttribute('href');
        if(href && href.indexOf('/checkout') >= 0) {
          addListener(document.links[i], 'click', decorate);
        }
      }
    });
  

          var originalDocumentWrite = document.write;
          document.write = customDocumentWrite;
          try { window.ShopifyAnalytics.merchantGoogleAnalytics.call(this); } catch(error) {};
          document.write = originalDocumentWrite;

          
      window.ShopifyAnalytics.lib.page(
        null,
        {"pageType":"page","resourceType":"page","resourceId":199716225}
      );
    
          
        });

        
    var eventsListenerScript = document.createElement('script');
    eventsListenerScript.async = true;
    eventsListenerScript.src = "//cdn.shopify.com/s/assets/shop_events_listener-9410288c486c406bc38edb97003bb123d375112c2b7e037d65afabae7c905e02.js";
    document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);
  
      })();
   
    
    
  

//<![CDATA[
    window.Shopify = window.Shopify || {};
    window.Shopify.Checkout = window.Shopify.Checkout || {};
    window.Shopify.Checkout.rememberMeHost = "remember-me.shopifycloud.com";
    window.Shopify.Checkout.rememberMeAccessToken = "LzM1SnF5R2RvRHExQU1jcENPNU56NVNUR29Ld2xpbG14SDAyeGkyaWU1NDZVL29HM1N2cWM3Z1NCa1p4TVdDeS0tTnphM3RzTCtHZE5ndVFKbUF0WWJmZz09--0ee5cd78aad5c5abf769273b8610bef696374fe3";

//]]>


//<![CDATA[
var Shopify = Shopify || {};
Shopify.shop = "materialize-themes.myshopify.com";
Shopify.theme = {"name":"debut","id":133945025,"theme_store_id":796,"role":"main"};
Shopify.theme.handle = "null";
Shopify.theme.style = {"id":null,"handle":null};

//]]>


windows.onload;





