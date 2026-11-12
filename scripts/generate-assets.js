import fs from "node:fs";

// ScamLens SVG mock (Threat detection & ML scanner UI)
const scamLensSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480" fill="none">
  <defs>
    <linearGradient id="sl_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="sl_accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ef4444" />
      <stop offset="100%" stop-color="#f97316" />
    </linearGradient>
  </defs>

  <rect width="800" height="480" rx="16" fill="url(#sl_bg)" />
  
  <!-- Subtle decorative grid -->
  <g opacity="0.15" stroke="#94a3b8" stroke-width="1">
    <line x1="40" y1="0" x2="40" y2="480" />
    <line x1="120" y1="0" x2="120" y2="480" />
    <line x1="200" y1="0" x2="200" y2="480" />
    <line x1="280" y1="0" x2="280" y2="480" />
    <line x1="360" y1="0" x2="360" y2="480" />
    <line x1="440" y1="0" x2="440" y2="480" />
    <line x1="520" y1="0" x2="520" y2="480" />
    <line x1="600" y1="0" x2="600" y2="480" />
    <line x1="680" y1="0" x2="680" y2="480" />
    <line x1="760" y1="0" x2="760" y2="480" />
    <line x1="0" y1="80" x2="800" y2="80" />
    <line x1="0" y1="160" x2="800" y2="160" />
    <line x1="0" y1="240" x2="800" y2="240" />
    <line x1="0" y1="320" x2="800" y2="320" />
    <line x1="0" y1="400" x2="800" y2="400" />
  </g>

  <!-- Browser Chrome Top Bar -->
  <rect x="30" y="26" width="740" height="42" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1" />
  <circle cx="54" cy="47" r="6" fill="#ef4444" />
  <circle cx="74" cy="47" r="6" fill="#f59e0b" />
  <circle cx="94" cy="47" r="6" fill="#10b981" />
  <rect x="130" y="36" width="380" height="22" rx="6" fill="#0f172a" />
  <text x="145" y="51" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">https://scamlens.analytics.ai/detector</text>
  <rect x="650" y="35" width="100" height="24" rx="6" fill="url(#sl_accent)" />
  <text x="674" y="51" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#ffffff">LIVE SCAN</text>

  <!-- Left Panel: Input Inspection -->
  <rect x="30" y="88" width="355" height="360" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1" />
  <text x="52" y="122" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#f8fafc">SUSPICIOUS MESSAGE PAYLOAD</text>
  <rect x="52" y="140" width="311" height="120" rx="8" fill="#0f172a" stroke="#475569" stroke-width="1" />
  <text x="68" y="168" font-family="monospace" font-size="12" fill="#ef4444">[ALERT] Action Required:</text>
  <text x="68" y="190" font-family="monospace" font-size="11" fill="#cbd5e1">&quot;Your account has been locked.</text>
  <text x="68" y="210" font-family="monospace" font-size="11" fill="#cbd5e1">Verify details immediately at</text>
  <text x="68" y="230" font-family="monospace" font-size="11" fill="#38bdf8">https://bаnk-secure-login.com&quot;</text>

  <!-- Feature extraction tags -->
  <rect x="52" y="280" width="145" height="28" rx="6" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" stroke-width="1" />
  <text x="62" y="298" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#ef4444">! Homograph Spoofing</text>
  <rect x="206" y="280" width="130" height="28" rx="6" fill="rgba(249, 115, 22, 0.15)" stroke="#f97316" stroke-width="1" />
  <text x="216" y="298" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#f97316">Urgency Triggers</text>

  <rect x="52" y="324" width="120" height="28" rx="6" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" stroke-width="1" />
  <text x="62" y="342" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#38bdf8">NLP Tokenizer</text>
  <rect x="182" y="324" width="135" height="28" rx="6" fill="rgba(168, 85, 247, 0.12)" stroke="#a855f7" stroke-width="1" />
  <text x="192" y="342" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#c084fc">Vector Embeddings</text>

  <rect x="52" y="378" width="311" height="44" rx="8" fill="#0f172a" />
  <text x="70" y="405" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">Streamlit ML Model Pipeline: Active</text>

  <!-- Right Panel: Probability & Metric Visualizer -->
  <rect x="415" y="88" width="355" height="360" rx="12" fill="#1e293b" stroke="#334155" stroke-width="1" />
  
  <!-- Gauge / Probability meter -->
  <circle cx="592" cy="180" r="70" stroke="#334155" stroke-width="12" fill="none" />
  <circle cx="592" cy="180" r="70" stroke="#ef4444" stroke-width="12" stroke-dasharray="440" stroke-dashoffset="50" stroke-linecap="round" fill="none" />
  <text x="592" y="182" font-family="system-ui, sans-serif" font-size="32" font-weight="800" fill="#ef4444" text-anchor="middle">98.4%</text>
  <text x="592" y="206" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#94a3b8" text-anchor="middle">PHISHING RISK</text>

  <!-- Classification bars -->
  <text x="445" y="285" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#cbd5e1">SMS Spoofing</text>
  <rect x="445" y="294" width="295" height="8" rx="4" fill="#334155" />
  <rect x="445" y="294" width="270" height="8" rx="4" fill="#ef4444" />

  <text x="445" y="335" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#cbd5e1">Homograph Character Distance</text>
  <rect x="445" y="344" width="295" height="8" rx="4" fill="#334155" />
  <rect x="445" y="344" width="240" height="8" rx="4" fill="#f97316" />

  <text x="445" y="385" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#cbd5e1">Legitimate Domain Match</text>
  <rect x="445" y="394" width="295" height="8" rx="4" fill="#334155" />
  <rect x="445" y="394" width="25" height="8" rx="4" fill="#10b981" />
