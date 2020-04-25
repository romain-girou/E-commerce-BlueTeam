import 'package:breath_seinajoki/authenticate/register.dart';
import 'package:breath_seinajoki/authenticate/sign_in.dart';
import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:breath_seinajoki/screens/ProductPage/product_page_desktop.dart';
import 'package:breath_seinajoki/screens/homeView/home_view.dart';
import 'package:breath_seinajoki/screens/shopping_card/shopping_cart.dart';
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
  static Handler _registerhandler = Handler(
      handlerFunc: (BuildContext context, Map<String, dynamic> params) =>
          Register());
  static Handler _shoppingCarthandler = Handler(
    handlerFunc: (BuildContext context, Map<String, dynamic> params) =>
        ShoppingCart());
  static Handler _productCarthandler = Handler(
    handlerFunc: (BuildContext context, Map<String, dynamic> params) =>
        ProductPageDesktop());       
  // static Handler _wrapperhandler = Handler(
  //     handlerFunc: (BuildContext context, Map<String, dynamic> params) =>
  //         Wrapper());

  static void setupRouter() {
    router.define(
      HomeRoute,
      handler: _homehandler,
    );
    router.define(
      SignInRoute, 
      handler: _signInhandler)
    ;
    router.define(
      RegisterRoute, 
      handler: _registerhandler)
    ;
    router.define(
      ShoppingCartRoute, 
      handler: _shoppingCarthandler)
    ;
    router.define(
      ProductRoute,
      handler: _productCarthandler)
    ;
    // router.define(
    //   WrapperRoute, 
    //   handler: _wrapperhandler)
    // ;
    // router.define(
    //   '/story/:id',
    //   handler: _storyhandler,
    // );
  }
}