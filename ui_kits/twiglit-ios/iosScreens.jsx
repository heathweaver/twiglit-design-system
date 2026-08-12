// iosScreens.jsx — Twiglit screens, properly themed with the design system.
//
// Three screens demonstrate the design-system-aligned iOS vocabulary the
// current app is missing:
//   1. Tree — outline with the four-bar vocabulary + berries
//   2. Twigl — AI chat start screen with the brand input bar
//   3. DM — WhatsApp-shaped thread with the design-system tokens
//
// All three render *inside* an <IOSDevice>. The screens themselves are
// pure HTML + the brand token vars. No animation.

// ─────────────────────────────────────────────────────────────
// Tokens (mirror assets/css/tokens.css for inline use)
// ─────────────────────────────────────────────────────────────
const tw = {
  bg: '#ffffff',
  barSearch: '#f2f2f2',
  barLocation: '#e9e9e9',
  barAction: '#d7d7d7',
  barSelected: '#f0f0f0',
  ink: '#40404a',
  fg: '#333333',
  fgMuted: '#666666',
  fgSubtle: '#999999',
  fgFaint: '#c0c0c0',
  border: '#e0e0e0',
  borderStrong: '#c0c0c0',
  green: '#417505',
  greenDeep: '#2d5103',
  greenSoft: '#e8f0da',
  berry: '#b86b6a',
  berrySoft: '#f1dcdb',
  berryDeep: '#8e4a4a',
  shared: '#27AA66',
  multiplied: '#9B59B6',
  mono: 'ui-monospace, "SF Mono", Menlo, Monaco, monospace',
  sans: '-apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Noto Sans", sans-serif',
};

// ─────────────────────────────────────────────────────────────
// Berry component (web parity)
// ─────────────────────────────────────────────────────────────
function Berry({ checked = false, status = 'default', size = 14, focused = false }) {
  let color = tw.berry;
  if (focused) color = tw.greenDeep;
  if (status === 'shared') color = tw.shared;
  if (status === 'multiplied') color = tw.multiplied;
  return (
    <span
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        display: 'inline-block',
        borderRadius: '50%',
        border: `1.25px solid ${color}`,
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {checked && (
        <span
          style={{
            position: 'absolute',
            inset: '18%',
            background: color,
            borderRadius: '50%',
          }}
        />
      )}
    </span>
  );
}

function FolderBullet({ open = false, focused = false, size = 16 }) {
  const color = focused ? tw.greenDeep : tw.fgMuted;
  const path = open
    ? 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v1H3z M3 9h18l-2 9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
    : 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <path d={path} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Icons (lifted from the spec / web)
// ─────────────────────────────────────────────────────────────
const Icon = {
  search: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  ),
  home: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 11l9-7 9 7v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />
    </svg>
  ),
  details: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="14 3 14 9 20 9" />
    </svg>
  ),
  complete: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" />
    </svg>
  ),
  trash: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    </svg>
  ),
  outdent: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="11 17 6 12 11 7" />
      <line x1="6" y1="12" x2="18" y2="12" />
    </svg>
  ),
  indent: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="13 17 18 12 13 7" />
      <line x1="18" y1="12" x2="6" y2="12" />
    </svg>
  ),
  tree: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none" />
      <line x1="9" y1="6" x2="21" y2="6" />
      <circle cx="9" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <line x1="14" y1="12" x2="21" y2="12" />
      <circle cx="9" cy="18" r="1.5" fill="currentColor" stroke="none" />
      <line x1="14" y1="18" x2="21" y2="18" />
    </svg>
  ),
  chat: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a8 8 0 0 1-12 6.93L4 20l1.07-5A8 8 0 1 1 21 12z" />
    </svg>
  ),
  team: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="8" r="3.5" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 20c0-2.2 1.8-4 4-4s4 1.8 4 4" />
    </svg>
  ),
  plus: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4 C 10 4 4 11 4 20 C 13 20 20 13 20 4 Z" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────
