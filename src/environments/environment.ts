// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost/my-mentor/public/api/v1/',
  zoom_client_id: 'Y4--nsCwQi-1w1wFqeNd-w',
  zoom_client_secret: 'naaLrscMCfcFQZILEmGvkGCFZHAmkwGMlCdu',
  zoom_redirect_url: '/zoom/callback'
};

export const firebaseConfig = {
  apiKey: "AIzaSyD-iENrntrSnZ23z0RF9BBM3SZ92oSKxoc",
  authDomain: "my-mentor-2cff4.firebaseapp.com",
  databaseURL: "https://my-mentor-2cff4.firebaseio.com",
  projectId: "my-mentor-2cff4",
  storageBucket: "my-mentor-2cff4.appspot.com",
  messagingSenderId: "194532485887",
  appId: "1:194532485887:web:92beb9a035ee6cd6663aca",
  measurementId: "G-1W5H6ZV4K3"
};

/* http://localhost:8000/api/v1/
 * https://infinite-atoll-41509.herokuapp.com/api/v1/
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
