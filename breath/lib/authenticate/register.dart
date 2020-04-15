import 'package:breath_seinajoki/shared/loading.dart';
import 'package:flutter/material.dart';
import 'package:breath_seinajoki/screens/NavigationBar/my_app_bar.dart';
import 'package:breath_seinajoki/screens/NavigationBar/my_drawer.dart';
import 'package:breath_seinajoki/services/auth.dart';
import 'package:flutter/gestures.dart';
import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:breath_seinajoki/shared/constants.dart';

class Register extends StatefulWidget {
  final Function toggleView;
  Register({this.toggleView});

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
    return loading
        ? Loading()
        : Scaffold(
            // appBar: MyAppBar(height: 100.0),
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
              SizedBox(height: 20.0),
              Text(
                "Register to Breath",
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
                      text: 'Already have an account ?',
                      style: TextStyle(
                        color: Colors.grey[700]
                      ),
                      recognizer: TapGestureRecognizer()
                        ..onTap = () {
                          //Navigator.pushNamed(context, SignInRoute);
                        Navigator.of(context).pop();
                      },
                    ),
                  ]
                )
              ),
              SizedBox(height: 20.0),
              RaisedButton(
                color: Colors.lightBlue,
                child: Text(
                  'Register',
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
                          error = 'Error during registration';
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
