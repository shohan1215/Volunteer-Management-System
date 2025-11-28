// ...existing code...
{
# HelpHive — Client

A React + Vite frontend for HelpHive. This README includes the minimum information you need to run, build, and push the project to GitHub.

## Project overview

HelpHive is a client application built with Vite and React. It uses Firebase for authentication (see [`auth`](src/Firebase/firebase.config.js) in [src/Firebase/firebase.config.js](src/Firebase/firebase.config.js)). Key UI pieces include the newsletter component [`NewsLetter`](src/Components/NewsLetter/NewsLetter.jsx) ([src/Components/NewsLetter/NewsLetter.jsx](src/Components/NewsLetter/NewsLetter.jsx)) and the terms page [`TermsConditions`](src/Pages/TermsConditon/TermsConditions.jsx) ([src/Pages/TermsConditon/TermsConditions.jsx](src/Pages/TermsConditon/TermsConditions.jsx)). Google sign-in is implemented in [src/Components/Google Login/GoogleLogin.jsx](src/Components/Google Login/GoogleLogin.jsx).

## Requirements

- Node.js (recommended LTS)
- npm or yarn
- (Optional) Firebase project for auth
- (Optional) Backend server / database if you use the server features mentioned in the repo (see `package.json` scripts) — [package.json](package.json)

## Quick start

1. Clone the repo and install dependencies:

```sh
git clone <your-repo-url>.git
cd HelpHive-Clients-main
npm install
''''',
2. Create environment file
Copy/create .env.local in the project root and add Firebase variables. The client reads Vite env variables used in src/Firebase/firebase.config.js:

VITE_apiKey
VITE_authDomain
VITE_projectId
VITE_storageBucket
VITE_messagingSenderId
VITE_appId
Example .env.local (do NOT commit secrets):
VITE_apiKey=your_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
3. Run the app (client):
If your project includes a separate server, the original project README mentioned running client and server with:
Check package.json for exact scripts.

Build
npm run build
Firebase config and exported auth: auth — src/Firebase/firebase.config.js
Newsletter UI: NewsLetter — src/Components/NewsLetter/NewsLetter.jsx
Terms & Conditions page: TermsConditions — src/Pages/TermsConditon/TermsConditions.jsx
Google Login: [GoogleLogin](src/Components/Google Login/GoogleLogin.jsx) — [src/Components/Google Login/GoogleLogin.jsx](src/Components/Google Login/GoogleLogin.jsx)
Project scripts and deps: package.json
Vite config: vite.config.js
Local env example file: .env.local
Notes
Never commit your .env.local to GitHub. Add it to .gitignore (already present).
If you use Firebase Authentication, set up OAuth providers in the Firebase Console and ensure the redirect URLs match your dev/production URLs.
Contributing
Fork, create a branch, make changes, and open a PR.

License
MIT
# HelpHive - Server

Simple Express.js server for the HelpHive volunteer platform. Provides REST endpoints for volunteer posts, requests, events and user management, using MongoDB and JWT auth (stored in an HTTP-only cookie).

## Files
- [index.js](index.js) — main server and route handlers
- [package.json](package.json) — scripts & dependencies
- [.env](.env) — environment variables (do not commit)
- [vercel.json](vercel.json) — deployment config (optional)

## Quick start

1. Install dependencies
   npm install

2. Create a `.env` in project root with:
   DB_USER=<your-mongo-user>
   DB_PASS=<your-mongo-pass>
   JWT_SECRET=<strong-secret>
   PORT=5000

3. Run server (development)
   npm start
   or
   node index.js

Server listens on PORT (default 5000).

## Key behavior
- JWT issued in POST /jwt and set in an HTTP-only cookie.
- Protected routes use the middleware [`verifyToken`](index.js).
- MongoDB connection and startup handled by the async [`run`](index.js) function.
- Collections used: Volunteer-Need-Post, Volunteer-Request, Upcoming-Event, Event-Register, Volunteer-of-Week, Users.

## Important routes (summary)
- POST /jwt — issue JWT cookie
- POST /logout — clear JWT cookie
- GET /all-volunteer-need-post?search= — search posts
- GET /volunteer-post/:id — get post by id
- GET /my-post?email= — protected, organizer posts
- POST /volunteer-need-post — protected, create post
- POST /volunteer-request — protected, request volunteer (decrements count)
- DELETE /cancle-request/:id — protected, cancel request (increments count)
- GET /upcoming-event — list events
- POST /event-registration — register for event (prevents duplicate)
- POST /users — add user if not exists

See [index.js](index.js) for full implementation.

## Security & deployment notes
- Keep `.env` secrets out of source control.
- Use a strong `JWT_SECRET`.
- In production set NODE_ENV=production to enable secure cookie flags.
- Ensure MongoDB Atlas user/credentials and network rules are configured.

## Troubleshooting
- If Mongo connection fails, check DB_USER/DB_PASS and Atlas IP access list.
- Check server console logs; the app pings the DB on startup.

## License
MIT


