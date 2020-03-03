define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/breath/screens/NavigationBar/navigation_bar', 'packages/breath/screens/LandingPage/LandingPage'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__breath__screens__NavigationBar__navigation_bar, packages__breath__screens__LandingPage__LandingPage) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigation_bar = packages__breath__screens__NavigationBar__navigation_bar.screens__NavigationBar__navigation_bar;
  const LandingPage = packages__breath__screens__LandingPage__LandingPage.screens__LandingPage__LandingPage;
  const home_view = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
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
        [_Location_column]: 9,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 12,
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
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
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
  home_view.HomeView = class HomeView extends framework.StatelessWidget {
    build(context) {
      return new basic.Column.new({children: JSArrayOfWidget().of([new navigation_bar.NavigationBar.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new LandingPage.LandingPage.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2})]), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (home_view.HomeView.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home_view.HomeView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home_view.HomeView.prototype;
  dart.addTypeTests(home_view.HomeView);
  dart.setMethodSignature(home_view.HomeView, () => ({
    __proto__: dart.getMethods(home_view.HomeView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home_view.HomeView, "package:breath/screens/homeView/home_view.dart");
  dart.trackLibraries("packages/breath/screens/homeView/home_view", {
    "package:breath/screens/homeView/home_view.dart": home_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAS4B;AACxB,YAAO,iCACa,sBAChB,6FACA;IAGN;;;;;;EACF","file":"home_view.ddc.js"}');
  // Exports:
  return {
    screens__homeView__home_view: home_view
  };
});

//# sourceMappingURL=home_view.ddc.js.map
