define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/breath/screens/NavigationBar/my_app_bar', 'packages/breath/screens/NavigationBar/my_drawer', 'packages/responsive_builder/responsive_builder'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__breath__screens__NavigationBar__my_app_bar, packages__breath__screens__NavigationBar__my_drawer, packages__responsive_builder__responsive_builder) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const my_app_bar = packages__breath__screens__NavigationBar__my_app_bar.screens__NavigationBar__my_app_bar;
  const my_drawer = packages__breath__screens__NavigationBar__my_drawer.screens__NavigationBar__my_drawer;
  const responsive_builder = packages__responsive_builder__responsive_builder.responsive_builder;
  const sign_in = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 24,
        [_Location_line]: 18,
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
        [_Location_line]: 18,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/sign_in/sign_in.dart"
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
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/sign_in/sign_in.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/sign_in/sign_in.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "endDrawer",
        [_Location_column]: 7,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/sign_in/sign_in.dart"
      });
    }
  });
  sign_in.SignIn = class SignIn extends framework.StatefulWidget {
    createState() {
      return new sign_in._SignInState.new();
    }
  };
  (sign_in.SignIn.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    sign_in.SignIn.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = sign_in.SignIn.prototype;
  dart.addTypeTests(sign_in.SignIn);
  dart.setMethodSignature(sign_in.SignIn, () => ({
    __proto__: dart.getMethods(sign_in.SignIn.__proto__),
    createState: dart.fnType(sign_in._SignInState, [])
  }));
  dart.setLibraryUri(sign_in.SignIn, "package:breath/screens/sign_in/sign_in.dart");
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
  let C8;
  let C9;
  let C10;
  let C7;
  let C6;
  sign_in._SignInState = class _SignInState extends framework.State$(sign_in.SignIn) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new my_app_bar.MyAppBar.new({height: 100.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), endDrawer: new my_drawer.MyDrawer.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), body: new responsive_builder.ScreenTypeLayout.new({$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
    }
  };
  (sign_in._SignInState.new = function() {
    sign_in._SignInState.__proto__.new.call(this);
    ;
  }).prototype = sign_in._SignInState.prototype;
  dart.addTypeTests(sign_in._SignInState);
  dart.setMethodSignature(sign_in._SignInState, () => ({
    __proto__: dart.getMethods(sign_in._SignInState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(sign_in._SignInState, "package:breath/screens/sign_in/sign_in.dart");
  dart.trackLibraries("packages/breath/screens/sign_in/sign_in", {
    "package:breath/screens/sign_in/sign_in.dart": sign_in
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["sign_in.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAUgC;IAAc;;;;;;EAC9C;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,oCACG,qCAAiB,yEACd,yFACL;IAKV;;;;;EACF","file":"sign_in.ddc.js"}');
  // Exports:
  return {
    screens__sign_in__sign_in: sign_in
  };
});

//# sourceMappingURL=sign_in.ddc.js.map
