import 'package:flutter/material.dart';
import 'package:breath/routes/routes_names.dart';

class SignIn extends StatefulWidget {
  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {
  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async {
        Navigator.pop(context, HomeRoute);
        return false;
      },
      child: Scaffold(
        body: Text('Sign in page'),
      ),
    );
  }
}