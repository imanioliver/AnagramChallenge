#!/bin/sh
# Some images are already committed (supplied directly); they are skipped.
# Downloads the site's original images (unedited) from the current WordPress
# install into ./images so the site no longer depends on WordPress.
# Run this ONCE while the old WordPress site is still live, then commit the
# images/ folder. Files that already exist are skipped, so it is safe to re-run.
set -u
cd "$(dirname "$0")/images" || exit 0
SRC="${WP_SOURCE:-https://rhythmandrange.com/wp-content/uploads/2026/03}"

get() {
  [ -s "$1" ] && return 0
  if curl -fsSL --retry 2 -m 120 -o "$1.part" "$SRC/$2"; then
    mv "$1.part" "$1" && echo "fetched $1"
  else
    rm -f "$1.part"; echo "WARN: could not fetch $2" >&2
  fi
}

get logo.webp                 58A79074-3E15-4F94-91B5-3BAEF5E25BA3-e1774298025326.webp
get favicon-32.png            cropped-Untitled-1-1-32x32.png
get favicon-180.png           cropped-Untitled-1-1-180x180.png
get favicon-192.png           cropped-Untitled-1-1-192x192.png
get cred-masters.png          D9C13F49-4E8D-4B49-B360-E7E6D9BC280A.png
get cred-nasm.png             NASM-logo.png
get cred-track.webp           3AFB22E2-D597-4390-95B5-4C9A8B4A26C9.webp
get cred-ryt.webp             YA2425_Badge_RYT_200-1.webp
get focus-mindset.webp     2CC1E24F-E1DA-45BF-BD4E-AB842B8B693E.png
get focus-mobility.jpg        E5AF1EC9-AF9C-4260-9F0B-489C035555C1-e1774642120125.jpg
get focus-balance.webp     10E98DE8-EDCD-44D6-BAE5-F87438176B63.png
get focus-consistency.png     AE036BE8-9E80-4065-A0AB-5F03F00D6F14.png
get event-symposium-3.webp    64a43e51-82b8-45dd-b4f5-5840961aef0b.webp
get event-nawlee.webp      4B92CFDD-E160-4CB8-83B2-99D00746038F-scaled-e1774300232631.jpeg
get event-symposium-2.jpg     D36AD0A7-1FEF-45BC-B2D2-B7710478095C.jpg
get gallery-1.jpg             A62401BE-7F80-4EC7-A754-54A6674B305B.jpg
get gallery-2.jpg             FE43D530-B7D7-4D20-BC00-2BE9EE2E5B00.jpg
get gallery-3.jpeg            WhatsApp-Image-2026-03-26-at-2.02.26-AM.jpeg
get gallery-4.webp            4A9566A1-A99D-41C1-B897-C6E08A77F086-scaled-e1774459808389.webp
get gallery-5.jpg             FA484E8A-81E3-4FE2-8BDD-3D652A75443F.jpg
get gallery-6.png             CDB5EE53-5418-4285-93E5-40EEF471FAAE-scaled.png
get movement.mp4              IMG_0669-1.mp4

# Hero photo: defaults to the first gallery photo. To use the exact hero
# background from the old site, set HERO_FILE to its filename in uploads/2026/03.
get hero.jpg "${HERO_FILE:-A62401BE-7F80-4EC7-A754-54A6674B305B.jpg}"
exit 0
