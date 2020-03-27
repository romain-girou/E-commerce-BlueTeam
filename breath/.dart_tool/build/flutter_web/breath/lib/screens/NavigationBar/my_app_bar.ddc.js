define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const preferred_size = packages__flutter__src__widgets__actions.src__widgets__preferred_size;
  const colors = packages__flutter__material.src__material__colors;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const inline_span = packages__flutter__src__painting___network_image_web.src__painting__inline_span;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const my_app_bar = Object.create(dart.library);
  let JSArrayOfInlineSpan = () => (JSArrayOfInlineSpan = dart.constFn(_interceptors.JSArray$(inline_span.InlineSpan)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 35,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 68,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/NavigationBar/my_app_bar.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 25,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 25,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/NavigationBar/my_app_bar.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 21,
        [_Location_line]: 24,
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
        [_Location_column]: 19,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/NavigationBar/my_app_bar.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 50,
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
        [_Location_column]: 25,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/NavigationBar/my_app_bar.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 19,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 19,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/NavigationBar/my_app_bar.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/NavigationBar/my_app_bar.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/NavigationBar/my_app_bar.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/NavigationBar/my_app_bar.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/NavigationBar/my_app_bar.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/NavigationBar/my_app_bar.dart"
      });
    }
  });
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C8;
  let C5;
  let C4;
  let C11;
  let C10;
  let C9;
  let C14;
  let C13;
  let C12;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C33;
  let C31;
  let C30;
  let C36;
  let C35;
  let C34;
  const height$ = dart.privateName(my_app_bar, "MyAppBar.height");
  my_app_bar.MyAppBar = class MyAppBar extends framework.StatelessWidget {
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    build(context) {
      return new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({color: colors.Colors.white12, child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(20.0), child: new container.Container.new({child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new basic.Row.new({children: JSArrayOfWidget().of([new image.Image.asset("assets/images/Breath_logo.png", {height: 60.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new text.Text.rich(new text_span.TextSpan.new({children: JSArrayOfInlineSpan().of([new text_span.TextSpan.new({text: ",", style: new text_style.TextStyle.new({fontFamily: "Bell MT"})}), new text_span.TextSpan.new({text: " purty at hand", style: new text_style.TextStyle.new({fontFamily: "Clarissa"})})])}), {style: new text_style.TextStyle.new({fontSize: 49.0, color: colors.Colors.black}), textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C4 || CT.C4})]), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.menu, {$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), onPressed: dart.fn(() => {
                        scaffold.Scaffold.of(context).openEndDrawer();
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C15 || CT.C15})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30})]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34});
    }
    get preferredSize() {
      return new ui.Size.fromHeight(this.height);
    }
  };
  (my_app_bar.MyAppBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[height$] = height;
    my_app_bar.MyAppBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = my_app_bar.MyAppBar.prototype;
  dart.addTypeTests(my_app_bar.MyAppBar);
  my_app_bar.MyAppBar[dart.implements] = () => [preferred_size.PreferredSizeWidget];
  dart.setMethodSignature(my_app_bar.MyAppBar, () => ({
    __proto__: dart.getMethods(my_app_bar.MyAppBar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(my_app_bar.MyAppBar, () => ({
    __proto__: dart.getGetters(my_app_bar.MyAppBar.__proto__),
    preferredSize: ui.Size
  }));
  dart.setLibraryUri(my_app_bar.MyAppBar, "package:breath/screens/NavigationBar/my_app_bar.dart");
  dart.setFieldSignature(my_app_bar.MyAppBar, () => ({
    __proto__: dart.getFields(my_app_bar.MyAppBar.__proto__),
    height: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/breath/screens/NavigationBar/my_app_bar", {
    "package:breath/screens/NavigationBar/my_app_bar.dart": my_app_bar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["my_app_bar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGa;;;;;;UAQe;AACxB,YAAO,iCACK,sBACR,oCACgB,8BACP,gCACe,+BAAI,cACjB,oCACE,sCACgC,+CAC3B,sBACR,6BACoB,sBACV,sBAAM,0CAAyC,6DAChD,mBACH,sCACY,0BACR,kCACQ,YACC,0CACO,eAGhB,kCACQ,yBACC,0CACO,4BAMb,wCAAoB,aAAkB,kCACxB,qIAI7B,sCACQ,kBAAW,uFACN;AAC2B,wBAA3B,AAAY,qBAAT,OAAO;;IASrC;;AAG0B,YAAK,wBAAW;IAAO;;;QAzD3C;QACW;;;AACZ,uDAAW,GAAG;;EAAC","file":"my_app_bar.ddc.js"}');
  // Exports:
  return {
    screens__NavigationBar__my_app_bar: my_app_bar
  };
});

//# sourceMappingURL=my_app_bar.ddc.js.map
