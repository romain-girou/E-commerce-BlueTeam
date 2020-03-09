import 'package:breath/routes/routes_names.dart';
import 'package:breath/screens/homeView/home_view.dart';
import 'package:breath/screens/sign_in/sign_in.dart';
import 'package:breath/screens/undefined_route.dart/undefined_route.dart';
import 'package:flutter/material.dart';

Route<dynamic> generateRoute(RouteSettings settings) {
  // All the routing is handle here
  switch(settings.name){
    case HomeRoute: 
      return MaterialPageRoute(builder: (context) => HomeView());
      break;
    case SignInRoute: 
      return MaterialPageRoute(builder: (context) => SignIn());
      break;
    default:
      return MaterialPageRoute(builder: (context) => UndefinedScreen(name: settings.name));
      break;
  }
}