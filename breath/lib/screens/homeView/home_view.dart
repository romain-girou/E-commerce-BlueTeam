import 'package:breath/screens/LandingPage/LandingPage.dart';
import 'package:breath/screens/NavigationBar/navigation_bar.dart';
import 'package:breath/screens/centeredView/centered_view.dart';
import 'package:flutter/material.dart';

import '../centeredView/centered_view.dart';

class HomeView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        NavigationBar(),
        LandingPage(),
      ],
    );
  }
}