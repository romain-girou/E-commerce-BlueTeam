define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/auto_size_text/auto_size_text', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__auto_size_text__auto_size_text, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const image_resolution = packages__flutter__src__painting___network_image_web.src__painting__image_resolution;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const inline_span = packages__flutter__src__painting___network_image_web.src__painting__inline_span;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const gradient = packages__flutter__src__painting___network_image_web.src__painting__gradient;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const colors = packages__flutter__material.src__material__colors;
  const raised_button = packages__flutter__material.src__material__raised_button;
  const auto_size_text = packages__auto_size_text__auto_size_text.auto_size_text;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const landing_page_mobile = Object.create(dart.library);
  let JSArrayOfInlineSpan = () => (JSArrayOfInlineSpan = dart.constFn(_interceptors.JSArray$(inline_span.InlineSpan)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 19,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 19,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "minFontSize",
        [_Location_column]: 19,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "stepGranularity",
        [_Location_column]: 19,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 19,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 37,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 38,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 67,
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
        [_Location_column]: 24,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 61,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C45 || CT.C45,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C49 || CT.C49,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4284246976.0
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4288653530.0
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57], ui.Color);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: ui.TileMode.prototype,
        [_name$]: "TileMode.clamp",
        index: 0
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 1
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: -1
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: gradient.LinearGradient.prototype,
        [Gradient_transform]: null,
        [Gradient_stops]: null,
        [Gradient_colors]: C55 || CT.C55,
        [LinearGradient_tileMode]: C58 || CT.C58,
        [LinearGradient_end]: C59 || CT.C59,
        [LinearGradient_begin]: C60 || CT.C60
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        [BoxDecoration_shape]: C53 || CT.C53,
        [BoxDecoration_backgroundBlendMode]: null,
        [BoxDecoration_gradient]: C54 || CT.C54,
        [BoxDecoration_boxShadow]: null,
        [BoxDecoration_borderRadius]: null,
        [BoxDecoration_border]: null,
        [BoxDecoration_image]: null,
        [BoxDecoration_color]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 15,
        [EdgeInsets_right]: 15,
        [EdgeInsets_top]: 15,
        [EdgeInsets_left]: 15
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: 30,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: null,
        [TextStyle_inherit]: true
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C63 || CT.C63,
        [Text_textSpan]: null,
        [Text_data]: "DISCOVER NOW"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 25,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 143,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 144,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67, C68 || CT.C68], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 23,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 23,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shape",
        [_Location_column]: 23,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 19,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 17,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84, C85 || CT.C85], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89], widget_inspector._Location);
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 20,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96, C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/breath/screens/LandingPage/landing_page_mobile.dart"
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
  let C4;
  let C5;
  let C6;
  let C1;
  let C0;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C8;
  let C7;
  let C16;
  let C15;
  let C14;
  let C19;
  let C18;
  let C17;
  let C22;
  let C23;
  let C24;
  let C21;
  let C20;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C30;
  let C29;
  let C34;
  let C35;
  let C33;
  let C32;
  let C38;
  let C39;
  let C37;
  let C36;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C47;
  let C45;
  let C44;
  let C50;
  let C49;
  let C48;
  const EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  const EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  const EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  const EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  let C51;
  const _name = dart.privateName(box_border, "_name");
  let C53;
  const BoxDecoration_shape = dart.privateName(box_decoration, "BoxDecoration.shape");
  const BoxDecoration_backgroundBlendMode = dart.privateName(box_decoration, "BoxDecoration.backgroundBlendMode");
  const Gradient_transform = dart.privateName(gradient, "Gradient.transform");
  const Gradient_stops = dart.privateName(gradient, "Gradient.stops");
  const Color_value = dart.privateName(ui, "Color.value");
  let C56;
  let C57;
  let C55;
  const Gradient_colors = dart.privateName(gradient, "Gradient.colors");
  const _name$ = dart.privateName(ui, "_name");
  let C58;
  const LinearGradient_tileMode = dart.privateName(gradient, "LinearGradient.tileMode");
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C59;
  const LinearGradient_end = dart.privateName(gradient, "LinearGradient.end");
  let C60;
  const LinearGradient_begin = dart.privateName(gradient, "LinearGradient.begin");
  let C54;
  const BoxDecoration_gradient = dart.privateName(box_decoration, "BoxDecoration.gradient");
  const BoxDecoration_boxShadow = dart.privateName(box_decoration, "BoxDecoration.boxShadow");
  const BoxDecoration_borderRadius = dart.privateName(box_decoration, "BoxDecoration.borderRadius");
  const BoxDecoration_border = dart.privateName(box_decoration, "BoxDecoration.border");
  const BoxDecoration_image = dart.privateName(box_decoration, "BoxDecoration.image");
  const BoxDecoration_color = dart.privateName(box_decoration, "BoxDecoration.color");
  let C52;
  let C61;
  const Widget_key = dart.privateName(framework, "Widget.key");
  const Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  const Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  const Text_maxLines = dart.privateName(text, "Text.maxLines");
  const Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  const Text_overflow = dart.privateName(text, "Text.overflow");
  const Text_softWrap = dart.privateName(text, "Text.softWrap");
  const Text_locale = dart.privateName(text, "Text.locale");
  const Text_textDirection = dart.privateName(text, "Text.textDirection");
  const Text_textAlign = dart.privateName(text, "Text.textAlign");
  const Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C63;
  const Text_style = dart.privateName(text, "Text.style");
  const Text_textSpan = dart.privateName(text, "Text.textSpan");
  const Text_data = dart.privateName(text, "Text.data");
  let C62;
  let C66;
  let C67;
  let C68;
  let C65;
  let C64;
  let C71;
  let C72;
  let C73;
  let C74;
  let C75;
  let C76;
  let C70;
  let C69;
  let C79;
  let C80;
  let C78;
  let C77;
  let C83;
  let C84;
  let C85;
  let C82;
  let C81;
  let C88;
  let C89;
  let C87;
  let C86;
  let C92;
  let C91;
  let C90;
  let C95;
  let C96;
  let C97;
  let C98;
  let C94;
  let C93;
  landing_page_mobile.LandingPageMobile = class LandingPageMobile extends framework.StatelessWidget {
    build(context) {
      let myPageHeight = dart.notNull(media_query.MediaQuery.of(context).size.height) - 100;
      let myPageWidth = media_query.MediaQuery.of(context).size.width;
      return new container.Container.new({height: myPageHeight, width: myPageWidth, decoration: new box_decoration.BoxDecoration.new({image: new decoration_image.DecorationImage.new({image: new image_resolution.AssetImage.new("assets/images/Air_wave.png"), fit: box_fit.BoxFit.cover})}), child: new basic.Column.new({children: JSArrayOfWidget().of([new container.Container.new({color: colors.Colors.blue, margin: new edge_insets.EdgeInsets.symmetric({horizontal: 0.0}), padding: new edge_insets.EdgeInsets.symmetric({horizontal: 100.0}), height: myPageHeight * 0.25, child: new auto_size_text.AutoSizeText.rich(new text_span.TextSpan.new({children: JSArrayOfInlineSpan().of([new text_span.TextSpan.new({text: "Breath", style: new text_style.TextStyle.new({fontFamily: "Clarissa"})}), new text_span.TextSpan.new({text: ":", style: new text_style.TextStyle.new({fontFamily: "Bell MT"})}), new text_span.TextSpan.new({text: " purty at hand", style: new text_style.TextStyle.new({fontFamily: "Clarissa"})})])}), {style: new text_style.TextStyle.new({fontSize: 150.0, color: colors.Colors.black}), minFontSize: 0.0, stepGranularity: 0.1, textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceAround, children: JSArrayOfWidget().of([new container.Container.new({width: dart.notNull(myPageWidth) - 0.6180339887498948 * dart.notNull(myPageWidth), height: 450.0, child: new basic.Center.new({child: new image.Image.asset("assets/images/Bottle_transparent.png", {$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new container.Container.new({width: 0.6180339887498948 * dart.notNull(myPageWidth), height: 450.0, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new container.Container.new({child: new text.Text.new("Explore the air of the world", {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold, fontSize: 55.0}), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new container.Container.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new landing_page_mobile.Bullet.new("Discover our large range of products", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), new landing_page_mobile.Bullet.new("Bottles of air from all around the world", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), new landing_page_mobile.Bullet.new("High tracability", {style: new text_style.TextStyle.new({fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40})]), $creationLocationd_0dea112b090073317d4: C44 || CT.C44}), $creationLocationd_0dea112b090073317d4: C48 || CT.C48}), new raised_button.RaisedButton.new({onPressed: dart.fn(() => {
                          navigator.Navigator.pushNamed(core.Object, context, "/sign-in");
                        }, VoidToNull()), textColor: colors.Colors.white, elevation: 3.0, padding: C51 || CT.C51, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(18.0)}), child: new container.Container.new({decoration: C52 || CT.C52, padding: C61 || CT.C61, child: C62 || CT.C62, $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69})]), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), $creationLocationd_0dea112b090073317d4: C81 || CT.C81})]), $creationLocationd_0dea112b090073317d4: C86 || CT.C86})]), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93});
    }
  };
  (landing_page_mobile.LandingPageMobile.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    landing_page_mobile.LandingPageMobile.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = landing_page_mobile.LandingPageMobile.prototype;
  dart.addTypeTests(landing_page_mobile.LandingPageMobile);
  dart.setMethodSignature(landing_page_mobile.LandingPageMobile, () => ({
    __proto__: dart.getMethods(landing_page_mobile.LandingPageMobile.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(landing_page_mobile.LandingPageMobile, "package:breath/screens/LandingPage/landing_page_mobile.dart");
  landing_page_mobile.Bullet = class Bullet extends text.Text {};
  (landing_page_mobile.Bullet.new = function(data, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let softWrap = opts && 'softWrap' in opts ? opts.softWrap : null;
    let overflow = opts && 'overflow' in opts ? opts.overflow : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    landing_page_mobile.Bullet.__proto__.new.call(this, "• " + dart.str(data), {key: key, style: style, textAlign: textAlign, textDirection: textDirection, locale: locale, softWrap: softWrap, overflow: overflow, textScaleFactor: textScaleFactor, maxLines: maxLines, semanticsLabel: semanticsLabel, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = landing_page_mobile.Bullet.prototype;
  dart.addTypeTests(landing_page_mobile.Bullet);
  dart.setLibraryUri(landing_page_mobile.Bullet, "package:breath/screens/LandingPage/landing_page_mobile.dart");
  dart.trackLibraries("packages/breath/screens/LandingPage/landing_page_mobile", {
    "package:breath/screens/LandingPage/landing_page_mobile.dart": landing_page_mobile
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["landing_page_mobile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAO4B;AACjB,yBAAkD,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB;AACpD,wBAAyB,AAAY,AAAK,0BAAd,OAAO;AAC1C,YAAO,sCACG,YAAY,SACb,WAAW,cACN,6CACH,iDACE,oCAAW,oCACN,iCAGT,gCACa,sBACd,oCACgB,4BACK,kDAAsB,gBACrB,kDAAsB,iBAClC,AAAY,YAAA,GAAC,aACC,qCAClB,sCACY,0BACR,kCACQ,iBACC,0CACO,gBAGhB,kCACQ,YACC,0CACO,eAGhB,kCACQ,yBACC,0CACO,4BAMb,wCAAoB,cAAmB,oCACjC,sBACI,gBACI,mIAI7B,sCACuC,8CACnB,sBAChB,oCACoB,aAAX,WAAW,IAAE,AAAkB,kCAAC,WAAW,WAE1C,cAED,6BACQ,sBAAM,oNAGvB,oCAES,AAAkB,kCAAC,WAAW,WAC7B,cAED,yCACgC,8CACnB,sBAChB,oCACS,kBACL,wCACO,0CACkB,8BACb,0HAIhB,oCACS,0CACkC,yCACrB,sBAChB,mCACE,gDACO,wCACK,iEAGd,mCACE,oDACO,wCACK,iEAGd,mCACE,4BACO,wCACK,qLAMpB,+CACa;AAA6C,0BAA/B,2CAAU,OAAO;qDACxB,gCACP,oCAEJ,uEACe,wCAAsB,gBAErC;IAsC3B;;;;;;EACF;;;;;;;;6CAIa;QACD;QACM;QACA;QACI;QACP;QACF;QACQ;QACN;QACH;QACG;;AACJ,wDACP,AAAS,gBAAL,IAAI,SACH,GAAG,SACD,KAAK,aACD,SAAS,iBACL,aAAa,UACpB,MAAM,YACJ,QAAQ,YACR,QAAQ,mBACD,eAAe,YACtB,QAAQ,kBACF,cAAc;;EAC/B","file":"landing_page_mobile.ddc.js"}');
  // Exports:
  return {
    screens__LandingPage__landing_page_mobile: landing_page_mobile
  };
});

//# sourceMappingURL=landing_page_mobile.ddc.js.map