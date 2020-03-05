import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class LandingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    double myPageHeight = MediaQuery.of(context).size.height - 100;
    double myPageWidth = MediaQuery.of(context).size.width;
    return Container(
      height: myPageHeight,
      child: Column(
        children: <Widget>[
          Container(
            height: myPageHeight * (2/3),
            color: Colors.red,
            child: Row(
              children: <Widget>[
                Container(
                  width: myPageWidth * (1/3),
                  child: Center(
                      child: Container(
                        margin: EdgeInsets.all(8.0),
                        child: Image.asset('assets/images/Bottle_transparent.png'),
                      ),
                  ),
                ),
                Container(
                  width: myPageWidth * (2/3),
                  // color: Colors.blue,
                  child: Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: <Widget>[
                        Container(
                          child: Text(
                            'Purty at hand',
                            style: TextStyle(
                              fontFamily: 'Clarissa',
                              fontSize: 150.0,
                              //decoration: TextDecoration.underline,
                            ),
                          ),
                        ),
                        Container(
                          child: Text(
                            'Explore the air of the\n world from your home',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontSize: 50.0,
                              fontStyle: FontStyle.italic,
                            ),
                          ),
                        ),
                        RaisedButton (
                          onPressed: () {},
                          textColor: Colors.white,
                          elevation: 5.0,
                          padding: const EdgeInsets.all(0.0),
                          child: Container(
                            decoration: const BoxDecoration(
                              gradient: LinearGradient(
                                colors: <Color>[
                                  Color(0xFFBFBFBF), // <=> Colors.grey[400]
                                  // Color(0xFFEEEEEE), // <=> Colors.grey[200]
                                  Color(0xFFE0E0E0), // <=> Colors.grey[300]
                                  //Color(0xFF0D47A1),
                                  //Color(0xFF1976D2),
                                  //Color(0xFF42A5F5),
                                ],
                              ),
                            ),
                            padding: const EdgeInsets.all(15.0),
                            child: const Text(
                                'ORDER NOW',
                                style: TextStyle(fontSize: 30)
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          Container(
            color: Colors.green,
            height: myPageHeight * (1/3),
            width: myPageWidth,
            child: Column(
              children: <Widget>[
                Bullet(
                  'Prenium product',
                  style: TextStyle(
                    fontSize: 20.0,
                  ),
                ),
                Bullet(
                  'High tracability',
                  style: TextStyle(
                    fontSize: 20.0,
                  ),
                ),
                Bullet(
                  'Wonderful gift',
                  style: TextStyle(
                    fontSize: 20.0,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class Bullet extends Text {
  const Bullet(
      String data, {
        Key key,
        TextStyle style,
        TextAlign textAlign,
        TextDirection textDirection,
        Locale locale,
        bool softWrap,
        TextOverflow overflow,
        double textScaleFactor,
        int maxLines,
        String semanticsLabel,
      }) : super(
    '• $data',
    key: key,
    style: style,
    textAlign: textAlign,
    textDirection: textDirection,
    locale: locale,
    softWrap: softWrap,
    overflow: overflow,
    textScaleFactor: textScaleFactor,
    maxLines: maxLines,
    semanticsLabel: semanticsLabel,
  );
}