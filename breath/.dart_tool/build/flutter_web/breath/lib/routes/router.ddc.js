define(['dart_sdk', 'packages/flutter/material', 'packages/breath/screens/homeView/home_view', 'packages/flutter/src/widgets/actions', 'packages/breath/screens/sign_in/sign_in', 'packages/breath/screens/undefined_route.dart/undefined_route'], function(dart_sdk, packages__flutter__material, packages__breath__screens__homeView__home_view, packages__flutter__src__widgets__actions, packages__breath__screens__sign_in__sign_in, packages__breath__screens__undefined_route$46dart__undefined_route) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const page = packages__flutter__material.src__material__page;
  const home_view = packages__breath__screens__homeView__home_view.screens__homeView__home_view;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const sign_in = packages__breath__screens__sign_in__sign_in.screens__sign_in__sign_in;
  const undefined_route = packages__breath__screens__undefined_route$46dart__undefined_route.screens__undefined_route$46dart__undefined_route;
  const router = Object.create(dart.library);
  let BuildContextToHomeView = () => (BuildContextToHomeView = dart.constFn(dart.fnType(home_view.HomeView, [framework.BuildContext])))();
  let BuildContextToSignIn = () => (BuildContextToSignIn = dart.constFn(dart.fnType(sign_in.SignIn, [framework.BuildContext])))();
  let BuildContextToUndefinedScreen = () => (BuildContextToUndefinedScreen = dart.constFn(dart.fnType(undefined_route.UndefinedScreen, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 54,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/breath/routes/router.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 54,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/breath/routes/router.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 70,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 54,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/breath/routes/router.dart"
      });
    }
  });
  let C1;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C0;
  let C2;
  let C5;
  let C4;
  let C3;
  router.generateRoute = function generateRoute(settings) {
    switch (settings.name) {
      case "/":
      {
        return new page.MaterialPageRoute.new({builder: dart.fn(context => new home_view.HomeView.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToHomeView())});
        break;
      }
      case "/sign-in":
      {
        return new page.MaterialPageRoute.new({builder: dart.fn(context => new sign_in.SignIn.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), BuildContextToSignIn())});
        break;
      }
      default:
      {
        return new page.MaterialPageRoute.new({builder: dart.fn(context => new undefined_route.UndefinedScreen.new({name: settings.name, $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), BuildContextToUndefinedScreen())});
        break;
      }
    }
  };
  dart.trackLibraries("packages/breath/routes/router", {
    "package:breath/routes/router.dart": router
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["router.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gDAM2C;AAEzC,YAAO,AAAS,QAAD;;;AAEX,cAAO,0CAA2B,QAAC,WAAY;AAC/C;;;;AAEA,cAAO,0CAA2B,QAAC,WAAY;AAC/C;;;;AAEA,cAAO,0CAA2B,QAAC,WAAY,+CAAsB,AAAS,QAAD;AAC7E;;;EAEN","file":"router.ddc.js"}');
  // Exports:
  return {
    routes__router: router
  };
});

//# sourceMappingURL=router.ddc.js.map
