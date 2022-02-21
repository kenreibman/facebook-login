window.fbAsyncInit = function () {
  FB.init({
    appId: '657248228735497',
    cookie: true,
    xfbml: true,
    version: 'v13.0',
  });

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

//
function statusChangeCallback(response) {
  // Check to see if responseStatus is connected
  if (response.status === 'connected') {
    console.log('Logged in and authenticated');
    setElements(true);
  } else {
    console.log('Authentication failed');
    setElements(false);
  }
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

function setElements(isLoggedIn) {
  if (isLoggedIn) {
    document.querySelector('#profile').style.display = 'block';
    document.querySelector('#fb-btn').style.display = 'none';
  } else {
    document.querySelector('#profile').style.display = 'none';
    document.querySelector('#fb-btn').style.display = 'block';
  }
}
