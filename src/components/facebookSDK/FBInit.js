export default function facebookInit() {
    return new Promise(resolve => {
        // wait for Facebook SDK to initialize before starting the React app
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '758888169462011',
                cookie: true,
                xfbml: true,
                version: 'v11.0'
            });

            // auto authenticate with the API if already logged in with Facebook
            window.FB.getLoginStatus((resp) => {
                console.log(resp);
                resolve(resp.authResponse);
            });
        };

        // load Facebook SDK script
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            // Use HTTPS for the SDK URL
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));    
    });
}
