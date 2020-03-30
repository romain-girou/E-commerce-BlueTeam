import 'package:flutter/material.dart';

class AboutUsDesktop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //double myPageHeight = MediaQuery.of(context).size.height - 100;
    //double myPageWidth = MediaQuery.of(context).size.width;

    return Scrollbar(
        child: ListView(children: <Widget>[
      Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text('Direction'),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
            Image.asset(
              'assets/images/ceo1.png',
              width: 300,
              fit: BoxFit.cover,
            ),
            Image.asset(
              'assets/images/ceo2.png',
              width: 300,
              fit: BoxFit.cover,
            ),
            Image.asset(
              'assets/images/ceo3.png',
              width: 300,
              fit: BoxFit.cover,
            ),
          ]),
          Text('About Us'),
          textSection,
        ],
      )
    ]));
  }
}

Widget textSection = Container(
  padding: const EdgeInsets.all(32),
  child: Text(
    'Text à propos de Nous',
    softWrap: true,
  ),
);
