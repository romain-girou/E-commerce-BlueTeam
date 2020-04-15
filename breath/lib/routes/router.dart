import 'package:breath_seinajoki/authenticate/register.dart';
import 'package:breath_seinajoki/authenticate/sign_in.dart';
import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:breath_seinajoki/screens/homeView/home_view.dart';
import 'package:breath_seinajoki/screens/paymentPage/payment.dart';
import 'package:breath_seinajoki/screens/paymentPage/thankPage.dart';
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
  static Handler _paymenthandler = Handler(
      handlerFunc: (BuildContext context, Map<String, dynamic> params) =>
      Payment());
  static Handler _thankhandler = Handler(
      handlerFunc: (BuildContext context, Map<String, dynamic> params) =>
      ThankPage());

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
        PaymentRoute,
        handler: _paymenthandler)
        ;
    router.define(
        ThankRoute,
        handler: _thankhandler)
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
