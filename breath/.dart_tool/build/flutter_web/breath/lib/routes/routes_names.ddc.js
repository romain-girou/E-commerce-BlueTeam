define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const routes_names = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(routes_names, {
    /*routes_names.HomeRoute*/get HomeRoute() {
      return "/home";
    },
    /*routes_names.SignInRoute*/get SignInRoute() {
      return "/sign-in";
    }
  });
  dart.trackLibraries("packages/breath/routes/routes_names", {
    "package:breath/routes/routes_names.dart": routes_names
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["routes_names.dart"],"names":[],"mappings":";;;;;;;;MAAa,sBAAS;;;MACT,wBAAW","file":"routes_names.ddc.js"}');
  // Exports:
  return {
    routes__routes_names: routes_names
  };
});

//# sourceMappingURL=routes_names.ddc.js.map
