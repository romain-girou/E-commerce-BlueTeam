import 'package:flutter/material.dart';

class UndefinedScreen extends StatelessWidget {

  final String name;
  const UndefinedScreen({this.name});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(child: Text('404 ERROR PAGE NOT FOUND'),)
    );
  }
}