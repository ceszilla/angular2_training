(function(global){
    System.config({
        paths: {
            'npm':'node_modules/'
        },
        map: {
            app: 'scripts'
        },
        packages: {
            app: {
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);