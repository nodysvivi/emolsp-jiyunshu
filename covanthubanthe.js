<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        --paper: #fdfbf7;
        --paper-deep: #f4f1ea;
        --paper-dark: #e8e1d6;
        --ink: #1c2420;
        --ink-soft: #4a5a52;
        --ink-dim: #7c8b84;
        --line: rgba(46, 139, 87, 0.18);
        --jade: #2e8b57;
        --jade-light: #4bb07a;
        --gold: #c8a34a;
        --hot: #b44a3a;
        --shadow: 0 18px 40px rgba(20, 35, 28, 0.12);
        --hover-bg: rgba(46, 139, 87, 0.06);
        --font-serif: 'Noto Serif SC', 'Songti SC', 'STSong', serif;
        --font-sans: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
      }

      [data-theme='dark'] {
        --paper: #101814;
        --paper-deep: #16201b;
        --paper-dark: #1b2721;
        --ink: #e7efe9;
        --ink-soft: #b6c4bb;
        --ink-dim: #94a39a;
        --line: rgba(107, 194, 150, 0.22);
        --jade: #6bc296;
        --jade-light: #9adab6;
        --gold: #e1c36a;
        --hot: #ff7a66;
        --shadow: 0 20px 42px rgba(0, 0, 0, 0.46);
        --hover-bg: rgba(107, 194, 150, 0.08);
      }

      body {
        font-family: var(--font-serif);
        background: transparent;
        color: var(--ink);
        line-height: 1.6;
        padding: 6px 8px;
        font-size: 14px;
      }

      /* ── Hộp chứa chính ── */
      .options-shell {
        max-width: 900px;
        margin: 0 auto;
        background: var(--paper);
        border: 1.5px solid var(--line);
        border-radius: 16px 12px 18px 14px;
        box-shadow: var(--shadow);
        position: relative;
        overflow: hidden;
      }

      .options-shell::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(180deg, rgba(46, 139, 87, 0.06), transparent 40%),
          repeating-linear-gradient(
            0deg,
            rgba(46, 139, 87, 0.03) 0,
            rgba(46, 139, 87, 0.03) 1px,
            transparent 1px,
            transparent 28px
          );
        pointer-events: none;
      }

      /* ── Đầu trang ── */
      .options-header {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 14px;
        border-bottom: 1px dashed var(--line);
        background: linear-gradient(120deg, rgba(46, 139, 87, 0.1), transparent 50%);
      }

      .options-title {
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 2px;
        color: var(--ink);
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .header-controls {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .ctrl-btn {
        background: none;
        border: 1px solid var(--line);
        color: var(--ink-soft);
        cursor: pointer;
        padding: 4px 10px;
        font-size: 12px;
        font-family: var(--font-sans);
        border-radius: 8px;
        transition: all 0.2s ease;
      }

      .ctrl-btn:hover {
        background: var(--hover-bg);
        color: var(--jade);
        border-color: var(--jade);
      }

      .ctrl-btn:active {
        transform: scale(0.95);
      }

      /* ── Bộ chuyển đổi chế độ ── */
      .mode-switcher {
        display: flex;
        background: var(--paper-dark);
        border: 1.5px solid var(--line);
        border-radius: 8px;
        overflow: hidden;
        font-family: var(--font-sans);
      }

      .mode-btn {
        padding: 4px 10px;
        font-size: 11px;
        color: var(--ink-dim);
        cursor: pointer;
        transition: all 0.2s ease;
        border-right: 1px solid var(--line);
        letter-spacing: 0.5px;
        user-select: none;
      }

      .mode-btn:last-child {
        border-right: none;
      }

      .mode-btn:hover {
        color: var(--ink);
        background: var(--hover-bg);
      }

      .mode-btn.active {
        background: var(--jade);
        color: #fff;
      }

      /* ── Lưới tùy chọn ── */
      .options-grid {
        position: relative;
        z-index: 1;
        padding: 10px 14px 14px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .option-card {
        background: var(--paper-deep);
        border: 1.5px solid var(--line);
        border-radius: 12px;
        padding: 10px 14px;
        cursor: pointer;
        transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        display: flex;
        align-items: center;
        gap: 10px;
        opacity: 0;
        animation: fadeSlideIn 0.3s ease forwards;
      }

      .option-card:hover {
        background: var(--hover-bg);
        border-color: var(--jade);
        box-shadow: 0 4px 12px rgba(46, 139, 87, 0.1);
      }

      .option-card:active {
        box-shadow: none;
        background: rgba(46, 139, 87, 0.12);
      }

      .option-num {
        width: 24px;
        height: 24px;
        background: var(--jade);
        color: #fff;
        display: grid;
        place-items: center;
        font-size: 12px;
        font-weight: 700;
        flex-shrink: 0;
        border-radius: 7px;
        font-family: var(--font-sans);
      }

      .option-text {
        font-size: 13px;
        color: var(--ink);
        line-height: 1.5;
        word-break: break-all;
      }

      /* ── Thông báo thành công ── */
      .toast {
        position: fixed;
        top: 12px;
        left: 50%;
        transform: translateX(-50%) translateY(-40px);
        background: var(--jade);
        color: #fff;
        padding: 8px 20px;
        border-radius: 10px;
        font-size: 13px;
        font-family: var(--font-sans);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 999;
        pointer-events: none;
      }

      .toast.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }

      /* ── Trạng thái thu gọn ── */
      .options-shell.collapsed .options-grid {
        max-height: 0;
        padding-top: 0;
        padding-bottom: 0;
        overflow: hidden;
        opacity: 0;
      }

      .options-shell.collapsed .options-header {
        border-bottom: none;
      }

      .collapsed-expand {
        display: none;
        position: relative;
        z-index: 1;
        text-align: center;
        padding: 8px;
        font-size: 12px;
        color: var(--ink-dim);
        cursor: pointer;
        transition: color 0.2s ease;
        font-family: var(--font-sans);
      }

      .collapsed-expand:hover {
        color: var(--jade);
      }

      .options-shell.collapsed .collapsed-expand {
        display: block;
      }

      /* ── Hoạt ảnh ── */
      @keyframes fadeSlideIn {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* ── Responsive ── */
      @media (max-width: 500px) {
        .options-grid {
          grid-template-columns: 1fr;
        }

        .options-header {
          flex-wrap: wrap;
          gap: 6px;
        }
      }
</style>
  </head>
  <body>
    <div class="toast" id="toast"></div>

    <div class="options-shell" id="optionsShell">
      <div class="options-header">
        <div class="options-title">
          <span>✦</span>
          <span>Tùy Chọn Hành Động</span>
          <div class="mode-switcher" id="modeSwitcher">
            <div class="mode-btn" data-mode="0" onclick="setMode(0)">Gửi</div>
            <div class="mode-btn" data-mode="1" onclick="setMode(1)">Nhập</div>
            <div class="mode-btn active" data-mode="2" onclick="setMode(2)">Thêm</div>
          </div>
        </div>
        <div class="header-controls">
          <button class="ctrl-btn" id="collapseBtn" onclick="toggleCollapse()">Thu gọn ▲</button>
          <button class="ctrl-btn" id="themeBtn" onclick="toggleTheme()">🌙</button>
        </div>
      </div>
      <div class="options-grid" id="optionsGrid"></div>
      <div class="collapsed-expand" onclick="toggleCollapse()">Mở rộng tùy chọn ▼</div>
    </div>

    <script>
      /* ── Đồng bộ chủ đề (Cơ chế 3 lớp) ── */
      var THEME_KEY = 'shizhun-theme';
      var THEME_EVENT = 'shizhun-theme-change';
      var themeChannel = typeof BroadcastChannel !== 'undefined'
        ? new BroadcastChannel('shizhun-theme-sync') : null;

      function applyTheme(theme) {
        if (theme === 'dark') {
          document.body.setAttribute('data-theme', 'dark');
          document.getElementById('themeBtn').textContent = '☀️';
        } else {
          document.body.removeAttribute('data-theme');
          document.getElementById('themeBtn').textContent = '🌙';
        }
      }

      function syncTheme(theme) {
        localStorage.setItem(THEME_KEY, theme);
        applyTheme(theme);
        window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: theme }));
        if (themeChannel) themeChannel.postMessage(theme);
      }

      function toggleTheme() {
        var next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        syncTheme(next);
      }

      function bindThemeSync() {
        window.addEventListener('storage', function(e) {
          if (e.key === THEME_KEY) applyTheme(e.newValue || 'light');
        });
        window.addEventListener(THEME_EVENT, function(e) {
          applyTheme((e && e.detail) || 'light');
        });
        if (themeChannel) {
          themeChannel.addEventListener('message', function(e) {
            applyTheme((e && e.data) || 'light');
          });
        }
      }
      /* ── Chuyển chế độ & Thu gọn & Thông báo ── */
      var MODE_LIST = [
        { key: 'send',   label: 'Gửi', desc: 'Gửi trực tiếp' },
        { key: 'input',  label: 'Nhập', desc: 'Ghi đè khung nhập' },
        { key: 'append', label: 'Thêm', desc: 'Thêm vào khung nhập' }
      ];
      var currentMode = 2; // Mặc định chế độ thêm (append)

      function setMode(idx) {
        currentMode = idx;
        var btns = document.querySelectorAll('.mode-btn');
        btns.forEach(function(b) { b.classList.remove('active'); });
        btns[idx].classList.add('active');
        showToast('Đã chuyển đổi: ' + MODE_LIST[idx].desc);
      }

      function toggleCollapse() {
        var shell = document.getElementById('optionsShell');
        var btn = document.getElementById('collapseBtn');
        shell.classList.toggle('collapsed');
        btn.textContent = shell.classList.contains('collapsed') ? 'Mở rộng ▼' : 'Thu gọn ▲';
      }

      function showToast(msg) {
        var t = document.getElementById('toast');
        t.textContent = msg;
        t.classList.add('show');
        clearTimeout(t._timer);
        t._timer = setTimeout(function() { t.classList.remove('show'); }, 1500);
      }

      /* ── Kích hoạt tùy chọn ── */
      function triggerQuickReply(text) {
        if (typeof triggerSlash !== 'function') return;
        var mode = MODE_LIST[currentMode].key;
        if (mode === 'send') {
          triggerSlash('/send ' + text + '|/trigger');
        } else if (mode === 'input') {
          triggerSlash('/setinput ' + text);
        } else {
          var $ = window.parent.$;
          var cur = $('#send_textarea').val() || '';
          var next = cur ? cur + '\n' + text : text;
          triggerSlash('/setinput ' + next);
        }
      }

      function handleOptionClick(text, el) {
        el.style.opacity = '0.5';
        el.style.pointerEvents = 'none';
        triggerQuickReply(text);
        showToast('✓ ' + text);

        setTimeout(function() {
          el.style.opacity = '1';
          el.style.pointerEvents = 'auto';
        }, 600);

        // Chế độ 1 và 2 tự động thu gọn, chế độ 3 không thu gọn
        if (currentMode !== 2) {
          setTimeout(function() { toggleCollapse(); }, 400);
        }
      }

      /* ── Tạo tùy chọn ── */
      function createOptions(optionsString) {
        var grid = document.getElementById('optionsGrid');
        var options = optionsString
          .split('|')
          .map(function(s) { return s.trim(); })
          .filter(function(s) { return s.length > 0; });

        grid.innerHTML = '';
        options.forEach(function(opt, i) {
          var card = document.createElement('div');
          card.className = 'option-card';
          card.style.animationDelay = (i * 0.06) + 's';
          card.innerHTML =
            '<div class="option-num">' + (i + 1) + '</div>' +
            '<div class="option-text">' + opt + '</div>';
          card.onclick = function() { handleOptionClick(opt, card); };
          grid.appendChild(card);
        });
      }

      /* ── Khởi tạo ── */
      setTimeout(function() {
        bindThemeSync();
        applyTheme(localStorage.getItem(THEME_KEY) || 'light');

        // Phương pháp trích xuất từ đám mây: lấy dữ liệu <options> từ nội dung tin nhắn hiện tại
        try {
          var chat_message = getChatMessages(getCurrentMessageId())[0];
          var match = chat_message.message.match(/<options>([\s\S]*?)<\/options>/);
          var optionsText = match ? match[1] : '';
          createOptions(optionsText);
        } catch (e) {
          console.error('Trích xuất dữ liệu tùy chọn thất bại:', e);
          createOptions('');
        }
      }, 0);
    </script>
  </body>
</html>