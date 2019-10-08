/* eslint-disable */
(function(doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
          let clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          let fontSize = 20 * (clientWidth / 375);
          if(fontSize > 24) {
            docEl.style.fontSize = '24px';
          } else {
            docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
          }

      };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
// 这里在375的设备上1rem = 20px，在其他屏幕宽的时候会自动根据这个比例来动态调整