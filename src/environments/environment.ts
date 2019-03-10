// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAzSxsGLiHr0uICs61hlmc_PL5Z13yJp8Y",
    authDomain: "mobile-attendance-picture-gps.firebaseapp.com",
    databaseURL: "https://mobile-attendance-picture-gps.firebaseio.com",
    projectId: "mobile-attendance-picture-gps",
    storageBucket: "mobile-attendance-picture-gps.appspot.com",
    messagingSenderId: "312973673813"
  },
  socialAuthEnabled: true,
  googleMapsKey: 'AIzaSyAzSxsGLiHr0uICs61hlmc_PL5Z13yJp8Y'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
