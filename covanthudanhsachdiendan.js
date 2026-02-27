<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Diễn đàn Cửu Châu</title>
  </head>

  <body>
    <style>
      :root {
        --primary: #2e8b57;
        --primary-deep: #4bb07a;
        --accent: #c8a34a;
        --accent-dim: #b7923d;
        --bg-dark: #fdfbf7;
        --bg-mid: #f4f1ea;
        --bg-light: #e8e1d6;
        --text-main: #1c2420;
        --text-dim: #4a5a52;
        --text-dimmer: #7c8b84;
        --gold: #c8a34a;
        --border: rgba(46, 139, 87, 0.18);
        --hover-bg: rgba(46, 139, 87, 0.08);
        --hot: #b44a3a;
        --shadow-soft: 0 18px 40px rgba(20, 35, 28, 0.12);
        --shadow-mid: 0 10px 24px rgba(20, 35, 28, 0.1);
        --surface-glass: rgba(255, 255, 255, 0.56);
        --ease-ios: cubic-bezier(0.22, 1, 0.36, 1);
        --dur-ios: 360ms;
      }

      [data-theme='dark'] {
        --primary: #6bc296;
        --primary-deep: #9adab6;
        --accent: #e1c36a;
        --accent-dim: #cdb25d;
        --bg-dark: #101814;
        --bg-mid: #16201b;
        --bg-light: #1b2721;
        --text-main: #e7efe9;
        --text-dim: #b6c4bb;
        --text-dimmer: #94a39a;
        --gold: #e1c36a;
        --border: rgba(107, 194, 150, 0.22);
        --hover-bg: rgba(107, 194, 150, 0.08);
        --hot: #ff7a66;
        --shadow-soft: 0 20px 42px rgba(0, 0, 0, 0.46);
        --shadow-mid: 0 12px 24px rgba(0, 0, 0, 0.34);
        --surface-glass: rgba(18, 30, 24, 0.62);
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        background: transparent;
      }

      body {
        font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        color: var(--text-main);
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        min-height: 100%;
        background: transparent;
        padding: 12px;
      }

      .forum-container {
        width: 100%;
        max-width: 820px;
        margin: 0 auto;
        background:
          linear-gradient(145deg, var(--surface-glass), rgba(255, 255, 255, 0.04)),
          var(--bg-dark);
        font-size: var(--base-font-size, 14px);
        overflow: hidden;
        position: relative;
        border-radius: 22px;
        border: 1px solid var(--border);
        box-shadow: var(--shadow-soft);
        backdrop-filter: blur(8px);
        animation: card-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
      }

      .forum-container.font-medium { --base-font-size: 16px; }
      .forum-container.font-large { --base-font-size: 18px; }
      .forum-container.font-xlarge { --base-font-size: 20px; }

      .forum-header {
        background:
          linear-gradient(130deg, rgba(0, 0, 0, 0.1), transparent 38%),
          linear-gradient(135deg, var(--primary-deep), var(--primary));
        padding: 12px 16px;
        position: sticky;
        top: 0;
        z-index: 100;
        border-bottom: 1px solid var(--border);
        box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.08);
      }

      .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }

      .forum-title {
        font-size: 1.12em;
        font-weight: 700;
        color: #fff;
        letter-spacing: 0.8px;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.24);
      }

      .forum-title .title-icon {
        color: var(--accent);
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .header-stats {
        display: flex;
        gap: 10px;
        color: rgba(255, 255, 255, 0.85);
        font-size: 0.82em;
      }

      .header-stat {
        display: flex;
        align-items: center;
        gap: 3px;
      }

      .theme-toggle,
      .font-size-toggle {
        background: rgba(255, 255, 255, 0.16);
        border: none;
        color: #fff;
        padding: 0 12px;
        border-radius: 999px;
        cursor: pointer;
        transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
        font-size: 0.82em;
        font-weight: 500;
        outline: none;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.22);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 44px;
        min-height: 44px;
        line-height: 1;
      }

      .theme-toggle:hover,
      .font-size-toggle:hover {
        background: rgba(255, 255, 255, 0.25);
        transform: translateY(-1px);
        box-shadow:
          inset 0 0 0 1px rgba(255, 255, 255, 0.3),
          0 8px 16px rgba(0, 0, 0, 0.18);
      }

      .board-nav {
        background: var(--bg-mid);
        border-bottom: 1px solid var(--border);
        display: flex;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        padding: 10px 10px 8px;
        gap: 8px;
      }

      .board-nav::-webkit-scrollbar { display: none; }

      .board-btn {
        background: transparent;
        color: var(--text-dim);
        border: none;
        padding: 0 14px;
        cursor: pointer;
        transition:
          background-color 0.28s var(--ease-ios),
          color 0.28s var(--ease-ios),
          transform 0.28s var(--ease-ios),
          box-shadow 0.28s var(--ease-ios);
        font-size: 0.9em;
        font-weight: 600;
        outline: none;
        white-space: nowrap;
        flex: 1;
        min-width: fit-content;
        border-radius: 999px;
        border: 1px solid transparent;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      .board-btn:hover {
        color: var(--accent);
        background: var(--hover-bg);
        transform: translateY(-1px);
      }

      .board-btn.active {
        color: var(--text-main);
        background: linear-gradient(130deg, rgba(200, 163, 74, 0.2), rgba(46, 139, 87, 0.18));
        border-color: rgba(200, 163, 74, 0.36);
        box-shadow: var(--shadow-mid);
      }

      .board-page {
        display: none;
        background: var(--bg-dark);
      }

      .board-page.active {
        display: block;
        animation: board-switch-in var(--dur-ios) var(--ease-ios) both;
      }

      .board-header {
        background: var(--bg-mid);
        padding: 8px 16px;
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 0.9em;
        font-weight: 600;
        color: var(--accent);
      }

      .post-list {
        background: var(--bg-dark);
        padding: 10px 12px 12px;
      }

      .post-item {
        padding: 10px;
        border: 1px solid var(--border);
        transition: transform 0.22s, background-color 0.22s, box-shadow 0.22s, border-color 0.22s;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-radius: 14px;
        margin-bottom: 9px;
        background: linear-gradient(160deg, rgba(255, 255, 255, 0.3), transparent), var(--bg-mid);
        box-shadow: 0 2px 0 rgba(255, 255, 255, 0.18) inset;
      }
      .post-item:last-child { margin-bottom: 0; }

      .post-item:hover {
        background: linear-gradient(160deg, rgba(255, 255, 255, 0.36), transparent), rgba(46, 139, 87, 0.1);
        transform: translateY(-1px);
        box-shadow: var(--shadow-mid);
        border-color: rgba(200, 163, 74, 0.28);
      }

      .post-main {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        border-radius: 10px;
        padding: 4px;
        cursor: pointer;
        transition: background-color 0.22s;
      }

      .post-main:hover {
        background: var(--hover-bg);
      }

      .post-main:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
      }

      .post-icon {
        font-size: 1em;
        flex-shrink: 0;
        opacity: 0.7;
        margin-top: 2px;
      }

      .post-body {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .post-title-row {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }

      .post-title {
        font-size: 1em;
        color: var(--text-main);
        font-weight: 500;
        line-height: 1.45;
      }

      .badge-hot {
        background: var(--hot);
        color: #fff;
        padding: 2px 7px;
        border-radius: 999px;
        font-size: 0.72em;
        font-weight: 600;
        flex-shrink: 0;
        box-shadow: 0 4px 10px rgba(180, 74, 58, 0.34);
      }

      .badge-tag {
        background: var(--bg-light);
        color: var(--text-dim);
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 0.72em;
        flex-shrink: 0;
      }

      .post-summary {
        font-size: 0.88em;
        color: var(--text-dimmer);
        line-height: 1.55;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .post-meta {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 6px;
        color: var(--text-dim);
        font-size: 0.84em;
      }

      .post-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        flex-wrap: wrap;
      }

      .post-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
        margin-left: auto;
      }

      .post-author {
        color: var(--gold);
        font-weight: 500;
      }

      .post-dm-btn {
        cursor: pointer;
        font-size: 0.84em;
        opacity: 0.85;
        transition: opacity 0.22s, background 0.22s, transform 0.22s, box-shadow 0.22s;
        margin-left: 0;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 0 14px;
        border-radius: 999px;
        background: var(--hover-bg);
        border: 1px solid var(--border);
        color: var(--gold);
        vertical-align: middle;
        line-height: 1;
        font-weight: 500;
        min-height: 44px;
      }
      .post-dm-btn:hover {
        opacity: 1;
        background: var(--primary);
        color: #fff;
        border-color: var(--primary);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
      }

      .post-stats {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        color: var(--text-dim);
      }

      .post-stats span {
        display: flex;
        align-items: center;
        gap: 3px;
      }

      .forum-stats-card {
        background: linear-gradient(165deg, rgba(255, 255, 255, 0.28), var(--bg-mid));
        margin: 12px 16px;
        border-radius: 14px;
        border: 1px solid var(--border);
        overflow: hidden;
        box-shadow: var(--shadow-mid);
      }

      .stats-card-header {
        padding: 10px 12px;
        border-bottom: 1px solid var(--border);
        font-size: 0.86em;
        font-weight: 600;
        color: var(--accent);
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .stats-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .stat-box {
        padding: 11px 10px;
        text-align: center;
        border-right: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
        transition: background-color 0.22s;
      }
      .stat-box:hover {
        background: var(--hover-bg);
      }

      .stat-box:nth-child(2n) { border-right: none; }
      .stat-box:nth-last-child(-n+2) { border-bottom: none; }

      .stat-number {
        font-size: 1.1em;
        color: var(--gold);
        font-weight: 700;
      }

      .stat-label {
        font-size: 0.75em;
        color: var(--text-dim);
        margin-top: 2px;
      }

      .page-loader {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(10, 18, 14, 0.36);
        backdrop-filter: blur(4px);
        z-index: 9999;
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 16px;
      }

      .page-loader.loading {
        display: flex;
        animation: fadeIn 0.15s ease;
      }

      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

      .loader-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid var(--bg-light);
        border-top-color: var(--accent);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.14);
      }

      @keyframes spin { to { transform: rotate(360deg); } }

      .loader-text {
        color: var(--text-dim);
        font-size: 0.85em;
      }

      .loading {
        text-align: center;
        padding: 40px;
        color: var(--text-dim);
        font-size: 1em;
      }

      @keyframes card-in {
        from {
          opacity: 0;
          transform: translateY(10px) scale(0.99);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes board-switch-in {
        from {
          opacity: 0;
          transform: translateY(10px) scale(0.985);
          filter: blur(0.6px);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .board-page.active {
          animation: none;
        }
        .board-btn,
        .post-main {
          transition: none;
        }
      }

      @media (max-width: 768px) {
        .forum-container { font-size: var(--base-font-size, 15px); }
        .forum-container.font-medium { --base-font-size: 17px; }
        .forum-container.font-large { --base-font-size: 19px; }
        .forum-container.font-xlarge { --base-font-size: 21px; }
        .post-item { padding: 10px; }
        .post-main { padding: 6px 4px; }
        .post-summary { font-size: 0.92em; -webkit-line-clamp: 3; }
        .post-meta { font-size: 0.9em; }
        .board-btn {
          flex: 0 0 auto;
        }
        .forum-stats-card { margin: 10px 12px; }
        .board-nav { padding: 9px 8px 8px; }
      }

      @media (max-width: 480px) {
        .forum-container { font-size: var(--base-font-size, 14px); }
        .forum-container.font-medium { --base-font-size: 16px; }
        .forum-container.font-large { --base-font-size: 18px; }
        .forum-container.font-xlarge { --base-font-size: 20px; }
        .header-stats { display: none; }
        .post-stats { font-size: 0.95em; }
        .post-footer {
          align-items: flex-start;
        }
        .post-actions {
          width: 100%;
          justify-content: flex-end;
        }
      }

      ::-webkit-scrollbar { width: 5px; height: 5px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(46, 139, 87, 0.25); border-radius: 3px; }
      ::-webkit-scrollbar-thumb:hover { background: rgba(46, 139, 87, 0.4); }
      * { -webkit-tap-highlight-color: transparent; }

      button:focus-visible,
      input:focus-visible,
      textarea:focus-visible,
      select:focus-visible {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
      }

      /* ===== Nút thao tác bài viết ===== */
      .post-action-row {
        display: flex;
        gap: 8px;
        margin-top: 0;
        padding-left: 0;
        flex-wrap: wrap;
      }
      .post-action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 3px;
        padding: 0 14px;
        border-radius: 999px;
        border: 1px solid var(--border);
        font-size: 0.82em;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.22s, box-shadow 0.22s, background 0.22s;
        outline: none;
        min-height: 44px;
      }
      .post-action-btn:hover {
        transform: translateY(-1px);
        box-shadow: var(--shadow-mid);
      }
      .post-action-btn.quest-btn {
        background: rgba(229, 192, 123, 0.15);
        color: var(--gold);
        border-color: rgba(229, 192, 123, 0.35);
      }
      .post-action-btn.quest-btn:hover {
        background: rgba(229, 192, 123, 0.3);
        border-color: var(--gold);
      }
      .post-action-btn.trade-btn {
        background: rgba(97, 175, 239, 0.15);
        color: #61afef;
        border-color: rgba(97, 175, 239, 0.35);
      }
      .post-action-btn.trade-btn:hover {
        background: rgba(97, 175, 239, 0.3);
        border-color: #61afef;
      }
      .post-action-btn.bid-btn {
        background: rgba(46, 139, 87, 0.15);
        color: var(--primary);
        border-color: rgba(46, 139, 87, 0.35);
      }
      .post-action-btn.bid-btn:hover {
        background: rgba(46, 139, 87, 0.3);
        border-color: var(--primary);
      }

      /* ===== Thanh đăng bài ===== */
      .new-post-bar {
        padding: 10px 16px;
        background: var(--bg-mid);
        border-bottom: 1px solid var(--border);
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .new-post-input {
        flex: 1;
        padding: 9px 14px;
        border: 1px solid var(--border);
        border-radius: 999px;
        background: var(--bg-dark);
        color: var(--text-dimmer);
        font-size: 0.88em;
        cursor: pointer;
        transition: border-color 0.22s, background 0.22s;
        outline: none;
        font-family: inherit;
        min-height: 44px;
        display: flex;
        align-items: center;
      }
      .new-post-input:hover {
        border-color: var(--primary);
        background: var(--hover-bg);
      }

      /* Lớp phủ đăng bài */
      .post-overlay {
        display: none;
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.4);
        backdrop-filter: blur(4px);
        z-index: 999;
        justify-content: center;
        align-items: center;
      }
      .post-overlay.show { display: flex; }
      .post-dialog {
        background: var(--bg-dark);
        border: 1px solid var(--border);
        border-radius: 18px;
        padding: 20px;
        width: 92%;
        max-width: 420px;
        box-shadow: var(--shadow-soft);
        animation: card-in 0.3s ease both;
      }
      .post-dialog-title {
        font-size: 1em;
        font-weight: 600;
        color: var(--text-main);
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .post-dialog select,
      .post-dialog input,
      .post-dialog textarea {
        width: 100%;
        padding: 9px 12px;
        border: 1px solid var(--border);
        border-radius: 10px;
        background: var(--bg-mid);
        color: var(--text-main);
        font-size: 0.9em;
        outline: none;
        font-family: inherit;
        margin-bottom: 10px;
      }
      .post-dialog textarea {
        min-height: 80px;
        max-height: 180px;
        resize: vertical;
        line-height: 1.6;
      }
      .post-dialog select:focus,
      .post-dialog input:focus,
      .post-dialog textarea:focus {
        border-color: var(--primary);
      }
      .post-dialog-btns {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
      .post-dialog-cancel {
        background: var(--bg-light);
        color: var(--text-dim);
        border: 1px solid var(--border);
        padding: 0 16px;
        border-radius: 999px;
        font-size: 0.85em;
        cursor: pointer;
        transition: transform 0.22s, box-shadow 0.22s, background 0.22s, border-color 0.22s;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .post-dialog-cancel:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        background: var(--bg-mid);
      }
      .post-dialog-submit {
        background: linear-gradient(135deg, var(--primary-deep), var(--primary));
        color: #fff;
        border: none;
        padding: 0 16px;
        border-radius: 999px;
        font-size: 0.85em;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
        transition: transform 0.22s, box-shadow 0.22s;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .post-dialog-submit:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(46, 139, 87, 0.4);
      }

      /* ===== Lớp phủ ra giá ===== */
      .bid-overlay {
        display: none;
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.4);
        backdrop-filter: blur(4px);
        z-index: 999;
        justify-content: center;
        align-items: center;
      }
      .bid-overlay.show { display: flex; }
      .bid-dialog {
        background: var(--bg-dark);
        border: 1px solid var(--border);
        border-radius: 18px;
        padding: 20px;
        width: 90%;
        max-width: 360px;
        box-shadow: var(--shadow-soft);
        animation: card-in 0.3s ease both;
      }
      .bid-dialog-title {
        font-size: 1em;
        font-weight: 600;
        color: var(--text-main);
        margin-bottom: 4px;
      }
      .bid-dialog-item {
        font-size: 0.82em;
        color: var(--gold);
        margin-bottom: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .bid-input {
        width: 100%;
        padding: 10px 12px;
        border: 1px solid var(--border);
        border-radius: 10px;
        background: var(--bg-mid);
        color: var(--text-main);
        font-size: 0.9em;
        outline: none;
        font-family: inherit;
        margin-bottom: 12px;
      }
      .bid-input:focus { border-color: var(--primary); }
      .bid-btns {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
      .bid-cancel {
        background: var(--bg-light);
        color: var(--text-dim);
        border: 1px solid var(--border);
        padding: 0 16px;
        border-radius: 999px;
        font-size: 0.85em;
        cursor: pointer;
        transition: transform 0.22s, box-shadow 0.22s, background 0.22s;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .bid-cancel:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        background: var(--bg-mid);
      }
      .bid-confirm {
        background: linear-gradient(135deg, var(--primary-deep), var(--primary));
        color: #fff;
        border: none;
        padding: 0 16px;
        border-radius: 999px;
        font-size: 0.85em;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
        transition: transform 0.22s, box-shadow 0.22s;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .bid-confirm:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(46, 139, 87, 0.4);
      }

      /* ===== Hộp thoại xác nhận tin riêng ===== */
      .dm-overlay {
        display: none;
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.4);
        backdrop-filter: blur(4px);
        z-index: 999;
        justify-content: center;
        align-items: center;
      }
      .dm-overlay.show { display: flex; }
      .dm-dialog {
        background: var(--bg-dark);
        border: 1px solid var(--border);
        border-radius: 18px;
        padding: 20px;
        width: 90%;
        max-width: 340px;
        box-shadow: var(--shadow-soft);
        animation: card-in 0.3s ease both;
        text-align: center;
      }
      .dm-dialog-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1em;
        font-weight: 700;
        color: #fff;
        margin-bottom: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }
      .dm-dialog-name {
        font-size: 1em;
        font-weight: 600;
        color: var(--gold);
        margin-bottom: 6px;
      }
      .dm-dialog-hint {
        font-size: 0.82em;
        color: var(--text-dimmer);
        margin-bottom: 14px;
      }
      .dm-btns {
        display: flex;
        justify-content: center;
        gap: 10px;
      }
      .dm-cancel {
        background: var(--bg-light);
        color: var(--text-dim);
        border: 1px solid var(--border);
        padding: 0 20px;
        border-radius: 999px;
        font-size: 0.85em;
        cursor: pointer;
        transition: transform 0.22s, box-shadow 0.22s, background 0.22s;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .dm-cancel:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        background: var(--bg-mid);
      }
      .dm-confirm {
        background: linear-gradient(135deg, var(--primary-deep), var(--primary));
        color: #fff;
        border: none;
        padding: 0 20px;
        border-radius: 999px;
        font-size: 0.85em;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
        transition: transform 0.22s, box-shadow 0.22s;
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .dm-confirm:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(46, 139, 87, 0.4);
      }

      /* Ảnh đại diện tròn */
      .post-avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.85em;
        font-weight: 700;
        color: #fff;
        flex-shrink: 0;
        text-shadow: 0 1px 2px rgba(0,0,0,0.15);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        letter-spacing: 0;
      }

      /* Màu viền trái cho từng chuyên mục */
      #page-emotion .post-item { border-left: 3px solid rgba(224, 108, 117, 0.55); }
      #page-trade .post-item { border-left: 3px solid rgba(97, 175, 239, 0.55); }
      #page-quest .post-item { border-left: 3px solid rgba(229, 192, 123, 0.55); }
      #page-gossip .post-item { border-left: 3px solid rgba(198, 120, 221, 0.55); }

      [data-theme='dark'] #page-emotion .post-item { border-left-color: rgba(224, 108, 117, 0.4); }
      [data-theme='dark'] #page-trade .post-item { border-left-color: rgba(97, 175, 239, 0.4); }
      [data-theme='dark'] #page-quest .post-item { border-left-color: rgba(229, 192, 123, 0.4); }
      [data-theme='dark'] #page-gossip .post-item { border-left-color: rgba(198, 120, 221, 0.4); }

      /* Làm mờ nền bài viết thường */
      .post-item {
        background: linear-gradient(160deg, rgba(255, 255, 255, 0.08), transparent), var(--bg-mid);
      }
      /* Làm nổi bật bài viết Hot */
      .post-item.is-hot {
        background: linear-gradient(160deg, rgba(180, 74, 58, 0.1), rgba(200, 163, 74, 0.06) 60%), var(--bg-mid);
        border-color: rgba(180, 74, 58, 0.22);
      }
      .post-item.is-hot .post-title { font-weight: 600; }

      /* Đường kẻ vàng trang trí header */
      .forum-header::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent 5%, var(--accent) 50%, transparent 95%);
        opacity: 0.35;
      }
      .forum-header { position: relative; }

      /* Gạch dưới cho nút điều hướng chuyên mục */
      .board-btn.active {
        position: relative;
      }
      .board-btn.active::after {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 25%;
        right: 25%;
        height: 2px;
        border-radius: 1px;
        background: var(--accent);
        opacity: 0.6;
      }
    </style>

    <div class="forum-container" id="forum-container">
      <div class="loading">Đang kết nối Linh Võng...</div>
      <div class="page-loader" id="page-loader">
        <div class="loader-spinner"></div>
        <div class="loader-text">Đang đồng bộ Truyền Thư Lệnh...</div>
      </div>
    </div>

    <script>
      var THEME_KEY = 'shizhun-theme';
      var THEME_EVENT = 'shizhun-theme-change';
      var themeChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('shizhun-theme-sync') : null;

      function applyTheme(theme) {
        var icon = document.getElementById('theme-icon');
        if (theme === 'dark') {
          document.body.setAttribute('data-theme', 'dark');
          if (icon) icon.textContent = '☀️';
        } else {
          document.body.removeAttribute('data-theme');
          if (icon) icon.textContent = '🌙';
        }
      }

      function syncTheme(theme) {
        localStorage.setItem(THEME_KEY, theme);
        applyTheme(theme);
        window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: theme }));
        if (themeChannel) themeChannel.postMessage(theme);
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

      var chat_message = getChatMessages(getCurrentMessageId())[0];
      var match = chat_message.message.match(/<forum_list>([\s\S]*?)<\/forum_list>/);
      var forumListXML = match ? match[0] : '<forum_list></forum_list>';

      function parseForumList(xmlText) {
        var data = {
          onlineCount: '',
          todayPosts: '',
          totalPosts: '',
          totalUsers: '',
          emotionPosts: [],
          tradePosts: [],
          questPosts: [],
          gossipPosts: [],
        };
        try {
          var f = function(key) {
            var m = xmlText.match(new RegExp('\\[' + key + '\\|([^\\]]+)\\]'));
            return m ? m[1] : '';
          };
          // Cập nhật từ khóa theo Lorebook tiếng Việt
          data.onlineCount = f('Tu sĩ trực tuyến');
          data.todayPosts = f('Bài viết mới hôm nay');
          data.totalPosts = f('Tổng số bài viết');
          data.totalUsers = f('Tu sĩ đăng ký');

          var boards = [
            // Cập nhật tag và label theo Lorebook tiếng Việt (Entry 3)
            { tag: 'emotion_posts', field: 'emotionPosts', label: 'Bài tình cảm' },
            { tag: 'trade_posts', field: 'tradePosts', label: 'Bài giao dịch' },
            { tag: 'quest_posts', field: 'questPosts', label: 'Bài treo thưởng' },
            { tag: 'gossip_posts', field: 'gossipPosts', label: 'Bài bát quái' },
          ];

          boards.forEach(function(b) {
            var secMatch = xmlText.match(new RegExp('<' + b.tag + '>([\\s\\S]*?)<\\/' + b.tag + '>', 'i'));
            if (secMatch && secMatch[1]) {
              var re = new RegExp('\\[' + b.label + '\\|([^|]+)\\|([^|]+)\\|([^|]+)\\|([^|]+)\\|([^\\]]+)\\]', 'g');
              var pm;
              while ((pm = re.exec(secMatch[1])) !== null) {
                data[b.field].push({
                  title: pm[1],
                  author: pm[2],
                  summary: pm[3],
                  replies: pm[4],
                  time: pm[5],
                });
              }
            }
          });
          return data;
        } catch (e) {
          console.error('Lỗi phân tích dữ liệu diễn đàn Cửu Châu:', e);
          return data;
        }
      }

      function avatarColor(name) {
        var colors = ['#e06c75','#d19a66','#e5c07b','#98c379','#56b6c2','#61afef','#c678dd','#be5046'];
        var hash = 0;
        for (var i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
        return colors[Math.abs(hash) % colors.length];
      }

      function buildPostsHTML(posts, icon, boardKey) {
        if (!posts || !posts.length) return '<div class="loading">Chưa có bài đăng</div>';
        var html = '';
        posts.forEach(function(post, idx) {
          var hotClass = idx < 2 ? ' is-hot' : '';
          var hotBadge = idx < 2 ? '<span class="badge-hot">Hot</span>' : '';
          var color = avatarColor(post.author);
          var initial = post.author.charAt(0);
          var actionRow = '';
          if (boardKey === 'quest') {
            actionRow = '<div class="post-action-row">'
              + '<button type="button" class="post-action-btn quest-btn" onclick="showQuestConfirm(\'' + encodeURIComponent(post.title) + '\', event)">📜 Nhận nhiệm vụ</button>'
              + '</div>';
          } else if (boardKey === 'trade') {
            actionRow = '<div class="post-action-row">'
              + '<button type="button" class="post-action-btn bid-btn" onclick="openBidDialog(\'' + encodeURIComponent(post.title) + '\', event)">💰 Ra giá</button>'
              + '</div>';
          }

          html += '<div class="post-item' + hotClass + '">'
            + '<div class="post-main" role="button" tabindex="0" onclick="viewPost(\'' + encodeURIComponent(post.title) + '\',\'' + boardKey + '\')" onkeydown="handlePostMainKey(event,\'' + encodeURIComponent(post.title) + '\',\'' + boardKey + '\')">'
            + '<div class="post-avatar" style="background:' + color + '">' + initial + '</div>'
            + '<div class="post-body">'
            + '<div class="post-title-row">' + hotBadge + '<div class="post-title">' + post.title + '</div></div>'
            + '<div class="post-summary">' + post.summary + '</div>'
            + '<div class="post-meta">'
            + '<span class="post-author">' + post.author + '</span>'
            + '<div class="post-footer">'
            + '<div class="post-stats"><span>💬 ' + post.replies + '</span><span>🕒 ' + post.time + '</span></div>'
            + '<div class="post-actions">'
            + '<button type="button" class="post-dm-btn" onclick="showDmConfirm(\'' + encodeURIComponent(post.author) + '\', event)" title="Tin nhắn riêng ' + post.author + '">💬 Tin riêng</button>'
            + actionRow
            + '</div>'
            + '</div></div></div>'
            + '</div>'
            + '</div>';
        });
        return html;
      }

      function renderForum(data) {
        var container = document.getElementById('forum-container');
        var allPosts = [].concat(data.emotionPosts, data.tradePosts, data.questPosts, data.gossipPosts);
        if (!allPosts.length) {
          container.innerHTML = '<div class="loading">Tín hiệu Linh Võng bị gián đoạn, vui lòng thử reroll lại đoạn chat...</div>';
          return;
        }

        var emotionHTML = buildPostsHTML(data.emotionPosts, '💕', 'emotion');
        var tradeHTML = buildPostsHTML(data.tradePosts, '⚔️', 'trade');
        var questHTML = buildPostsHTML(data.questPosts, '📜', 'quest');
        var gossipHTML = buildPostsHTML(data.gossipPosts, '👁️', 'gossip');

        container.innerHTML = ''
          + '<header class="forum-header"><div class="header-content">'
          + '<h1 class="forum-title"><span class="title-icon">☯</span> Diễn đàn Cửu Châu</h1>'
          + '<div class="header-right">'
          + '<div class="header-stats">'
          + '<div class="header-stat"><span>🟢</span><span>' + data.onlineCount + '</span></div>'
          + '<div class="header-stat"><span>📝</span><span>' + data.todayPosts + '</span></div>'
          + '</div>'
          + '<button class="font-size-toggle" onclick="cycleFontSize()" aria-label="Đổi cỡ chữ" title="Đổi cỡ chữ"><span id="font-size-icon">A</span></button>'
          + '<button class="theme-toggle" onclick="toggleTheme()" aria-label="Đổi giao diện" title="Đổi giao diện"><span id="theme-icon">🌙</span></button>'
          + '</div></div></header>'

          + '<nav class="board-nav">'
          + '<button class="board-btn active" data-board="emotion">💕 Tình Cảm Đạo Lữ</button>'
          + '<button class="board-btn" data-board="trade">⚔️ Giao Dịch Pháp Bảo</button>'
          + '<button class="board-btn" data-board="quest">📜 Nhiệm Vụ Treo Thưởng</button>'
          + '<button class="board-btn" data-board="gossip">👁️ Bóc Phốt Bát Quái</button>'
          + '</nav>'

          + '<main>'
          + '<div class="board-page active" id="page-emotion">'
          + '<div class="board-header"><span>💕</span><span>Khu vực Tình Cảm Đạo Lữ</span></div>'
          + '<div class="new-post-bar"><div class="new-post-input" onclick="openPostDialog(\'Tình Cảm Đạo Lữ\')">✏️ Đăng bài mới...</div></div>'
          + '<div class="post-list">' + emotionHTML + '</div></div>'

          + '<div class="board-page" id="page-trade">'
          + '<div class="board-header"><span>⚔️</span><span>Khu vực Giao Dịch Pháp Bảo</span></div>'
          + '<div class="new-post-bar"><div class="new-post-input" onclick="openPostDialog(\'Giao Dịch Pháp Bảo\')">✏️ Đăng tin giao dịch...</div></div>'
          + '<div class="post-list">' + tradeHTML + '</div></div>'

          + '<div class="board-page" id="page-quest">'
          + '<div class="board-header"><span>📜</span><span>Khu vực Nhiệm Vụ Treo Thưởng</span></div>'
          + '<div class="new-post-bar"><div class="new-post-input" onclick="openPostDialog(\'Nhiệm Vụ Treo Thưởng\')">✏️ Đăng nhiệm vụ treo thưởng...</div></div>'
          + '<div class="post-list">' + questHTML + '</div></div>'

          + '<div class="board-page" id="page-gossip">'
          + '<div class="board-header"><span>👁️</span><span>Khu vực Bóc Phốt Bát Quái</span></div>'
          + '<div class="new-post-bar"><div class="new-post-input" onclick="openPostDialog(\'Bóc Phốt Bát Quái\')">✏️ Bóc phốt chút coi...</div></div>'
          + '<div class="post-list">' + gossipHTML + '</div></div>'
          + '</main>'

          + '<div class="forum-stats-card"><div class="stats-card-header"><span>📊</span><span>Thống kê Linh Võng</span></div>'
          + '<div class="stats-grid">'
          + '<div class="stat-box"><div class="stat-number">' + data.onlineCount + '</div><div class="stat-label">Tu sĩ trực tuyến</div></div>'
          + '<div class="stat-box"><div class="stat-number">' + data.todayPosts + '</div><div class="stat-label">Bài mới hôm nay</div></div>'
          + '<div class="stat-box"><div class="stat-number">' + data.totalPosts + '</div><div class="stat-label">Tổng số bài</div></div>'
          + '<div class="stat-box"><div class="stat-number">' + data.totalUsers + '</div><div class="stat-label">Tu sĩ đăng ký</div></div>'
          + '</div></div>'

          + '<div class="page-loader" id="page-loader"><div class="loader-spinner"></div><div class="loader-text">Đang đồng bộ Truyền Thư Lệnh...</div></div>'

          + '<div class="post-overlay" id="post-overlay">'
          + '<div class="post-dialog">'
          + '<div class="post-dialog-title"><span>✏️</span><span>Đăng bài mới</span></div>'
          + '<input id="new-post-board" type="hidden" />'
          + '<input id="new-post-title" placeholder="Tiêu đề bài viết" />'
          + '<textarea id="new-post-content" placeholder="Viết điều bạn muốn nói... (Các NPC trên diễn đàn sẽ phản hồi bài viết của bạn)"></textarea>'
          + '<div class="post-dialog-btns">'
          + '<button class="post-dialog-cancel" onclick="closePostDialog()">Hủy</button>'
          + '<button class="post-dialog-submit" onclick="submitNewPost()">Đăng</button>'
          + '</div></div></div>'

          + '<div class="bid-overlay" id="bid-overlay">'
          + '<div class="bid-dialog">'
          + '<div class="bid-dialog-title">💰 Ra giá đấu giá</div>'
          + '<div class="bid-dialog-item" id="bid-item-name"></div>'
          + '<input class="bid-input" id="bid-input" placeholder="Nhập giá của bạn (ví dụ: 500 linh thạch)" />'
          + '<div class="bid-btns">'
          + '<button class="bid-cancel" onclick="closeBidDialog()">Hủy</button>'
          + '<button class="bid-confirm" onclick="confirmBid()">Xác nhận ra giá</button>'
          + '</div></div></div>'

          + '<div class="dm-overlay" id="dm-overlay">'
          + '<div class="dm-dialog">'
          + '<div class="dm-dialog-avatar" id="dm-avatar"></div>'
          + '<div class="dm-dialog-name" id="dm-name"></div>'
          + '<div class="dm-dialog-hint">Sẽ bắt đầu trò chuyện riêng qua Linh Võng</div>'
          + '<div class="dm-btns">'
          + '<button class="dm-cancel" onclick="closeDmDialog()">Hủy</button>'
          + '<button class="dm-confirm" onclick="confirmDm()">Bắt đầu chat riêng</button>'
          + '</div></div></div>'

          + '<div class="dm-overlay" id="quest-overlay">'
          + '<div class="dm-dialog">'
          + '<div style="font-size:2em;margin-bottom:8px">📜</div>'
          + '<div class="dm-dialog-name" id="quest-title"></div>'
          + '<div class="dm-dialog-hint">Xác nhận nhận nhiệm vụ treo thưởng này? Sau khi nhận sẽ tiến vào cốt truyện nhiệm vụ</div>'
          + '<div class="dm-btns">'
          + '<button class="dm-cancel" onclick="closeQuestDialog()">Để ta nghĩ lại</button>'
          + '<button class="dm-confirm" onclick="confirmQuest()">Nhận nhiệm vụ</button>'
          + '</div></div></div>'

          + '<div class="dm-overlay" id="view-overlay">'
          + '<div class="dm-dialog">'
          + '<div style="font-size:2em;margin-bottom:8px">📋</div>'
          + '<div class="dm-dialog-name" id="view-post-title"></div>'
          + '<div class="dm-dialog-hint">Xem chi tiết bài viết này? Sẽ tiêu tốn một lần phản hồi đối thoại</div>'
          + '<div class="dm-btns">'
          + '<button class="dm-cancel" onclick="closeViewDialog()">Hủy</button>'
          + '<button class="dm-confirm" onclick="confirmViewPost()">Xem bài viết</button>'
          + '</div></div></div>';

        document.querySelectorAll('.board-btn').forEach(function(btn) {
          btn.addEventListener('click', function() { switchBoard(this.dataset.board); });
        });
      }

      function switchBoard(boardName) {
        document.querySelectorAll('.board-btn').forEach(function(btn) {
          btn.classList.toggle('active', btn.dataset.board === boardName);
        });
        document.querySelectorAll('.board-page').forEach(function(page) {
          page.classList.remove('active');
        });
        var target = document.getElementById('page-' + boardName);
        if (target) target.classList.add('active');
      }

      // ===== Hộp thoại xác nhận xem bài viết =====
      var pendingViewTitle = '';
      var pendingViewBoard = '';

      function viewPost(encodedTitle, boardKey) {
        var title = decodeURIComponent(encodedTitle);
        pendingViewTitle = title;
        pendingViewBoard = boardKey;
        var titleEl = document.getElementById('view-post-title');
        if (titleEl) titleEl.textContent = title;
        var ol = document.getElementById('view-overlay');
        ol.classList.add('show');
        ol.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      function handlePostMainKey(event, encodedTitle, boardKey) {
        if (!event) return;
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          viewPost(encodedTitle, boardKey);
        }
      }

      function closeViewDialog() {
        document.getElementById('view-overlay').classList.remove('show');
      }

      function confirmViewPost() {
        closeViewDialog();
        if (!pendingViewTitle) return;
        // Cập nhật lệnh slash sang tiếng Việt để khớp với Lorebook
        var cmd = '/send Xem bài viết diễn đàn Cửu Châu: ' + pendingViewTitle + ' | /trigger';
        if (typeof triggerSlash === 'function') {
          triggerSlash(cmd);
        }
      }

      // ===== Hộp thoại xác nhận tin nhắn riêng =====
      var pendingDmName = '';

      function showDmConfirm(encodedName, event) {
        if (event) { event.stopPropagation(); event.preventDefault(); }
        var name = decodeURIComponent(encodedName);
        pendingDmName = name;
        var avatar = document.getElementById('dm-avatar');
        var nameEl = document.getElementById('dm-name');
        if (avatar) { avatar.textContent = name.charAt(0); avatar.style.background = avatarColor(name); }
        if (nameEl) nameEl.textContent = name;
        var ol = document.getElementById('dm-overlay');
        ol.classList.add('show');
        ol.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      function closeDmDialog(event) {
        if (event && event.target !== event.currentTarget) return;
        document.getElementById('dm-overlay').classList.remove('show');
      }

      function confirmDm() {
        closeDmDialog();
        if (!pendingDmName) return;
        try {
          var ch = new BroadcastChannel('spn-api-channel');
          ch.postMessage({ action: 'startPrivateChat', name: pendingDmName });
          ch.close();
        } catch (e) {
          if (typeof triggerSlash === 'function') {
            triggerSlash('/send Tin nhắn riêng cho ' + pendingDmName + ' | /trigger');
          }
        }
      }

      // ===== Hộp thoại xác nhận nhận nhiệm vụ =====
      var pendingQuestTitle = '';

      function showQuestConfirm(encodedTitle, event) {
        if (event) { event.stopPropagation(); event.preventDefault(); }
        var title = decodeURIComponent(encodedTitle);
        pendingQuestTitle = title;
        var titleEl = document.getElementById('quest-title');
        if (titleEl) titleEl.textContent = title;
        var ol = document.getElementById('quest-overlay');
        ol.classList.add('show');
        ol.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      function closeQuestDialog(event) {
        if (event && event.target !== event.currentTarget) return;
        document.getElementById('quest-overlay').classList.remove('show');
      }

      function confirmQuest() {
        closeQuestDialog();
        if (!pendingQuestTitle) return;
        // Cập nhật lệnh slash sang tiếng Việt
        var cmd = '/send Nhận nhiệm vụ treo thưởng diễn đàn Cửu Châu: "' + pendingQuestTitle + '" | /trigger';
        if (typeof triggerSlash === 'function') {
          triggerSlash(cmd);
        }
      }

      // ===== Hộp thoại ra giá =====
      var pendingBidTitle = '';

      function openBidDialog(encodedTitle, event) {
        if (event) { event.stopPropagation(); event.preventDefault(); }
        var title = decodeURIComponent(encodedTitle);
        pendingBidTitle = title;
        var nameEl = document.getElementById('bid-item-name');
        if (nameEl) nameEl.textContent = title;
        var input = document.getElementById('bid-input');
        if (input) { input.value = ''; }
        var ol = document.getElementById('bid-overlay');
        ol.classList.add('show');
        ol.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (input) input.focus();
      }

      function closeBidDialog(event) {
        if (event && event.target !== event.currentTarget) return;
        document.getElementById('bid-overlay').classList.remove('show');
      }

      function confirmBid() {
        var input = document.getElementById('bid-input');
        var bid = (input.value || '').trim();
        if (!bid || !pendingBidTitle) return;
        closeBidDialog();
        // Cập nhật lệnh slash sang tiếng Việt
        var cmd = '/send Tại bài viết giao dịch pháp bảo diễn đàn Cửu Châu "' + pendingBidTitle + '" ra giá: ' + bid + ' | /trigger';
        if (typeof triggerSlash === 'function') {
          triggerSlash(cmd);
        }
      }

      function openPostDialog(boardName) {
        var overlay = document.getElementById('post-overlay');
        var boardInput = document.getElementById('new-post-board');
        var titleInput = document.getElementById('new-post-title');
        var contentInput = document.getElementById('new-post-content');
        if (boardInput) boardInput.value = boardName || '';
        if (titleInput) titleInput.value = '';
        if (contentInput) contentInput.value = '';
        if (overlay) {
          overlay.classList.add('show');
          overlay.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (titleInput) titleInput.focus();
      }

      function closePostDialog(event) {
        if (event && event.target !== event.currentTarget) return;
        var overlay = document.getElementById('post-overlay');
        if (overlay) overlay.classList.remove('show');
      }

      function submitNewPost() {
        var board = (document.getElementById('new-post-board').value || '').trim();
        var title = (document.getElementById('new-post-title').value || '').trim();
        var content = (document.getElementById('new-post-content').value || '').trim();
        if (!title) return;
        closePostDialog();
        var msg = 'Tại khu vực ' + board + ' của diễn đàn Cửu Châu đăng bài viết mới, tiêu đề: "' + title + '"';
        if (content) msg += ', nội dung: ' + content;
        var cmd = '/send ' + msg + ' | /trigger';
        if (typeof triggerSlash === 'function') {
          triggerSlash(cmd);
        }
      }

      function toggleTheme() {
        var nextTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        syncTheme(nextTheme);
      }

      function cycleFontSize() {
        var container = document.getElementById('forum-container');
        var icon = document.getElementById('font-size-icon');
        var sizes = ['small', 'medium', 'large', 'xlarge'];
        var icons = ['A', 'A+', 'A++', 'A+++'];
        var cur = localStorage.getItem('jiuzhou-font-size') || 'small';
        var next = (sizes.indexOf(cur) + 1) % sizes.length;
        container.classList.remove('font-medium', 'font-large', 'font-xlarge');
        if (sizes[next] !== 'small') container.classList.add('font-' + sizes[next]);
        if (icon) icon.textContent = icons[next];
        localStorage.setItem('jiuzhou-font-size', sizes[next]);
      }

      window.addEventListener('storage', function(e) {
        if (e.key === 'jiuzhou-font-size') {
          var container = document.getElementById('forum-container');
          var fIcon = document.getElementById('font-size-icon');
          var sizes = ['small', 'medium', 'large', 'xlarge'];
          var icons = ['A', 'A+', 'A++', 'A+++'];
          container.classList.remove('font-medium', 'font-large', 'font-xlarge');
          if (e.newValue && e.newValue !== 'small') container.classList.add('font-' + e.newValue);
          var idx = sizes.indexOf(e.newValue || 'small');
          if (fIcon) fIcon.textContent = icons[idx];
        }
      });

      setTimeout(function() {
        bindThemeSync();
        var theme = localStorage.getItem(THEME_KEY) || 'light';
        applyTheme(theme);

        try {
          var data = parseForumList(forumListXML);
          renderForum(data);
          applyTheme(theme);

          var fontSize = localStorage.getItem('jiuzhou-font-size') || 'small';
          var container = document.getElementById('forum-container');
          var fontIcon = document.getElementById('font-size-icon');
          var sizes = ['small', 'medium', 'large', 'xlarge'];
          var fIcons = ['A', 'A+', 'A++', 'A+++'];
          if (fontSize !== 'small') container.classList.add('font-' + fontSize);
          var fIdx = sizes.indexOf(fontSize);
          if (fontIcon) fontIcon.textContent = fIcons[fIdx];
        } catch (err) {
          console.error('Lỗi render:', err);
          document.getElementById('forum-container').innerHTML = '<div class="loading">Tải dữ liệu Linh Võng thất bại, vui lòng thử lại</div>';
        }
      }, 0);
    </script>
  </body>
</html>