// Bottom pill nav — matches spec/components.html mnav
// ─────────────────────────────────────────────────────────────
function MobilePillNav({ active = 'home' }) {
  // Same icons as the desktop four-bar header — Home / DMs / Friends / AI.
  const items = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 11l9-7 9 7v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />
        </svg>
      ),
    },
    {
      id: 'dms',
      label: 'DMs',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6l-4 3v-3H5a2 2 0 0 1-2-2z" />
          <path d="M9 18a2 2 0 0 0 2 2h6l4 3v-3a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2" />
        </svg>
      ),
    },
    {
      id: 'friends',
      label: 'Friends',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="8" r="3.5" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 19c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5" />
          <path d="M15 19c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" />
        </svg>
      ),
    },
    {
      id: 'ai',
      label: 'AI',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6a2 2 0 0 1 2-2h8l4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
          <path d="M14 4v4h4" />
          <path d="M8 13l2-1 1 2 2-1.5 2 1.5 1-2 2 1" />
        </svg>
      ),
    },
  ];
  return (
    <div
      style={{
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 28,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        zIndex: 30,
      }}
    >
      <div
        style={{
          flex: 1,
          background: tw.ink,
          borderRadius: 28,
          padding: '6px 8px',
          display: 'flex',
          gap: 0,
          boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
        }}
      >
        {items.map(it => (
          <div
            key={it.id}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              padding: '8px 4px',
              borderRadius: 20,
              background: it.id === active ? '#52525a' : 'transparent',
              color: 'white',
              fontSize: 10,
              fontFamily: tw.sans,
            }}
          >
            <div style={{ width: 22, height: 22, color: it.id === active ? tw.berry : 'white' }}>
              {it.icon}
            </div>
            <span style={{ color: it.id === active ? tw.berry : 'white' }}>{it.label}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          width: 56,
          height: 56,
          background: tw.green,
          color: 'white',
          display: 'grid',
          placeItems: 'center',
          borderRadius: '50%',
          boxShadow: '0 8px 24px rgba(65,117,5,0.45)',
        }}
      >
        <div style={{ width: 26, height: 26 }}>{Icon.plus}</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 1: Tree (outline)
