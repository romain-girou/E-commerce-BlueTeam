define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const bullet = Object.create(dart.library);
  const CT = Object.create(null);
  bullet.Bullet = class Bullet extends text.Text {};
  (bullet.Bullet.new = function(data, opts) {
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
    bullet.Bullet.__proto__.new.call(this, "• " + dart.str(data), {key: key, style: style, textAlign: textAlign, textDirection: textDirection, locale: locale, softWrap: softWrap, overflow: overflow, textScaleFactor: textScaleFactor, maxLines: maxLines, semanticsLabel: semanticsLabel, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = bullet.Bullet.prototype;
  dart.addTypeTests(bullet.Bullet);
  dart.setLibraryUri(bullet.Bullet, "package:breath/classes/bullet.dart");
  dart.trackLibraries("packages/breath/classes/bullet", {
    "package:breath/classes/bullet.dart": bullet
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bullet.dart"],"names":[],"mappings":";;;;;;;;;gCAKa;QACD;QACM;QACA;QACI;QACP;QACF;QACQ;QACN;QACH;QACG;;AACJ,2CACP,AAAS,gBAAL,IAAI,SACH,GAAG,SACD,KAAK,aACD,SAAS,iBACL,aAAa,UACpB,MAAM,YACJ,QAAQ,YACR,QAAQ,mBACD,eAAe,YACtB,QAAQ,kBACF,cAAc;;EAC/B","file":"bullet.ddc.js"}');
  // Exports:
  return {
    classes__bullet: bullet
  };
});

//# sourceMappingURL=bullet.ddc.js.map
