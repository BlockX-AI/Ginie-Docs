/* ============================================================
   GINIE DOCS — SHARED JS
   Search · Copy · Nav · Image hydration
   ============================================================ */

/* ── SEARCH INDEX ─────────────────────────────────────────── */
var SEARCH_INDEX = [
  { section: 'Getting Started', title: 'Introduction', url: './index.html', text: 'Ginie transforms plain-English contract descriptions into fully compiled deployed Daml smart contracts on Canton Network in under 90 seconds with zero Daml knowledge required. Ginie does not just generate code it compiles it with the real Canton SDK runs a 5-gate security audit and deploys it to a live Canton ledger. The output is a verified Contract ID not a code suggestion.' },
  { section: 'Getting Started', title: 'Quick Start', url: './getting-started.html', text: 'Deploy your first Canton contract in under 5 minutes. Go to canton.ginie.xyz. Create your party identity by clicking Add Parties. Describe your contract in plain English. Wait 35-90 seconds for the pipeline. Receive your Contract ID and security scores. View the generated Daml code.' },
  { section: 'Getting Started', title: 'Core Concepts', url: './getting-started.html#core-concepts', text: 'Ginie is an AI pipeline that accepts plain English descriptions and produces deployed Canton smart contracts. GinieNet is a public Canton sandbox. Daml is a smart contract language built for financial workflows. Canton Network is the blockchain that runs Daml contracts. Canton SDK 3.4 dpm build dpm test.' },
  { section: 'How It Works', title: 'The 7-Stage Pipeline', url: './how-it-works.html', text: 'Intent Agent parses English prompt into structured JSON contract specification. RAG Layer retrieves relevant Daml patterns from the institutional pattern library. Writer Agent generates complete idiomatic Daml module. Compile Agent runs the real dpm build command. Fix Agent handles compilation errors recognises 11 error types retries up to 3 times. Audit Layer runs 5-gate pre-deployment security scan. Deploy Agent uploads compiled DAR to Canton Ledger API returns Contract ID.' },
  { section: 'How It Works', title: 'Fix Agent — Error Handling', url: './how-it-works.html#fix-agent', text: 'Missing signatory Template has no signatories. Type mismatch Expected Party got Text. Unbound variable not in scope. Missing import Unknown module DA.Date. Choice return type Expected ContractId got unit.' },
  { section: 'How It Works', title: 'RAG & Pattern Library', url: './how-it-works.html#rag', text: 'Retrieval-Augmented Generation pattern library. digital-asset/daml official Daml examples. digital-asset/daml-finance financial instrument templates bond repo DvP cash. digital-asset/splice Canton utilities. Canton Skills npm package npx canton-skills install knowledge base for AI coding agents Claude Cursor Codex.' },
  { section: 'How It Works', title: 'Audit Layer', url: './how-it-works.html#audit', text: 'Five gate pre-deployment security scan. Gate 1 signatory presence check every template must have at least one signatory. Gate 2 controller signatory validation choice controllers must appear in signatories. Gate 3 unguarded choice analysis choices without ensure clauses. Gate 4 known anti-pattern matching hardcoded party strings. Gate 5 SCU upgrade compatibility additive-only field structure.' },
  { section: 'How It Works', title: 'SCU Compatibility', url: './how-it-works.html#scu', text: 'Smart Contract Upgrade SCU is Canton on-chain contract upgrade mechanism. Every Ginie-generated contract is SCU-compatible. Optional fields for new additions no field removals renames. daml.upgrade annotation structure. UPGRADE_NOTES.md. SCU Upgrade Agent generates new version with upgradeFrom annotation.' },
  { section: 'Features', title: 'Contract Templates', url: './features.html', text: 'IOU bilateral debt obligation transfer settle. Token Transfer fungible asset. Bond debt instrument issuer holder coupon maturity. Repo Agreement securities repurchase. DvP Delivery vs Payment atomic exchange. Custody asset arrangement custodian client. AML Attestation KYC compliance. Multi-Party Settlement three-party workflow. Escrow conditional payment. Subscription recurring payment.' },
  { section: 'Features', title: 'Ledger Explorer', url: './features.html#explorer', text: 'Live view of the Canton sandbox state all contracts parties packages verification tool. Contracts tab all contracts visible to your party. Parties tab all parties allocated on the sandbox party ID display name. Packages tab all uploaded DAR packages. Verify tab check if a Contract ID exists on the ledger.' },
  { section: 'Features', title: 'Full-Stack dApp Builder', url: './features.html#dapp', text: 'From M2 Ginie can generate a full-stack Canton dApp. Contract layer Daml source deployment. Interface extraction IDL contract interface description. Frontend generation Next.js TypeScript Canton wallet integration. GitHub repository all artifacts committed.' },
  { section: 'Features', title: 'GitHub Integration', url: './features.html#github', text: 'Push generated contracts to your own GitHub repository. Artifacts: src/Main.daml daml.yaml AUDIT_REPORT.md UPGRADE_NOTES.md Makefile README.md. Iterate creates branch applies change opens pull request.' },
  { section: 'Features', title: 'MCP Server', url: './features.html#mcp', text: 'Model Context Protocol server. canton_lookup looks up live Canton documentation. canton_check validates code against current SDK rules. canton_network_info returns deployment target information. Use with Claude Cursor Windsurf AI editors.' },
  { section: 'Features', title: 'IDE Extensions', url: './features.html#ide', text: 'VS Code extension inline generation deploy commands audit feedback. Cursor MCP-assisted Daml authoring Canton Skills context. JetBrains IntelliJ IDEA Daml inspection generated code review.' },
  { section: 'SDK & Self-Hosting', title: 'Python SDK', url: './platform.html', text: 'pip install ginie. GinieClient api_key. client.deploy prompt ledger llm returns contract_id cantonscan_url daml_source audit_report. client.iterate job_id prompt. client.audit daml_source returns gates passed. client.upgrade source_file current_version modification.' },
  { section: 'SDK & Self-Hosting', title: 'Self-Hosting', url: './platform.html#selfhost', text: 'Open source Apache 2.0 self-hostable Docker. git clone BlockX-AI/Canton_Ginie. ANTHROPIC_API_KEY CANTON_LEDGER_HOST POSTGRES_URL environment variables. docker-compose up. Services: ginie-api port 8000 FastAPI. canton-sandbox port 6865 Canton LocalNet Ledger API. postgres port 5432 job history party registry. redis port 6379 Celery job queue.' },
  { section: 'SDK & Self-Hosting', title: 'Ginie-1 (Air-Gapped)', url: './platform.html#ginie1', text: 'Canton-native open-weight language model fine-tuned on Daml with RLCF compiler feedback. Mistral 7B Qwen 2.5-Coder. GGUF ONNX CPU inference no GPU required. Air-gapped regulated institutions banks asset managers infrastructure providers. docker pull blockxai/ginie-1. ginie-eval benchmark 50 prompts compile rate audit pass rate ledger correctness.' },
  { section: 'Reference', title: 'Scope & Limitations', url: './reference.html', text: 'What Ginie handles well: single-module Daml contracts 50-200 lines bilateral 2-3 party workflows IOU bond repo DvP custody AML settlement transfer settle archive propose accept choices SCU-safe contracts. Current limitations: no cross-module imports no daml-finance interface extensions. What Ginie is not: not a cloud IDE not a Daml language assistant not a replacement for Daml engineer.' },
  { section: 'Reference', title: 'FAQ', url: './reference.html#faq', text: 'Do I need a Canton account? No GinieNet is public. What LLM does Ginie use? Claude Sonnet default GPT-4o Gemini 2.5 Flash Ginie-1. Is my contract source code stored? Temporarily during session GitHub integration commits to your repository. Can I use Ginie with my own Canton node? Yes set CANTON_LEDGER_HOST. What happens if compilation fails after 3 retries? Returns final compiler error. Can I contribute Daml patterns to the RAG library? Yes submit PR to Canton_skills.' }
];

