import 'package:breath_seinajoki/authenticate/sign_in.dart';
import 'package:breath_seinajoki/screens/LandingPage/landing_page_desktop.dart';
import 'package:breath_seinajoki/screens/LandingPage/landing_page_mobile.dart';
import 'package:breath_seinajoki/screens/NavigationBar/my_app_bar.dart';
import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'dart:html';

class HomeView extends StatelessWidget {

  Widget whichScreenToReturn () {
     String url = (window.location.href).substring(25);
     print(url);
    switch (url) {
        case "home":
          return ScreenTypeLayout(
            desktop: LandingPageDesktop(),
            mobile: LandingPageMobile(),
          );
          break;
        case "sign-in":
          return SignIn();
          break;
        default:
      }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: MyAppBar(height: 100.0),
      body: whichScreenToReturn(),
      
      // ScreenTypeLayout(
      //   desktop: LandingPageDesktop(),
      //   mobile: LandingPageMobile(),
      //   ),
    );
  }
}