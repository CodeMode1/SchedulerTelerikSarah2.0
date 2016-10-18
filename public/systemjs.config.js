(function (global) {
    //SYSTEM JS: module loader.
    //map permet au sys loader de mapper l'app.
    var map = {
        'app': 'js/app',
        'rxjs': 'js/vendor/rxjs',
        '@angular': 'js/vendor/@angular'
    };

    //packages dit au sys loader comment loader quand pas nom fichier ou/et pas extension.
    var packages = {
        'app': {
            main: 'boot.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/forms',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/testing',
        '@angular/upgrade'
    ];

    //ajouter entrées packages Angular sous la forme: '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
    });

    var config = {
        map: map,
        packages: packages
    };

    //filterSystemConfig - index.html peut modifier config avant d'être enregistrée.
    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    System.config(config);

})(this);