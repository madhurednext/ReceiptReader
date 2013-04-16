define(function (logger) {
    var vm = {
        activate: activate,
        title: 'Details View'
    };

    return vm;

    //#region Internal Methods
    function activate() {
       alert('Details View Activated ' + 'details');
        return true;
    }
    //#endregion
});