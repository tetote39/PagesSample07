// サイトを開いた時にロゴがふわっとフェードイン
$(function() {
  if (!sessionStorage.getItem('logoShown')) {
    // 初回だけ演出
    setTimeout(function(){
      $('.logo_fadein p').fadeIn(1000);
    },500);
    setTimeout(function(){
      $('.logo_fadein').fadeOut(1000);
    },2500);

    // フラグを保存
    sessionStorage.setItem('logoShown', 'true');
  } else {
    // 2回目以降はロゴを即非表示にしておく
    $('.logo_fadein').hide();
  }
});

// Intersection Observerで監視
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

// h2用のコールバック（見えたらslideクラスを付与）
const h2Callback = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide');
      observer.unobserve(entry.target);
    }
  });
};

// pタグ用のコールバック（見えたらslideクラスを付与）
const pCallback = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide');
      observer.unobserve(entry.target);
    }
  });
};

// h2用Observer
const h2Observer = new IntersectionObserver(h2Callback, options);

// pタグ用Observer
const pObserver = new IntersectionObserver(pCallback, options);

// INTRODUCTIONのh2を監視
const introH2 = document.querySelector('.introduction h2');
if (introH2) {
  h2Observer.observe(introH2);
}

// INTRODUCTIONのpタグを監視
const introTexts = document.querySelectorAll('.introduction .slideConts');
introTexts.forEach(text => {
  pObserver.observe(text);
});

// LIVE SCHEDULEのh2を監視
const scheduleH2 = document.querySelector('.live_schedule h2');
if (scheduleH2) {
  h2Observer.observe(scheduleH2);
}

// LIVE SCHEDULEのpタグを監視
const scheduleTexts = document.querySelectorAll('.live_schedule .slideConts');
scheduleTexts.forEach(text => {
  pObserver.observe(text);
});

// ABOUTのh2を監視
const aboutH2 = document.querySelector('.about h2');
if (aboutH2) {
  h2Observer.observe(aboutH2);
}

// ABOUTのpタグを監視
const aboutTexts = document.querySelectorAll('.about .slideConts');
aboutTexts.forEach(text => {
  pObserver.observe(text);
});

// THEMESONGのh2を監視
const themeH2 = document.querySelector('.themesong-title');
if (themeH2) h2Observer.observe(themeH2);

// THEMESONGのテキストを監視
const themeTexts = document.querySelectorAll('.themesong .slideConts');
themeTexts.forEach(text => {
  pObserver.observe(text);
});

// GOODSのh2を監視
const goodsH2 = document.querySelector('.goods_title');
if (goodsH2) {
  h2Observer.observe(goodsH2);
}

// GOODSの画像を監視
const goodsTexts = document.querySelectorAll('.goods .slideConts');
goodsTexts.forEach(text => {
  pObserver.observe(text);
});

// FOOTERの要素を監視
document.querySelectorAll('.footer_top .slideConts').forEach(el => pObserver.observe(el));


// カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById('cursor'); 

// カーソル用のdivタグをマウスに追従させる
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll('a');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('cursor--hover');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('cursor--hover');   
    });
}

