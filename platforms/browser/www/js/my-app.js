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

  function ClickMe() {
    app.dialog.alert("Patient Recorded")
  }

  var $$ = Dom7;


  //----------------  18 ROSES  ---------------//
  //Zack Fair
  $$('.popup-zack').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-zack').on('popup:opened', function (e, popup) {
    console.log('Profile Page');
  });

  //Cloud Strife
  $$('.popup-cloud').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-cloud').on('popup:opened', function (e, popup) {
    console.log('Profile Page');
  });

  //Vincent Valentine
  $$('.popup-vince').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-vince').on('popup:opened', function (e, popup) {
    console.log('Profile Page');
  });

  //Noctis Lucis Caelum
  $$('.popup-noct').on('popup:open', function (e, popup){
    console.log('Profile Page');
  });
  $$('.popup-noct').on('popup:opened', function(e, popup) {
    console.log('Profile Page');
  });

  //Squall Leonhart
  $$('.popup-leon').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-leon').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Tidus
  $$('.popup-tidus').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-tidus').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Cid
  $$('.popup-cid').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-cid').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Zidane Tribal
  $$('.popup-zidane').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-zidane').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Zell Dincht
  $$('.popup-zell').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-zell').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Hope Estheim
  $$('.popup-hope').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-hope').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Balthier
  $$('.popup-balth').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-balth').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Cecil Harvey
  $$('.popup-cecil').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-cecil').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Ace
  $$('.popup-ace').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-ace').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Noel Kreiss
  $$('.popup-noel').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-noel').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Snow Villiers
  $$('.popup-snow').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-snow').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Ignis Scientia
  $$('.popup-ignis').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-ignis').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Gladiolus Amicitia
  $$('.popup-gladio').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-gladio').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Prompto Argentum
  $$('.popup-prompto').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-prompto').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });



  //----------------  18 CANDLES  ---------------//
  //Tifa Lockhart
  $$('.popup-tifa').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-tifa').on('popup:opened', function (e, popup) {
    console.log('Profile Page');
  });

  //Yuffie
  $$('.popup-yuffie').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-yuffie').on('popup:opened', function (e, popup) {
    console.log('Profile Page');
  });

  //Lunafreya
  $$('.popup-luna').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-luna').on('popup:opened', function (e, popup) {
    console.log('Profile Page');
  });

  //Iris
  $$('.popup-iris').on('popup:open', function (e, popup){
    console.log('Profile Page');
  });
  $$('.popup-iris').on('popup:opened', function(e, popup) {
    console.log('Profile Page');
  });

  //Yuna
  $$('.popup-yuna').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-yuna').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Lightning
  $$('.popup-lightning').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-lightning').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Terra
  $$('.popup-terra').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-terra').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Rinoa
  $$('.popup-rinoa').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-rinoa').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Vanille
  $$('.popup-vanille').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-vanille').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Serah
  $$('.popup-serah').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-serah').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Rikku
  $$('.popup-rikku').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-rikku').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Rydia
  $$('.popup-rydia').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-rydia').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Penelo
  $$('.popup-penelo').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-penelo').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Rhul
  $$('.popup-rhul').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-rhul').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Selphie
  $$('.popup-selphie').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-selphie').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Rem
  $$('.popup-rem').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-rem').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Ashe
  $$('.popup-ashe').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-ashe').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });

  //Deuce
  $$('.popup-deuce').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });
  $$('.popup-deuce').on('popup:open', function (e, popup) {
    console.log('Profile Page');
  });