import 'package:breath/screens/LandingPage/landing_page_desktop.dart';
import 'package:breath/screens/LandingPage/landing_page_mobile.dart';
import 'package:breath/screens/NavigationBar/my_app_bar.dart';
import 'package:breath/screens/NavigationBar/my_drawer.dart';
import 'package:flutter/material.dart';
import 'package:breath/routes/routes_names.dart';
import 'package:responsive_builder/responsive_builder.dart';

class SignIn extends StatefulWidget {
  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: MyAppBar(height: 100.0),
      endDrawer: MyDrawer(),
      body: ScreenTypeLayout(
        // desktop: LandingPageDesktop(),
        // mobile: LandingPageMobile(),
        ),
    );
  }
}