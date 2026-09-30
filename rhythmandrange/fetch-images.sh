#!/bin/sh
# Downloads the gallery photos and video (unedited) from the current WordPress
# install into ./images. All other images are already committed.
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

get gallery-1.jpg             A62401BE-7F80-4EC7-A754-54A6674B305B.jpg
get gallery-2.jpg             FE43D530-B7D7-4D20-BC00-2BE9EE2E5B00.jpg
get gallery-3.jpeg            WhatsApp-Image-2026-03-26-at-2.02.26-AM.jpeg
get gallery-4.webp            4A9566A1-A99D-41C1-B897-C6E08A77F086-scaled-e1774459808389.webp
get gallery-5.jpg             FA484E8A-81E3-4FE2-8BDD-3D652A75443F.jpg
get gallery-6.png             CDB5EE53-5418-4285-93E5-40EEF471FAAE-scaled.png
get movement.mp4              IMG_0669-1.mp4

exit 0
