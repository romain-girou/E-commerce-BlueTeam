import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:breath_seinajoki/shared/constants.dart';
import 'package:breath_seinajoki/screens/NavigationBar/my_app_bar.dart';
import 'package:provider/provider.dart';
import 'package:breath_seinajoki/models/user.dart';
import 'package:breath_seinajoki/services/paymentForm.dart';
import 'package:flutter/gestures.dart';

class Payment extends StatefulWidget {
  final Function toggleView;
  final payment = PaymentService;

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
    final user = Provider.of<User>(context);
    if (user.uid == null) {
      Navigator.of(context).pop();
    }

    final PaymentService _payment = PaymentService(uid: user.uid);

    return Scaffold(
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
                                        decoration:
                                        textInputDecoration.copyWith(hintText: 'Full Name'),
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
                                        decoration:
                                        textInputDecoration.copyWith(hintText: 'address'),
                                        validator: (val) {
                                          return val.isEmpty ? 'Enter your address' : null;
                                        },
                                        onChanged: (val) {
                                          setState(() {
                                            address = val;
                                          });
                                        },
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
                                        onChanged: (val) {
                                          setState(() {
                                            state = val;
                                          });
                                        },
                                    ),
                                    SizedBox(height: 20.0),
                                    TextFormField(
                                        decoration:
                                        textInputDecoration.copyWith(hintText: 'ZIP Code'),
                                        validator: (val) {
                                          if (val.isEmpty || val.length < 5) {
                                            return 'Enter your ZIP code';
                                          }
                                          return null;
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
                                          if (val.isEmpty || val.length != 10) {
                                            return 'Enter a valid phone number';
                                          }
                                          return null;
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
                                              recognizer: TapGestureRecognizer()
                                              ..onTap = () {
                                                Navigator.pushNamed(context, ThankRoute);
                                              },
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
                                            print(await _payment.updateDeliveryData(
                                                    fullName,
                                                    address,
                                                    city,
                                                    state,
                                                    zip,
                                                    country,
                                                    phone,
                                                    instructions,
                                            ));
                                            Navigator.pushNamed(context, ThankRoute);
                                            //dynamic result =
                                            //    await _payment.updateDeliveryData(
                                            //        fullName,
                                            //        address,
                                            //        city,
                                            //        state,
                                            //        zip,
                                            //        country,
                                            //        phone,
                                            //        instructions,
                                            //    );
                                            //if (result == null) {
                                            //  setState(() {
                                            //    loading = false;
                                            //    error =
                                            //        'Could not continue the payment procedure';
                                            //  });
                                            //} else {
                                            //  Navigator.of(context).pop();
                                            //}
                                            //Navigator.of(context).pop();
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
                                        );
  }
}
