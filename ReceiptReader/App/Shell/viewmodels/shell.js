define(['durandal/system', 'durandal/plugins/router', 'durandal/viewLocator'],
    function (system, router, viewLocator) {
        var shell = {
            activate: activate,
            router: router

        };

        return shell;

        //#region Internal Methods
        function activate() {


            return boot().then(

                );
        }

        function boot() {
                      
                      
           // router.mapNav('Home/viewmodels/home', 'Home/viewmodels/home', 'home');
          //  router.mapNav('Details/viewmodels/details', 'Details/viewmodels/details', 'details');
            router.mapNav('Login/viewmodels/login','Login/viewmodels/login','login');
            
            
            return router.activate('Login/viewmodels/login');
           
            //return router.activate('Home/viewmodels/home');
        }

        function log(msg, data, showToast) {
            // logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });