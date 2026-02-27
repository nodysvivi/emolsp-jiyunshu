<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sư Tôn Ta Là Đại Tỷ Đệ Nhất Diễn Đàn</title>
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
        --gold-dim: #b7923d;
        --hot: #b44a3a;
        --shadow: 0 18px 40px rgba(20, 35, 28, 0.12);
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
        --gold-dim: #cdb25d;
        --hot: #ff7a66;
        --shadow: 0 20px 42px rgba(0, 0, 0, 0.46);
      }

      body {
        font-family: var(--font-serif);
        background: transparent;
        color: var(--ink);
        line-height: 1.6;
        padding: 8px;
        font-size: 15px;
      }

      /* ── Khung chính ── */
      .letter-frame {
        max-width: 900px;
        margin: 0 auto;
        background: var(--paper);
        border: 1.5px solid var(--line);
        box-shadow: var(--shadow);
        position: relative;
        border-radius: 18px;
        overflow: hidden;
      }

      .letter-frame::before {
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

      /* ── Tiêu đề đầu trang ── */
      .frame-header {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        border-bottom: 1.5px solid var(--line);
        background: linear-gradient(120deg, rgba(46, 139, 87, 0.08), transparent 60%);
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .seal {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: var(--paper-deep);
        border: 1.5px solid var(--line);
        display: grid;
        place-items: center;
        font-size: 23px;
      }

      .header-title {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .title-main {
        font-size: 22px;
        letter-spacing: 2px;
        color: var(--ink);
        position: relative;
      }

      .title-main::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 48px;
        height: 2px;
        background: var(--jade);
        opacity: 0.6;
      }

      .title-sub {
        font-size: 13px;
        color: var(--ink-soft);
        letter-spacing: 2px;
        padding-top: 4px;
      }

      .author-info {
        font-size: 12px;
        color: var(--ink-soft);
        letter-spacing: 1px;
      }

      /* ── Khu vực nội dung ── */
      .content-area {
        position: relative;
        z-index: 1;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      /* ── Thẻ chung ── */
      .note-card {
        border: 1.5px solid var(--line);
        background: rgba(255, 255, 255, 0.6);
        position: relative;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        border-radius: 18px;
        overflow: hidden;
      }

      .note-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(20, 35, 28, 0.1);
      }

      .card-header {
        padding: 10px 14px;
        border-bottom: 1px dashed var(--line);
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 2px;
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--ink);
      }

      .card-header.jade {
        background: linear-gradient(90deg, rgba(46, 139, 87, 0.1), transparent);
      }

      .card-header.gold {
        background: linear-gradient(90deg, rgba(200, 163, 74, 0.12), transparent);
      }

      .card-body {
        padding: 14px;
      }

      /* ── Hộp thông báo ── */
      .notice-box {
        padding: 12px 14px;
        background: var(--paper-deep);
        border: 1px dashed var(--line);
        font-size: 14px;
        line-height: 1.8;
        color: var(--ink-soft);
        border-radius: 12px;
      }

      .notice-item {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin-bottom: 6px;
      }

      .notice-item:last-child {
        margin-bottom: 0;
      }

      .notice-item span:first-child {
        flex-shrink: 0;
      }

      /* ── Dòng thông tin ── */
      .info-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 12px;
        background: var(--paper-deep);
        border: 1px dashed var(--line);
        margin-bottom: 8px;
        transition: all 0.2s ease;
        border-radius: 12px;
      }

      .info-row:hover {
        background: rgba(46, 139, 87, 0.06);
        transform: translateX(4px);
      }

      .info-row:last-child {
        margin-bottom: 0;
      }

      .info-label {
        font-size: 13px;
        color: var(--ink-soft);
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .info-label::before {
        content: '◇';
        color: var(--jade);
        font-size: 11px;
      }

      .info-value {
        font-size: 14px;
        font-weight: 600;
        color: var(--ink);
      }

      /* ── Thẻ Discord ── */
      .discord-card {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 16px;
        background: linear-gradient(135deg, var(--jade), var(--jade-light));
        color: #fff;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.25s ease;
        border: 1.5px solid var(--line);
      }

      .discord-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(46, 139, 87, 0.25);
      }

      .discord-card:active {
        transform: translateY(1px);
        box-shadow: none;
      }

      .discord-icon {
        font-size: 1.8em;
        flex-shrink: 0;
      }

      .discord-title {
        font-size: 1.05em;
        font-weight: 600;
        margin-bottom: 2px;
      }

      .discord-info {
        font-size: 0.8em;
        opacity: 0.9;
      }

      /* ── Khung trưng bày ảnh ── */
      .gallery-item {
        position: relative;
        border-radius: 14px;
        overflow: hidden;
        border: 1.5px solid var(--line);
        background: var(--paper-deep);
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .gallery-item:hover {
        box-shadow: 0 10px 24px rgba(20, 35, 28, 0.15);
        border-color: var(--jade);
      }

      .gallery-item img {
        width: 100%;
        height: auto;
        display: block;
      }

      .gallery-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 8px 12px;
        background: linear-gradient(transparent, rgba(28, 36, 32, 0.75));
        color: #fff;
        font-size: 12px;
        letter-spacing: 1px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .gallery-item:hover .gallery-caption {
        opacity: 1;
      }

      /* ── Lựa chọn mở đầu ── */
      .opening-grid {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .opening-card {
        background: var(--paper-deep);
        border: 1.5px solid var(--line);
        padding: 14px 16px;
        cursor: pointer;
        transition: all 0.25s ease;
        display: flex;
        gap: 14px;
        align-items: flex-start;
        border-radius: 14px;
      }

      .opening-card:hover {
        transform: translateX(6px);
        background: rgba(46, 139, 87, 0.06);
        border-color: var(--jade);
      }

      .opening-num {
        width: 28px;
        height: 28px;
        background: var(--jade);
        color: #fff;
        display: grid;
        place-items: center;
        font-size: 13px;
        font-weight: 700;
        flex-shrink: 0;
        border-radius: 8px;
      }

      .opening-content {
        flex: 1;
        min-width: 0;
      }

      .opening-title {
        font-size: 15px;
        font-weight: 600;
        color: var(--ink);
        margin-bottom: 4px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .opening-badge {
        display: inline-block;
        background: var(--gold);
        color: #fff;
        padding: 2px 8px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 1px;
        border-radius: 4px;
      }

      .opening-badge.hot {
        background: var(--hot);
      }

      .opening-desc {
        font-size: 13px;
        color: var(--ink-soft);
        line-height: 1.6;
      }

      .opening-meta {
        font-size: 12px;
        color: var(--jade);
        margin-top: 6px;
        display: flex;
        gap: 12px;
      }

      /* ── Chân trang ── */
      .footer-note {
        text-align: center;
        padding: 20px;
        font-size: 16px;
        font-weight: 600;
        color: var(--jade);
        background: var(--paper-deep);
        border: 1.5px solid var(--line);
        position: relative;
        border-radius: 14px;
      }

      .footer-note::before,
      .footer-note::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 40%;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--line), transparent);
      }

      .footer-note::before { top: 8px; }
      .footer-note::after { bottom: 8px; }

      /* ── Responsive ── */
      @media (max-width: 600px) {
        .frame-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }

        .author-info {
          align-self: flex-end;
        }

        .opening-card {
          flex-direction: column;
          gap: 10px;
        }

        .opening-num {
          width: 24px;
          height: 24px;
          font-size: 12px;
        }
      }
    </style>
  </head>
  <body>
    <div class="letter-frame">
      <div class="frame-header">
        <div class="header-left">
          <div class="seal">🏔️</div>
          <div class="header-title">
            <span class="title-main">Sư Tôn Ta Là Đại Tỷ Đệ Nhất Diễn Đàn</span>
            <span class="title-sub">Những Năm Tháng Dài Đằng Đẵng Trên Thái Thượng Phong</span>
          </div>
        </div>
        <div class="author-info">Tác giả: emo của lsp</div>
      </div>

      <div class="content-area">
        <!-- Tuyên bố bản quyền -->
        <div class="note-card">
          <div class="card-header gold">
            <span>📜</span>
            <span>Tuyên Bố Bản Quyền</span>
          </div>
          <div class="card-body">
            <div class="notice-box">
              <div class="notice-item">
                <span>📌</span>
                <span>Thẻ nhân vật này là miễn phí, nghiêm cấm mọi hành vi thương mại hóa. Nếu bạn mua phải, vui lòng hoàn tiền ngay và báo cáo kẻ bán hàng vô lương tâm, bảo vệ quyền lợi của tác giả và chính bạn.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tuyên bố tái bản -->
        <div class="note-card">
          <div class="card-header gold">
            <span>⚠️</span>
            <span>Tuyên Bố Tái Bản</span>
          </div>
          <div class="card-body">
            <div class="notice-box">
              <div class="notice-item">
                <span>🚫</span>
                <span>Khi chưa được tác giả ủy quyền rõ ràng, nghiêm cấm đăng tải lại tác phẩm này trên bất kỳ nền tảng nào khác.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tóm tắt câu chuyện -->
        <div class="note-card">
          <div class="card-header jade">
            <span>📖</span>
            <span>Tóm Tắt Câu Chuyện</span>
          </div>
          <div class="card-body">
            <div class="info-row">
              <span class="info-label">Tên Nhân Vật</span>
              <span class="info-value">{{user}}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Bối Cảnh Câu Chuyện</span>
              <span class="info-value">Cửu Châu · Thiên Đạo Tông · Thái Thượng Phong</span>
            </div>
            <div class="info-row">
              <span class="info-label">Nhân Vật Cốt Lõi</span>
              <span class="info-value">Cơ Vân Thư (Sư Tôn / Đế Tôn Cảnh)</span>
            </div>
            <div class="info-row">
              <span class="info-label">Chủ Đề Câu Chuyện</span>
              <span class="info-value">Mười sáu năm nuôi dưỡng, tình yêu cấm kỵ sư đồ</span>
            </div>
          </div>
        </div>

        <!-- Discord -->
        <div class="note-card">
          <div class="card-header jade">
            <span>💬</span>
            <span>Tham Gia Cộng Đồng</span>
          </div>
          <div class="card-body">
            <div class="discord-card" onclick="openDiscordWithConfirm()">
              <div class="discord-icon">💬</div>
              <div class="discord-text">
                <div class="discord-title">Máy chủ Discord</div>
                <div class="discord-info">Nhấn để mở liên kết, hoan nghênh tham gia giao lưu</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Trưng bày hình ảnh -->
        <div class="note-card">
          <div class="card-header jade">
            <span>🖼️</span>
            <span>Tranh Minh Họa Nhân Vật</span>
          </div>
          <div class="card-body">
            <div class="gallery-item" onclick="previewImage(this)">
              <img
                src="https://gitgud.io/opus5/other/-/raw/master/CG/姬云舒1.jpg"
                alt="Cơ Vân Thư"
                referrerpolicy="no-referrer"
              />
              <div class="gallery-caption">Cơ Vân Thư · Hàn Ngọc Điện</div>
            </div>
          </div>
        </div>

        <!-- Lựa chọn mở đầu -->
        <div class="note-card">
          <div class="card-header jade">
            <span>✨</span>
            <span>Nhấn · Mở Ra Câu Chuyện</span>
          </div>
          <div class="card-body">
            <div class="opening-grid">
              <div class="opening-card" onclick="switchToOpening(1)">
                <div class="opening-num">1</div>
                <div class="opening-content">
                  <div class="opening-title">
                    Sinh Thần Yến
                    <span class="opening-badge">Khởi Điểm</span>
                  </div>
                  <div class="opening-desc">
                    Ngày mùng 7 tháng 3 năm Thiên Nguyên lịch 3847, tại Hàn Ngọc Điện trên Thái Thượng Phong. Sinh thần mười sáu tuổi, Sư tôn đã chuẩn bị một sự phô trương đủ để nuôi ba tông môn ăn uống trong một năm. Tông chủ dẫn theo mười hai vị trưởng lão cung kính đợi ngoài điện, mà bạn chỉ muốn yên tĩnh húp hết bát cháo linh mễ kia.
                  </div>
                  <div class="opening-meta">
                    <span>📍 Thái Thượng Phong · Hàn Ngọc Điện</span>
                    <span>🗓️ Mùng 7 tháng 3</span>
                  </div>
                </div>
              </div>

              <div class="opening-card" onclick="switchToOpening(2)">
                <div class="opening-num">2</div>
                <div class="opening-content">
                  <div class="opening-title">Quy Sơn (Về Núi)</div>
                  <div class="opening-desc">
                    Đã bôn ba ở bên ngoài suốt ba tháng, đánh từ Man Hoang bí cảnh đến Vạn Yêu sơn mạch. Truyền Thư Lệnh bị tin nhắn của Sư tôn gửi đến nhét cho nổ tung, tin cuối cùng chỉ có bốn chữ —— "Ngươi đến đâu rồi". Khi bước vào Hàn Ngọc Điện, nàng đang nhìn chằm chằm ra cửa không chớp mắt.
                  </div>
                  <div class="opening-meta">
                    <span>📍 Thái Thượng Phong · Hàn Ngọc Điện</span>
                    <span>🗓️ 14 tháng 6</span>
                  </div>
                </div>
              </div>

              <div class="opening-card" onclick="switchToOpening(3)">
                <div class="opening-num">3</div>
                <div class="opening-content">
                  <div class="opening-title">
                    Nghị Sự Điện
                    <span class="opening-badge hot">Mập Mờ</span>
                  </div>
                  <div class="opening-desc">
                    Tại nghị sự đại điện, Đế Tôn lạnh lùng như băng sương nghe báo cáo tông vụ. Thế nhưng Truyền Thư Lệnh của bạn lại rung liên hồi —— 「Vân Thư muốn ôm một cái」 đang gửi cho bạn gói biểu cảm làm nũng, hỏi bạn bộ tiên quần hôm nay có đẹp không.
                  </div>
                  <div class="opening-meta">
                    <span>📍 Thiên Đạo Tông · Nghị Sự Đại Điện</span>
                    <span>🗓️ Mùng 2 tháng 9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cần đọc trước khi dùng -->
        <div class="note-card">
          <div class="card-header gold">
            <span>📋</span>
            <span>Cần Đọc Trước Khi Dùng</span>
          </div>
          <div class="card-body">
            <div class="notice-box">
              <div class="notice-item">
                <span>✅</span>
                <span>Bắt buộc cài đặt và kích hoạt 【Mẫu Prompt (Prompt Template)】</span>
              </div>
              <div class="notice-item">
                <span>✅</span>
                <span>Bắt buộc cài đặt và cập nhật 【Tavern Helper (Trợ Thủ Tửu Quán)】 lên bản mới nhất</span>
              </div>
              <div class="notice-item">
                <span>❌</span>
                <span>Bắt buộc tắt 【Công tắc render】 của Tiểu Bạch X, nếu không cài thì bỏ qua</span>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-note">🏔️ Trên Thái Thượng Phong, Mười Sáu Năm Nuôi Dưỡng 🏔️</div>
      </div>
    </div>

    <!-- Lớp phủ xem trước ảnh -->
    <div id="imageOverlay" style="
      display: none;
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: rgba(0, 0, 0, 0.85);
      align-items: center;
      justify-content: center;
      cursor: zoom-out;
      padding: 20px;
    " onclick="this.style.display='none'">
      <img id="overlayImg" src="" style="
        max-width: 90%;
        max-height: 90%;
        border-radius: 12px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        object-fit: contain;
      " />
    </div>

    <script>
      function previewImage(el) {
        const img = el.querySelector('img');
        if (!img || !img.src) return;
        const overlay = document.getElementById('imageOverlay');
        const overlayImg = document.getElementById('overlayImg');
        overlayImg.src = img.src;
        overlay.style.display = 'flex';
      }

      function openDiscordWithConfirm() {
        if (confirm('Sắp chuyển hướng đến máy chủ Discord, có tiếp tục không?')) {
          window.open('https://discord.gg/x3aKHgfE3u', '_blank');
        }
      }

      async function switchToOpening(swipeId) {
        const clickedCard = event.currentTarget;

        if (clickedCard) {
          clickedCard.style.opacity = '0.6';
          clickedCard.style.pointerEvents = 'none';
        }

        try {
          const messages = await getChatMessages('0', { include_swipe: true });
          if (messages && messages[0].swipes && messages[0].swipes[swipeId]) {
            await setChatMessage(messages[0].swipes[swipeId], 0, {
              swipe_id: swipeId,
              refresh: 'display_and_render_current',
            });
          } else {
            throw new Error(`Khai trường bạch ${swipeId + 1} không tìm thấy, vui lòng đảm bảo đã thêm tất cả khai trường bạch theo thứ tự.`);
          }
        } catch (error) {
          console.error('Chuyển đổi khai trường bạch thất bại:', error);
          alert(`Chuyển đổi thất bại: ${error.message}`);
          if (clickedCard) {
            clickedCard.style.opacity = '1';
            clickedCard.style.pointerEvents = 'auto';
          }
        }
      }

      /* ── Đồng bộ chủ đề (Cơ chế 3 lớp) ── */
      var THEME_KEY = 'shizhun-theme';
      var THEME_EVENT = 'shizhun-theme-change';
      var themeChannel = typeof BroadcastChannel !== 'undefined'
        ? new BroadcastChannel('shizhun-theme-sync') : null;

      function applyTheme(theme) {
        if (theme === 'dark') {
          document.body.setAttribute('data-theme', 'dark');
        } else {
          document.body.removeAttribute('data-theme');
        }
      }

      function syncTheme(theme) {
        localStorage.setItem(THEME_KEY, theme);
        applyTheme(theme);
        window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: theme }));
        if (themeChannel) themeChannel.postMessage(theme);
      }

      // Lắng nghe thay đổi chủ đề từ các trang khác
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

      // Đọc chủ đề hiện tại khi khởi tạo
      applyTheme(localStorage.getItem(THEME_KEY) || 'light');
    </script>
  </body>
</html>