# Angular meets redux | ngSummit 2017
This repository contains showcase of using Angular with help of redux.

I'm using [@ngrx/store](https://github.com/ngrx/store) :rocket: :heart: as redux implementation.

## How to run the project
0. Precondition: You have installed globally: `nodejs` with `npm` and `@angular/cli`.
1. Install dependencies - run `npm install`, or `yarn install`
1. run fake-api, based on .json files (`json-server` package used): run `npm run dev:server`
1. run application dev server in watch by `npm start`
1. the application should be available under `localhost:4200`

## Grab the presentation
I've putted it on slideshare, right [here :card_index:](https://www.slideshare.net/MichaMichalczuk/ngsummit-2017-angular-meets-redux).

### Development server
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Mock API
Run `npm run dev:server` to run `json-server` instance.

If you want to play with it => its data is configured in [db.json file](server/db.json)

Official documentation of [json-server](https://github.com/typicode/json-server)


------
Enjoy the :fireworks:
