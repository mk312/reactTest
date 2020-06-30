Test React project, Part VI
(components and tests can be found at src/client/components)


DEPENDENCIES:
node.js, npm


TO START THE PROJECT:
run in the terminal following commands:
- npm install
- npm run prod
Now the app should be available at http://localhost:8080/ in your browser (port changes can be done via server/index.js)
   OR
- npm run dev
In this case the app should be available at http://localhost:9000 (port changes via webpac.config.js)


USEFUL COMMANDS:
- npm run build-prod (one time build, optimized webpack mode)
- npm run start-prod-server (nodemon server for prod build)
- npm run test
- npm run e2e-test

NOTE:
Following pages for dev build are assumed to be supported:
http://localhost:9000
http://localhost:9000/search/w   (where 'w' is a search string)
http://localhost:9000/movie/397567   (where '397567' is an id of the movie)
http://localhost:9000/404   (all other urls redirect to 404 page)