</svg>`;

fs.writeFileSync("public/project-scamlens.svg", scamLensSvg);

// Kompas Bookstore Relational DB & Schema SVG
const kompasSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480" fill="none">
  <defs>
    <linearGradient id="kp_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c192c" />
      <stop offset="100%" stop-color="#132742" />
    </linearGradient>
  </defs>

  <rect width="800" height="480" rx="16" fill="url(#kp_bg)" />

  <!-- Grid decoration -->
  <g opacity="0.12" stroke="#38bdf8" stroke-width="1">
    <circle cx="400" cy="240" r="280" />
    <circle cx="400" cy="240" r="180" />
    <line x1="400" y1="0" x2="400" y2="480" />
    <line x1="0" y1="240" x2="800" y2="240" />
  </g>

  <!-- Top bar -->
  <rect x="30" y="24" width="740" height="40" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1" />
  <text x="54" y="49" font-family="monospace" font-size="13" font-weight="700" fill="#38bdf8">MySQL Enterprise Schema Explorer · Online Book Store (Kompas)</text>
  <rect x="650" y="32" width="100" height="24" rx="4" fill="#0284c7" />
  <text x="668" y="48" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#ffffff">3NF Schema</text>

  <!-- Entity 1: Customers -->
  <rect x="50" y="90" width="200" height="165" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <rect x="50" y="90" width="200" height="32" rx="8" fill="#0369a1" />
  <text x="65" y="111" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff">TABLE: customers</text>
  <text x="65" y="140" font-family="monospace" font-size="11" fill="#f59e0b">[PK] customer_id (INT)</text>
  <text x="65" y="160" font-family="monospace" font-size="11" fill="#94a3b8">  first_name (VARCHAR)</text>
  <text x="65" y="180" font-family="monospace" font-size="11" fill="#94a3b8">  email (VARCHAR UNIQUE)</text>
  <text x="65" y="200" font-family="monospace" font-size="11" fill="#94a3b8">  shipping_addr (TEXT)</text>
  <text x="65" y="220" font-family="monospace" font-size="11" fill="#94a3b8">  created_at (TIMESTAMP)</text>

  <!-- Connector Line 1 to Orders -->
  <path d="M250 150 L 320 150" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4" />
  <circle cx="320" cy="150" r="4" fill="#38bdf8" />

  <!-- Entity 2: Orders -->
  <rect x="320" y="90" width="200" height="175" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <rect x="320" y="90" width="200" height="32" rx="8" fill="#0369a1" />
  <text x="335" y="111" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff">TABLE: orders</text>
  <text x="335" y="140" font-family="monospace" font-size="11" fill="#f59e0b">[PK] order_id (INT)</text>
  <text x="335" y="160" font-family="monospace" font-size="11" fill="#38bdf8">[FK] customer_id (INT)</text>
  <text x="335" y="180" font-family="monospace" font-size="11" fill="#38bdf8">[FK] branch_id (INT)</text>
  <text x="335" y="200" font-family="monospace" font-size="11" fill="#94a3b8">  order_total (DECIMAL)</text>
  <text x="335" y="220" font-family="monospace" font-size="11" fill="#94a3b8">  status (ENUM)</text>
  <text x="335" y="240" font-family="monospace" font-size="11" fill="#94a3b8">  order_date (DATETIME)</text>

  <!-- Connector Line 2 to Books -->
  <path d="M520 150 L 580 150" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 4" />
  <circle cx="580" cy="150" r="4" fill="#38bdf8" />

  <!-- Entity 3: Books / Inventory -->
  <rect x="580" y="90" width="180" height="175" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <rect x="580" y="90" width="180" height="32" rx="8" fill="#0369a1" />
  <text x="595" y="111" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff">TABLE: books</text>
  <text x="595" y="140" font-family="monospace" font-size="11" fill="#f59e0b">[PK] isbn_13 (VARCHAR)</text>
  <text x="595" y="160" font-family="monospace" font-size="11" fill="#94a3b8">  title (VARCHAR)</text>
  <text x="595" y="180" font-family="monospace" font-size="11" fill="#94a3b8">  author_id (INT)</text>
  <text x="595" y="200" font-family="monospace" font-size="11" fill="#94a3b8">  price (DECIMAL)</text>
  <text x="595" y="220" font-family="monospace" font-size="11" fill="#94a3b8">  stock_qty (INT)</text>

  <!-- Bottom SQL Query Preview Window -->
  <rect x="50" y="290" width="710" height="155" rx="10" fill="#0a0f1d" stroke="#334155" stroke-width="1" />
  <text x="75" y="322" font-family="monospace" font-size="12" fill="#a855f7">SELECT</text>
  <text x="130" y="322" font-family="monospace" font-size="12" fill="#f8fafc">b.title, b.isbn_13, COUNT(o.order_id) AS total_sales, SUM(o.order_total) AS revenue</text>
  <text x="75" y="344" font-family="monospace" font-size="12" fill="#a855f7">FROM</text>
  <text x="115" y="344" font-family="monospace" font-size="12" fill="#f8fafc">books b</text>
  <text x="75" y="366" font-family="monospace" font-size="12" fill="#a855f7">JOIN</text>
  <text x="115" y="366" font-family="monospace" font-size="12" fill="#f8fafc">order_items oi ON b.isbn_13 = oi.isbn_13</text>
  <text x="75" y="388" font-family="monospace" font-size="12" fill="#a855f7">JOIN</text>
  <text x="115" y="388" font-family="monospace" font-size="12" fill="#f8fafc">orders o ON oi.order_id = o.order_id</text>
  <text x="75" y="410" font-family="monospace" font-size="12" fill="#a855f7">GROUP BY</text>
  <text x="145" y="410" font-family="monospace" font-size="12" fill="#f8fafc">b.isbn_13 HAVING total_sales &gt; 50 ORDER BY revenue DESC;</text>
</svg>`;

