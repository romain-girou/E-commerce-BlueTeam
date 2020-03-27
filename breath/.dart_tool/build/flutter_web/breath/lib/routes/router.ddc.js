define(['dart_sdk', 'packages/fluro/fluro', 'packages/breath/screens/homeView/home_view', 'packages/flutter/src/widgets/actions', 'packages/breath/screens/sign_in/sign_in'], function(dart_sdk, packages__fluro__fluro, packages__breath__screens__homeView__home_view, packages__flutter__src__widgets__actions, packages__breath__screens__sign_in__sign_in) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const router = packages__fluro__fluro.src__router;
  const common = packages__fluro__fluro.src__common;
  const home_view = packages__breath__screens__homeView__home_view.screens__homeView__home_view;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const sign_in = packages__breath__screens__sign_in__sign_in.screens__sign_in__sign_in;
  const router$ = Object.create(dart.library);
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let BuildContextAndMapOfString$dynamicToHomeView = () => (BuildContextAndMapOfString$dynamicToHomeView = dart.constFn(dart.fnType(home_view.HomeView, [framework.BuildContext, MapOfString$dynamic()])))();
  let BuildContextAndMapOfString$dynamicToSignIn = () => (BuildContextAndMapOfString$dynamicToSignIn = dart.constFn(dart.fnType(sign_in.SignIn, [framework.BuildContext, MapOfString$dynamic()])))();
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
        [_Location_column]: 11,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/breath/routes/router.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 20,
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
  router$.FluroRouter = class FluroRouter extends core.Object {
    static setupRouter() {
      router$.FluroRouter.router.define("/home", {handler: router$.FluroRouter._homehandler});
      router$.FluroRouter.router.define("/sign-in", {handler: router$.FluroRouter._signInhandler});
    }
  };
  (router$.FluroRouter.new = function() {
    ;
  }).prototype = router$.FluroRouter.prototype;
  dart.addTypeTests(router$.FluroRouter);
  dart.setLibraryUri(router$.FluroRouter, "package:breath/routes/router.dart");
  dart.defineLazy(router$.FluroRouter, {
    /*router$.FluroRouter.router*/get router() {
      return new router.Router.new();
    },
    set router(_) {},
    /*router$.FluroRouter._homehandler*/get _homehandler() {
      return new common.Handler.new({handlerFunc: dart.fn((context, params) => new home_view.HomeView.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextAndMapOfString$dynamicToHomeView())});
    },
    set _homehandler(_) {},
    /*router$.FluroRouter._signInhandler*/get _signInhandler() {
      return new common.Handler.new({handlerFunc: dart.fn((context, params) => new sign_in.SignIn.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), BuildContextAndMapOfString$dynamicToSignIn())});
    },
    set _signInhandler(_) {}
  });
  dart.trackLibraries("packages/breath/routes/router", {
    "package:breath/routes/router.dart": router$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["router.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyBK,MAHD,AAAO,qDAEI;AAKX,MAHA,AAAO,wDAEI;IAMb;;;;EACF;;;;MAzBgB,0BAAM;YAAG;;;MAIR,gCAAY;YAAG,sCACb,SAAc,SAA8B,WACrD;;;MACO,kCAAc;YAAG,sCACf,SAAc,SAA8B,WACrD","file":"router.ddc.js"}');
  // Exports:
  return {
    routes__router: router$
  };
});

//# sourceMappingURL=router.ddc.js.map
