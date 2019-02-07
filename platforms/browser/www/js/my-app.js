var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
      {
        name: 'adobo',
        path: '/adobo/',
        url: 'adobo.html',
      },
      {
        name: 'afritada',
        path: '/afritada/',
        url: 'afritada.html',
      },
      {
        name: 'bulalo',
        path: '/bulalo/',
        url: 'bulalo.html',
      },
      {
        name: 'kinilaw',
        path: '/kinilaw/',
        url: 'kinilaw.html',
      },
      {
        name: 'sisig',
        path: '/sisig/',
        url: 'sisig.html',
      },
      {
        name: 'tinola',
        path: '/tinola/',
        url: 'tinola.html',
      }
      
    ],
    // ... other parameters
    theme:"auto"
  });
  
  var mainView = app.views.create('.view-main');

  function ClickMe() {
    app.dialog.alert("Patient Recorded")
  }