// ─────────────────────────────────────────────────────────────
function ScreenTree() {
  const rows = [
    { id: 1, text: 'Twiglit', folder: true, open: true, depth: 0, count: 4 },
    { id: 2, text: 'Ship four-bar header to the app', depth: 1, done: true },
    { id: 3, text: 'Draft launch announcement', depth: 1 },
    { id: 4, text: 'Coffee with Mira', depth: 1, status: 'shared', done: true },
    { id: 5, text: 'Weekly planning', folder: true, open: true, depth: 1, count: 3 },
    { id: 6, text: 'Sync notes from twigl', depth: 2 },
    { id: 7, text: 'Pick three twigs to focus', depth: 2, selected: true },
    { id: 8, text: 'Move done rows to archive', depth: 2, done: true },
    { id: 9, text: 'Reading', folder: true, open: false, depth: 0, count: 2 },
    { id: 10, text: 'Buy beans', depth: 0, status: 'shared' },
    { id: 11, text: 'Birthday: Sam', depth: 0, status: 'multiplied' },
  ];
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: tw.bg,
        fontFamily: tw.sans,
        color: tw.fg,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        paddingTop: 59,
      }}
      data-screen-label="01 Tree"
    >
      {/* Bar 1 — Search */}
      <div
        style={{
          background: tw.barSearch,
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: tw.berry,
            color: 'white',
            display: 'grid',
            placeItems: 'center',
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          H
        </div>
        <div
          style={{
            flex: 1,
            height: 32,
            background: tw.bg,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '0 12px',
            color: tw.fgFaint,
            fontSize: 14,
          }}
        >
          <div style={{ width: 14, height: 14, color: tw.fgSubtle }}>{Icon.search}</div>
          <span>Search the tree…</span>
        </div>
      </div>
      {/* Bar 2 — Location */}
      <div
        style={{
          background: tw.barLocation,
          padding: '6px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 13,
          flexShrink: 0,
        }}
      >
        <div style={{ width: 14, height: 14, color: tw.fg }}>{Icon.home}</div>
        <span>Home</span>
        <span style={{ color: tw.berry, fontSize: 14 }}>›</span>
        <span>Twiglit</span>
        <span style={{ color: tw.berry, fontSize: 14 }}>›</span>
        <span>Weekly planning</span>
        <span style={{ color: tw.berry, fontSize: 14 }}>›</span>
        <span style={{ fontWeight: 600 }}>Pick three…</span>
      </div>
      {/* Bar 3 — Action */}
      <div
        style={{
          background: tw.barAction,
          boxShadow: '0 2px 3px rgba(0,0,0,0.12)',
          position: 'relative',
          zIndex: 1,
          flexShrink: 0,
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}
      >
        <div
          style={{
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            width: 'max-content',
          }}
        >
          {[
            { i: Icon.complete, l: 'Complete' },
            { i: Icon.details, l: 'Details' },
            { i: Icon.outdent, l: 'Outdent' },
            { i: Icon.indent, l: 'Indent' },
            { i: Icon.trash, l: 'Delete' },
          ].map((v, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                color: tw.greenDeep,
                fontSize: 13,
                whiteSpace: 'nowrap',
              }}
            >
              <div style={{ width: 16, height: 16, color: '#4e514e' }}>{v.i}</div>
              <span>{v.l}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Bar 4 — Selected */}
      <div
        style={{
          background: tw.barSelected,
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexShrink: 0,
        }}
      >
        <Berry size={16} focused />
        <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-0.015em' }}>
          Pick three twigs to focus
        </span>
      </div>
      {/* Tree body */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0 120px' }}>
        {rows.map(r => (
          <div
            key={r.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '7px 16px',
              paddingLeft: 16 + r.depth * 18,
              background: r.selected ? tw.barSelected : 'transparent',
              fontSize: 14,
              color: r.done ? tw.fgSubtle : tw.fg,
              textDecoration: r.done ? 'line-through' : 'none',
            }}
          >
            {r.folder ? (
              <FolderBullet open={r.open} focused={r.selected} />
            ) : (
              <Berry checked={r.done} status={r.status} focused={r.selected} size={14} />
            )}
            <span style={{ flex: 1 }}>{r.text}</span>
            {r.folder && <span style={{ fontSize: 11, color: tw.fgSubtle }}>{r.count}</span>}
          </div>
        ))}
        {/* + New twigl */}
        <div
          style={{
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: tw.greenDeep,
              color: 'white',
              display: 'grid',
              placeItems: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{ width: 14, height: 14 }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
          </div>
          <span style={{ color: tw.greenDeep, fontSize: 14 }}>New twigl</span>
        </div>
      </div>
      <MobilePillNav active="home" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 2: Twigl (AI start screen) — adapted from spec/patterns.html home-start
// ─────────────────────────────────────────────────────────────
function ScreenTwigl() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: tw.bg,
        fontFamily: tw.sans,
        color: tw.fg,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        paddingTop: 59,
      }}
      data-screen-label="02 Twigl"
    >
      {/* Top — minimal */}
      <div
        style={{
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontFamily: tw.mono,
            color: tw.fgSubtle,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
          }}
        >
          Twigl
        </span>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: tw.berry,
            color: 'white',
            display: 'grid',
            placeItems: 'center',
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          H
        </div>
      </div>

      {/* Centered start */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          padding: '0 24px',
          marginTop: -40,
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            background: tw.green,
            display: 'grid',
            placeItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img src="../../assets/brand/app-icon.png" alt="" style={{ width: 64, height: 64 }} />
        </div>
        <h1
          style={{
            margin: 0,
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: 28,
            fontWeight: 400,
            letterSpacing: '-0.02em',
            color: tw.fg,
            lineHeight: 1.15,
            textAlign: 'center',
          }}
        >
          Welcome back.
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: tw.fgMuted,
          }}
        >
          Twigl something to plant it in your tree.
        </p>

        {/* Composer (expanded) */}
        <div
          style={{
            width: '100%',
            maxWidth: 320,
            border: `1px solid ${tw.border}`,
            background: tw.bg,
            borderRadius: 4,
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
          }}
        >
          <div style={{ color: tw.fgFaint, fontSize: 15, lineHeight: 1.4 }}>
            Get coffee with Mira this week…
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: tw.fgMuted,
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: tw.barSearch,
                color: tw.fgMuted,
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <div style={{ width: 14, height: 14 }}>{Icon.plus}</div>
            </div>
            <div style={{ display: 'flex', gap: 2, alignItems: 'center', height: 16 }}>
              {[6, 12, 14, 10, 7].map((h, i) => (
                <span
                  key={i}
                  style={{ width: 2, height: h, background: tw.green, display: 'inline-block' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Prompts */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            justifyContent: 'center',
            maxWidth: 320,
          }}
        >
          {['Plan my week', 'What did I twigl yesterday?', 'Find shared twigs', 'Open Reading'].map(
            p => (
              <div
                key={p}
                style={{
                  border: `1px solid ${tw.border}`,
                  background: tw.bg,
                  padding: '6px 12px',
                  borderRadius: 999,
                  fontSize: 12,
                  color: tw.fg,
                  fontWeight: 600,
                }}
              >
                {p}
              </div>
            )
          )}
        </div>
      </div>

      <MobilePillNav active="ai" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 3: DM thread (WhatsApp-shaped, design-system tokens)
// ─────────────────────────────────────────────────────────────
function Bubble({ me, children, time }) {
  return (
    <div
      style={{
        alignSelf: me ? 'flex-end' : 'flex-start',
        maxWidth: '75%',
        background: me ? tw.greenSoft : tw.bg,
        border: `1px solid ${me ? tw.greenSoft : tw.border}`,
        padding: '7px 12px',
        fontSize: 14,
        lineHeight: 1.4,
        color: tw.fg,
        position: 'relative',
      }}
    >
      {children}
      <span style={{ fontSize: 10, color: tw.fgSubtle, marginLeft: 6, fontFamily: tw.mono }}>
        {time}
      </span>
    </div>
  );
}

function ScreenDM() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#fafafa',
        fontFamily: tw.sans,
        color: tw.fg,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        paddingTop: 59,
      }}
      data-screen-label="03 DM"
    >
      {/* Head — ink */}
      <div
        style={{
          background: tw.ink,
          color: 'white',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexShrink: 0,
        }}
      >
        <div style={{ width: 18, height: 18, color: 'white' }}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #b88a6e, #8b5a3c)',
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, fontSize: 14 }}>Mira Wells</div>
          <div
            style={{
              fontSize: 10,
              color: 'rgba(255,255,255,0.6)',
              marginTop: 1,
              fontFamily: tw.mono,
            }}
          >
            shares 3 twigs with you
          </div>
        </div>
      </div>

      {/* Day divider */}
      <div style={{ textAlign: 'center', fontSize: 11, color: tw.fgSubtle, margin: '12px 0 6px' }}>
        Today
      </div>

      {/* Bubbles */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '6px 14px 100px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Bubble me={false} time="09:14">
          Hey — did you twigl the coffee thing?
        </Bubble>
        <Bubble me time="09:15">
          Just did. Berried it green so you'll see it too.
        </Bubble>
        <Bubble me={false} time="09:16">
          Perfect. Thursday at 4 still works?
        </Bubble>
        <Bubble me time="09:17">
          Yes. Café Lune.
        </Bubble>

        {/* Shared twig card (design-system-styled, embedded) */}
        <div style={{ alignSelf: 'flex-start', maxWidth: '85%', marginTop: 4 }}>
          <div
            style={{
              border: `1px solid ${tw.border}`,
              background: tw.bg,
              padding: '10px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Berry checked status="shared" size={14} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Coffee with Mira</div>
              <div style={{ fontSize: 10, color: tw.fgSubtle, marginTop: 2, fontFamily: tw.mono }}>
                Thursday · Café Lune · shared
              </div>
            </div>
          </div>
          <span style={{ fontSize: 10, color: tw.fgSubtle, marginLeft: 4, fontFamily: tw.mono }}>
            09:17
          </span>
        </div>

        <Bubble me={false} time="09:18">
          Also — can you check the Reading branch? I added that Alexander book.
        </Bubble>
      </div>

      {/* Composer — 14px radius, compact pill-ish (not full pill) */}
      <div
        style={{
          position: 'absolute',
          left: 12,
          right: 12,
          bottom: 26,
          background: tw.bg,
          border: `1px solid ${tw.border}`,
          borderRadius: 4,
          padding: 6,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          zIndex: 30,
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: tw.barSearch,
            color: tw.fgMuted,
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
          }}
        >
          <div style={{ width: 16, height: 16 }}>{Icon.plus}</div>
        </div>
        <span style={{ flex: 1, color: tw.fgFaint, fontSize: 15, paddingLeft: 4 }}>
          Message Mira…
        </span>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: 4,
            background: tw.green,
            color: 'white',
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
          }}
        >
          <div style={{ width: 16, height: 16 }}>{Icon.send}</div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 4: Login — magic link auth (replaces LoginView.swift)
// ─────────────────────────────────────────────────────────────
function ScreenLogin() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: tw.barLocation,
        fontFamily: tw.sans,
        color: tw.fg,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 59,
        overflow: 'hidden',
      }}
      data-screen-label="04 Login"
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
          padding: '0 28px',
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            background: tw.green,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <img src="../../assets/brand/app-icon.png" alt="" style={{ width: 88, height: 88 }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: '-0.022em',
              color: tw.fg,
            }}
          >
            Twiglit
          </h1>
          <p
            style={{
              margin: '8px 0 0',
              fontSize: 14,
              color: tw.fgMuted,
              lineHeight: 1.5,
            }}
          >
            Sign in to your tree.
          </p>
        </div>
        <div
          style={{
            width: '100%',
            background: tw.bg,
            border: `1px solid ${tw.border}`,
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: tw.mono,
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                color: tw.fgMuted,
                marginBottom: 4,
              }}
            >
              Email
            </div>
            <div
              style={{
                border: `1px solid ${tw.borderStrong}`,
                padding: '10px 12px',
                fontSize: 15,
                color: tw.fg,
              }}
            >
              heath@twiglit.com
            </div>
          </div>
          <button
            style={{
              border: 'none',
              cursor: 'pointer',
              background: tw.green,
              color: 'white',
              padding: '12px 16px',
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '-0.015em',
            }}
          >
            Send magic link
          </button>
          <div
            style={{
              fontSize: 11,
              color: tw.fgSubtle,
              textAlign: 'center',
              marginTop: 4,
            }}
          >
            We'll email you a one-tap link.
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          padding: '0 24px 28px',
          fontSize: 11,
          color: tw.fgSubtle,
          fontFamily: tw.mono,
          letterSpacing: '0.04em',
        }}
      >
        v0.2 · May 2026
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 5: DM list (replaces ConversationsView, list mode)
// ─────────────────────────────────────────────────────────────
function ScreenDMList() {
  const convos = [
    {
      id: 1,
      name: 'Mira Wells',
      bg: 'linear-gradient(135deg, #b88a6e, #8b5a3c)',
      preview: 'Thursday at 4 still works?',
      time: '09:18',
      unread: 2,
      shared: 3,
    },
    {
      id: 2,
      name: 'Twiglit AI',
      bg: tw.green,
      isAI: true,
      preview: 'I drafted four follow-ups under "Launch".',
      time: '08:55',
      unread: 1,
      shared: 0,
    },
    {
      id: 3,
      name: 'Sam Reilly',
      bg: 'linear-gradient(135deg, #5a7da5, #4a6fa5)',
      preview: 'shared a twig: Birthday gift ideas',
      time: 'Tue',
      unread: 0,
      shared: 1,
      mention: 'shared a twig',
    },
    {
      id: 4,
      name: 'Design crit',
      bg: 'linear-gradient(135deg, #9b6b6a, #8e4a4a)',
      preview: 'Lin: looks good — ship it.',
      time: 'Tue',
      unread: 0,
      shared: 0,
    },
    {
      id: 5,
      name: 'Mum',
      bg: tw.berry,
      initials: 'M',
      preview: 'See you Sunday ☀️',
      time: 'Mon',
      unread: 0,
      shared: 0,
    },
  ];
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: tw.bg,
        fontFamily: tw.sans,
        color: tw.fg,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 59,
        overflow: 'hidden',
      }}
      data-screen-label="05 DM list"
    >
      {/* Bar 1 with title */}
      <div
        style={{
          background: tw.barSearch,
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span style={{ flex: 1, fontSize: 17, fontWeight: 600, letterSpacing: '-0.015em' }}>
          DMs
        </span>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: tw.bg,
            color: tw.fgMuted,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <div style={{ width: 14, height: 14 }}>{Icon.plus}</div>
        </div>
      </div>
      {/* Search field, brand-styled */}
      <div style={{ padding: '8px 16px', background: tw.barSearch }}>
        <div
          style={{
            background: tw.bg,
            padding: '6px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: tw.fgFaint,
            fontSize: 13,
          }}
        >
          <div style={{ width: 14, height: 14, color: tw.fgSubtle }}>{Icon.search}</div>
          <span>Search messages…</span>
        </div>
      </div>
      {/* List */}
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 120 }}>
        {convos.map(c => (
          <div
            key={c.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '12px 16px',
              borderBottom: `1px solid ${tw.borderFaint || tw.border}`,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: c.bg,
                color: 'white',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 600,
                fontSize: 14,
                flexShrink: 0,
                position: 'relative',
              }}
            >
              {c.isAI ? (
                <img
                  src="../../assets/brand/app-icon.png"
                  alt=""
                  style={{ width: 34, height: 34 }}
                />
              ) : (
                c.initials ||
                c.name
                  .split(' ')
                  .map(s => s[0])
                  .join('')
              )}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: 14,
                    color: tw.fg,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {c.name}
                </span>
                <span
                  style={{ fontFamily: tw.mono, fontSize: 10, color: tw.fgSubtle, flexShrink: 0 }}
                >
                  {c.time}
                </span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: tw.fgMuted,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginTop: 1,
                }}
              >
                {c.mention ? (
                  <>
                    <span style={{ color: tw.greenDeep, fontWeight: 600 }}>{c.mention}: </span>
                    <span>{c.preview.replace(c.mention + ': ', '')}</span>
                  </>
                ) : (
                  c.preview
                )}
              </div>
              {(c.shared > 0 || c.unread > 0) && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                  {c.shared > 0 && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        fontSize: 10,
                        color: tw.shared,
                        fontFamily: tw.mono,
                        letterSpacing: '0.04em',
                      }}
                    >
                      <Berry checked status="shared" size={9} />
                      {c.shared} shared
                    </span>
                  )}
                  {c.unread > 0 && (
                    <span
                      style={{
                        background: tw.green,
                        color: 'white',
                        fontSize: 10,
                        fontWeight: 700,
                        minWidth: 18,
                        height: 18,
                        padding: '0 6px',
                        borderRadius: 999,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 'auto',
                      }}
                    >
                      {c.unread}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <MobilePillNav active="dms" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 6: Twig details (replaces TwigDetailsSheet.swift)
// ─────────────────────────────────────────────────────────────
function ScreenTwigDetails() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: tw.bg,
        fontFamily: tw.sans,
        color: tw.fg,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 59,
        overflow: 'hidden',
      }}
      data-screen-label="06 Twig details"
    >
      {/* Ink header with close + title */}
      <div
        style={{
          background: tw.ink,
          color: 'white',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div style={{ width: 16, height: 16 }}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
        <span
          style={{
            flex: 1,
            fontSize: 11,
            fontFamily: tw.mono,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          Twig details
        </span>
        <div style={{ width: 16, height: 16 }}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="5" cy="12" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <circle cx="19" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Title row */}
        <div
          style={{ padding: '20px 18px 12px', display: 'flex', alignItems: 'flex-start', gap: 12 }}
        >
          <Berry size={20} checked={false} />
          <h1
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: '-0.015em',
              lineHeight: 1.2,
            }}
          >
            Pick three twigs to focus
          </h1>
        </div>
        {/* Meta strip */}
        <div
          style={{
            padding: '0 18px 12px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            fontFamily: tw.mono,
            fontSize: 10,
            color: tw.fgSubtle,
            letterSpacing: '0.04em',
          }}
        >
          <span>Weekly planning</span>
          <span>·</span>
          <span>Thu 14 Sep</span>
          <span>·</span>
          <span style={{ color: tw.greenDeep }}>owner: you</span>
        </div>
        {/* Description */}
        <div style={{ padding: '0 18px 18px' }}>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: tw.fg }}>
            Pick the three twigs that, if done by Friday, would make the week count. Twigl them
            green when you commit; berry them when done.
          </p>
        </div>
        <div style={{ height: 1, background: tw.border, margin: '0 18px' }} />
        {/* Section: Twiglits */}
        <div
          style={{
            padding: '14px 18px 4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <span
            style={{
              fontFamily: tw.mono,
              fontSize: 10,
              color: tw.fgSubtle,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Twiglits
          </span>
          <span style={{ fontSize: 11, color: tw.fgMuted }}>3 of 4</span>
        </div>
        <div>
          {[
            { t: 'Ship four-bar header', done: true },
            { t: 'Draft launch announcement', done: false },
            { t: 'Move done rows to archive', done: true },
            { t: 'Coffee with Mira', done: true, status: 'shared' },
          ].map((r, i) => (
            <div
              key={i}
              style={{
                padding: '8px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 14,
                color: r.done ? tw.fgSubtle : tw.fg,
                textDecoration: r.done ? 'line-through' : 'none',
              }}
            >
              <Berry size={14} checked={r.done} status={r.status} />
              <span>{r.t}</span>
            </div>
          ))}
        </div>
        <div style={{ height: 1, background: tw.border, margin: '14px 18px 0' }} />
        {/* Section: People */}
        <div
          style={{
            padding: '14px 18px 6px',
            fontFamily: tw.mono,
            fontSize: 10,
            color: tw.fgSubtle,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          People
        </div>
        <div style={{ padding: '0 18px 14px', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          {[
            { name: 'Heath', role: 'owner', bg: tw.berry },
            { name: 'Mira', role: 'assignee', bg: '#8b5a3c' },
            { name: 'Sam', role: 'participant', bg: '#4a6fa5' },
          ].map(p => (
            <div
              key={p.name}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: p.bg,
                  color: 'white',
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 600,
                  fontSize: 13,
                }}
              >
                {p.name[0]}
              </div>
              <span style={{ fontSize: 11, fontWeight: 600 }}>{p.name}</span>
              <span
                style={{
                  fontFamily: tw.mono,
                  fontSize: 9,
                  color: tw.fgSubtle,
                  letterSpacing: '0.04em',
                }}
              >
                {p.role}
              </span>
            </div>
          ))}
        </div>
        <div style={{ height: 1, background: tw.border, margin: '0 18px' }} />
        {/* Section: Activity */}
        <div
          style={{
            padding: '14px 18px 6px',
            fontFamily: tw.mono,
            fontSize: 10,
            color: tw.fgSubtle,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Activity
        </div>
        <div style={{ padding: '0 18px 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 12, color: tw.fgMuted }}>
            <strong style={{ color: tw.fg }}>Mira</strong> shared this twig with you · 2h ago
          </div>
          <div style={{ fontSize: 12, color: tw.fgMuted }}>
            <strong style={{ color: tw.fg }}>You</strong> berried "Coffee with Mira" · 1h ago
          </div>
          <div style={{ fontSize: 12, color: tw.fgMuted }}>
            <strong style={{ color: tw.fg }}>Twigl</strong> drafted 2 new twiglits · 12m ago
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SCREEN 7: AI conversation thread (Twigl tab → after sending)
// ─────────────────────────────────────────────────────────────
function ScreenAIThread() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: tw.bg,
        fontFamily: tw.sans,
        color: tw.fg,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 59,
        overflow: 'hidden',
      }}
      data-screen-label="07 AI thread"
    >
      {/* Top — minimal */}
      <div
        style={{
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          borderBottom: `1px solid ${tw.border}`,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            background: tw.green,
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
          }}
        >
          <img src="../../assets/brand/app-icon.png" alt="" style={{ width: 30, height: 30 }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Twigl</div>
          <div
            style={{
              fontSize: 10,
              fontFamily: tw.mono,
              color: tw.fgSubtle,
              letterSpacing: '0.04em',
            }}
          >
            Claude · 12 messages
          </div>
        </div>
        <div style={{ width: 18, height: 18, color: tw.fgMuted }}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          >
            <circle cx="5" cy="12" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <circle cx="19" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </div>
      </div>
      {/* Thread */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px 14px 110px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {/* User msg */}
        <div
          style={{
            alignSelf: 'flex-end',
            maxWidth: '78%',
            background: tw.barSearch,
            padding: '8px 12px',
            fontSize: 14,
            lineHeight: 1.45,
          }}
        >
          What's on the Launch branch this week?
        </div>
        {/* AI response */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: tw.mono,
              fontSize: 10,
              color: tw.greenDeep,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <Berry size={10} checked focused />
            Twigl
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.55, color: tw.fg }}>
            You have <strong>four open twigs</strong> on Launch this week. Three are owned by you,
            one is shared with Mira:
          </div>
          {/* Bloom — proposed twigs */}
          <div
            style={{
              marginTop: 4,
              border: `1px solid ${tw.greenSoft}`,
              borderLeft: `3px solid ${tw.green}`,
              background: 'rgba(232, 240, 218, 0.4)',
              padding: 12,
            }}
          >
            <div
              style={{
                fontFamily: tw.mono,
                fontSize: 9.5,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: tw.greenDeep,
                marginBottom: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  background: tw.green,
                  display: 'inline-block',
                  borderRadius: '50%',
                }}
              />
              Bloom · 4 proposed
            </div>
            {[
              'Ship four-bar header',
              'Draft launch announcement',
              'Coffee with Mira',
              'Move done rows to archive',
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '3px 0',
                  fontSize: 13,
                }}
              >
                <Berry size={11} />
                {t}
              </div>
            ))}
            <div
              style={{
                display: 'flex',
                gap: 6,
                marginTop: 10,
                paddingTop: 10,
                borderTop: `1px solid ${tw.border}`,
              }}
            >
              <button
                style={{
                  border: 'none',
                  cursor: 'pointer',
                  background: tw.green,
                  color: 'white',
                  padding: '5px 10px',
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                Accept all
              </button>
              <button
                style={{
                  border: `1px solid ${tw.borderStrong}`,
                  cursor: 'pointer',
                  background: tw.bg,
                  color: tw.fg,
                  padding: '5px 10px',
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                Pick
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Pinned input bar — expanded composer, 14px radius */}
      <div
        style={{
          position: 'absolute',
          left: 12,
          right: 12,
          bottom: 26,
          background: tw.bg,
          border: `1px solid ${tw.border}`,
          borderRadius: 4,
          padding: '12px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          zIndex: 30,
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        }}
      >
        <span style={{ fontSize: 15, color: tw.fgFaint, lineHeight: 1.4 }}>Message Twiglit…</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: tw.barSearch,
              color: tw.fgMuted,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <div style={{ width: 14, height: 14 }}>{Icon.plus}</div>
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              color: tw.fgMuted,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <div style={{ width: 16, height: 16 }}>{Icon.tree}</div>
          </div>
          <div
            style={{
              width: 28,
              height: 28,
              color: tw.fgMuted,
              display: 'grid',
              placeItems: 'center',
              fontSize: 14,
              fontFamily: tw.mono,
            }}
          >
            @
          </div>
          <div
            style={{
              border: `1px solid ${tw.borderStrong}`,
              borderRadius: 4,
              padding: '1px 6px',
              fontFamily: tw.mono,
              fontSize: 13,
              fontWeight: 600,
              color: tw.fgMuted,
            }}
          >
            /
          </div>
          <span style={{ color: tw.greenDeep, fontSize: 13, fontWeight: 600, padding: '0 4px' }}>
            OpenAI ▾
          </span>
          <div style={{ flex: 1 }} />
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 4,
              background: tw.green,
              color: 'white',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <div style={{ width: 14, height: 14 }}>{Icon.send}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  ScreenTree,
  ScreenTwigl,
  ScreenDM,
  ScreenLogin,
  ScreenDMList,
  ScreenTwigDetails,
  ScreenAIThread,
  Berry,
  FolderBullet,
  MobilePillNav,
  twTokens: tw,
});
