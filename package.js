Package.describe({
  summary: "Provides bootstrap 3."
});

Package.on_use(function (api) {
  api.use('jquery');

  var path = Npm.require('path');
  

    
  var asset_path = path.join('bootstrap-3');
    
//    css
    
  api.add_files(path.join(asset_path, 'css', 'bootstrap.css'), 'client');
  api.add_files(path.join('bootstrap-override.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'jquery-ui-1.10.2.custom.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'font-awesome.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'layout.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'elements.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'icons.css'), 'client');
  
//js
    
  api.add_files(path.join(asset_path, 'js', 'modernizr-2.6.1.min.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'bootstrap.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery-ui-1.10.2.custom.min.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.knob.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.flot.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.flot.stack.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.flot.resize.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'theme.js'), 'client');
    

    
  api.add_files(path.join(asset_path, 'jsashley', 'jquery.flexslider.js'), 'client');
  api.add_files(path.join(asset_path, 'jsashley', 'respond.min.js'), 'client');
  api.add_files(path.join(asset_path, 'jsashley', 'jquery.isotope.js'), 'client');

  api.add_files(path.join(asset_path, 'jsashley', 'jquery.easing.1.3.js'), 'client');
  api.add_files(path.join(asset_path, 'jsashley', 'jquery.scrollTo-1.4.3.1-min.js'), 'client');
  api.add_files(path.join(asset_path, 'jsashley', 'jquery.localscroll-1.2.7-min.js'), 'client');
  api.add_files(path.join(asset_path, 'jsashley', 'jquery.stellar.min.js'), 'client');
  api.add_files(path.join(asset_path, 'jsashley', 'jquery.pageslide-custom.js'), 'client');
  api.add_files(path.join(asset_path, 'jsashley', 'jquery.sharrre-1.3.4.min.js'), 'client');
 
  // fonts
  api.add_files(path.join(asset_path, 'font', 'glyphicons-halflings-regular.eot'), 'client');
  api.add_files(path.join(asset_path, 'font', 'glyphicons-halflings-regular.ttf'), 'client');
  api.add_files(path.join(asset_path, 'font', 'glyphicons-halflings-regular.svg'), 'client');
  api.add_files(path.join(asset_path, 'font', 'glyphicons-halflings-regular.woff'), 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard bootstrap css so
  // that its styles take precedence.
});
