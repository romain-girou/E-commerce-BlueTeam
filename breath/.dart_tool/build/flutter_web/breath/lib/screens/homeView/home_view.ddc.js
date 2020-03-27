define(['dart_sdk', 'packages/flutter/material', 'packages/breath/screens/NavigationBar/my_app_bar', 'packages/flutter/src/widgets/actions', 'packages/breath/screens/NavigationBar/my_drawer', 'packages/responsive_builder/responsive_builder', 'packages/breath/screens/LandingPage/landing_page_desktop', 'packages/breath/screens/LandingPage/landing_page_mobile'], function(dart_sdk, packages__flutter__material, packages__breath__screens__NavigationBar__my_app_bar, packages__flutter__src__widgets__actions, packages__breath__screens__NavigationBar__my_drawer, packages__responsive_builder__responsive_builder, packages__breath__screens__LandingPage__landing_page_desktop, packages__breath__screens__LandingPage__landing_page_mobile) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const my_app_bar = packages__breath__screens__NavigationBar__my_app_bar.screens__NavigationBar__my_app_bar;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const my_drawer = packages__breath__screens__NavigationBar__my_drawer.screens__NavigationBar__my_drawer;
  const responsive_builder = packages__responsive_builder__responsive_builder.responsive_builder;
  const landing_page_desktop = packages__breath__screens__LandingPage__landing_page_desktop.screens__LandingPage__landing_page_desktop;
  const landing_page_mobile = packages__breath__screens__LandingPage__landing_page_mobile.screens__LandingPage__landing_page_mobile;
  const home_view = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C4() {
      return C4 = dart.constList([], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "desktop",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mobile",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "endDrawer",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C4;
  let C3;
  let C5;
  let C6;
  let C9;
  let C10;
  let C8;
  let C7;
  let C13;
  let C14;
  let C15;
  let C12;
  let C11;
  home_view.HomeView = class HomeView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new my_app_bar.MyAppBar.new({height: 100.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), endDrawer: new my_drawer.MyDrawer.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new responsive_builder.ScreenTypeLayout.new({desktop: new landing_page_desktop.LandingPageDesktop.new({$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), mobile: new landing_page_mobile.LandingPageMobile.new({$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
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
  }, '{"version":3,"sourceRoot":"","sources":["home_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,oCACG,qCAAiB,yEACd,yFACL,sDACK,gHACD;IAGd;;;;;;EACF","file":"home_view.ddc.js"}');
  // Exports:
  return {
    screens__homeView__home_view: home_view
  };
});

//# sourceMappingURL=home_view.ddc.js.map
