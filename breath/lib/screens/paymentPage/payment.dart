import 'package:breath_seinajoki/classes/bullet.dart';
import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:breath_seinajoki/shared/constants.dart';
import 'package:breath_seinajoki/screens/NavigationBar/my_app_bar.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:breath_seinajoki/services/auth.dart';
import 'package:provider/provider.dart';
import 'package:breath_seinajoki/models/user.dart';

class Payment extends StatefulWidget {
  final Function toggleView;
  final auth = AuthService;
  Payment({this.toggleView});

  @override
  _PaymentState createState() => _PaymentState();
}

class _PaymentState extends State<Payment> {
  final _formKey = GlobalKey<FormState>();

  bool loading = false;
  String error = '';

  String fullName = '';
  String address = '';
  String city = '';
  String state = '';
  String zip = '';
  String country = '';
  String phone = '';
  String instructions = '';

  @override
  Widget build(BuildContext context) {
    return StreamProvider<User>.value(
        value: AuthService().user,
        child: Scaffold(
            appBar: MyAppBar(height: 100.0),
            body: Scrollbar(
                child: ListView(
                    children: <Widget>[
                      Center(
                          child: Container(
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
                                            "Delivery Form",
                                            style: TextStyle(fontSize: 40.0),
                                        ),
                                        SizedBox(height: 20.0),
                                        TextFormField(
                                            decoration: textInputDecoration.copyWith(
                                                hintText: 'Full Name'),
                                            validator: (val) {
                                              return val.isEmpty ? 'Enter your full name' : null;
                                            },
                                            onChanged: (val) {
                                              setState(() {
                                                fullName = val;
                                              });
                                            },
                                        ),
                                        SizedBox(height: 20.0),
                                        TextFormField(
                                            decoration: textInputDecoration.copyWith(
                                                hintText: 'address line'),
                                            validator: (val) {
                                              return val.isEmpty ? 'Enter your address' : null;
                                            },
                                            onChanged: (val) {
                                              setState(() {
                                                address = val;
                                              });
                                            },
                                            obscureText: true,
                                        ),
                                        SizedBox(height: 20.0),
                                        TextFormField(
                                            decoration:
                                            textInputDecoration.copyWith(hintText: 'City'),
                                            validator: (val) {
                                              return val.isEmpty ? 'Enter your city' : null;
                                            },
                                            onChanged: (val) {
                                              setState(() {
                                                city = val;
                                              });
                                            },
                                        ),
                                        SizedBox(height: 20.0),
                                        TextFormField(
                                            decoration: textInputDecoration.copyWith(
                                                hintText: 'State/Province/Region'),
                                            validator: (val) {
                                              return val.isEmpty
                                                  ? 'Enter your State/Province/Region'
                                                  : null;
                                            },
                                            onChanged: (val) {
                                              setState(() {
                                                state = val;
                                              });
                                            },
                                        ),
                                        SizedBox(height: 20.0),
                                        TextFormField(
                                            decoration: textInputDecoration.copyWith(
                                                hintText: 'ZIP Code'),
                                            validator: (val) {
                                              return val.isEmpty ? 'Enter your ZIP code' : null;
                                            },
                                            onChanged: (val) {
                                              setState(() {
                                                zip = val;
                                              });
                                            },
                                        ),
                                        SizedBox(height: 20.0),
                                        TextFormField(
                                            decoration: textInputDecoration.copyWith(
                                                hintText: 'Country/Region'),
                                            validator: (val) {
                                              return val.isEmpty
                                                  ? 'Enter your Country/Region'
                                                  : null;
                                            },
                                            onChanged: (val) {
                                              setState(() {
                                                country = val;
                                              });
                                            },
                                        ),
                                        SizedBox(height: 20.0),
                                        TextFormField(
                                            decoration: textInputDecoration.copyWith(
                                                hintText: 'Phone number'),
                                            validator: (val) {
                                              return val.isEmpty
                                                  ? 'Enter your phone number '
                                                  : null;
                                            },
                                            onChanged: (val) {
                                              setState(() {
                                                phone = val;
                                              });
                                            },
                                        ),
                                        SizedBox(height: 20.0),
                                        TextFormField(
                                            decoration: textInputDecoration.copyWith(
                                                hintText: 'Delivery Instructions'),
                                            onChanged: (val) {
                                              setState(() {
                                                instructions = val;
                                              });
                                            },
                                        ),
                                        SizedBox(height: 10.0),
                                        RichText(
                                            text: TextSpan(children: [
                                              TextSpan(
                                                  text: '',
                                                  style: TextStyle(color: Colors.grey[700]),
                                                  // recognizer: TapGestureRecognizer()
                                                  // ..onTap = () {
                                                  //   //TODO route for payment
                                                  //   //Navigator.pushNamed(context, RegisterRoute);
                                                  // },
                                              ),
                                            ])),
                                        SizedBox(height: 20.0),
                                        RaisedButton(
                                            color: Colors.lightBlue,
                                            child: Text(
                                                'Continue Payment',
                                                style: TextStyle(
                                                    color: Colors.white,
                                                ),
                                            ),
                                            onPressed: () async {
                                              if (_formKey.currentState.validate()) {
                                                setState(() {
                                                  loading = true;
                                                });
                                                //TODO create payment fonction
                                                //dynamic result = await _auth.signInWithEmailAndPassword(email, password);
                                                dynamic result = null;
                                                if (result == null) {
                                                  setState(() {
                                                    loading = false;
                                                    error =
                                                        'Could not continue the payment procedure';
                                                  });
                                                } else {
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
                                            ],
                                            ),
                                            ),
                                            ),
                                            );
  }
}
