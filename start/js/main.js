document.addEventListener('DOMContentLoaded', function () {
  // 複数の .splide があっても対応
  document.querySelectorAll('.splide').forEach(function (el) {
    new Splide(el, {
      type: 'loop',// ループ
      autoplay: true,// 自動再生
      interval: 3500,// 自動再生の間隔
      speed: 2500,// スライダーの移動時間
      perPage: 3,
      gap: '38px',// スライド間の余白
      focus: 'center',
      pauseOnHover: false,// カーソルが乗ってもスクロールを停止させない
      updateOnMove: true, // 矢印をクリックしてもスクロールを停止させない
    }).mount();
  });
});

// モーダル用メニューデータ
const menus = {
  morning: {
    title: 'Morning',
    image: 'images/Morning02.jpg',
    categories: [
      {
        name: 'プレート',
        items: [
          { 
            name: 'クロックムッシュ セット (サラダ、ヨーグルト付)', 
            price: '¥1,200' 
          },
          { 
            name: 'フレンチトースト セット (季節のフルーツ添え)', 
            price: '¥1,450' 
          },
          { 
            name: '本日のスープとバゲット セット', 
            price: '¥1,100' 
          },
          {
            name: 'アボカドトーストとポーチドエッグ',
            price: '¥1,350'
          }
        ]
      },
      {
        name: '単品',
        items: [
          { 
            name: 'クロワッサン', 
            price: '¥400' 
          },
          { 
            name: 'パン・オ・ショコラ', 
            price: '¥450' 
          },
          {
            name: '自家製マフィン (日替わり)',
            price: '¥420'
          }
        ]
      }
    ]
  },

  lunch: {
    title: 'Lunch',
    image: 'images/Lunch02.jpg',
    categories: [
      {
        name: 'メインディッシュ',
        items: [
          { 
            name: '本日のキッシュプレート (サラダ、デリ付)', 
            price: '¥1,580' 
          },
          { 
            name: 'チキンと野菜のガレット (そば粉のクレープ)', 
            price: '¥1,650' 
          },
          { 
            name: 'フランス産ポークのサンドイッチ (フリット添え)', 
            price: '¥1,700' 
          }
        ]
      },
      {
        name: 'パスタ・グラタン・カレー',
        items: [
          {
            name: '日替わりパスタ',
            price: '¥1,550'
          },
          {
            name: '特製フレンチカフェカレー',
            price: '¥1,600'
          },
          { 
            name: '自家製ベシャメルソースのポテトグラタン', 
            price: '¥1,480' 
          },
          {
            name: '旬の魚介のブイヤベース風リゾット',
            price: '¥1,900'
          }
        ]
      }
    ]
  },
  
  dinner: {
    title: 'Dinner',
    image: 'images/Dinner02.jpg',
    categories: [
      {
        name: '前菜 / サラダ',
        items: [
          { 
            name: '本日のアミューズ盛り合わせ', 
            price: '¥1,200' 
          },
          { 
            name: 'ニース風サラダ (Salade Niçoise)', 
            price: '¥1,350'
          },
          {
            name: 'フォアグラのテリーヌとブリオッシュ',
            price: '¥1,800'
          },
        ]
      },
      {
        name: 'メイン',
        items: [
          {
            name: 'トリュフ風味のプレミアムチーズバーガー',
            price: '¥2,100'
          },
          { 
            name: '牛フィレ肉のステーキ フリット (特製ソース)', 
            price: '¥2,980' 
          },
          { 
            name: '旬の鮮魚のポワレ (白ワインソース)', 
            price: '¥2,600' 
          },
          { 
            name: '鶏もも肉のコンフィ', 
            price: '¥2,400' 
          }
        ]
      }
    ]
  },
  
  dessert: {
    title: 'Dessert',
    image: 'images/Desert02.jpg',
    categories: [
      {
        name: 'ケーキ / タルト',
        items: [
          { 
            name: '季節のフルーツタルト', 
            price: '¥850'
          },
          { 
            name: '濃厚ガトーショコラ', 
            price: '¥780' 
          },
          {
            name: 'モンブラン',
            price: '¥880'
          }
        ]
      },
      {
        name: 'フレンチデザート',
        items: [
          { 
            name: 'クレームブリュレ', 
            price: '¥750' 
          },
          { 
            name: 'マカロン 3種盛り合わせ', 
            price: '¥900'
          },
          { 
            name: '特製クレープシュゼット (オレンジソース)', 
            price: '¥1,200' 
          },
          {
            name: 'アフォガート (エスプレッソとバニラアイス)',
            price: '¥700'
          }
        ]
      }
    ]
  },
  
  drink: {
    title: 'Drink',
    image: 'images/Drink02.jpg',
    categories: [
      {
        name: 'コーヒー',
        items: [
          { 
            name: 'ブレンド コーヒー (HOT / ICE)', 
            price: '¥680'
          },
          { 
            name: 'アメリカーノ (HOT / ICE)', 
            price: '¥500' 
          },
          {
            name: 'エスプレッソ (HOT)',
            price: '¥600'
          }
        ]
      },
      {
        name: 'ラテ',
        items: [
          { 
            name: 'カプチーノ (HOT / ICE)', 
            price: '¥650' 
          },
          { 
            name: 'キャラメルラテ (HOT / ICE)', 
            price: '¥700'
          },
        ]
      },
      {
        name: '紅茶',
        items: [
          { 
            name: 'アールグレイティー (HOT / ICE)', 
            price: '¥600' 
          },
        ]
      }
    ]
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const modal      = document.getElementById('menuModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalImage = document.getElementById('modalImage');
  const modalMenu  = document.getElementById('modalMenu');
  const closeBtn   = document.querySelector('.close');

  // メニュー項目を描画
  function renderMenuItems(items) {
    const frag = document.createDocumentFragment();
    items.forEach((item) => {
      const row = document.createElement('div');
      row.className = 'menu-item';
      row.innerHTML = `
        <span class="item-name">${item.name}</span>
        <span class="price">${item.price}</span>
      `;
      frag.appendChild(row);
    });
    modalMenu.innerHTML = '';
    modalMenu.appendChild(frag);
  }
  // カテゴリ対応の描画関数
  function renderMenuCategories(categories) {
    const frag = document.createDocumentFragment();

    categories.forEach(cat => {
      // カテゴリ見出し
      const categoryEl = document.createElement('div');
      categoryEl.className = 'menu-category';
      categoryEl.textContent = cat.name;
      categoryEl.style.fontSize = '16px';
      categoryEl.style.fontWeight = 'bold';
      frag.appendChild(categoryEl);

      // アイテム一覧
      cat.items.forEach(item => {
        const row = document.createElement('div');
        row.className = 'menu-item';
        row.innerHTML = `
          <span class="item-name">${item.name}</span>
          <span class="price">${item.price}</span>
        `;
        frag.appendChild(row);
      });
    });

    modalMenu.innerHTML = '';
    modalMenu.appendChild(frag);
  }


  // モーダルを開く
  function openModal(type) {
    const data = menus[type];
    if (!data) return;
    
    modalTitle.textContent = data.title;
    modalTitle.style.color = '#DE0012';  
    modalTitle.style.fontSize = '32px';  

    modalImage.src = data.image;
    modalImage.alt = data.title;

    if (data.categories) {
      renderMenuCategories(data.categories);
    } else {
      renderMenuItems(data.items);
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // アクセシビリティ改善：タイトルにフォーカス
    modalTitle.setAttribute('tabindex', '-1');
    modalTitle.focus();
  }

  // モーダルを閉じる
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  // 各スライドのボタンにイベント付与
  document.querySelectorAll('.menu_button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const type = btn.closest('.splide__slide')?.dataset.type;
      openModal(type);
    });
  });

  // 閉じるボタン
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // 背景クリックで閉じる
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // ESCキーで閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
});


