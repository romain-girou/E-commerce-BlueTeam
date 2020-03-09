define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const sign_in = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 12,
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
        [_Location_column]: 14,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/sign_in/sign_in.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
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
  let C5;
  let C4;
  let C3;
  sign_in._SignInState = class _SignInState extends framework.State$(sign_in.SignIn) {
    build(context) {
      return new container.Container.new({child: new text.Text.new("Sign in page", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
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
  }, '{"version":3,"sourceRoot":"","sources":["sign_in.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAIgC;IAAc;;;;;;EAC9C;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,qCACE,kBAAK;IAEhB;;;;;EACF","file":"sign_in.ddc.js"}');
  // Exports:
  return {
    screens__sign_in__sign_in: sign_in
  };
});

//# sourceMappingURL=sign_in.ddc.js.map