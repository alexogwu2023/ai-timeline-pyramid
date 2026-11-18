# AI Timeline Pyramid

A responsive, dark-themed interactive timeline of artificial intelligence, built with HTML, CSS and vanilla JavaScript.

## Run locally

1. Extract the project folder.
2. Open the folder in VS Code.
3. Open `index.html` in your browser, or use the VS Code Live Server extension.
4. Click any milestone in the pyramid to open its detail page.

A local development server is recommended so all paths behave consistently.

## Project structure

- `index.html` — homepage and interactive pyramid
- `details.html` — reusable milestone detail page
- `css/style.css` — homepage layout, theme and responsive styles
- `css/details.css` — detail-page styles
- `js/script.js` — mobile navigation interaction
- `js/details.js` — milestone content and detail-page rendering

## Customising milestones

The milestone data is stored in the `milestones` object in `js/details.js`.
Each homepage milestone link uses the matching key in its URL, for example:

`details.html?id=transformer`

When adding a milestone:
1. Add a matching link in `index.html`.
2. Add a matching data entry in `js/details.js`.
3. Include a reliable source link in the `sources` array.
4. Test the link in a browser.



## Publish with GitHub Pages

1. Create a GitHub repository and upload the project files.
2. Open the repository's **Settings → Pages**.
3. Under the build/deployment section, choose deployment from a branch.
4. Select your main branch and the root folder, then save.
5. Wait for GitHub Pages to publish the site and copy the public URL.
