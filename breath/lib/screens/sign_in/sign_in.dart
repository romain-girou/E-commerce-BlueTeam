import 'package:breath/screens/LandingPage/landing_page_desktop.dart';
import 'package:breath/screens/LandingPage/landing_page_mobile.dart';
import 'package:breath/screens/NavigationBar/my_app_bar.dart';
import 'package:breath/screens/NavigationBar/my_drawer.dart';
import 'package:breath/screens/centeredView/centered_view.dart';
import 'package:flutter/material.dart';
import 'package:breath/routes/routes_names.dart';
import 'package:responsive_builder/responsive_builder.dart';

class SignIn extends StatefulWidget {
  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {

  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: MyAppBar(height: 100.0),
      endDrawer: MyDrawer(),
      body: Center(
        child: Container(
          // color: Colors.grey[400],
          decoration: BoxDecoration(
            border: Border.all(),
            borderRadius: BorderRadius.all(Radius.circular(10.0)),
          ),
          width: 500,
          padding: EdgeInsets.fromLTRB(10, 50, 10, 0),
          margin: EdgeInsets.fromLTRB(10, 20, 10, 50),
          child: Form(
            key: _formKey,
            child: Column(
              children: <Widget>[
                TextFormField(
                  decoration: InputDecoration(
                    hintText: 'Enter an email',
                    contentPadding: EdgeInsets.all(15.0),
                    // border: InputBorder.none,
                    filled: true,
                    fillColor: Colors.grey[200],
                  ),
                  // The validator receives the text that the user has entered.
                  validator: (value) {
                    if (value.isEmpty) {
                      return 'Please enter some text';
                    }
                    return null;
                  },
                ),
                SizedBox(height: 50,),
                TextFormField(
                  decoration: InputDecoration(
                    hintText: 'Enter a password',
                    contentPadding: EdgeInsets.all(15.0),
                    // border: InputBorder.none,
                    filled: true,
                    fillColor: Colors.grey[200],
                  ),
                  // The validator receives the text that the user has entered.
                  validator: (value) {
                    if (value.isEmpty) {
                      return 'Please enter some text';
                    }
                    return null;
                  },
                ),
                SizedBox(height: 50,),
                RaisedButton(
                  onPressed: null
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}