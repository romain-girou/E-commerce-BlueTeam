import 'package:breath/screens/LandingPage/landing_page_desktop.dart';
import 'package:breath/screens/LandingPage/landing_page_mobile.dart';
import 'package:breath/screens/NavigationBar/my_drawer.dart';
import 'package:breath/screens/NavigationBar/my_app_bar.dart';
import 'package:flutter/material.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:breath/screens/about_us/about_us_desktop.dart';

class HomeView extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: MyAppBar(height: 100.0),
      endDrawer: MyDrawer(),
      body: AboutUsDesktop()
        );
  }
}