fs.writeFileSync("public/project-kompas.svg", kompasSvg);

// LIMA Multimodal AI System Architecture SVG
const limaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480" fill="none">
  <defs>
    <linearGradient id="lm_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#180e29" />
      <stop offset="100%" stop-color="#2e1065" />
    </linearGradient>
    <linearGradient id="lm_accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#ec4899" />
    </linearGradient>
  </defs>

  <rect width="800" height="480" rx="16" fill="url(#lm_bg)" />

  <!-- Top bar -->
  <rect x="30" y="24" width="740" height="40" rx="8" fill="#24123d" stroke="#4c1d95" stroke-width="1" />
  <text x="54" y="49" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#c084fc">LIMA · Multimodal AI Media &amp; Learning Architecture</text>
  <rect x="630" y="32" width="120" height="24" rx="4" fill="url(#lm_accent)" />
  <text x="644" y="48" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#ffffff">Cloud Multi-Tenant</text>

  <!-- Layer 1: Client Interfaces (Left) -->
  <rect x="50" y="90" width="180" height="350" rx="10" fill="#24123d" stroke="#6d28d9" stroke-width="1.5" />
  <text x="70" y="120" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#f5d0fe">CLIENT INTERFACES</text>
  <rect x="65" y="140" width="150" height="46" rx="6" fill="#3b0764" />
  <text x="78" y="168" font-family="system-ui, sans-serif" font-size="12" fill="#ffffff">Voice / Audio Stream</text>
  <rect x="65" y="200" width="150" height="46" rx="6" fill="#3b0764" />
  <text x="78" y="228" font-family="system-ui, sans-serif" font-size="12" fill="#ffffff">Visual Touch Screen</text>
  <rect x="65" y="260" width="150" height="46" rx="6" fill="#3b0764" />
  <text x="78" y="288" font-family="system-ui, sans-serif" font-size="12" fill="#ffffff">Text &amp; Query Search</text>
  <rect x="65" y="320" width="150" height="46" rx="6" fill="#3b0764" />
  <text x="78" y="348" font-family="system-ui, sans-serif" font-size="12" fill="#ffffff">VR / Immersive Room</text>

  <!-- Connectors from Clients to Gateway -->
  <line x1="230" y1="250" x2="280" y2="250" stroke="#c084fc" stroke-width="2" />
  <polygon points="280,246 290,250 280,254" fill="#c084fc" />

  <!-- Layer 2: API Gateway & Orchestration (Middle) -->
  <rect x="290" y="90" width="210" height="350" rx="10" fill="#24123d" stroke="#a855f7" stroke-width="1.5" />
  <text x="310" y="120" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#f5d0fe">AI ORCHESTRATION</text>
  <rect x="305" y="145" width="180" height="70" rx="6" fill="#3b0764" />
  <text x="320" y="173" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#a855f7">Multimodal Gateway</text>
  <text x="320" y="195" font-family="system-ui, sans-serif" font-size="10" fill="#e9d5ff">WebSocket + gRPC sync</text>

  <rect x="305" y="230" width="180" height="70" rx="6" fill="#3b0764" />
  <text x="320" y="258" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#ec4899">Cross-Modal Synthesizer</text>
  <text x="320" y="280" font-family="system-ui, sans-serif" font-size="10" fill="#fbcfe8">Prompt &amp; Context Pipeline</text>

  <rect x="305" y="315" width="180" height="70" rx="6" fill="#3b0764" />
  <text x="320" y="343" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#38bdf8">Tenant Access Layer</text>
  <text x="320" y="365" font-family="system-ui, sans-serif" font-size="10" fill="#bae6fd">RBAC &amp; Rate Limits</text>

  <!-- Connectors to Cloud Services -->
  <line x1="500" y1="250" x2="550" y2="250" stroke="#c084fc" stroke-width="2" />
  <polygon points="550,246 560,250 550,254" fill="#c084fc" />

  <!-- Layer 3: Cloud Intelligence & Storage (Right) -->
  <rect x="560" y="90" width="190" height="350" rx="10" fill="#24123d" stroke="#ec4899" stroke-width="1.5" />
  <text x="578" y="120" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#f5d0fe">CLOUD INTELLIGENCE</text>
  
  <rect x="575" y="145" width="160" height="56" rx="6" fill="#4c0519" />
  <text x="590" y="172" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#fb7185">Vector Knowledge DB</text>
  <text x="590" y="190" font-family="system-ui, sans-serif" font-size="10" fill="#fda4af">Embeddings Indexing</text>

  <rect x="575" y="215" width="160" height="56" rx="6" fill="#4c0519" />
  <text x="590" y="242" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#fb7185">Speech &amp; Vision Models</text>
  <text x="590" y="260" font-family="system-ui, sans-serif" font-size="10" fill="#fda4af">STT, TTS, Image OCR</text>

  <rect x="575" y="285" width="160" height="56" rx="6" fill="#4c0519" />
  <text x="590" y="312" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#fb7185">Media Object Cache</text>
  <text x="590" y="330" font-family="system-ui, sans-serif" font-size="10" fill="#fda4af">S3 CDN Streaming</text>

  <rect x="575" y="355" width="160" height="56" rx="6" fill="#4c0519" />
  <text x="590" y="382" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#fb7185">Multi-institution Tenant</text>
  <text x="590" y="400" font-family="system-ui, sans-serif" font-size="10" fill="#fda4af">Secure Data Isolation</text>
</svg>`;

fs.writeFileSync("public/project-lima.svg", limaSvg);

console.log("Successfully generated all project SVG mockups in public/");

