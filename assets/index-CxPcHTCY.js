(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <div class="container">
    <!-- Scene 1: Gift Box -->
    <div id="gift-scene" class="scene active">
      <div class="gift-box" id="gift-box">
        <div class="box-lid">
            <div class="ribbon-vertical"></div>
            <div class="ribbon-bow"></div>
        </div>
        <div class="box-body">
            <div class="ribbon-vertical"></div>
            <div class="ribbon-horizontal"></div>
        </div>
        <div class="click-me">Click to open!</div>
      </div>
    </div>

    <!-- Scene 2: Birthday Message -->
    <div id="message-scene" class="scene">
      <h1 class="birthday-text">Happy Birthday!</h1>
      <p class="subtitle">Wishing you the best day ever.</p>
      <div id="confetti-container"></div>
      <button id="next-button" class="btn">See your surprises</button>
    </div>

    <!-- Scene 3: Photo Gallery Placeholder -->
    <div id="gallery-scene" class="scene">
      <h2>Special Memories</h2>
      <div class="gallery">
        <img src="./images/SaveClip.App_603693106_17998272989847913_8328173778089934870_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_603830234_17998272968847913_3193838595807602124_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_603904303_17998272977847913_3205716365180993666_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_604045949_17998272959847913_6845867626612951472_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_616854995_18001209614847913_7642087820734460708_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_617879013_18001209617847913_2911273113256809937_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_618756887_18001209629847913_5238570195779233404_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_619733809_18001431017847913_6026313640994964854_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_619756418_18001431026847913_3917187991228031398_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_626681352_18003217289847913_7759834038494193583_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_628150143_18003217271847913_1944066248560626216_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_629674481_18003817826847913_1394686988743686335_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_629817249_18003817817847913_560355196494219299_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_654817396_18008200049847913_5519955139538890952_n.jpg" class="gallery-img" />
        <img src="./images/SaveClip.App_655225131_18008200058847913_7437589163746238696_n.jpg" class="gallery-img" />
      </div>
    </div>
  </div>
`;var e=document.getElementById(`gift-box`),t=document.getElementById(`gift-scene`),n=document.getElementById(`message-scene`),r=document.getElementById(`gallery-scene`),i=document.getElementById(`next-button`),a=document.getElementById(`confetti-container`),o=[`#FF2A54`,`#FFD700`,`#00E5FF`,`#B026FF`,`#FF7B00`,`#ffffff`];function s(){for(let e=0;e<150;e++){let e=document.createElement(`div`);e.classList.add(`confetti`);let t=o[Math.floor(Math.random()*o.length)],n=Math.random()*100+`vw`;e.style.backgroundColor=t,e.style.left=n,e.style.top=`-20px`;let r=Math.random()*8+4;e.style.width=`${r}px`,e.style.height=`${r}px`,e.animate([{transform:`translate3d(0,0,0) rotate(0deg)`,opacity:1},{transform:`translate3d(${Math.random()*300-150}px, 120vh, 0) rotate(${Math.random()*1080}deg)`,opacity:0}],{duration:Math.random()*3e3+3e3,delay:Math.random()*2e3,easing:`cubic-bezier(.37,0,.63,1)`,fill:`forwards`}),a.appendChild(e)}}e.addEventListener(`click`,()=>{e.classList.contains(`opened`)||(e.classList.add(`opened`),setTimeout(()=>{t.classList.remove(`active`),t.classList.add(`hidden`),setTimeout(()=>{n.classList.remove(`hidden`),n.classList.add(`active`),s()},500)},1e3))}),i.addEventListener(`click`,()=>{n.classList.remove(`active`),n.classList.add(`hidden`),setTimeout(()=>{r.classList.remove(`hidden`),r.classList.add(`active`)},1e3)});