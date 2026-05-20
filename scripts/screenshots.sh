#!/usr/bin/env bash
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
MOCKUPS="/Users/stefan.jarlegren/Cowork/Raptix - Reveal/14May/.claude/worktrees/competent-haslett-5a1843/mockups"
OUT="/Users/stefan.jarlegren/Cowork/Raptix.se/raptix-website/public/screenshots"
TMP=$(mktemp -d)
trap "rm -rf $TMP" EXIT
mkdir -p "$OUT"

# Hide mockup disclaimer banners (.note class) and apply a clean white background
HIDE_CSS='<style>.note,.bg-yellow-50,.bg-yellow-100{display:none!important}body{background:#fff!important}</style>'

shot() {
  local mockup="$1"; local outname="$2"; local size="$3"
  echo "  $mockup → $outname ($size)"
  # Inject CSS by appending a <style> just after <head>
  sed "s|</head>|$HIDE_CSS</head>|" "$MOCKUPS/$mockup" > "$TMP/$mockup"
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars \
    --screenshot="$OUT/$outname" \
    --window-size="$size" \
    --virtual-time-budget=4000 \
    "file://$TMP/$mockup" >/dev/null 2>&1
}

echo "Generating screenshots from Reveal mockups (clean, no disclaimers)..."
shot "screen-dashboard.html"          "screen-dashboard.png"     "1920,1080"
shot "screen-dashboard-editor.html"   "screen-editor.png"        "1600,1100"
shot "overview-single-site-v2.html"   "overview-single.png"      "1440,1500"
shot "overview-multisite.html"        "overview-multi.png"       "1440,1500"
shot "insights-tab.html"              "insights-heatmap.png"     "1440,1400"
shot "overview-extended.html"         "overview-aisles.png"      "1440,1600"
shot "sensors-page-v2.html"           "sensors-haccp.png"        "1440,1400"
shot "reports-section.html"           "reports-pdf.png"          "1440,1500"
echo "Done."
ls -lh "$OUT"
