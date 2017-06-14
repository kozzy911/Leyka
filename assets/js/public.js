function is_email(e){return/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(e)}function leyka_get_ajax_url(){return"undefined"!=typeof leyka?leyka.ajaxurl:frontend.ajaxurl}!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function n(e){return s.raw?e:encodeURIComponent(e)}function t(e){return s.raw?e:decodeURIComponent(e)}function a(e){return n(s.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(r," ")),s.json?JSON.parse(e):e}catch(n){}}function o(n,t){var a=s.raw?n:i(n);return e.isFunction(t)?t(a):a}var r=/\+/g,s=e.cookie=function(i,r,l){if(void 0!==r&&!e.isFunction(r)){if(l=e.extend({},s.defaults,l),"number"==typeof l.expires){var f=l.expires,d=l.expires=new Date;d.setTime(+d+864e5*f)}return document.cookie=[n(i),"=",a(r),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var c=i?void 0:{},u=document.cookie?document.cookie.split("; "):[],p=0,m=u.length;p<m;p++){var v=u[p].split("="),y=t(v.shift()),_=v.join("=");if(i&&i===y){c=o(_,r);break}i||void 0===(_=o(_))||(c[y]=_)}return c};s.defaults={},e.removeCookie=function(n,t){return void 0!==e.cookie(n)&&(e.cookie(n,"",e.extend({},t,{expires:-1})),!e.cookie(n))}}),Number.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},window.LeykaGUIBottom=function(e){this.$=e},window.LeykaGUIBottom.prototype={bindEvents:function(){var e=this,n=e.$;n(".leyka-js-open-form-bottom").on("click",function(e){e.preventDefault(),n(this).closest(".leyka-pf-bottom").leykaForm("openFromBottom")})}},jQuery(document).ready(function(e){leykaGUIBottom=new LeykaGUIBottom(e),leykaGUIBottom.bindEvents()}),window.LeykaGUICard=function(e){this.$=e},window.LeykaGUICard.prototype={bindEvents:function(){var e=this;e.$}},jQuery(document).ready(function(e){leykaGUICard=new LeykaGUICard(e),leykaGUICard.bindEvents()}),window.LeykaGUIFinal=function(e){this.$=e,e(".leyka-pf__final-informyou .informyou-redirect-text").show()},window.LeykaGUIFinal.prototype={bindEvents:function(){function e(e,n,a){return n.length?t.cookie(e,n):a?t.cookie(e,""):t.cookie(e)?t.cookie(e):""}var n=this,t=n.$,a=t(".leyka-success-form"),i=e("leyka_donation_id","",!1);i&&a.each(function(e,n){var a=t(n),o=a.find('input[name="leyka_donation_id"]');o.val()||(o.val(i),a.show())}),a.on("submit",function(e){e.preventDefault(),n.validateForm(this)&&n.subscribeUser()}),t(".leyka-js-no-subscribe").on("click",function(e){e.preventDefault(),t(this).closest(".leyka-final-subscribe-form").slideUp(100);var a=t(".leyka-pf__final-thankyou");a.find(".informyou-redirect-text").slideDown(100),n.runRedirectProcess(a)})},validateForm:function(e){var n=this,t=n.$;e=t(e);var a=!1;return e.find(":input").each(function(){var n=t(this),i=n.attr("type"),o=n.attr("name"),r=n.val(),s=e.find("."+o+"-error");1==t.inArray(i,["text","email"])&&(n.hasClass("required")&&!r?(s.show(),n.closest(".donor__textfield").addClass("invalid")):"email"!=i||is_email(r)?(s.hide(),n.closest(".donor__textfield").removeClass("invalid"),a=!0):(s.show(),n.closest(".donor__textfield").addClass("invalid")))}),a},animateRedirectCountdown:function(e){var n=this,t=(n.$,e.find(".informyou-redirect-text .leyka-redirect-countdown")),a=t.text();a=parseInt(a,10),a-=1,a<=0&&clearInterval(n.countdownInterval),t.text(String(a))},runRedirectProcess:function(e){var n=this,t=(n.$,leyka_get_ajax_url());setTimeout(function(){var e;t?(e=t.replace(/\/core\/wp-admin\/.*/,""),e=e.replace(/\/wp-admin\/.*/,"")):e="/",window.location.href=e},4e3),n.countdownInterval=setInterval(n.animateRedirectCountdown.bind(null,e),1e3)},subscribeUser:function(){var e=this,n=e.$,t=n(".leyka-pf__final-informyou");n.post(leyka_get_ajax_url(),n("form.leyka-success-form").serializeArray(),"json").done(function(a){"undefined"!=typeof a.status&&0!=a.status&&"undefined"!=typeof a.message&&n(".leyka-pf__final-error-message").html(a.message).show(),t.show(),e.runRedirectProcess(t)}).always(function(){n(".leyka-pf__final-thankyou").hide()})}},jQuery(document).ready(function(e){leykaGUIFinal=new LeykaGUIFinal(e),leykaGUIFinal.bindEvents()}),function(e){function n(e){u(),x(),g(),t()}function t(){f(),d(),l(),o(),r(),s(),i()}function a(e){var n={},t=e.find(".donor__textfield--name input").val(),a=e.find(".donor__textfield--email input").val(),i=parseInt(e.find(".amount__figure input").val()),o=e.find(".donor__oferta input").prop("checked");return 0===t.length&&(n.name=!0,e.find(".donor__textfield--name").addClass("invalid")),0!==a.length&&is_email(a)||(n.email=!0,e.find(".donor__textfield--email").addClass("invalid")),o||(n.agree=!0,e.find(".donor__oferta").addClass("invalid")),(!Number.isInteger(i)||i<j||i>I)&&(n.amount=!0,console.log("error amount")),!!Object.keys(n).length&&n}function i(){e(".leyka-pf__form").on("submit.leyka","form",function(n){var t=e(this),i=t.find(".step.step--active");if(!i.hasClass("step--person")){if(i.hasClass("step--amount")){var o=t.find(".step.step--amount .step__action--amount a");o.length<2&&o.click()}return n.preventDefault(),!1}if(a(t))n.preventDefault(),n.stopPropagation();else{if("default"!=t.find('input[name="leyka_payment_method"]:checked').data("processing"))return;n.preventDefault();for(var r=t.closest(".leyka-pf").find(".leyka-pf__redirect"),s=t.serializeArray(),l={action:"leyka_ajax_get_gateway_redirect_data"},f=0;f<s.length;f++)l[s[f].name]=s[f].value;r.addClass("leyka-pf__redirect--open"),e.post(leyka.ajaxurl,l).done(function(n){if(n=e.parseJSON(n),!n||"undefined"==typeof n.status)return!1;if(0!=n.status&&"undefined"!=typeof n.message)return!1;if(!n.payment_url)return!1;var t='<form class="leyka-auto-submit" action="'+n.payment_url+'" method="post">';e.each(n,function(e,n){"payment_url"!=e&&(t+='<input type="hidden" name="'+e+'" value="'+n+'">')}),t+="</form>",r.append(t),r.find(".leyka-auto-submit").submit()})}})}function o(){e(".donor__textfield--name").on("focus","input",function(){e(this).parents(".donor__textfield--name").removeClass("invalid").removeClass("valid").addClass("focus")}).on("blur","input",function(){e(this).parents(".donor__textfield--name").removeClass("focus");var n=e(this).val();n.length>0?e(this).parents(".donor__textfield--name").addClass("valid"):e(this).parents(".donor__textfield--name").addClass("invalid")}),e(".donor__textfield--email").on("focus","input",function(){e(this).parents(".donor__textfield--email").removeClass("invalid").removeClass("valid").addClass("focus")}).on("blur","input",function(){e(this).parents(".donor__textfield--email").removeClass("focus");var n=e(this).val();n.length>0&&is_email(n)?e(this).parents(".donor__textfield--email").addClass("valid"):e(this).parents(".donor__textfield--email").addClass("invalid")})}function r(){e(".leyka-js-oferta-trigger").on("click",function(n){n.preventDefault(),e(this).parents(".leyka-pf").addClass("leyka-pf--oferta-open")}),e(".leyka-js-oferta-close").on("click",function(n){n.preventDefault(),e(this).parents(".leyka-pf").find(".donor__oferta").removeClass("invalid").find("input").prop("checked",!0),e(this).parents(".leyka-pf").removeClass("leyka-pf--oferta-open")}),e(".donor__oferta").on("change","input",function(){e(this).prop("checked")?e(this).parents(".donor__oferta").removeClass("invalid"):e(this).parents(".donor__oferta").addClass("invalid")})}function s(){e(".leyka-js-history-close").on("click",function(n){n.preventDefault(),e(this).parents(".leyka-pf--history-open").removeClass("leyka-pf--history-open")}),e(".leyka-js-history-more").on("click",function(n){n.preventDefault(),e(this).parents(".leyka-pf, .leyka-pf-bottom").addClass("leyka-pf--history-open")})}function l(){e(".payment-opt__radio").change(function(){k(e(this))})}function f(){e(".leyka-js-another-step").on("click",function(n){n.preventDefault(),c(e(this))}),e(".leyka-js-complete-donation").click(function(){e(this).closest(".leyka-pf").leykaForm("close")}),e(".leyka-submit-errors").on("click",function(n){n.preventDefault(),e(this).hide()})}function d(){e(".leyka-js-amount").on("click",function(n){n.preventDefault(),h(e(this))});var n=e(".amount_range").find("input"),t=e(".amount__figure").find("input.leyka_donation_amount");n.on("change input",p),t.on("change input",m),n.on("change input",y),n.on("change input",_),t.on("focus",function(){e(this).parents(".amount__figure").addClass("focus")}).on("blur",function(){e(this).parents(".amount__figure").removeClass("focus")})}function c(e){var n=e.attr("href"),t=e.parents(".leyka-pf");"cards"==n&&t.find(".payment-opt__radio").prop("checked",!1),t.find(".step").removeClass("step--active"),t.find(".step--"+n).addClass("step--active"),t.find(".leyka-pf__final-screen").removeClass("leyka-pf__final--open").removeClass("leyka-pf__final--open-half")}function u(){e(".amount__figure input.leyka_donation_amount").each(function(){var n=parseInt(e(this).val());(!Number.isInteger(n)||n<j||n>I)&&(n=500),e(this).val(n),e(this).parents(".step__fields").find(".amount_range").find("input").val(n);var t=e(this).closest(".leyka-pf").attr("id");e('div[data-target = "'+t+'"]').find("input").val(n)})}function p(n,t){var a=e(this).val();t&&t.skipSyncFigure||(e(this).parents(".step__fields").find(".amount__figure").find("input.leyka_donation_amount").val(a),e(this).parents(".step__fields").removeClass("invalid"))}function m(){var n=e(this),t=n.val(),a=n.parents(".leyka-pf__form");t||(t=0),a.find(".step--amount .step__fields").removeClass("invalid"),a.find(".amount_range").find("input").val(t).trigger("change",{skipSyncFigure:!0})}function v(e){var n,t,a=e.val();try{n=parseInt(e.attr("min")),t=parseInt(e.attr("max"))}catch(i){n=0,t=0}var o=0;return t&&(o=100*(a-n)/(t-n)),o}function y(){var n=v(e(this)),t=1;for(var a in F)rangePercent=F[a],n>=rangePercent&&(t=parseInt(a)+2);var i=e(".amount__icon .svg-icon");i.find("use").attr("xlink:href","#icon-money-size"+t),i.addClass("icon-money-size"+t),1!=t&&i.removeClass("icon-money-size1");for(var a in F){var o=parseInt(a)+2;t!=o&&i.removeClass("icon-money-size"+o)}}function _(){var n=v(e(this)),t=(U-2*$)*n/100;e(".range-circle").css({left:t+"px"}),e(".range-color-wrapper").width(t+$)}function h(e){var n=e.attr("href"),t=e.parents(".step"),a=e.parents(".leyka-pf__form"),i=parseInt(t.find(".amount__figure input").val());if(!Number.isInteger(i)||i<j||i>I)t.find(".step__fields").addClass("invalid");else{if(t.find(".step__fields").removeClass("invalid"),e.hasClass("monthly")){t.find("input.is-recurring-chosen").val(1),a.find(".remembered-amount").text(i),a.find(".remembered-monthly").show();var o=a.find('.payment-opt__radio[data-has-recurring="1"]:first'),r=a.find(".remembered-payment");r.closest(".leyka-js-another-step").attr("href","amount"),o.attr("checked",!0),r.text(o.closest(".payment-opt").find(".payment-opt__label").text())}else t.find("input.is-recurring-chosen").val(0),a.find(".remembered-amount").text(i),a.find(".remembered-monthly").hide(),a.find(".remembered-payment").parents(".leyka-js-another-step").attr("href","cards"),a.find(".payment-opt__radio").prop("checked",!1);t.removeClass("step--active"),a.find(".step--"+n).addClass("step--active")}}function x(){var n=e(".payments-grid");n.find(".payment-opt").length<=4&&n.css("overflow-y","hidden")}function k(e){var n=e.parents(".payment-opt").find(".payment-opt__label").text(),t=e.parents(".step"),a=e.parents(".leyka-pf__form");a.find(".remembered-payment").text(n),t.removeClass("step--active");var i=a.find(".step--static."+e.val());i.length>0?i.addClass("step--active"):a.find(".step--person").addClass("step--active")}function g(){e(".donor__textfield--name").removeClass("invalid").removeClass("valid"),e(".donor__textfield--email").removeClass("invalid").removeClass("valid"),e(".donor__oferta").removeClass("invalid").removeClass("valid")}function C(){var n=e(this);n.addClass("leyka-pf--active"),e(".amount_range input").change()}function b(){var n=e(this).attr("data-target"),t=parseInt(e(this).find("input").val()),a=e("#"+n);Number.isInteger(t)&&t>=j&&t<=I&&(a.find(".amount__figure input.leyka_donation_amount").val(t),a.find(".amount_range input").val(t)),a.find(".step").removeClass("step--active"),a.find(".step--amount").addClass("step--active"),a.addClass("leyka-pf--active")}function w(){var n=e(this);n.hasClass("leyka-pf--oferta-open")?n.removeClass("leyka-pf--oferta-open"):n.removeClass("leyka-pf--active")}var j=1,I=3e4,F=[25,50,75],U=200,$=17,D={defaults:{color:"green"},open:C,close:w,openFromBottom:b,init:n};e.fn.leykaForm=function(n){return D[n]?D[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof n&&n?void e.error("Method "+n+" does not exist on jQuery.leykaForm"):D.init.apply(this,arguments)}}(jQuery),window.LeykaPageMain=function(e){var n=this;n.$=e,n.setupNoScroll(),n.initForms(),n.inpageCardColumns(),n.setupCustomRangeControl(),n.bindEvents(),n.handleHashChange()},window.LeykaPageMain.prototype={bindEvents:function(){var e=this,n=e.$;n(".leyka-js-open-form").on("click",function(e){e.preventDefault(),n(this).closest(".leyka-pf").leykaForm("open")}),n(".leyka-js-close-form").on("click",function(e){e.preventDefault(),n(this).closest(".leyka-pf").leykaForm("close")}),n(window).resize(function(){e.inpageCardColumns()}),n(window).on("hashchange",function(){e.handleHashChange()})},setupNoScroll:function(){var e=this,n=e.$,t=n(window).scrollTop();n(window).scroll(function(){var e=n(window).scrollTop();n(".leyka-pf").hasClass("leyka-pf--active")?n(window).scrollTop(t):t=e})},initForms:function(){var e=this,n=e.$;n(".leyka-pf").leykaForm()},inpageCardColumns:function(){var e=this,n=e.$,t=n(".leyka-pf");t.each(function(){var e=n(".leyka-pf").width();e>=600?n(this).addClass("card-2col"):n(this).removeClass("card-2col")})},setupCustomRangeControl:function(){var e=this,n=e.$;n(".amount__range_overlay").addClass("amount__range_custom--visible"),n(".amount__range_custom").addClass("amount__range_custom--visible")},handleHashChange:function(){var e=this,n=e.$,t=window.location.hash.substr(1),a=t.split("|");if(a.length>0){var i=a[0],o=n("#"+i);if(o.length>0){o.leykaForm("open");for(var r in a){var s=a[r];e.handleFinalScreenParams(o,s)}}}},handleFinalScreenParams:function(e,n){if(n.search(/final-open/)>-1){e.find(".leyka-pf__final-screen").removeClass("leyka-pf__final--open").removeClass("leyka-pf__final--open-half");var t=n.split("_");try{var a=e.find(".leyka-pf__final-screen.leyka-pf__final-"+t[1]);a.addClass("leyka-pf__final--open"),t[2]&&a.addClass("leyka-pf__final--open-half")}catch(i){}}}},jQuery(document).ready(function(e){leykaPageMain=new LeykaPageMain(e)});