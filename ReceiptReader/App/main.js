require.config({
    paths: { "text": "durandal/amd/text" }
});

define(['durandal/app', 'durandal/viewLocator', 'durandal/system', 'durandal/plugins/router'],
    function (app, viewLocator, system, router) {

    // Enable debug message to show in the console 
    system.debug(true);

    app.start().then(function () {
       
        router.autoConvertRouteToModuleId = function (url, params) {
            
        };


        router.handleInvalidRoute = function (route, params) {
           
        };

        // When finding a viewmodel module, replace the viewmodel string 
        // with view to find it partner view.
        router.useConvention();
       //working one 
        viewLocator.useConvention('viewmodels', 'views','shell/views/');

       // viewLocator.useConvention();

        //viewLocator.useConvention();
       // viewEngine.viewPlugin = 'durandal/amd/text';
        // Adapt to touch devices
        app.adaptToDevice();
        //Show the app by setting the root view model for our application.
        app.setRoot('shell/viewmodels/shell', 'entrance');
    });
});