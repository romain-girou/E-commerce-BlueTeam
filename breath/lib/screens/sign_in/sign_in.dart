import 'package:breath_seinajoki/screens/NavigationBar/my_app_bar.dart';
import 'package:flutter/material.dart';
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
      body: ScreenTypeLayout(
        // desktop: LandingPageDesktop(),
        // mobile: LandingPageMobile(),
        ),
    );
  }
}