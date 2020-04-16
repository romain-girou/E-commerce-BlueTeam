import 'package:breath/shared/loading.dart';
import 'package:flutter/material.dart';
import 'package:breath/screens/NavigationBar/my_app_bar.dart';
import 'package:breath/screens/NavigationBar/my_drawer.dart';
import 'package:breath/services/auth.dart';

class Register extends StatefulWidget {

  final Function toggleView;
  Register ({this.toggleView});

  @override
  _RegisterState createState() => _RegisterState();
}

class _RegisterState extends State<Register> {

  final _formKey = GlobalKey<FormState>();
  final AuthService _auth = AuthService();
  bool loading = false;
  String error = '';

  // text field state
  String email = '';
  String password = '';

  @override
  Widget build(BuildContext context) {
    return loading ? Loading() : Scaffold(
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
                  Text(
                    'Register to Breath',
                    style: TextStyle(
                      fontSize: 40.0
                    ),
                  ),
                  SizedBox(height: 20.0,),
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
                    onChanged: (val) {
                      setState(() {
                        email = val;
                      });
                    },
                  ),
                  SizedBox(height: 50,),
                  TextFormField(
                    obscureText: true,
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
                    onChanged: (val) {
                      setState(() {
                        password = val;
                      });
                    },
                  ),
                  RaisedButton(
                    onPressed: () {
                      Navigator.pop(context);
                    },
                    child: Text('Sign In',),
                  ),
                  SizedBox(height: 50,),
                  RaisedButton(
                    color: Colors.blue[400],
                    child: Text(
                      'Sign in',
                      style: TextStyle(
                        color: Colors.white,
                      ),
                      ),
                      onPressed: () async {
                        if (_formKey.currentState.validate()) {
                          setState(() {
                            loading = true;
                          });
                          print (await _auth.registerWithEmailAndPassword(email, password));
                          dynamic result = await _auth.registerWithEmailAndPassword(email, password);
                          if (result == null) {
                            setState(() {
                              loading = false;
                              error = 'Could not sign in with those credentials';
                            });
                          } 
                        } 
                      },
                  ),
                ],
              ),
            ),
          ),
        ),
    );
  }
}