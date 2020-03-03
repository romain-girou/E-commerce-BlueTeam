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
            child: Row(
              children: <Widget>[
                Container(
                  width: myPageWidth * (1/3),
                  // color: Colors.red,
                  child: Center(
                      child: Card(
                        elevation: 10.0,
                        child: Container(
                          child: Image.asset('assets/Bottle.png'),
                        ),
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
                              color: Colors.grey[900],

                            ),
                          ),
                        ),
                        Container(
                          child: Text(
                              'Explore the air of the world from your home',
                            style: DefaultTextStyle.of(context).style,
                          ),
                        ),

                        RaisedButton (
                          onPressed: null,
                          child: Text('Order now'),
                          color: Colors.blue,
                          textColor: Colors.white,
                          elevation: 10.0,
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
              ),
        ],
      ),
    );
  }
}
