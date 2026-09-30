# Rhythm & Range website (static rebuild)

A fast, dependency-free rebuild of https://rhythmandrange.com. It replaces the WordPress/Elementor build (about 40 stylesheets and a dozen scripts) with one HTML page, one CSS file, and a small script. The original images are reused unedited.

## Deploy to Netlify today

The images still live on the WordPress server, so copy them **before** you point the domain at Netlify.

1. **Get the images (one time):** from this folder, run `sh fetch-images.sh`. It downloads every original image into `images/`. Commit that folder.
   (Netlify also runs this script on every build, so a first deploy works even if you skip this step. Once WordPress is shut off, only committed images will remain.)
2. **Deploy**, either way:
   - **Drag and drop:** go to app.netlify.com/drop and drop this `rhythmandrange` folder.
   - **From Git:** in Netlify choose *Add new site → Import from Git*, pick this repo, and set **Base directory** to `rhythmandrange`. No other build settings are needed because `netlify.toml` has them.
3. **Check the preview URL** (`*.netlify.app`): images, the menu, and the contact form.
4. **Connect the domain:** *Domain management → Add domain → rhythmandrange.com*, then update DNS at your registrar as Netlify instructs. HTTPS is issued automatically.
5. **Contact form:** Netlify Forms picks up the form automatically. Under *Forms → Form notifications*, add an email notification to rythmandrangellc@gmail.com.

## Customizing

- **Colors and fonts:** every color is a token at the top of `styles.css` (`:root`). Change them there only.
- **Hero photo:** `images/hero.jpg`. By default this is the first gallery photo. To use a different original photo, run `HERO_FILE=<filename> sh fetch-images.sh` after deleting `images/hero.jpg`, or drop in any photo named `hero.jpg`.
