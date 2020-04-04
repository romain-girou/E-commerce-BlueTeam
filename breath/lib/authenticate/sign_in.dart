import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:breath_seinajoki/screens/NavigationBar/my_app_bar.dart';
import 'package:breath_seinajoki/services/auth.dart';
import 'package:breath_seinajoki/shared/constants.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

class SignIn extends StatefulWidget {

  final Function toggleView;
  SignIn({this.toggleView});
  
  @override
  _SignInState createState() => _SignInState();
}

class _SignInState extends State<SignIn> {

  final _formKey = GlobalKey<FormState>();
  final AuthService _auth = AuthService();
  bool loading = false;
  String error = '';

  // text field state
  String email = '';
  String password = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        //appBar: MyAppBar(height: 100.0),
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
              SizedBox(height: 20.0),
              Text(
                "Sign in to Breath",
                style: TextStyle(
                  fontSize: 40.0
                ),
              ),
              SizedBox(height: 20.0),
              TextFormField(
                decoration: textInputDecoration.copyWith(hintText: 'Email'),
                validator: (val) {
                  return val.isEmpty ? 'Enter an email' : null;
                },
                onChanged: (val) {
                  setState(() {
                    email = val;
                  });
                },
              ),
              SizedBox(height: 20.0),
              TextFormField(
                decoration: textInputDecoration.copyWith(hintText: 'Password'),
                validator: (val) {
                  return val.length < 6 ? 'Enter an password 6+ chars long' : null;
                },
                onChanged: (val) {
                  setState(() {
                    password = val;
                  });
                },
                obscureText: true,
              ),
              SizedBox(height: 10.0),
              RichText(
                text: TextSpan(
                  children: [
                    TextSpan(
                      text: 'Register here',
                      style: TextStyle(
                        color: Colors.grey[700]
                      ),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          Navigator.pushNamed(context, RegisterRoute);
                      },
                    ),
                  ]
                )
              ),
              SizedBox(height: 20.0),
              RaisedButton(
                color: Colors.lightBlue,
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
                      dynamic result = await _auth.signInWithEmailAndPassword(email, password);
                      if (result == null) {
                        setState(() {
                          loading = false;
                          error = 'Could not sign in with those credentials';
                        });
                      }else {
                        Navigator.of(context).pop();
                      }
                    } 
                  },
              ),
              SizedBox(height: 12.0),
              Text(
                error,
                style: TextStyle(
                  color: Colors.red,
                  fontSize: 14.0,
                ),
              ),
            ],
          ),
        ),
          ),
        ),
    );
  }
}