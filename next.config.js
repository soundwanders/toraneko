/** @type {import('next').NextConfig} */

// This site is fully static and has no auth, cookies, or user input, so the CSP is
// defense-in-depth rather than a load-bearing control. Prerendered pages can't carry a
// per-request nonce, and both next-themes' anti-flash script and styled-jsx emit inline
// tags, so 'unsafe-inline' is unavoidable here without going dynamic. The parts that do
// real work are connect-src (limits where a compromised dependency could phone home),
// frame-ancestors (clickjacking), and object-src.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

const nextConfig = {
  // Don't advertise the framework in every response.
  poweredByHeader: false,

  // Next 16 writes AGENTS.md / CLAUDE.md into the repo on `next dev` unless disabled.
  agentRules: false,

  images: {
    // Next 16 rejects any quality not listed here (default is [75] only).
    // The site renders <Image quality={90} />, so 90 must be allowed.
    qualities: [75, 90],
  },

  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

module.exports = nextConfig;
