import 'package:breath/screens/NavigationBar/navigation_bar.dart';
import 'package:breath/screens/centeredView/centered_view.dart';
import 'package:flutter/material.dart';

class HomeView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CenteredView(
        child: NavigationBar(),
      ),
    );
  }
}