define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const responsive_builder = Object.create(dart.library);
  let BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let BuildContextAndSizingInformationToWidget = () => (BuildContextAndSizingInformationToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, responsive_builder.SizingInformation])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: responsive_builder.DeviceScreenType.prototype,
        [_name$]: "DeviceScreenType.Mobile",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: responsive_builder.DeviceScreenType.prototype,
        [_name$]: "DeviceScreenType.Tablet",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: responsive_builder.DeviceScreenType.prototype,
        [_name$]: "DeviceScreenType.Desktop",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: responsive_builder.DeviceScreenType.prototype,
        [_name$]: "DeviceScreenType.Watch",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], responsive_builder.DeviceScreenType);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 26,
        [_Location_line]: 75,
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
        [_Location_column]: 12,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/responsive_builder/responsive_builder.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "breakpoints",
        [_Location_column]: 7,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/responsive_builder/responsive_builder.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 163,
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
        [_Location_column]: 12,
        [_Location_line]: 162,
        [_Location_file]: "org-dartlang-app:///packages/responsive_builder/responsive_builder.dart"
      });
    }
  });
  const _name$ = dart.privateName(responsive_builder, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  responsive_builder.DeviceScreenType = class DeviceScreenType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (responsive_builder.DeviceScreenType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = responsive_builder.DeviceScreenType.prototype;
  dart.addTypeTests(responsive_builder.DeviceScreenType);
  dart.setLibraryUri(responsive_builder.DeviceScreenType, "package:responsive_builder/responsive_builder.dart");
  dart.setFieldSignature(responsive_builder.DeviceScreenType, () => ({
    __proto__: dart.getFields(responsive_builder.DeviceScreenType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(responsive_builder.DeviceScreenType, ['toString']);
  responsive_builder.DeviceScreenType.Mobile = C0 || CT.C0;
  responsive_builder.DeviceScreenType.Tablet = C1 || CT.C1;
  responsive_builder.DeviceScreenType.Desktop = C2 || CT.C2;
  responsive_builder.DeviceScreenType.Watch = C3 || CT.C3;
  responsive_builder.DeviceScreenType.values = C4 || CT.C4;
  const deviceScreenType$ = dart.privateName(responsive_builder, "SizingInformation.deviceScreenType");
  const screenSize$ = dart.privateName(responsive_builder, "SizingInformation.screenSize");
  const localWidgetSize$ = dart.privateName(responsive_builder, "SizingInformation.localWidgetSize");
  responsive_builder.SizingInformation = class SizingInformation extends core.Object {
    get deviceScreenType() {
      return this[deviceScreenType$];
    }
    set deviceScreenType(value) {
      super.deviceScreenType = value;
    }
    get screenSize() {
      return this[screenSize$];
    }
    set screenSize(value) {
      super.screenSize = value;
    }
    get localWidgetSize() {
      return this[localWidgetSize$];
    }
    set localWidgetSize(value) {
      super.localWidgetSize = value;
    }
    get isMobile() {
      return dart.equals(this.deviceScreenType, responsive_builder.DeviceScreenType.Mobile);
    }
    get isTablet() {
      return dart.equals(this.deviceScreenType, responsive_builder.DeviceScreenType.Tablet);
    }
    get isDesktop() {
      return dart.equals(this.deviceScreenType, responsive_builder.DeviceScreenType.Desktop);
    }
    get isWatch() {
      return dart.equals(this.deviceScreenType, responsive_builder.DeviceScreenType.Watch);
    }
    toString() {
      return "DeviceType:" + dart.str(this.deviceScreenType) + " ScreenSize:" + dart.str(this.screenSize) + " LocalWidgetSize:" + dart.str(this.localWidgetSize);
    }
  };
  (responsive_builder.SizingInformation.new = function(opts) {
    let deviceScreenType = opts && 'deviceScreenType' in opts ? opts.deviceScreenType : null;
    let screenSize = opts && 'screenSize' in opts ? opts.screenSize : null;
    let localWidgetSize = opts && 'localWidgetSize' in opts ? opts.localWidgetSize : null;
    this[deviceScreenType$] = deviceScreenType;
    this[screenSize$] = screenSize;
    this[localWidgetSize$] = localWidgetSize;
    ;
  }).prototype = responsive_builder.SizingInformation.prototype;
  dart.addTypeTests(responsive_builder.SizingInformation);
  dart.setGetterSignature(responsive_builder.SizingInformation, () => ({
    __proto__: dart.getGetters(responsive_builder.SizingInformation.__proto__),
    isMobile: core.bool,
    isTablet: core.bool,
    isDesktop: core.bool,
    isWatch: core.bool
  }));
  dart.setLibraryUri(responsive_builder.SizingInformation, "package:responsive_builder/responsive_builder.dart");
  dart.setFieldSignature(responsive_builder.SizingInformation, () => ({
    __proto__: dart.getFields(responsive_builder.SizingInformation.__proto__),
    deviceScreenType: dart.finalFieldType(responsive_builder.DeviceScreenType),
    screenSize: dart.finalFieldType(ui.Size),
    localWidgetSize: dart.finalFieldType(ui.Size)
  }));
  dart.defineExtensionMethods(responsive_builder.SizingInformation, ['toString']);
  const watch$ = dart.privateName(responsive_builder, "ScreenBreakpoints.watch");
  const tablet$ = dart.privateName(responsive_builder, "ScreenBreakpoints.tablet");
  const desktop$ = dart.privateName(responsive_builder, "ScreenBreakpoints.desktop");
  responsive_builder.ScreenBreakpoints = class ScreenBreakpoints extends core.Object {
    get watch() {
      return this[watch$];
    }
    set watch(value) {
      super.watch = value;
    }
    get tablet() {
      return this[tablet$];
    }
    set tablet(value) {
      super.tablet = value;
    }
    get desktop() {
      return this[desktop$];
    }
    set desktop(value) {
      super.desktop = value;
    }
    toString() {
      return "Desktop: " + dart.str(this.desktop) + ", Tablet: " + dart.str(this.tablet) + ", Watch: " + dart.str(this.watch);
    }
  };
  (responsive_builder.ScreenBreakpoints.new = function(opts) {
    let desktop = opts && 'desktop' in opts ? opts.desktop : null;
    let tablet = opts && 'tablet' in opts ? opts.tablet : null;
    let watch = opts && 'watch' in opts ? opts.watch : null;
    this[desktop$] = desktop;
    this[tablet$] = tablet;
    this[watch$] = watch;
    ;
  }).prototype = responsive_builder.ScreenBreakpoints.prototype;
  dart.addTypeTests(responsive_builder.ScreenBreakpoints);
  dart.setLibraryUri(responsive_builder.ScreenBreakpoints, "package:responsive_builder/responsive_builder.dart");
  dart.setFieldSignature(responsive_builder.ScreenBreakpoints, () => ({
    __proto__: dart.getFields(responsive_builder.ScreenBreakpoints.__proto__),
    watch: dart.finalFieldType(core.double),
    tablet: dart.finalFieldType(core.double),
    desktop: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(responsive_builder.ScreenBreakpoints, ['toString']);
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C7;
  let C6;
  let C5;
  const builder$ = dart.privateName(responsive_builder, "ResponsiveBuilder.builder");
  const breakpoints$ = dart.privateName(responsive_builder, "ResponsiveBuilder.breakpoints");
  responsive_builder.ResponsiveBuilder = class ResponsiveBuilder extends framework.StatelessWidget {
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    get breakpoints() {
      return this[breakpoints$];
    }
    set breakpoints(value) {
      super.breakpoints = value;
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, boxConstraints) => {
          let mediaQuery = media_query.MediaQuery.of(context);
          let sizingInformation = new responsive_builder.SizingInformation.new({deviceScreenType: responsive_builder._getDeviceType(mediaQuery, this.breakpoints), screenSize: mediaQuery.size, localWidgetSize: new ui.Size.new(boxConstraints.maxWidth, boxConstraints.maxHeight)});
          return this.builder(context, sizingInformation);
        }, BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
    }
  };
  (responsive_builder.ResponsiveBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let breakpoints = opts && 'breakpoints' in opts ? opts.breakpoints : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[builder$] = builder;
    this[breakpoints$] = breakpoints;
    responsive_builder.ResponsiveBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = responsive_builder.ResponsiveBuilder.prototype;
  dart.addTypeTests(responsive_builder.ResponsiveBuilder);
  dart.setMethodSignature(responsive_builder.ResponsiveBuilder, () => ({
    __proto__: dart.getMethods(responsive_builder.ResponsiveBuilder.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(responsive_builder.ResponsiveBuilder, "package:responsive_builder/responsive_builder.dart");
  dart.setFieldSignature(responsive_builder.ResponsiveBuilder, () => ({
    __proto__: dart.getFields(responsive_builder.ResponsiveBuilder.__proto__),
    builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, responsive_builder.SizingInformation])),
    breakpoints: dart.finalFieldType(responsive_builder.ScreenBreakpoints)
  }));
  let C10;
  let C11;
  let C9;
  let C8;
  const breakpoints$0 = dart.privateName(responsive_builder, "ScreenTypeLayout.breakpoints");
  const watch$0 = dart.privateName(responsive_builder, "ScreenTypeLayout.watch");
  const mobile$ = dart.privateName(responsive_builder, "ScreenTypeLayout.mobile");
  const tablet$0 = dart.privateName(responsive_builder, "ScreenTypeLayout.tablet");
  const desktop$0 = dart.privateName(responsive_builder, "ScreenTypeLayout.desktop");
  responsive_builder.ScreenTypeLayout = class ScreenTypeLayout extends framework.StatelessWidget {
    get breakpoints() {
      return this[breakpoints$0];
    }
    set breakpoints(value) {
      super.breakpoints = value;
    }
    get watch() {
      return this[watch$0];
    }
    set watch(value) {
      super.watch = value;
    }
    get mobile() {
      return this[mobile$];
    }
    set mobile(value) {
      super.mobile = value;
    }
    get tablet() {
      return this[tablet$0];
    }
    set tablet(value) {
      super.tablet = value;
    }
    get desktop() {
      return this[desktop$0];
    }
    set desktop(value) {
      super.desktop = value;
    }
    static _builderOrNull(widget) {
      return widget == null ? null : dart.fn(_ => widget, BuildContextToWidget());
    }
    build(context) {
      return new responsive_builder.ResponsiveBuilder.new({breakpoints: this.breakpoints, builder: dart.fn((context, sizingInformation) => {
          if (dart.equals(sizingInformation.deviceScreenType, responsive_builder.DeviceScreenType.Desktop)) {
            if (this.desktop != null) return this.desktop(context);
            if (this.tablet != null) return this.tablet(context);
          }
          if (dart.equals(sizingInformation.deviceScreenType, responsive_builder.DeviceScreenType.Tablet)) {
            if (this.tablet != null) return this.tablet(context);
          }
          if (dart.equals(sizingInformation.deviceScreenType, responsive_builder.DeviceScreenType.Watch) && this.watch != null) {
            return this.watch(context);
          }
          return this.mobile(context);
        }, BuildContextAndSizingInformationToWidget()), $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
    }
  };
  (responsive_builder.ScreenTypeLayout.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let breakpoints = opts && 'breakpoints' in opts ? opts.breakpoints : null;
    let watch = opts && 'watch' in opts ? opts.watch : null;
    let mobile = opts && 'mobile' in opts ? opts.mobile : null;
    let tablet = opts && 'tablet' in opts ? opts.tablet : null;
    let desktop = opts && 'desktop' in opts ? opts.desktop : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[breakpoints$0] = breakpoints;
    this[watch$0] = responsive_builder.ScreenTypeLayout._builderOrNull(watch);
    this[mobile$] = responsive_builder.ScreenTypeLayout._builderOrNull(mobile);
    this[tablet$0] = responsive_builder.ScreenTypeLayout._builderOrNull(tablet);
    this[desktop$0] = responsive_builder.ScreenTypeLayout._builderOrNull(desktop);
    responsive_builder.ScreenTypeLayout.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = responsive_builder.ScreenTypeLayout.prototype;
  (responsive_builder.ScreenTypeLayout.builder = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let breakpoints = opts && 'breakpoints' in opts ? opts.breakpoints : null;
    let watch = opts && 'watch' in opts ? opts.watch : null;
    let mobile = opts && 'mobile' in opts ? opts.mobile : null;
    let tablet = opts && 'tablet' in opts ? opts.tablet : null;
    let desktop = opts && 'desktop' in opts ? opts.desktop : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[breakpoints$0] = breakpoints;
    this[watch$0] = watch;
    this[mobile$] = mobile;
    this[tablet$0] = tablet;
    this[desktop$0] = desktop;
    responsive_builder.ScreenTypeLayout.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = responsive_builder.ScreenTypeLayout.prototype;
  dart.addTypeTests(responsive_builder.ScreenTypeLayout);
  dart.setMethodSignature(responsive_builder.ScreenTypeLayout, () => ({
    __proto__: dart.getMethods(responsive_builder.ScreenTypeLayout.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(responsive_builder.ScreenTypeLayout, "package:responsive_builder/responsive_builder.dart");
  dart.setFieldSignature(responsive_builder.ScreenTypeLayout, () => ({
    __proto__: dart.getFields(responsive_builder.ScreenTypeLayout.__proto__),
    breakpoints: dart.finalFieldType(responsive_builder.ScreenBreakpoints),
    watch: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
    mobile: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
    tablet: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
    desktop: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext]))
  }));
  let C14;
  let C13;
  let C12;
  const landscape$ = dart.privateName(responsive_builder, "OrientationLayoutBuilder.landscape");
  const portrait$ = dart.privateName(responsive_builder, "OrientationLayoutBuilder.portrait");
  responsive_builder.OrientationLayoutBuilder = class OrientationLayoutBuilder extends framework.StatelessWidget {
    get landscape() {
      return this[landscape$];
    }
    set landscape(value) {
      super.landscape = value;
    }
    get portrait() {
      return this[portrait$];
    }
    set portrait(value) {
      super.portrait = value;
    }
    build(context) {
      return new basic.Builder.new({builder: dart.fn(context => {
          let orientation = media_query.MediaQuery.of(context).orientation;
          if (dart.equals(orientation, media_query.Orientation.landscape)) {
            if (this.landscape != null) {
              return this.landscape(context);
            }
          }
          return this.portrait(context);
        }, BuildContextToWidget()), $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
    }
  };
  (responsive_builder.OrientationLayoutBuilder.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let landscape = opts && 'landscape' in opts ? opts.landscape : null;
    let portrait = opts && 'portrait' in opts ? opts.portrait : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[landscape$] = landscape;
    this[portrait$] = portrait;
    responsive_builder.OrientationLayoutBuilder.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = responsive_builder.OrientationLayoutBuilder.prototype;
  dart.addTypeTests(responsive_builder.OrientationLayoutBuilder);
  dart.setMethodSignature(responsive_builder.OrientationLayoutBuilder, () => ({
    __proto__: dart.getMethods(responsive_builder.OrientationLayoutBuilder.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(responsive_builder.OrientationLayoutBuilder, "package:responsive_builder/responsive_builder.dart");
  dart.setFieldSignature(responsive_builder.OrientationLayoutBuilder, () => ({
    __proto__: dart.getFields(responsive_builder.OrientationLayoutBuilder.__proto__),
    landscape: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
    portrait: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext]))
  }));
  responsive_builder._getDeviceType = function _getDeviceType(mediaQuery, breakpoint) {
    let deviceWidth = mediaQuery.size.shortestSide;
    if (true) {
      deviceWidth = mediaQuery.size.width;
    }
    if (breakpoint != null) {
      if (dart.notNull(deviceWidth) > dart.notNull(breakpoint.desktop)) {
        return responsive_builder.DeviceScreenType.Desktop;
      }
      if (dart.notNull(deviceWidth) > dart.notNull(breakpoint.tablet)) {
        return responsive_builder.DeviceScreenType.Tablet;
      }
      if (dart.notNull(deviceWidth) < dart.notNull(breakpoint.watch)) {
        return responsive_builder.DeviceScreenType.Watch;
      }
    }
    if (dart.notNull(deviceWidth) > 950) {
      return responsive_builder.DeviceScreenType.Desktop;
    }
    if (dart.notNull(deviceWidth) > 600) {
      return responsive_builder.DeviceScreenType.Tablet;
    }
    if (dart.notNull(deviceWidth) < 300) {
      return responsive_builder.DeviceScreenType.Watch;
    }
    return responsive_builder.DeviceScreenType.Mobile;
  };
  dart.trackLibraries("packages/responsive_builder/responsive_builder", {
    "package:responsive_builder/responsive_builder.dart": responsive_builder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["responsive_builder.dart"],"names":[],"mappings":"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","file":"responsive_builder.ddc.js"}');
  // Exports:
  return {
    responsive_builder: responsive_builder
  };
});

//# sourceMappingURL=responsive_builder.ddc.js.map
