define(['dart_sdk', 'packages/flutter/material', 'packages/breath/screens/NavigationBar/my_app_bar', 'packages/flutter/src/widgets/actions', 'packages/responsive_builder/responsive_builder', 'packages/breath/screens/LandingPage/landing_page_desktop', 'packages/breath/screens/ProductPage/product_page_desktop', 'packages/breath/screens/LandingPage/landing_page_mobile'], function(dart_sdk, packages__flutter__material, packages__breath__screens__NavigationBar__my_app_bar, packages__flutter__src__widgets__actions, packages__responsive_builder__responsive_builder, packages__breath__screens__LandingPage__landing_page_desktop, packages__breath__screens__ProductPage__product_page_desktop, packages__breath__screens__LandingPage__landing_page_mobile) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const scrollbar = packages__flutter__material.src__material__scrollbar;
  const my_app_bar = packages__breath__screens__NavigationBar__my_app_bar.screens__NavigationBar__my_app_bar;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const responsive_builder = packages__responsive_builder__responsive_builder.responsive_builder;
  const landing_page_desktop = packages__breath__screens__LandingPage__landing_page_desktop.screens__LandingPage__landing_page_desktop;
  const product_page_desktop = packages__breath__screens__ProductPage__product_page_desktop.screens__ProductPage__product_page_desktop;
  const landing_page_mobile = packages__breath__screens__LandingPage__landing_page_mobile.screens__LandingPage__landing_page_mobile;
  const home_view = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 32,
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
        [_Location_line]: 32,
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
        [_Location_column]: 15,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "desktop",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mobile",
        [_Location_column]: 9,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/homeView/home_view.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 31,
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
  let C7;
  let C6;
  let C5;
  let C8;
  let C11;
  let C10;
  let C9;
  let C14;
  let C13;
  let C12;
  let C15;
  let C16;
  let C19;
  let C18;
  let C17;
  let C22;
  let C21;
  let C20;
  let C25;
  let C26;
  let C24;
  let C23;
  let C29;
  let C30;
  let C28;
  let C27;
  home_view.HomeView = class HomeView extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new my_app_bar.MyAppBar.new({height: 100.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), body: new responsive_builder.ScreenTypeLayout.new({desktop: new scrollbar.Scrollbar.new({child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new landing_page_desktop.LandingPageDesktop.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new basic.SizedBox.new({height: 250.0, $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new product_page_desktop.ProductPageDesktop.new({$creationLocationd_0dea112b090073317d4: C8 || CT.C8})]), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), mobile: new scrollbar.Scrollbar.new({child: new scroll_view.ListView.new({children: JSArrayOfWidget().of([new landing_page_mobile.LandingPageMobile.new({$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new product_page_desktop.ProductPageDesktop.new({$creationLocationd_0dea112b090073317d4: C16 || CT.C16})]), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27});
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
  }, '{"version":3,"sourceRoot":"","sources":["home_view.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA6B4B;AACxB,YAAO,oCACG,qCAAiB,oEACnB,sDACK,oCACA,wCACa,sBAChB,wGACA,gCAAiB,8DACjB,kOAIE,oCACC,wCACa,sBAChB,wGACA;IAMZ;;;;;;EACF","file":"home_view.ddc.js"}');
  // Exports:
  return {
    screens__homeView__home_view: home_view
  };
});

//# sourceMappingURL=home_view.ddc.js.map
