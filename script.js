window.fbAsyncInit = function () {
  FB.init({
    appId: '657248228735497',
    cookie: true,
    xfbml: true,
    version: '',
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
  } else {
    console.log('Authentication failed');
  }
}
