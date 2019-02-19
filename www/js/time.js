var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Debut',
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
        name: 'm_menu',
        path: '/m_menu/',
        url: 'm_menu.html',
      },
      {
        name: 'bulalo',
        path: '/bulalo/',
        url: 'bulalo.html',
      },
      {
        name: 'roses',
        path: '/roses/',
        url: 'roses.html',
      },
      {
        name: 'menu',
        path: '/menu/',
        url: 'menu.html',
      },
      {
        name: 'timeline',
        path: '/timeline',
        url: 'timeline.html',
      }
      
    ],
    // ... other parameters
    theme:"auto"

    
  });
  
  var mainView = app.views.create('.view-main', {
    dynamicNavbar: true,
  });

  //----------------  MAIN MENU  ---------------//
  //Sushi
  $$('.popup-invo').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-invo').on('popup:opened', function (e, popup) {
    console.log('Profile Page');
  });

  //Cloud Strife
  $$('.popup-roses').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-roses').on('popup:opened', function (e, popup) {
    console.log('Profile Page');
  });

  //saladnt Valentine
  $$('.popup-candle').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-candle').on('popup:opened', function (e, popup) {
    console.log('Profile Page');
  });

  //skewersis Lucis Caelum
  $$('.popup-bills').on('popup:open', function (e, popup){
    console.log('Profile Page');
  });
  $$('.popup-bills').on('popup:opened', function(e, popup) {
    console.log('Profile Page');
  });

  //Squall tarthart
  $$('.popup-remarks').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-remarks').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //berry
  $$('.popup-fddance').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-fddance').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //peak
  $$('.popup-dinner').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-dinner').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //gar Tribal
  $$('.popup-gar').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-gar').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //stew Dincht
  $$('.popup-stew').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-stew').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //pastry Estheim
  $$('.popup-pastry').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-pastry').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //soupier
  $$('.popup-soup').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-soup').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //carpaccio Harvey
  $$('.popup-carpaccio').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-carpaccio').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //devilfin
  $$('.popup-devilfin').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-devilfin').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //curry Kreiss
  $$('.popup-curry').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-curry').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