/* ── SEARCH ───────────────────────────────────────────────── */
function initSearch() {
  var input   = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  if (!input || !results) return;

  input.addEventListener('input', function () {
    var q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.classList.remove('open'); return; }

    var matches = SEARCH_INDEX.filter(function (item) {
      return item.title.toLowerCase().indexOf(q) !== -1 ||
             item.text.toLowerCase().indexOf(q)  !== -1 ||
             item.section.toLowerCase().indexOf(q) !== -1;
    }).slice(0, 8);

    if (matches.length === 0) {
      results.innerHTML = '<div class="sr-empty">No results for "' + escHtml(q) + '"</div>';
    } else {
      var html = '<div class="sr-header">' + matches.length + ' result' + (matches.length > 1 ? 's' : '') + '</div>';
      matches.forEach(function (item) {
        var preview = getPreview(item.text, q);
        html += '<a class="sr-item" href="' + item.url + '">' +
          '<span class="sr-section">' + item.section + '</span>' +
          '<span class="sr-title">'   + hlText(item.title, q) + '</span>' +
          '<span class="sr-preview">' + hlText(preview, q)   + '</span>' +
          '</a>';
      });
      results.innerHTML = html;
    }
    results.classList.add('open');
  });

  document.addEventListener('click', function (e) {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.remove('open');
    }
  });

  input.addEventListener('focus', function () {
    if (input.value.trim().length >= 2) results.classList.add('open');
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { results.classList.remove('open'); input.blur(); }
  });
}

function getPreview(text, q) {
  var idx = text.toLowerCase().indexOf(q);
  if (idx === -1) return text.slice(0, 90) + '...';
  var start = Math.max(0, idx - 30);
  var end   = Math.min(text.length, idx + q.length + 60);
  return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
}