// 拡大しながらパララックス
const blocks = document.querySelectorAll('.parallaxBlock');
const sections = document.querySelectorAll('.parallax .content'); 
const windowHeight = window.innerHeight;

// 背景ズーム値を保持
let currentZooms = Array(sections.length).fill(100);

function updateZoom() {
  // 画像タグの拡大処理
  blocks.forEach(block => {
    const rect = block.getBoundingClientRect();
    const img = block.querySelector('img');
    let visibleRatio = 1 - (rect.top / windowHeight);

    // scale 1 → 最大1.5
    let scale = 1 + visibleRatio * 0.5;
    if (scale > 1.5) scale = 1.5;
    if (scale < 1) scale = 1;
    img.style.transform = `scale(${scale})`;
  });

  // 背景の拡大処理（補間で滑らかに）
  sections.forEach((section, i) => {
    const rect = section.getBoundingClientRect();
    let visibleRatio = 1 - (rect.top / windowHeight);

    // 目標ズーム値（100% → 最大120%）
    let targetZoom = 100 + visibleRatio * 20;
    if (targetZoom > 120) targetZoom = 120;
    if (targetZoom < 100) targetZoom = 100;

    // 補間で滑らかに近づける
    currentZooms[i] += (targetZoom - currentZooms[i]) * 0.05;
    section.style.backgroundSize = currentZooms[i] + '%';
  });

  requestAnimationFrame(updateZoom);
}

// 初期化
updateZoom();

/* スクロールすると、フェードイン */
$(function(){
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    }
  });
});

// ページ内リンクのジャンプ
// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  const height = $(".js-header").height();
  $("main").css("margin-top", height);
});
// ページ内スクロール
$(function () {
  // ヘッダーの高さ取得
  const headerHeight = $(".js-header").height();
  $('a[href^="#"]').click(function () {
    const speed = 700;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    // ヘッダーの高さ分下げる
    let position = target.offset().top - headerHeight;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});