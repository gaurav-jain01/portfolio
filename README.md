# Gaurav Jain — Portfolio

A responsive React portfolio with a charcoal and lime visual system, self-hosted fonts, project previews, and Motion for React animations.

## Run locally

```sh
npm install
npm start
```

Open the URL printed by Create React App (normally http://localhost:3000).

## Build and checks

```sh
npm run build
npm test -- --watchAll=false --runInBand
npm run test:browser
```

The browser suite tests the production `build/` directory. Build first. It uses Google Chrome and a Python 3 HTTP server on localhost port 4173, and checks responsive layouts, navigation, themes, project filters, reduced motion, clipboard feedback, education details, and resume availability. Set `PLAYWRIGHT_CHANNEL` to select a different installed browser channel. Screenshots and traces go into the ignored `test-results/` directory. Browser tests require permission to run a local server and Chrome.

## Content and behavior

- Edit profile details, projects, skills, professional experience, services, education, and social links in `src/data/portfolio.js`.
- `public/resume.pdf` is the supplied `Gaurav_Jain.pdf`, served unchanged and downloaded under that filename. Replace this file to update the CV.
- Both resume controls open a rounded native dialog with a PDF preview, a download button, and a new-tab link for browsers without inline PDF support. Escape, the close button, or a backdrop click dismisses it and returns focus to the opener.
- The profile uses the owner’s stated 2.5 years of experience. Career dates, responsibilities, skills, education, and contact details are based on the supplied resume. The current CYE role is explicitly marked part-time.
- Project artwork is an illustrative concept preview, not a product screenshot. Project cards include expandable case studies. GitHub and website links come from the supplied resume; professional projects without a supplied public URL show their case studies without an invented demo link.
- Contact links open the visitor’s email app; copying the address offers an alternative. No message is claimed to have been sent, and no backend is required.
- Themes persist in local storage. The header pause button disables decorative motion; the site also respects the operating system’s reduced-motion preference.
- Motion for React handles section entrances, project filtering, pointer tilt, magnetic buttons, role transitions, and scroll progress. CSS handles the technology ribbon and ambient decoration.