function hlText(text, q) {
  if (!q) return escHtml(text);
  var esc = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return escHtml(text).replace(
    new RegExp('(' + esc + ')', 'gi'),
    '<mark style="background:#dcfce7;color:#15803d;border-radius:2px;">$1</mark>'
  );
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── COPY BUTTONS ─────────────────────────────────────────── */
function initCopy() {
  document.querySelectorAll('.cb-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = btn.closest('.cb').querySelector('pre');
      if (!pre) return;
      navigator.clipboard.writeText(pre.textContent).then(function () {
        btn.textContent = 'copied!';
        setTimeout(function () { btn.textContent = 'copy'; }, 1400);
      }).catch(function () {
        btn.textContent = 'failed';
        setTimeout(function () { btn.textContent = 'copy'; }, 1400);
      });
    });
  });
}

/* ── NAV ACTIVE STATE ─────────────────────────────────────── */
function initNav() {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  var hash = window.location.hash; /* e.g. "#audit" or "" */
  var links = Array.from(document.querySelectorAll('.ni[href]'));

  /* 1. Try to find exact path+hash match */
  var exactMatch = null;
  if (hash) {
    links.forEach(function (link) {
      var href = link.getAttribute('href') || '';
      var parts = href.split('#');
      var linkFile = parts[0].split('/').pop();
      var linkHash = parts[1] ? '#' + parts[1] : '';
      if (linkFile === path && linkHash === hash) exactMatch = link;
    });
  }

  /* 2. Fallback: first link that matches the page path only */
  var firstMatch = null;
  links.forEach(function (link) {
    var href = link.getAttribute('href') || '';
    var linkFile = href.split('#')[0].split('/').pop();
    if (linkFile === path && !firstMatch) firstMatch = link;
  });

  var target = exactMatch || firstMatch;
  if (target) target.classList.add('active');

  /* 3. Scroll spy — update active link as user scrolls */
  var sections = Array.from(document.querySelectorAll('.ds[id]'));
  if (sections.length > 1) {
    window.addEventListener('scroll', function () {
      var scrollY = window.pageYOffset;
      var current = sections[0];
      sections.forEach(function (s) {
        if (scrollY >= s.offsetTop - 100) current = s;
      });
      links.forEach(function (link) { link.classList.remove('active'); });
      var sectionHref = './' + path + '#' + current.id;
      var matched = links.filter(function (l) {
        return l.getAttribute('href') === sectionHref ||
               (l.getAttribute('href').split('#')[0].split('/').pop() === path && !l.getAttribute('href').includes('#'));
      });
      /* prefer the hash-specific link if it exists */
      var hashLink = links.find(function (l) { return l.getAttribute('href') === sectionHref; });
      if (hashLink) { hashLink.classList.add('active'); }
      else if (firstMatch) { firstMatch.classList.add('active'); }
    });
  }
}

/* ── SCREENSHOT IMAGE FALLBACK ────────────────────────────── */
/* Images now live at ./assets/images/ with direct src paths.
   This handler gracefully hides any image that fails to load. */
function initImages() {
  document.querySelectorAll('img.screenshot').forEach(function (img) {
    img.addEventListener('error', function () {
      var wrap = img.closest('.screenshot-wrap');
      if (wrap) wrap.style.display = 'none';
    });
  });
}

/* ── THEME TOGGLE (light → dark → read) ────────────────────── */
var THEMES = ['light', 'dark', 'read'];
var THEME_ICONS = {
  light: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
  dark:  '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  read:  '<circle cx="12" cy="12" r="10"/><path d="M12 8c-2 0-4 1.5-4 4s2 4 4 4 4-1.5 4-4-2-4-4-4z"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>'
};
var THEME_TIPS = { light: 'Switch to Dark mode', dark: 'Switch to Read/Sepia mode', read: 'Switch to Light mode' };

function applyTheme(theme) {
  var html = document.documentElement;
  if (theme === 'light') {
    html.removeAttribute('data-theme');
  } else {
    html.setAttribute('data-theme', theme);
  }
  try { localStorage.setItem('gd-theme', theme); } catch(e) {}
  /* update icon */
  var ico = document.getElementById('theme-icon');
  var btn = document.getElementById('theme-toggle');
  if (ico) {
    ico.innerHTML = THEME_ICONS[theme] || THEME_ICONS.light;
    ico.setAttribute('viewBox', '0 0 24 24');
  }
  if (btn) btn.setAttribute('title', THEME_TIPS[theme]);
}

function initTheme() {
  var saved;
  try { saved = localStorage.getItem('gd-theme'); } catch(e) {}
  var theme = THEMES.indexOf(saved) !== -1 ? saved : 'light';
  applyTheme(theme);

  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var html = document.documentElement;
    var cur  = html.getAttribute('data-theme') || 'light';
    var idx  = THEMES.indexOf(cur);
    var next = THEMES[(idx + 1) % THEMES.length];
    applyTheme(next);
  });
}

/* ── BOOT ─────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded', function () {
  initTheme();
  initSearch();
  initCopy();
  initNav();
  initImages();
});
