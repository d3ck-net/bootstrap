Package.describe({
    name: 'dasdeck:bootstrap',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'another bootstrap package',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Npm.depends({
    glob: '6.0.1'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3');

    api.use('less');

    api.addAssets('fonts/glyphicons-halflings-regular.ttf', 'client');
    api.addAssets('fonts/glyphicons-halflings-regular.eot', 'client');
    api.addAssets('fonts/glyphicons-halflings-regular.svg', 'client');
    api.addAssets('fonts/glyphicons-halflings-regular.woff', 'client');
    api.addAssets('fonts/glyphicons-halflings-regular.woff2', 'client');

    api.addFiles('bootstrap.min.js', 'client');

    api.addFiles('less/bootstrap.less', 'client');


});

Package.onTest(function (api) {
    //api.use('ecmascript');
    //api.use('tinytest');
    //api.use('mongo-object');
    //api.addFiles('mongo-object-tests.js');
});
