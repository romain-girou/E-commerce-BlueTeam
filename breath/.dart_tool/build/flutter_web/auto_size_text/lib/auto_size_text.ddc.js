define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__painting___network_image_web, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const text$ = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const strut_style = packages__flutter__src__painting___network_image_web.src__painting__strut_style;
  const text_painter = packages__flutter__src__painting___network_image_web.src__painting__text_painter;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const auto_size_text = Object.create(dart.library);
  const $_get = dartx._get;
  const $modulo = dartx['%'];
  const $isNotEmpty = dartx.isNotEmpty;
  const $reversed = dartx.reversed;
  const $toList = dartx.toList;
  const $clamp = dartx.clamp;
  const $floor = dartx.floor;
  const $ceil = dartx.ceil;
  const $length = dartx.length;
  const $toInt = dartx.toInt;
  const $split = dartx.split;
  const $join = dartx.join;
  const $_set = dartx._set;
  const $values = dartx.values;
  const $keys = dartx.keys;
  const $remove = dartx.remove;
  let BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let LinkedMapOf_AutoSizeTextState$double = () => (LinkedMapOf_AutoSizeTextState$double = dart.constFn(_js_helper.LinkedMap$(auto_size_text._AutoSizeTextState, core.double)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 26,
        [_Location_line]: 245,
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
        [_Location_column]: 12,
        [_Location_line]: 245,
        [_Location_file]: "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 16,
        [_Location_line]: 416,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 417,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 418,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "strutStyle",
        [_Location_column]: 9,
        [_Location_line]: 419,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 9,
        [_Location_line]: 420,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 9,
        [_Location_line]: 421,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "locale",
        [_Location_column]: 9,
        [_Location_line]: 422,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 9,
        [_Location_line]: 423,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 9,
        [_Location_line]: 424,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textScaleFactor",
        [_Location_column]: 9,
        [_Location_line]: 425,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 9,
        [_Location_line]: 426,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticsLabel",
        [_Location_column]: 9,
        [_Location_line]: 427,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 415,
        [_Location_file]: "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textSpan",
        [_Location_column]: 16,
        [_Location_line]: 431,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 432,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 433,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "strutStyle",
        [_Location_column]: 9,
        [_Location_line]: 434,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 9,
        [_Location_line]: 435,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textDirection",
        [_Location_column]: 9,
        [_Location_line]: 436,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "locale",
        [_Location_column]: 9,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "softWrap",
        [_Location_column]: 9,
        [_Location_line]: 438,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "overflow",
        [_Location_column]: 9,
        [_Location_line]: 439,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textScaleFactor",
        [_Location_column]: 9,
        [_Location_line]: 440,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 9,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticsLabel",
        [_Location_column]: 9,
        [_Location_line]: 442,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 430,
        [_Location_file]: "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart"
      });
    }
  });
  const textKey$ = dart.privateName(auto_size_text, "AutoSizeText.textKey");
  const data$ = dart.privateName(auto_size_text, "AutoSizeText.data");
  const textSpan$ = dart.privateName(auto_size_text, "AutoSizeText.textSpan");
  const style$ = dart.privateName(auto_size_text, "AutoSizeText.style");
  const strutStyle$ = dart.privateName(auto_size_text, "AutoSizeText.strutStyle");
  const minFontSize$ = dart.privateName(auto_size_text, "AutoSizeText.minFontSize");
  const maxFontSize$ = dart.privateName(auto_size_text, "AutoSizeText.maxFontSize");
  const stepGranularity$ = dart.privateName(auto_size_text, "AutoSizeText.stepGranularity");
  const presetFontSizes$ = dart.privateName(auto_size_text, "AutoSizeText.presetFontSizes");
  const group$ = dart.privateName(auto_size_text, "AutoSizeText.group");
  const textAlign$ = dart.privateName(auto_size_text, "AutoSizeText.textAlign");
  const textDirection$ = dart.privateName(auto_size_text, "AutoSizeText.textDirection");
  const locale$ = dart.privateName(auto_size_text, "AutoSizeText.locale");
  const softWrap$ = dart.privateName(auto_size_text, "AutoSizeText.softWrap");
  const wrapWords$ = dart.privateName(auto_size_text, "AutoSizeText.wrapWords");
  const overflow$ = dart.privateName(auto_size_text, "AutoSizeText.overflow");
  const overflowReplacement$ = dart.privateName(auto_size_text, "AutoSizeText.overflowReplacement");
  const textScaleFactor$ = dart.privateName(auto_size_text, "AutoSizeText.textScaleFactor");
  const maxLines$ = dart.privateName(auto_size_text, "AutoSizeText.maxLines");
  const semanticsLabel$ = dart.privateName(auto_size_text, "AutoSizeText.semanticsLabel");
  auto_size_text.AutoSizeText = class AutoSizeText extends framework.StatefulWidget {
    get textKey() {
      return this[textKey$];
    }
    set textKey(value) {
      super.textKey = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get textSpan() {
      return this[textSpan$];
    }
    set textSpan(value) {
      super.textSpan = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get strutStyle() {
      return this[strutStyle$];
    }
    set strutStyle(value) {
      super.strutStyle = value;
    }
    get minFontSize() {
      return this[minFontSize$];
    }
    set minFontSize(value) {
      super.minFontSize = value;
    }
    get maxFontSize() {
      return this[maxFontSize$];
    }
    set maxFontSize(value) {
      super.maxFontSize = value;
    }
    get stepGranularity() {
      return this[stepGranularity$];
    }
    set stepGranularity(value) {
      super.stepGranularity = value;
    }
    get presetFontSizes() {
      return this[presetFontSizes$];
    }
    set presetFontSizes(value) {
      super.presetFontSizes = value;
    }
    get group() {
      return this[group$];
    }
    set group(value) {
      super.group = value;
    }
    get textAlign() {
      return this[textAlign$];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get softWrap() {
      return this[softWrap$];
    }
    set softWrap(value) {
      super.softWrap = value;
    }
    get wrapWords() {
      return this[wrapWords$];
    }
    set wrapWords(value) {
      super.wrapWords = value;
    }
    get overflow() {
      return this[overflow$];
    }
    set overflow(value) {
      super.overflow = value;
    }
    get overflowReplacement() {
      return this[overflowReplacement$];
    }
    set overflowReplacement(value) {
      super.overflowReplacement = value;
    }
    get textScaleFactor() {
      return this[textScaleFactor$];
    }
    set textScaleFactor(value) {
      super.textScaleFactor = value;
    }
    get maxLines() {
      return this[maxLines$];
    }
    set maxLines(value) {
      super.maxLines = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    createState() {
      return new auto_size_text._AutoSizeTextState.new();
    }
  };
  (auto_size_text.AutoSizeText.new = function(data, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let textKey = opts && 'textKey' in opts ? opts.textKey : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let minFontSize = opts && 'minFontSize' in opts ? opts.minFontSize : 12;
    let maxFontSize = opts && 'maxFontSize' in opts ? opts.maxFontSize : 1 / 0;
    let stepGranularity = opts && 'stepGranularity' in opts ? opts.stepGranularity : 1;
    let presetFontSizes = opts && 'presetFontSizes' in opts ? opts.presetFontSizes : null;
    let group = opts && 'group' in opts ? opts.group : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let softWrap = opts && 'softWrap' in opts ? opts.softWrap : null;
    let wrapWords = opts && 'wrapWords' in opts ? opts.wrapWords : true;
    let overflow = opts && 'overflow' in opts ? opts.overflow : null;
    let overflowReplacement = opts && 'overflowReplacement' in opts ? opts.overflowReplacement : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    this[textKey$] = textKey;
    this[style$] = style;
    this[strutStyle$] = strutStyle;
    this[minFontSize$] = minFontSize;
    this[maxFontSize$] = maxFontSize;
    this[stepGranularity$] = stepGranularity;
    this[presetFontSizes$] = presetFontSizes;
    this[group$] = group;
    this[textAlign$] = textAlign;
    this[textDirection$] = textDirection;
    this[locale$] = locale;
    this[softWrap$] = softWrap;
    this[wrapWords$] = wrapWords;
    this[overflow$] = overflow;
    this[overflowReplacement$] = overflowReplacement;
    this[textScaleFactor$] = textScaleFactor;
    this[maxLines$] = maxLines;
    this[semanticsLabel$] = semanticsLabel;
    if (!(data != null)) dart.assertFailed("A non-null String must be provided to a AutoSizeText widget.", "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart", 34, 16, "data != null");
    this[textSpan$] = null;
    auto_size_text.AutoSizeText.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auto_size_text.AutoSizeText.prototype;
  (auto_size_text.AutoSizeText.rich = function(textSpan, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let textKey = opts && 'textKey' in opts ? opts.textKey : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let minFontSize = opts && 'minFontSize' in opts ? opts.minFontSize : 12;
    let maxFontSize = opts && 'maxFontSize' in opts ? opts.maxFontSize : 1 / 0;
    let stepGranularity = opts && 'stepGranularity' in opts ? opts.stepGranularity : 1;
    let presetFontSizes = opts && 'presetFontSizes' in opts ? opts.presetFontSizes : null;
    let group = opts && 'group' in opts ? opts.group : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let softWrap = opts && 'softWrap' in opts ? opts.softWrap : null;
    let wrapWords = opts && 'wrapWords' in opts ? opts.wrapWords : true;
    let overflow = opts && 'overflow' in opts ? opts.overflow : null;
    let overflowReplacement = opts && 'overflowReplacement' in opts ? opts.overflowReplacement : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[textSpan$] = textSpan;
    this[textKey$] = textKey;
    this[style$] = style;
    this[strutStyle$] = strutStyle;
    this[minFontSize$] = minFontSize;
    this[maxFontSize$] = maxFontSize;
    this[stepGranularity$] = stepGranularity;
    this[presetFontSizes$] = presetFontSizes;
    this[group$] = group;
    this[textAlign$] = textAlign;
    this[textDirection$] = textDirection;
    this[locale$] = locale;
    this[softWrap$] = softWrap;
    this[wrapWords$] = wrapWords;
    this[overflow$] = overflow;
    this[overflowReplacement$] = overflowReplacement;
    this[textScaleFactor$] = textScaleFactor;
    this[maxLines$] = maxLines;
    this[semanticsLabel$] = semanticsLabel;
    if (!(textSpan != null)) dart.assertFailed("A non-null TextSpan must be provided to a AutoSizeText.rich widget.", "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart", 61, 16, "textSpan != null");
    this[data$] = null;
    auto_size_text.AutoSizeText.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = auto_size_text.AutoSizeText.prototype;
  dart.addTypeTests(auto_size_text.AutoSizeText);
  dart.setMethodSignature(auto_size_text.AutoSizeText, () => ({
    __proto__: dart.getMethods(auto_size_text.AutoSizeText.__proto__),
    createState: dart.fnType(auto_size_text._AutoSizeTextState, [])
  }));
  dart.setLibraryUri(auto_size_text.AutoSizeText, "package:auto_size_text/auto_size_text.dart");
  dart.setFieldSignature(auto_size_text.AutoSizeText, () => ({
    __proto__: dart.getFields(auto_size_text.AutoSizeText.__proto__),
    textKey: dart.finalFieldType(key.Key),
    data: dart.finalFieldType(core.String),
    textSpan: dart.finalFieldType(text_span.TextSpan),
    style: dart.finalFieldType(text_style.TextStyle),
    strutStyle: dart.finalFieldType(strut_style.StrutStyle),
    minFontSize: dart.finalFieldType(core.double),
    maxFontSize: dart.finalFieldType(core.double),
    stepGranularity: dart.finalFieldType(core.double),
    presetFontSizes: dart.finalFieldType(core.List$(core.double)),
    group: dart.finalFieldType(auto_size_text.AutoSizeGroup),
    textAlign: dart.finalFieldType(ui.TextAlign),
    textDirection: dart.finalFieldType(ui.TextDirection),
    locale: dart.finalFieldType(ui.Locale),
    softWrap: dart.finalFieldType(core.bool),
    wrapWords: dart.finalFieldType(core.bool),
    overflow: dart.finalFieldType(paragraph.TextOverflow),
    overflowReplacement: dart.finalFieldType(framework.Widget),
    textScaleFactor: dart.finalFieldType(core.double),
    maxLines: dart.finalFieldType(core.int),
    semanticsLabel: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(auto_size_text.AutoSizeText, {
    /*auto_size_text.AutoSizeText._defaultFontSize*/get _defaultFontSize() {
      return 14;
    }
  });
  const _register = dart.privateName(auto_size_text, "_register");
  const _remove = dart.privateName(auto_size_text, "_remove");
  const _sanityCheck = dart.privateName(auto_size_text, "_sanityCheck");
  const _calculateFontSize = dart.privateName(auto_size_text, "_calculateFontSize");
  const _updateFontSize = dart.privateName(auto_size_text, "_updateFontSize");
  const _fontSize = dart.privateName(auto_size_text, "_fontSize");
  const _buildText = dart.privateName(auto_size_text, "_buildText");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  const _checkTextFits = dart.privateName(auto_size_text, "_checkTextFits");
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C4;
  let C3;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C18;
  let C17;
  const _notifySync = dart.privateName(auto_size_text, "_notifySync");
  auto_size_text._AutoSizeTextState = class _AutoSizeTextState extends framework.State$(auto_size_text.AutoSizeText) {
    initState() {
      super.initState();
      if (this.widget.group != null) {
        this.widget.group[_register](this);
      }
    }
    didUpdateWidget(oldWidget) {
      let t0, t0$;
      auto_size_text.AutoSizeText._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(oldWidget.group, this.widget.group)) {
        t0 = oldWidget.group;
        t0 == null ? null : t0[_remove](this);
        t0$ = this.widget.group;
        t0$ == null ? null : t0$[_register](this);
      }
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, size) => {
          let t0;
          let defaultTextStyle = text$.DefaultTextStyle.of(context);
          let style = this.widget.style;
          if (this.widget.style == null || dart.test(this.widget.style.inherit)) {
            style = defaultTextStyle.style.merge(this.widget.style);
          }
          if (style.fontSize == null) {
            style = style.copyWith({fontSize: 14});
          }
          let maxLines = (t0 = this.widget.maxLines, t0 == null ? defaultTextStyle.maxLines : t0);
          this[_sanityCheck](style, maxLines);
          let result = this[_calculateFontSize](size, style, maxLines);
          let fontSize = core.double.as(result[$_get](0));
          let textFits = core.bool.as(result[$_get](1));
          let text = null;
          if (this.widget.group != null) {
            this.widget.group[_updateFontSize](this, fontSize);
            text = this[_buildText](this.widget.group[_fontSize], style, maxLines);
          } else {
            text = this[_buildText](fontSize, style, maxLines);
          }
          if (this.widget.overflowReplacement != null && !dart.test(textFits)) {
            return this.widget.overflowReplacement;
          } else {
            return text;
          }
        }, BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
    [_sanityCheck](style, maxLines) {
      if (!(this.widget.overflow == null || this.widget.overflowReplacement == null)) dart.assertFailed("Either overflow or overflowReplacement have to be null.", "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart", 282, 12, "widget.overflow == null || widget.overflowReplacement == null");
      if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed("MaxLines has to be grater than or equal to 1.", "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart", 284, 12, "maxLines == null || maxLines > 0");
      if (!(this.widget.key == null || !dart.equals(this.widget.key, this.widget.textKey))) dart.assertFailed("Key and textKey cannot be the same.", "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart", 286, 12, "widget.key == null || widget.key != widget.textKey");
      if (this.widget.presetFontSizes == null) {
        if (!(dart.notNull(this.widget.stepGranularity) >= 0.1)) dart.assertFailed("StepGranularity has to be greater than or equal to 0.1. It is not a good idea to resize the font with a higher accuracy.", "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart", 290, 14, "widget.stepGranularity >= 0.1");
        if (!(dart.notNull(this.widget.minFontSize) >= 0)) dart.assertFailed("MinFontSize has to be greater than or equal to 0.", "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart", 292, 14, "widget.minFontSize >= 0");
        if (!(dart.notNull(this.widget.maxFontSize) > 0)) dart.assertFailed("MaxFontSize has to be greater than 0.", "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart", 294, 14, "widget.maxFontSize > 0");
        if (!(dart.notNull(this.widget.minFontSize) <= dart.notNull(this.widget.maxFontSize))) dart.assertFailed("MinFontSize has to be smaller or equal than maxFontSize.", "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart", 295, 14, "widget.minFontSize <= widget.maxFontSize");
        if (!((dart.notNull(this.widget.minFontSize) / dart.notNull(this.widget.stepGranularity))[$modulo](1) === 0)) dart.assertFailed("MinFontSize has to be multiples of stepGranularity.", "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart", 297, 14, "widget.minFontSize / widget.stepGranularity % 1 == 0");
        if (this.widget.maxFontSize !== 1 / 0) {
          if (!((dart.notNull(this.widget.maxFontSize) / dart.notNull(this.widget.stepGranularity))[$modulo](1) === 0)) dart.assertFailed("MaxFontSize has to be multiples of stepGranularity.", "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart", 300, 16, "widget.maxFontSize / widget.stepGranularity % 1 == 0");
        }
      } else {
        if (!dart.test(this.widget.presetFontSizes[$isNotEmpty])) dart.assertFailed("PresetFontSizes has to be nonempty.", "org-dartlang-app:///packages/auto_size_text/src/auto_size_text.dart", 304, 14, "widget.presetFontSizes.isNotEmpty");
      }
    }
    [_calculateFontSize](size, style, maxLines) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6;
      let span = new text_span.TextSpan.new({style: (t0$ = (t0 = this.widget.textSpan, t0 == null ? null : t0.style), t0$ == null ? style : t0$), text: (t0$1 = (t0$0 = this.widget.textSpan, t0$0 == null ? null : t0$0.text), t0$1 == null ? this.widget.data : t0$1), children: (t0$2 = this.widget.textSpan, t0$2 == null ? null : t0$2.children), recognizer: (t0$3 = this.widget.textSpan, t0$3 == null ? null : t0$3.recognizer)});
      let userScale = (t0$4 = this.widget.textScaleFactor, t0$4 == null ? media_query.MediaQuery.textScaleFactorOf(this.context) : t0$4);
      let left = null;
      let right = null;
      let presetFontSizes = (t0$6 = (t0$5 = this.widget.presetFontSizes, t0$5 == null ? null : t0$5[$reversed]), t0$6 == null ? null : t0$6[$toList]());
      if (presetFontSizes == null) {
        let defaultFontSize = style.fontSize[$clamp](this.widget.minFontSize, this.widget.maxFontSize);
        let defaultScale = defaultFontSize * dart.notNull(userScale) / dart.notNull(style.fontSize);
        if (dart.test(this[_checkTextFits](span, defaultScale, maxLines, size))) {
          return [defaultFontSize * dart.notNull(userScale), true];
        }
        left = (dart.notNull(this.widget.minFontSize) / dart.notNull(this.widget.stepGranularity))[$floor]();
        right = (defaultFontSize / dart.notNull(this.widget.stepGranularity))[$ceil]();
      } else {
        left = 0;
        right = dart.notNull(presetFontSizes[$length]) - 1;
      }
      let lastValueFits = false;
      while (dart.notNull(left) <= dart.notNull(right)) {
        let mid = (dart.notNull(left) + (dart.notNull(right) - dart.notNull(left)) / 2)[$toInt]();
        let scale = null;
        if (presetFontSizes == null) {
          scale = mid * dart.notNull(userScale) * dart.notNull(this.widget.stepGranularity) / dart.notNull(style.fontSize);
        } else {
          scale = dart.notNull(presetFontSizes[$_get](mid)) * dart.notNull(userScale) / dart.notNull(style.fontSize);
        }
        if (dart.test(this[_checkTextFits](span, scale, maxLines, size))) {
          left = mid + 1;
          lastValueFits = true;
        } else {
          right = mid - 1;
        }
      }
      if (!lastValueFits) {
        right = dart.notNull(right) + 1;
      }
      let fontSize = null;
      if (presetFontSizes == null) {
        fontSize = dart.notNull(right) * dart.notNull(userScale) * dart.notNull(this.widget.stepGranularity);
      } else {
        fontSize = dart.notNull(presetFontSizes[$_get](right)) * dart.notNull(userScale);
      }
      return [fontSize, lastValueFits];
    }
    [_checkTextFits](text, scale, maxLines, constraints) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      if (!dart.test(this.widget.wrapWords)) {
        let words = text.toPlainText()[$split](core.RegExp.new("\\s+"));
        let wordWrapTp = new text_painter.TextPainter.new({text: new text_span.TextSpan.new({style: text.style, text: words[$join]("\n")}), textAlign: (t0 = this.widget.textAlign, t0 == null ? ui.TextAlign.left : t0), textDirection: (t0$ = this.widget.textDirection, t0$ == null ? ui.TextDirection.ltr : t0$), textScaleFactor: (t0$0 = scale, t0$0 == null ? 1.0 : t0$0), maxLines: words[$length], locale: this.widget.locale, strutStyle: this.widget.strutStyle});
        wordWrapTp.layout({maxWidth: constraints.maxWidth});
        if (dart.test(wordWrapTp.didExceedMaxLines) || dart.notNull(wordWrapTp.width) > dart.notNull(constraints.maxWidth)) {
          return false;
        }
      }
      let tp = new text_painter.TextPainter.new({text: text, textAlign: (t0$1 = this.widget.textAlign, t0$1 == null ? ui.TextAlign.left : t0$1), textDirection: (t0$2 = this.widget.textDirection, t0$2 == null ? ui.TextDirection.ltr : t0$2), textScaleFactor: (t0$3 = scale, t0$3 == null ? 1.0 : t0$3), maxLines: maxLines, locale: this.widget.locale, strutStyle: this.widget.strutStyle});
      tp.layout({maxWidth: constraints.maxWidth});
      return !(dart.test(tp.didExceedMaxLines) || dart.notNull(tp.height) > dart.notNull(constraints.maxHeight) || dart.notNull(tp.width) > dart.notNull(constraints.maxWidth));
    }
    [_buildText](fontSize, style, maxLines) {
      if (this.widget.data != null) {
        return new text$.Text.new(this.widget.data, {key: this.widget.textKey, style: style.copyWith({fontSize: fontSize}), strutStyle: this.widget.strutStyle, textAlign: this.widget.textAlign, textDirection: this.widget.textDirection, locale: this.widget.locale, softWrap: this.widget.softWrap, overflow: this.widget.overflow, textScaleFactor: 1.0, maxLines: maxLines, semanticsLabel: this.widget.semanticsLabel, $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
      } else {
        return new text$.Text.rich(this.widget.textSpan, {key: this.widget.textKey, style: style, strutStyle: this.widget.strutStyle, textAlign: this.widget.textAlign, textDirection: this.widget.textDirection, locale: this.widget.locale, softWrap: this.widget.softWrap, overflow: this.widget.overflow, textScaleFactor: dart.notNull(fontSize) / dart.notNull(style.fontSize), maxLines: maxLines, semanticsLabel: this.widget.semanticsLabel, $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
      }
    }
    [_notifySync]() {
      this.setState(dart.fn(() => {
      }, VoidToNull()));
    }
    dispose() {
      if (this.widget.group != null) {
        this.widget.group[_remove](this);
      }
      super.dispose();
    }
  };
  (auto_size_text._AutoSizeTextState.new = function() {
    auto_size_text._AutoSizeTextState.__proto__.new.call(this);
    ;
  }).prototype = auto_size_text._AutoSizeTextState.prototype;
  dart.addTypeTests(auto_size_text._AutoSizeTextState);
  dart.setMethodSignature(auto_size_text._AutoSizeTextState, () => ({
    __proto__: dart.getMethods(auto_size_text._AutoSizeTextState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_sanityCheck]: dart.fnType(dart.void, [text_style.TextStyle, core.int]),
    [_calculateFontSize]: dart.fnType(core.List, [box.BoxConstraints, text_style.TextStyle, core.int]),
    [_checkTextFits]: dart.fnType(core.bool, [text_span.TextSpan, core.double, core.int, box.BoxConstraints]),
    [_buildText]: dart.fnType(framework.Widget, [core.double, text_style.TextStyle, core.int]),
    [_notifySync]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(auto_size_text._AutoSizeTextState, "package:auto_size_text/auto_size_text.dart");
  const _listeners = dart.privateName(auto_size_text, "_listeners");
  const _widgetsNotified = dart.privateName(auto_size_text, "_widgetsNotified");
  const _notifyListeners = dart.privateName(auto_size_text, "_notifyListeners");
  auto_size_text.AutoSizeGroup = class AutoSizeGroup extends core.Object {
    [_register](text) {
      this[_listeners][$_set](text, 1 / 0);
    }
    [_updateFontSize](text, maxFontSize) {
      let oldFontSize = this[_fontSize];
      if (dart.notNull(maxFontSize) <= dart.notNull(this[_fontSize])) {
        this[_fontSize] = maxFontSize;
        this[_listeners][$_set](text, maxFontSize);
      } else if (this[_listeners][$_get](text) == this[_fontSize]) {
        this[_listeners][$_set](text, maxFontSize);
        this[_fontSize] = 1 / 0;
        for (let size of this[_listeners][$values]) {
          if (dart.notNull(size) < dart.notNull(this[_fontSize])) this[_fontSize] = size;
        }
      } else {
        this[_listeners][$_set](text, maxFontSize);
      }
      if (oldFontSize != this[_fontSize]) {
        this[_widgetsNotified] = false;
        async.Timer.run(dart.bind(this, _notifyListeners));
      }
    }
    [_notifyListeners]() {
      if (dart.test(this[_widgetsNotified])) {
        return;
      } else {
        this[_widgetsNotified] = true;
      }
      for (let textState of this[_listeners][$keys]) {
        if (dart.test(textState.mounted)) {
          textState[_notifySync]();
        }
      }
    }
    [_remove](text) {
      this[_updateFontSize](text, 1 / 0);
      this[_listeners][$remove](text);
    }
  };
  (auto_size_text.AutoSizeGroup.new = function() {
    this[_listeners] = new (LinkedMapOf_AutoSizeTextState$double()).new();
    this[_widgetsNotified] = false;
    this[_fontSize] = 1 / 0;
    ;
  }).prototype = auto_size_text.AutoSizeGroup.prototype;
  dart.addTypeTests(auto_size_text.AutoSizeGroup);
  dart.setMethodSignature(auto_size_text.AutoSizeGroup, () => ({
    __proto__: dart.getMethods(auto_size_text.AutoSizeGroup.__proto__),
    [_register]: dart.fnType(dart.dynamic, [auto_size_text._AutoSizeTextState]),
    [_updateFontSize]: dart.fnType(dart.dynamic, [auto_size_text._AutoSizeTextState, core.double]),
    [_notifyListeners]: dart.fnType(dart.dynamic, []),
    [_remove]: dart.fnType(dart.dynamic, [auto_size_text._AutoSizeTextState])
  }));
  dart.setLibraryUri(auto_size_text.AutoSizeGroup, "package:auto_size_text/auto_size_text.dart");
  dart.setFieldSignature(auto_size_text.AutoSizeGroup, () => ({
    __proto__: dart.getFields(auto_size_text.AutoSizeGroup.__proto__),
    [_listeners]: dart.finalFieldType(core.Map$(auto_size_text._AutoSizeTextState, core.double)),
    [_widgetsNotified]: dart.fieldType(core.bool),
    [_fontSize]: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/auto_size_text/auto_size_text", {
    "package:auto_size_text/auto_size_text.dart": auto_size_text
  }, {
    "package:auto_size_text/auto_size_text.dart": ["src/auto_size_text.dart", "src/auto_size_group.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/auto_size_text.dart","src/auto_size_group.dart"],"names":[],"mappings":"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","file":"auto_size_text.ddc.js"}');
  // Exports:
  return {
    auto_size_text: auto_size_text
  };
});

//# sourceMappingURL=auto_size_text.ddc.js.map
