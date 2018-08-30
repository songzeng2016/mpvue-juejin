(function(window){var svgSprite='<svg><symbol id="icon-love" viewBox="0 0 1097 1024"><path d="M548.928731 80.274286l3.766858-3.072c22.564571-18.505143 46.555429-34.852571 73.618285-46.08a404.224 404.224 0 0 1 91.794286-26.075429 329.874286 329.874286 0 0 1 63.670857-4.022857 291.657143 291.657143 0 0 1 125.184 32.256c59.245714 30.646857 107.885714 73.325714 143.542857 130.011429 22.016 34.962286 35.657143 73.142857 42.276572 113.883428 4.937143 30.281143 5.558857 60.708571 3.072 91.172572a323.84 323.84 0 0 1-40.557715 134.656 339.309714 339.309714 0 0 1-54.601142 71.972571c-49.627429 50.176-99.328 100.278857-149.028572 150.418286l-97.499428 98.340571-150.564572 151.844572-30.390857 30.72a50.578286 50.578286 0 0 1-12.726857 9.691428 23.478857 23.478857 0 0 1-23.844572-0.329143 57.161143 57.161143 0 0 1-11.410285-8.667428c-31.195429-31.268571-62.281143-62.683429-93.403429-94.025143l-54.052571-54.381714c-47.542857-47.908571-95.085714-95.707429-142.592-143.652572-40.411429-40.850286-80.713143-81.773714-121.014857-122.733714-15.140571-15.36-30.427429-30.646857-43.812572-47.652572-32.182857-40.813714-54.198857-86.381714-64.182857-137.508571A332.507429 332.507429 0 0 1 0.576731 326.217143c1.755429-33.865143 7.350857-66.998857 17.737143-99.291429 24.722286-77.019429 72.301714-135.753143 142.116572-176.420571C196.928731 29.257143 235.731017 13.860571 277.27616 5.741714a303.908571 303.908571 0 0 1 193.243429 25.782857c18.761143 9.252571 36.205714 20.845714 53.686857 32.256 8.118857 5.302857 16.164571 10.788571 24.722285 16.493715" fill="#979797" ></path></symbol><symbol id="icon-avatar" viewBox="0 0 1024 1024"><path d="M511.999488 0c-282.758945 0-511.978511 229.220588-511.97851 511.978511s229.220588 511.978511 511.97851 511.97851 511.978511-229.221612 511.978511-511.97851c0-282.758945-229.220588-511.978511-511.978511-511.978511z m277.152251 754.455008c0 14.349823-11.632945 25.982768-25.982768 25.982767H260.831029c-14.349823 0-25.981744-11.632945-25.981745-25.982767 0-0.022513 0.005117-0.041956 0.005117-0.064469h-0.017396s0-94.676289 69.183685-129.110543c43.776016-21.776979 26.924209-4.097318 80.666204-26.39209 53.743018-22.252817 66.476017-30.020734 66.476018-30.020734l0.506536-51.305503s-20.128433-15.395642-26.383904-63.670111c-12.596899 3.6399-16.755616-14.788821-17.497512-26.522051-0.674359-11.330046-7.28901-46.729278 8.075932-43.534515-3.14462-23.636327-5.40101-44.946678-4.292769-56.240909 3.851725-39.637766 42.030255-81.048921 100.836593-84.07586 69.173452 3.018753 96.576569 44.409442 100.41806 84.044138 1.121544 11.296277-1.345648 32.624025-4.492314 56.218396 15.374152-3.15383 8.69094 32.187073 7.943926 43.522236-0.680499 11.733229-4.934382 30.097482-17.495466 26.463721-6.28003 48.2714-26.408463 63.547315-26.408463 63.547315l0.471744 51.042513s12.727882 7.268544 66.469877 29.526477c53.750181 22.289656 36.887119 5.622044 80.669275 27.406187 69.178569 34.421974 69.178569 129.099287 69.178568 129.099287h-0.017396c-0.001023 0.023536 0.00614 0.044002 0.00614 0.066515z"  ></path></symbol><symbol id="icon-comment" viewBox="0 0 1024 1024"><path d="M64 0h896a64 64 0 0 1 64 64v576a64 64 0 0 1-64 64H576l-256 320-64-320H64a64 64 0 0 1-64-64V64a64 64 0 0 1 64-64z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)