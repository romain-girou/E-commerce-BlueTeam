import 'package:breath/routes/routes_names.dart';
import 'package:breath/screens/homeView/home_view.dart';
import 'package:breath/screens/sign_in/sign_in.dart';
import 'package:breath/screens/undefined_route.dart/undefined_route.dart';
import 'package:flutter/material.dart';
import 'package:fluro/fluro.dart';


class FluroRouter {
  static Router router = Router();
  // static Handler _storyhandler = Handler(
  //     handlerFunc: (BuildContext context, Map<String, dynamic> params) =>
  //         HomeView(id: params['id'][0]));
  static Handler _homehandler = Handler(
      handlerFunc: (BuildContext context, Map<String, dynamic> params) =>
          HomeView());
  static Handler _signInhandler = Handler(
      handlerFunc: (BuildContext context, Map<String, dynamic> params) =>
          SignIn());

  static void setupRouter() {
    router.define(
      HomeRoute,
      handler: _homehandler,
    );
    router.define(
      SignInRoute, 
      handler: _signInhandler)
    ;
    // router.define(
    //   '/story/:id',
    //   handler: _storyhandler,
    // );
  }
}