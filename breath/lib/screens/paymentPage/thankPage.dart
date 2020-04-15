import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:breath_seinajoki/screens/NavigationBar/my_app_bar.dart';

class ThankPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: MyAppBar(height: 100.0),
      body: Column(
        children: <Widget>[
          Expanded(
            child: Center(
                child: Text('Thank You',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontFamily: 'Clarissa',
                      fontSize: 100.0,
                    ))),
          ),
          RaisedButton(
            // Order button
            onPressed: () {
              Navigator.pushNamed(context, HomeRoute);
            },
            textColor: Colors.white,
            elevation: 3.0,
            padding: const EdgeInsets.all(0.0),
            shape: RoundedRectangleBorder(
              borderRadius: new BorderRadius.circular(18.0),
            ),
            child: Container(
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: <Color>[
                    Color(0xFF5C6BC0), // <=> Colors.indigo[400]
                    Color(0xFF9FA8DA), // <=> Colors.indigo[200]
                  ],
                ),
              ),
              padding: const EdgeInsets.all(15.0),
              child: const Text('Keep browsing', style: TextStyle(fontSize: 30)),
            ),
          ),
          SizedBox(height: 100.0),

        ],
      ),
    );
  }
}
