define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/cupertino/action_sheet', 'packages/flutter/src/animation/animation'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__cupertino__action_sheet, packages__flutter__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const pages = packages__flutter__src__widgets__actions.src__widgets__pages;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const page = packages__flutter__material.src__material__page;
  const theme = packages__flutter__material.src__material__theme;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const route$ = packages__flutter__src__cupertino__action_sheet.src__cupertino__route;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const tween = packages__flutter__src__animation__animation.src__animation__tween;
  const tree = Object.create(dart.library);
  const common = Object.create(dart.library);
  const router = Object.create(dart.library);
  const fluro = Object.create(dart.library);
  const $addAll = dartx.addAll;
  const $add = dartx.add;
  const $startsWith = dartx.startsWith;
  const $substring = dartx.substring;
  const $split = dartx.split;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $contains = dartx.contains;
  const $_set = dartx._set;
  const $values = dartx.values;
  const $toList = dartx.toList;
  const $first = dartx.first;
  const $replaceAll = dartx.replaceAll;
  const $containsKey = dartx.containsKey;
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let IdentityMapOfString$ListOfString = () => (IdentityMapOfString$ListOfString = dart.constFn(_js_helper.IdentityMap$(core.String, ListOfString())))();
  let JSArrayOfAppRoute = () => (JSArrayOfAppRoute = dart.constFn(_interceptors.JSArray$(common.AppRoute)))();
  let JSArrayOfRouteTreeNode = () => (JSArrayOfRouteTreeNode = dart.constFn(_interceptors.JSArray$(tree.RouteTreeNode)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let LinkedMapOfRouteTreeNode$RouteTreeNodeMatch = () => (LinkedMapOfRouteTreeNode$RouteTreeNodeMatch = dart.constFn(_js_helper.LinkedMap$(tree.RouteTreeNode, tree.RouteTreeNodeMatch)))();
  let LinkedMapOfString$ListOfString = () => (LinkedMapOfString$ListOfString = dart.constFn(_js_helper.LinkedMap$(core.String, ListOfString())))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let RouteTobool = () => (RouteTobool = dart.constFn(dart.fnType(core.bool, [navigator.Route])))();
  let MaterialPageRouteOfNull = () => (MaterialPageRouteOfNull = dart.constFn(page.MaterialPageRoute$(core.Null)))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let MapOfString$ListOfString = () => (MapOfString$ListOfString = dart.constFn(core.Map$(core.String, ListOfString())))();
  let RouteSettingsAndMapOfString$ListOfStringToMaterialPageRouteOfNull = () => (RouteSettingsAndMapOfString$ListOfStringToMaterialPageRouteOfNull = dart.constFn(dart.fnType(MaterialPageRouteOfNull(), [navigator.RouteSettings, MapOfString$ListOfString()])))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation.Animation$(core.double)))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble()])))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AnimationOfdouble(), AnimationOfdouble(), framework.Widget])))();
  let RouteSettingsAndMapOfString$ListOfStringToPageRoute = () => (RouteSettingsAndMapOfString$ListOfStringToPageRoute = dart.constFn(dart.fnType(pages.PageRoute, [navigator.RouteSettings, MapOfString$ListOfString()])))();
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(tween.Tween$(ui.Offset)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: tree.RouteTreeNodeType.prototype,
        [_name$]: "RouteTreeNodeType.component",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: tree.RouteTreeNodeType.prototype,
        [_name$]: "RouteTreeNodeType.parameter",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], tree.RouteTreeNodeType);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: common.HandlerType.prototype,
        [_name$0]: "HandlerType.route",
        index: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: common.HandlerType.prototype,
        [_name$0]: "HandlerType.function",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.constList([C3 || CT.C3, C4 || CT.C4], common.HandlerType);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: common.TransitionType.prototype,
        [_name$0]: "TransitionType.native",
        index: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: common.TransitionType.prototype,
        [_name$0]: "TransitionType.nativeModal",
        index: 1
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: common.TransitionType.prototype,
        [_name$0]: "TransitionType.inFromLeft",
        index: 2
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: common.TransitionType.prototype,
        [_name$0]: "TransitionType.inFromRight",
        index: 3
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: common.TransitionType.prototype,
        [_name$0]: "TransitionType.inFromBottom",
        index: 4
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: common.TransitionType.prototype,
        [_name$0]: "TransitionType.fadeIn",
        index: 5
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: common.TransitionType.prototype,
        [_name$0]: "TransitionType.custom",
        index: 6
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: common.TransitionType.prototype,
        [_name$0]: "TransitionType.material",
        index: 7
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: common.TransitionType.prototype,
        [_name$0]: "TransitionType.materialFullScreenDialog",
        index: 8
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: common.TransitionType.prototype,
        [_name$0]: "TransitionType.cupertino",
        index: 9
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: common.TransitionType.prototype,
        [_name$0]: "TransitionType.cupertinoFullScreenDialog",
        index: 10
      });
    },
    get C17() {
      return C17 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], common.TransitionType);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: common.RouteMatchType.prototype,
        [_name$0]: "RouteMatchType.visual",
        index: 0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: common.RouteMatchType.prototype,
        [_name$0]: "RouteMatchType.nonVisual",
        index: 1
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: common.RouteMatchType.prototype,
        [_name$0]: "RouteMatchType.noMatch",
        index: 2
      });
    },
    get C21() {
      return C21 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], common.RouteMatchType);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 250000
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 31,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 51,
        [_Location_line]: 192,
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
        [_Location_column]: 16,
        [_Location_line]: 192,
        [_Location_file]: "org-dartlang-app:///packages/fluro/src/router.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 0
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: 1
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 1,
        [OffsetBase__dx]: 0
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: ui.Offset.prototype,
        [OffsetBase__dy]: 0,
        [OffsetBase__dx]: -1
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "position",
        [_Location_column]: 11,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 212,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/fluro/src/router.dart"
      });
    }
  });
  const _name$ = dart.privateName(tree, "_name");
  let C0;
  let C1;
  let C2;
  tree.RouteTreeNodeType = class RouteTreeNodeType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (tree.RouteTreeNodeType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = tree.RouteTreeNodeType.prototype;
  dart.addTypeTests(tree.RouteTreeNodeType);
  dart.setLibraryUri(tree.RouteTreeNodeType, "package:fluro/src/tree.dart");
  dart.setFieldSignature(tree.RouteTreeNodeType, () => ({
    __proto__: dart.getFields(tree.RouteTreeNodeType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(tree.RouteTreeNodeType, ['toString']);
  tree.RouteTreeNodeType.component = C0 || CT.C0;
  tree.RouteTreeNodeType.parameter = C1 || CT.C1;
  tree.RouteTreeNodeType.values = C2 || CT.C2;
  const route$0 = dart.privateName(tree, "AppRouteMatch.route");
  const parameters = dart.privateName(tree, "AppRouteMatch.parameters");
  tree.AppRouteMatch = class AppRouteMatch extends core.Object {
    get route() {
      return this[route$0];
    }
    set route(value) {
      this[route$0] = value;
    }
    get parameters() {
      return this[parameters];
    }
    set parameters(value) {
      this[parameters] = value;
    }
  };
  (tree.AppRouteMatch.new = function(route) {
    this[parameters] = new (IdentityMapOfString$ListOfString()).new();
    this[route$0] = route;
    ;
  }).prototype = tree.AppRouteMatch.prototype;
  dart.addTypeTests(tree.AppRouteMatch);
  dart.setLibraryUri(tree.AppRouteMatch, "package:fluro/src/tree.dart");
  dart.setFieldSignature(tree.AppRouteMatch, () => ({
    __proto__: dart.getFields(tree.AppRouteMatch.__proto__),
    route: dart.fieldType(common.AppRoute),
    parameters: dart.fieldType(core.Map$(core.String, core.List$(core.String)))
  }));
  const node$ = dart.privateName(tree, "RouteTreeNodeMatch.node");
  const parameters$ = dart.privateName(tree, "RouteTreeNodeMatch.parameters");
  tree.RouteTreeNodeMatch = class RouteTreeNodeMatch extends core.Object {
    get node() {
      return this[node$];
    }
    set node(value) {
      this[node$] = value;
    }
    get parameters() {
      return this[parameters$];
    }
    set parameters(value) {
      this[parameters$] = value;
    }
  };
  (tree.RouteTreeNodeMatch.new = function(node) {
    this[parameters$] = new (IdentityMapOfString$ListOfString()).new();
    this[node$] = node;
    ;
  }).prototype = tree.RouteTreeNodeMatch.prototype;
  (tree.RouteTreeNodeMatch.fromMatch = function(match, node) {
    this[parameters$] = new (IdentityMapOfString$ListOfString()).new();
    this[node$] = node;
    this.parameters = new (IdentityMapOfString$ListOfString()).new();
    if (match != null) {
      this.parameters[$addAll](match.parameters);
    }
  }).prototype = tree.RouteTreeNodeMatch.prototype;
  dart.addTypeTests(tree.RouteTreeNodeMatch);
  dart.setLibraryUri(tree.RouteTreeNodeMatch, "package:fluro/src/tree.dart");
  dart.setFieldSignature(tree.RouteTreeNodeMatch, () => ({
    __proto__: dart.getFields(tree.RouteTreeNodeMatch.__proto__),
    node: dart.fieldType(tree.RouteTreeNode),
    parameters: dart.fieldType(core.Map$(core.String, core.List$(core.String)))
  }));
  const part$ = dart.privateName(tree, "RouteTreeNode.part");
  const type$ = dart.privateName(tree, "RouteTreeNode.type");
  const routes = dart.privateName(tree, "RouteTreeNode.routes");
  const nodes = dart.privateName(tree, "RouteTreeNode.nodes");
  const parent = dart.privateName(tree, "RouteTreeNode.parent");
  tree.RouteTreeNode = class RouteTreeNode extends core.Object {
    get part() {
      return this[part$];
    }
    set part(value) {
      this[part$] = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    get routes() {
      return this[routes];
    }
    set routes(value) {
      this[routes] = value;
    }
    get nodes() {
      return this[nodes];
    }
    set nodes(value) {
      this[nodes] = value;
    }
    get parent() {
      return this[parent];
    }
    set parent(value) {
      this[parent] = value;
    }
    isParameter() {
      return dart.equals(this.type, tree.RouteTreeNodeType.parameter);
    }
  };
  (tree.RouteTreeNode.new = function(part, type) {
    this[routes] = JSArrayOfAppRoute().of([]);
    this[nodes] = JSArrayOfRouteTreeNode().of([]);
    this[parent] = null;
    this[part$] = part;
    this[type$] = type;
    ;
  }).prototype = tree.RouteTreeNode.prototype;
  dart.addTypeTests(tree.RouteTreeNode);
  dart.setMethodSignature(tree.RouteTreeNode, () => ({
    __proto__: dart.getMethods(tree.RouteTreeNode.__proto__),
    isParameter: dart.fnType(core.bool, [])
  }));
  dart.setLibraryUri(tree.RouteTreeNode, "package:fluro/src/tree.dart");
  dart.setFieldSignature(tree.RouteTreeNode, () => ({
    __proto__: dart.getFields(tree.RouteTreeNode.__proto__),
    part: dart.fieldType(core.String),
    type: dart.fieldType(tree.RouteTreeNodeType),
    routes: dart.fieldType(core.List$(common.AppRoute)),
    nodes: dart.fieldType(core.List$(tree.RouteTreeNode)),
    parent: dart.fieldType(tree.RouteTreeNode)
  }));
  const _nodes = dart.privateName(tree, "_nodes");
  const _hasDefaultRoute = dart.privateName(tree, "_hasDefaultRoute");
  const _nodeForComponent = dart.privateName(tree, "_nodeForComponent");
  const _typeForComponent = dart.privateName(tree, "_typeForComponent");
  const _printSubTree = dart.privateName(tree, "_printSubTree");
  const _isParameterComponent = dart.privateName(tree, "_isParameterComponent");
  tree.RouteTree = class RouteTree extends core.Object {
    addRoute(route) {
      let path = route.route;
      if (path === "/") {
        if (dart.test(this[_hasDefaultRoute])) {
          dart.throw("Default route was already defined");
        }
        let node = new tree.RouteTreeNode.new(path, tree.RouteTreeNodeType.component);
        node.routes = JSArrayOfAppRoute().of([route]);
        this[_nodes][$add](node);
        this[_hasDefaultRoute] = true;
        return;
      }
      if (path[$startsWith]("/")) {
        path = path[$substring](1);
      }
      let pathComponents = path[$split]("/");
      let parent = null;
      for (let i = 0; i < dart.notNull(pathComponents[$length]); i = i + 1) {
        let component = pathComponents[$_get](i);
        let node = this[_nodeForComponent](component, parent);
        if (node == null) {
          let type = this[_typeForComponent](component);
          node = new tree.RouteTreeNode.new(component, type);
          node.parent = parent;
          if (parent == null) {
            this[_nodes][$add](node);
          } else {
            parent.nodes[$add](node);
          }
        }
        if (i === dart.notNull(pathComponents[$length]) - 1) {
          if (node.routes == null) {
            node.routes = JSArrayOfAppRoute().of([route]);
          } else {
            node.routes[$add](route);
          }
        }
        parent = node;
      }
    }
    matchRoute(path) {
      let usePath = path;
      if (usePath[$startsWith]("/")) {
        usePath = path[$substring](1);
      }
      let components = usePath[$split]("/");
      if (path === "/") {
        components = JSArrayOfString().of(["/"]);
      }
      let nodeMatches = new (LinkedMapOfRouteTreeNode$RouteTreeNodeMatch()).new();
      let nodesToCheck = this[_nodes];
      for (let checkComponent of components) {
        let currentMatches = new (LinkedMapOfRouteTreeNode$RouteTreeNodeMatch()).new();
        let nextNodes = JSArrayOfRouteTreeNode().of([]);
        for (let node of nodesToCheck) {
          let pathPart = checkComponent;
          let queryMap = null;
          if (checkComponent[$contains]("?")) {
            let splitParam = checkComponent[$split]("?");
            pathPart = splitParam[$_get](0);
            queryMap = this.parseQueryString(splitParam[$_get](1));
          }
          let isMatch = node.part == pathPart || dart.test(node.isParameter());
          if (isMatch) {
            let parentMatch = nodeMatches[$_get](node.parent);
            let match = new tree.RouteTreeNodeMatch.fromMatch(parentMatch, node);
            if (dart.test(node.isParameter())) {
              let paramKey = node.part[$substring](1);
              match.parameters[$_set](paramKey, JSArrayOfString().of([pathPart]));
            }
            if (queryMap != null) {
              match.parameters[$addAll](queryMap);
            }
            currentMatches[$_set](node, match);
            if (node.nodes != null) {
              nextNodes[$addAll](node.nodes);
            }
          }
        }
        nodeMatches = currentMatches;
        nodesToCheck = nextNodes;
        if (currentMatches[$values][$length] === 0) {
          return null;
        }
      }
      let matches = nodeMatches[$values][$toList]();
      if (dart.notNull(matches[$length]) > 0) {
        let match = matches[$first];
        let nodeToUse = match.node;
        if (nodeToUse != null && nodeToUse.routes != null && dart.notNull(nodeToUse.routes[$length]) > 0) {
          let routes = nodeToUse.routes;
          let routeMatch = new tree.AppRouteMatch.new(routes[$_get](0));
          routeMatch.parameters = match.parameters;
          return routeMatch;
        }
      }
      return null;
    }
    printTree() {
      this[_printSubTree]();
    }
    [_printSubTree](opts) {
      let parent = opts && 'parent' in opts ? opts.parent : null;
      let level = opts && 'level' in opts ? opts.level : 0;
      let nodes = parent != null ? parent.nodes : this[_nodes];
      for (let node of nodes) {
        let indent = "";
        for (let i = 0; i < dart.notNull(level); i = i + 1) {
          indent = indent + "    ";
        }
        core.print(indent + dart.str(node.part) + ": total routes=" + dart.str(node.routes[$length]));
        if (node.nodes != null && dart.notNull(node.nodes[$length]) > 0) {
          this[_printSubTree]({parent: node, level: dart.notNull(level) + 1});
        }
      }
    }
    [_nodeForComponent](component, parent) {
      let nodes = this[_nodes];
      if (parent != null) {
        nodes = parent.nodes;
      }
      for (let node of nodes) {
        if (node.part == component) {
          return node;
        }
      }
      return null;
    }
    [_typeForComponent](component) {
      let type = tree.RouteTreeNodeType.component;
      if (dart.test(this[_isParameterComponent](component))) {
        type = tree.RouteTreeNodeType.parameter;
      }
      return type;
    }
    [_isParameterComponent](component) {
      return component[$startsWith](":");
    }
    parseQueryString(query) {
      let search = core.RegExp.new("([^&=]+)=?([^&]*)");
      let params = new (LinkedMapOfString$ListOfString()).new();
      if (query[$startsWith]("?")) query = query[$substring](1);
      function decode(s) {
        return core.Uri.decodeComponent(s[$replaceAll]("+", " "));
      }
      dart.fn(decode, StringToString());
      for (let match of search.allMatches(query)) {
        let key = decode(match.group(1));
        let value = decode(match.group(2));
        if (dart.test(params[$containsKey](key))) {
          params[$_get](key)[$add](value);
        } else {
          params[$_set](key, JSArrayOfString().of([value]));
        }
      }
      return params;
    }
  };
  (tree.RouteTree.new = function() {
    this[_nodes] = JSArrayOfRouteTreeNode().of([]);
    this[_hasDefaultRoute] = false;
    ;
  }).prototype = tree.RouteTree.prototype;
  dart.addTypeTests(tree.RouteTree);
  dart.setMethodSignature(tree.RouteTree, () => ({
    __proto__: dart.getMethods(tree.RouteTree.__proto__),
    addRoute: dart.fnType(dart.void, [common.AppRoute]),
    matchRoute: dart.fnType(tree.AppRouteMatch, [core.String]),
    printTree: dart.fnType(dart.void, []),
    [_printSubTree]: dart.fnType(dart.void, [], {level: core.int, parent: tree.RouteTreeNode}, {}),
    [_nodeForComponent]: dart.fnType(tree.RouteTreeNode, [core.String, tree.RouteTreeNode]),
    [_typeForComponent]: dart.fnType(tree.RouteTreeNodeType, [core.String]),
    [_isParameterComponent]: dart.fnType(core.bool, [core.String]),
    parseQueryString: dart.fnType(core.Map$(core.String, core.List$(core.String)), [core.String])
  }));
  dart.setLibraryUri(tree.RouteTree, "package:fluro/src/tree.dart");
  dart.setFieldSignature(tree.RouteTree, () => ({
    __proto__: dart.getFields(tree.RouteTree.__proto__),
    [_nodes]: dart.finalFieldType(core.List$(tree.RouteTreeNode)),
    [_hasDefaultRoute]: dart.fieldType(core.bool)
  }));
  const _name$0 = dart.privateName(common, "_name");
  let C3;
  let C4;
  let C5;
  common.HandlerType = class HandlerType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (common.HandlerType.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = common.HandlerType.prototype;
  dart.addTypeTests(common.HandlerType);
  dart.setLibraryUri(common.HandlerType, "package:fluro/src/common.dart");
  dart.setFieldSignature(common.HandlerType, () => ({
    __proto__: dart.getFields(common.HandlerType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(common.HandlerType, ['toString']);
  common.HandlerType.route = C3 || CT.C3;
  common.HandlerType.function = C4 || CT.C4;
  common.HandlerType.values = C5 || CT.C5;
  const type$0 = dart.privateName(common, "Handler.type");
  const handlerFunc$ = dart.privateName(common, "Handler.handlerFunc");
  common.Handler = class Handler extends core.Object {
    get type() {
      return this[type$0];
    }
    set type(value) {
      super.type = value;
    }
    get handlerFunc() {
      return this[handlerFunc$];
    }
    set handlerFunc(value) {
      super.handlerFunc = value;
    }
  };
  (common.Handler.new = function(opts) {
    let type = opts && 'type' in opts ? opts.type : C3 || CT.C3;
    let handlerFunc = opts && 'handlerFunc' in opts ? opts.handlerFunc : null;
    this[type$0] = type;
    this[handlerFunc$] = handlerFunc;
    ;
  }).prototype = common.Handler.prototype;
  dart.addTypeTests(common.Handler);
  dart.setLibraryUri(common.Handler, "package:fluro/src/common.dart");
  dart.setFieldSignature(common.Handler, () => ({
    __proto__: dart.getFields(common.Handler.__proto__),
    type: dart.finalFieldType(common.HandlerType),
    handlerFunc: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, core.Map$(core.String, core.List$(core.String))]))
  }));
  const route$1 = dart.privateName(common, "AppRoute.route");
  const handler$ = dart.privateName(common, "AppRoute.handler");
  const transitionType$ = dart.privateName(common, "AppRoute.transitionType");
  common.AppRoute = class AppRoute extends core.Object {
    get route() {
      return this[route$1];
    }
    set route(value) {
      this[route$1] = value;
    }
    get handler() {
      return this[handler$];
    }
    set handler(value) {
      this[handler$] = value;
    }
    get transitionType() {
      return this[transitionType$];
    }
    set transitionType(value) {
      this[transitionType$] = value;
    }
  };
  (common.AppRoute.new = function(route, handler, opts) {
    let transitionType = opts && 'transitionType' in opts ? opts.transitionType : null;
    this[route$1] = route;
    this[handler$] = handler;
    this[transitionType$] = transitionType;
    ;
  }).prototype = common.AppRoute.prototype;
  dart.addTypeTests(common.AppRoute);
  dart.setLibraryUri(common.AppRoute, "package:fluro/src/common.dart");
  dart.setFieldSignature(common.AppRoute, () => ({
    __proto__: dart.getFields(common.AppRoute.__proto__),
    route: dart.fieldType(core.String),
    handler: dart.fieldType(dart.dynamic),
    transitionType: dart.fieldType(common.TransitionType)
  }));
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
  let C17;
  common.TransitionType = class TransitionType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (common.TransitionType.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = common.TransitionType.prototype;
  dart.addTypeTests(common.TransitionType);
  dart.setLibraryUri(common.TransitionType, "package:fluro/src/common.dart");
  dart.setFieldSignature(common.TransitionType, () => ({
    __proto__: dart.getFields(common.TransitionType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(common.TransitionType, ['toString']);
  common.TransitionType.native = C6 || CT.C6;
  common.TransitionType.nativeModal = C7 || CT.C7;
  common.TransitionType.inFromLeft = C8 || CT.C8;
  common.TransitionType.inFromRight = C9 || CT.C9;
  common.TransitionType.inFromBottom = C10 || CT.C10;
  common.TransitionType.fadeIn = C11 || CT.C11;
  common.TransitionType.custom = C12 || CT.C12;
  common.TransitionType.material = C13 || CT.C13;
  common.TransitionType.materialFullScreenDialog = C14 || CT.C14;
  common.TransitionType.cupertino = C15 || CT.C15;
  common.TransitionType.cupertinoFullScreenDialog = C16 || CT.C16;
  common.TransitionType.values = C17 || CT.C17;
  let C18;
  let C19;
  let C20;
  let C21;
  common.RouteMatchType = class RouteMatchType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (common.RouteMatchType.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = common.RouteMatchType.prototype;
  dart.addTypeTests(common.RouteMatchType);
  dart.setLibraryUri(common.RouteMatchType, "package:fluro/src/common.dart");
  dart.setFieldSignature(common.RouteMatchType, () => ({
    __proto__: dart.getFields(common.RouteMatchType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(common.RouteMatchType, ['toString']);
  common.RouteMatchType.visual = C18 || CT.C18;
  common.RouteMatchType.nonVisual = C19 || CT.C19;
  common.RouteMatchType.noMatch = C20 || CT.C20;
  common.RouteMatchType.values = C21 || CT.C21;
  const route$2 = dart.privateName(common, "RouteMatch.route");
  const matchType$ = dart.privateName(common, "RouteMatch.matchType");
  const errorMessage$ = dart.privateName(common, "RouteMatch.errorMessage");
  common.RouteMatch = class RouteMatch extends core.Object {
    get route() {
      return this[route$2];
    }
    set route(value) {
      super.route = value;
    }
    get matchType() {
      return this[matchType$];
    }
    set matchType(value) {
      super.matchType = value;
    }
    get errorMessage() {
      return this[errorMessage$];
    }
    set errorMessage(value) {
      super.errorMessage = value;
    }
  };
  (common.RouteMatch.new = function(opts) {
    let matchType = opts && 'matchType' in opts ? opts.matchType : C20 || CT.C20;
    let route = opts && 'route' in opts ? opts.route : null;
    let errorMessage = opts && 'errorMessage' in opts ? opts.errorMessage : "Unable to match route. Please check the logs.";
    this[matchType$] = matchType;
    this[route$2] = route;
    this[errorMessage$] = errorMessage;
    ;
  }).prototype = common.RouteMatch.prototype;
  dart.addTypeTests(common.RouteMatch);
  dart.setLibraryUri(common.RouteMatch, "package:fluro/src/common.dart");
  dart.setFieldSignature(common.RouteMatch, () => ({
    __proto__: dart.getFields(common.RouteMatch.__proto__),
    route: dart.finalFieldType(navigator.Route),
    matchType: dart.finalFieldType(common.RouteMatchType),
    errorMessage: dart.finalFieldType(core.String)
  }));
  const message$ = dart.privateName(common, "RouteNotFoundException.message");
  const path$ = dart.privateName(common, "RouteNotFoundException.path");
  common.RouteNotFoundException = class RouteNotFoundException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get path() {
      return this[path$];
    }
    set path(value) {
      super.path = value;
    }
    toString() {
      return "No registered route was found to handle '" + dart.str(this.path) + "'";
    }
  };
  (common.RouteNotFoundException.new = function(message, path) {
    this[message$] = message;
    this[path$] = path;
    ;
  }).prototype = common.RouteNotFoundException.prototype;
  dart.addTypeTests(common.RouteNotFoundException);
  common.RouteNotFoundException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(common.RouteNotFoundException, "package:fluro/src/common.dart");
  dart.setFieldSignature(common.RouteNotFoundException, () => ({
    __proto__: dart.getFields(common.RouteNotFoundException.__proto__),
    message: dart.finalFieldType(core.String),
    path: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(common.RouteNotFoundException, ['toString']);
  const _routeTree = dart.privateName(router, "_routeTree");
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C22;
  const _notFoundRoute = dart.privateName(router, "_notFoundRoute");
  const _standardTransitionsBuilder = dart.privateName(router, "_standardTransitionsBuilder");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C25;
  let C26;
  let C24;
  let C23;
  const OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  const OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  let C27;
  let C28;
  let C29;
  let C30;
  let C33;
  let C34;
  let C32;
  let C31;
  const notFoundHandler = dart.privateName(router, "Router.notFoundHandler");
  router.Router = class Router extends core.Object {
    get notFoundHandler() {
      return this[notFoundHandler];
    }
    set notFoundHandler(value) {
      this[notFoundHandler] = value;
    }
    define(routePath, opts) {
      let handler = opts && 'handler' in opts ? opts.handler : null;
      let transitionType = opts && 'transitionType' in opts ? opts.transitionType : null;
      this[_routeTree].addRoute(new common.AppRoute.new(routePath, handler, {transitionType: transitionType}));
    }
    match(path) {
      return this[_routeTree].matchRoute(path);
    }
    pop(context) {
      return navigator.Navigator.pop(core.Object, context);
    }
    navigateTo(context, path, opts) {
      let replace = opts && 'replace' in opts ? opts.replace : false;
      let clearStack = opts && 'clearStack' in opts ? opts.clearStack : false;
      let transition = opts && 'transition' in opts ? opts.transition : null;
      let transitionDuration = opts && 'transitionDuration' in opts ? opts.transitionDuration : C22 || CT.C22;
      let transitionBuilder = opts && 'transitionBuilder' in opts ? opts.transitionBuilder : null;
      let routeMatch = this.matchRoute(context, path, {transitionType: transition, transitionsBuilder: transitionBuilder, transitionDuration: transitionDuration});
      let route = routeMatch.route;
      let completer = async.Completer.new();
      let future = completer.future;
      if (dart.equals(routeMatch.matchType, common.RouteMatchType.nonVisual)) {
        completer.complete("Non visual route type.");
      } else {
        if (route == null && this.notFoundHandler != null) {
          route = this[_notFoundRoute](context, path);
        }
        if (route != null) {
          if (dart.test(clearStack)) {
            future = navigator.Navigator.pushAndRemoveUntil(core.Object, context, route, dart.fn(check => false, RouteTobool()));
          } else {
            future = dart.test(replace) ? navigator.Navigator.pushReplacement(core.Object, core.Object, context, route) : navigator.Navigator.push(core.Object, context, route);
          }
          completer.complete();
        } else {
          let error = "No registered route was found to handle '" + dart.str(path) + "'.";
          core.print(error);
          completer.completeError(new common.RouteNotFoundException.new(error, path));
        }
      }
      return future;
    }
    [_notFoundRoute](context, path) {
      let creator = dart.fn((routeSettings, parameters) => new (MaterialPageRouteOfNull()).new({settings: routeSettings, builder: dart.fn(context => this.notFoundHandler.handlerFunc(context, parameters), BuildContextToWidget())}), RouteSettingsAndMapOfString$ListOfStringToMaterialPageRouteOfNull());
      return creator(new navigator.RouteSettings.new({name: path}), null);
    }
    matchRoute(buildContext, path, opts) {
      let t0, t0$, t0$0;
      let routeSettings = opts && 'routeSettings' in opts ? opts.routeSettings : null;
      let transitionType = opts && 'transitionType' in opts ? opts.transitionType : null;
      let transitionDuration = opts && 'transitionDuration' in opts ? opts.transitionDuration : C22 || CT.C22;
      let transitionsBuilder = opts && 'transitionsBuilder' in opts ? opts.transitionsBuilder : null;
      let settingsToUse = routeSettings;
      if (routeSettings == null) {
        settingsToUse = new navigator.RouteSettings.new({name: path});
      }
      let match = this[_routeTree].matchRoute(path);
      let route = (t0 = match, t0 == null ? null : t0.route);
      let handler = common.Handler._check(route != null ? route.handler : this.notFoundHandler);
      let transition = transitionType;
      if (transitionType == null) {
        transition = route != null ? route.transitionType : common.TransitionType.native;
      }
      if (route == null && this.notFoundHandler == null) {
        return new common.RouteMatch.new({matchType: common.RouteMatchType.noMatch, errorMessage: "No matching route was found"});
      }
      let parameters = (t0$0 = (t0$ = match, t0$ == null ? null : t0$.parameters), t0$0 == null ? new (IdentityMapOfString$ListOfString()).new() : t0$0);
      if (dart.equals(handler.type, common.HandlerType.function)) {
        handler.handlerFunc(buildContext, parameters);
        return new common.RouteMatch.new({matchType: common.RouteMatchType.nonVisual});
      }
      let creator = dart.fn((routeSettings, parameters) => {
        let isNativeTransition = dart.equals(transition, common.TransitionType.native) || dart.equals(transition, common.TransitionType.nativeModal);
        if (isNativeTransition) {
          if (dart.equals(theme.Theme.of(buildContext).platform, platform.TargetPlatform.iOS)) {
            return new route$.CupertinoPageRoute.new({settings: routeSettings, fullscreenDialog: dart.equals(transition, common.TransitionType.nativeModal), builder: dart.fn(context => handler.handlerFunc(context, parameters), BuildContextToWidget())});
          } else {
            return new page.MaterialPageRoute.new({settings: routeSettings, fullscreenDialog: dart.equals(transition, common.TransitionType.nativeModal), builder: dart.fn(context => handler.handlerFunc(context, parameters), BuildContextToWidget())});
          }
        } else if (dart.equals(transition, common.TransitionType.material) || dart.equals(transition, common.TransitionType.materialFullScreenDialog)) {
          return new page.MaterialPageRoute.new({settings: routeSettings, fullscreenDialog: dart.equals(transition, common.TransitionType.materialFullScreenDialog), builder: dart.fn(context => handler.handlerFunc(context, parameters), BuildContextToWidget())});
        } else if (dart.equals(transition, common.TransitionType.cupertino) || dart.equals(transition, common.TransitionType.cupertinoFullScreenDialog)) {
          return new route$.CupertinoPageRoute.new({settings: routeSettings, fullscreenDialog: dart.equals(transition, common.TransitionType.cupertinoFullScreenDialog), builder: dart.fn(context => handler.handlerFunc(context, parameters), BuildContextToWidget())});
        } else {
          let routeTransitionsBuilder = null;
          if (dart.equals(transition, common.TransitionType.custom)) {
            routeTransitionsBuilder = transitionsBuilder;
          } else {
            routeTransitionsBuilder = this[_standardTransitionsBuilder](transition);
          }
          return new pages.PageRouteBuilder.new({settings: routeSettings, pageBuilder: dart.fn((context, animation, secondaryAnimation) => handler.handlerFunc(context, parameters), BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget()), transitionDuration: transitionDuration, transitionsBuilder: BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget()._check(routeTransitionsBuilder)});
        }
      }, RouteSettingsAndMapOfString$ListOfStringToPageRoute());
      return new common.RouteMatch.new({matchType: common.RouteMatchType.visual, route: creator(settingsToUse, parameters)});
    }
    [_standardTransitionsBuilder](transitionType) {
      return dart.fn((context, animation, secondaryAnimation, child) => {
        if (dart.equals(transitionType, common.TransitionType.fadeIn)) {
          return new transitions.FadeTransition.new({opacity: animation, child: child, $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
        } else {
          let topLeft = C27 || CT.C27;
          let topRight = C28 || CT.C28;
          let bottomLeft = C29 || CT.C29;
          let startOffset = bottomLeft;
          let endOffset = topLeft;
          if (dart.equals(transitionType, common.TransitionType.inFromLeft)) {
            startOffset = C30 || CT.C30;
            endOffset = topLeft;
          } else if (dart.equals(transitionType, common.TransitionType.inFromRight)) {
            startOffset = topRight;
            endOffset = topLeft;
          }
          return new transitions.SlideTransition.new({position: new (TweenOfOffset()).new({begin: startOffset, end: endOffset}).animate(animation), child: child, $creationLocationd_0dea112b090073317d4: C31 || CT.C31});
        }
      }, BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget());
    }
    generator(routeSettings) {
      let match = this.matchRoute(null, routeSettings.name, {routeSettings: routeSettings});
      return match.route;
    }
    printTree() {
      this[_routeTree].printTree();
    }
  };
  (router.Router.new = function() {
    this[_routeTree] = new tree.RouteTree.new();
    this[notFoundHandler] = null;
    ;
  }).prototype = router.Router.prototype;
  dart.addTypeTests(router.Router);
  dart.setMethodSignature(router.Router, () => ({
    __proto__: dart.getMethods(router.Router.__proto__),
    define: dart.fnType(dart.void, [core.String], {handler: common.Handler, transitionType: common.TransitionType}, {}),
    match: dart.fnType(tree.AppRouteMatch, [core.String]),
    pop: dart.fnType(dart.void, [framework.BuildContext]),
    navigateTo: dart.fnType(async.Future, [framework.BuildContext, core.String], {clearStack: core.bool, replace: core.bool, transition: common.TransitionType, transitionBuilder: dart.fnType(framework.Widget, [framework.BuildContext, animation.Animation$(core.double), animation.Animation$(core.double), framework.Widget]), transitionDuration: core.Duration}, {}),
    [_notFoundRoute]: dart.fnType(navigator.Route$(core.Null), [framework.BuildContext, core.String]),
    matchRoute: dart.fnType(common.RouteMatch, [framework.BuildContext, core.String], {routeSettings: navigator.RouteSettings, transitionDuration: core.Duration, transitionType: common.TransitionType, transitionsBuilder: dart.fnType(framework.Widget, [framework.BuildContext, animation.Animation$(core.double), animation.Animation$(core.double), framework.Widget])}, {}),
    [_standardTransitionsBuilder]: dart.fnType(dart.fnType(framework.Widget, [framework.BuildContext, animation.Animation$(core.double), animation.Animation$(core.double), framework.Widget]), [common.TransitionType]),
    generator: dart.fnType(navigator.Route, [navigator.RouteSettings]),
    printTree: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(router.Router, "package:fluro/src/router.dart");
  dart.setFieldSignature(router.Router, () => ({
    __proto__: dart.getFields(router.Router.__proto__),
    [_routeTree]: dart.finalFieldType(tree.RouteTree),
    notFoundHandler: dart.fieldType(common.Handler)
  }));
  dart.defineLazy(router.Router, {
    /*router.Router.appRouter*/get appRouter() {
      return new router.Router.new();
    }
  });
  dart.trackLibraries("packages/fluro/fluro", {
    "package:fluro/src/tree.dart": tree,
    "package:fluro/src/common.dart": common,
    "package:fluro/src/router.dart": router,
    "package:fluro/fluro.dart": fluro
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/tree.dart","src/common.dart","src/router.dart"],"names":[],"mappings":"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","file":"fluro.ddc.js"}');
  // Exports:
  return {
    src__tree: tree,
    src__common: common,
    src__router: router,
    fluro: fluro
  };
});

//# sourceMappingURL=fluro.ddc.js.map
