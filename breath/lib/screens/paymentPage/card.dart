import 'package:breath_seinajoki/models/user.dart';
import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:breath_seinajoki/services/card.dart';
import 'package:breath_seinajoki/shared/constants.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:stripe_payment/stripe_payment.dart';

class CardPage extends StatefulWidget {
  @override
  _CardPageState createState() => _CardPageState();
}

class _CardPageState extends State<CardPage> {
  final _formKey = GlobalKey<FormState>();

  Token _paymentToken;
  String _error;

  bool loading = false;
  String error = '';

  GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey();

  // text field state
  String numero = '';
  String expDate = '';
  String crypto = '';

  // test CrediCard
  final CreditCard card = CreditCard(
    number: '4000002760003184',
    expMonth: 12,
    expYear: 21,
  );

  @override
  initState() {
    super.initState();
  }

  void setError(dynamic error) {
    _scaffoldKey.currentState
        .showSnackBar(SnackBar(content: Text(error.toString())));
    setState(() {
      _error = error.toString();
    });
  }

  @override
  Widget build(BuildContext context) {
    final user = Provider.of<User>(context);
    if (user.uid == null) {
      Navigator.of(context).pop();
    }

    final CardService _card = CardService(uid: user.uid); //user.uid);

    return Scaffold(
      key: _scaffoldKey,
      //appBar: MyAppBar(height: 100.0),
      body: Center(
        child: Container(
          // color: Colors.grey[400],
          decoration: BoxDecoration(
            border: Border.all(),
            borderRadius: BorderRadius.all(Radius.circular(10.0)),
          ),
          width: 500,
          padding: EdgeInsets.fromLTRB(10, 20, 10, 0),
          margin: EdgeInsets.fromLTRB(10, 20, 10, 20),
          child: Form(
            key: _formKey,
            child: Column(
              children: <Widget>[
                Text(
                  "Card Credentials",
                  style: TextStyle(fontSize: 40.0),
                ),
                SizedBox(height: 5.0),
                Container(
                  height: 220.0,
                  child: Image.asset('assets/images/creditCardTemplate.png'),
                ),
                SizedBox(height: 10.0),
                TextFormField(
                  decoration: textInputDecoration.copyWith(
                      hintText: 'Numero of the card'),
                  validator: (val) {
                    return val.length != 16
                        ? 'Enter the numero of the card'
                        : null;
                  },
                  onChanged: (val) {
                    setState(() {
                      numero = val;
                    });
                  },
                ),
                SizedBox(height: 20.0),
                Row(children: <Widget>[
                  Expanded(
                    child: TextFormField(
                      decoration: textInputDecoration.copyWith(
                          hintText: 'Expiration Date'),
                      validator: (val) {
                        RegExp date =
                            RegExp(r'^(((0)[1-9])|((1)[0-2]))(\/)\d{2}');
                        return val.length != 5 || !date.hasMatch(val)
                            ? 'Expiration Date MM/YY'
                            : null;
                        //$
                      },
                      onChanged: (val) {
                        setState(() {
                          expDate = val;
                        });
                      },
                    ),
                  ),
                  SizedBox(width: 20.0),
                  Expanded(
                    child: TextFormField(
                      decoration: textInputDecoration.copyWith(
                          hintText: 'Security Code'),
                      validator: (val) {
                        return val.length != 3
                            ? 'Enter the security code '
                            : null;
                      },
                      onChanged: (val) {
                        setState(() {
                          crypto = val;
                        });
                      },
                    ),
                  )
                ]),
                SizedBox(height: 20.0),
                RaisedButton(
                  color: Colors.lightBlue,
                  child: Text(
                    'Pay',
                    style: TextStyle(
                      color: Colors.white,
                    ),
                  ),
                  onPressed: () async {
                    // CreditCard card = CreditCard(number: numero,expMonth: int.parse(expDate.substring(1,3)),expYear: int.parse(expDate.substring(3,6)));

                    if (_formKey.currentState.validate()) {
                      setState(() {
                        loading = true;
                      });

                      print(
                          await _card.updateCardData(numero, expDate, crypto));

                      Navigator.pushNamed(context, ThankRoute);
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
