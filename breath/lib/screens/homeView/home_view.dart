import 'package:breath/screens/LandingPage/LandingPage.dart';
import 'package:breath/screens/NavigationBar/my_drawer.dart';
import 'package:breath/screens/NavigationBar/my_app_bar.dart';
import 'package:flutter/material.dart';

class HomeView extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: MyAppBar(height: 100.0),
      endDrawer: MyDrawer(),
      body: LandingPage(),
    );
  }
}