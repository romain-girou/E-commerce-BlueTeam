import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class LandingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    double myPageHeight = MediaQuery.of(context).size.height - 100;
    double myPageWidth = MediaQuery.of(context).size.width;
    return Container( // Main screen
      height: myPageHeight,
      child: Column(
        children: <Widget>[
          Container( // Title
            margin: EdgeInsets.all(6.0),
            padding: EdgeInsets.all(2.0),
            child: Text(
              'Breath: purty at hand',
              style: TextStyle(
                fontFamily: 'Clarissa',
                fontSize: 150.0,
              ),
            ),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: <Widget>[
              Container( // Image
                width: myPageWidth-(0.6180339887498948*myPageWidth),
                //color: Colors.red,
                height: 450.0,
                //margin: EdgeInsets.all(8.0),
                child: Center(
                    child: Image.asset('assets/images/Bottle_transparent.png'),
                ),
              ),
              Container( //Text + button
                //color: Colors.green,
                width: 0.6180339887498948*myPageWidth,
                height: 450.0,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly, // Equal space between the children
                  children: <Widget>[
                    Container( // Slogan
                      child: Text(
                        'Explore the air of the world',
                        style: TextStyle( // Bold text
                            fontWeight: FontWeight.bold,
                            fontSize: 60.0,
                        ),
                      ),
                    ),
                    Container( // Bullet points
                      child: Column(
                        children: <Widget>[
                          Bullet(
                            'Discover our large range of products',
                            style: TextStyle(
                              fontSize: 20,
                            ),
                          ),
                          Bullet(
                            'Bottles of air from all around the world',
                            style: TextStyle(
                              fontSize: 20,
                            ),
                          ),
                          Bullet(
                            'High tracability',
                            style: TextStyle(
                              fontSize: 20,
                            ),
                          ),
                        ],
                      ),
                    ),
                    RaisedButton ( // Order button
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
            ],
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