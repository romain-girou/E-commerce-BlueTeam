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
          SizedBox(height: 60),
          Text('    Direction',
              style: TextStyle(
                fontFamily: 'Bell MT',
                fontWeight: FontWeight.normal,
                fontSize: 35,
              )),
          Divider(
            endIndent: 10,
            indent: 20,
            color: Colors.grey[900],
            height: 1,
          ),
          SizedBox(height: 60),
          Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                ClipRRect(
                  borderRadius: BorderRadius.circular(8.0),
                  child:                   
                Image.asset(
                  'assets/images/ceo1.png',
                  width: 200,
                  fit: BoxFit.cover,
                ),
                ),
                
                ClipRRect(
                  borderRadius: BorderRadius.circular(8.0),
                  child:                   
                Image.asset(
                  'assets/images/ceo2.png',
                  width: 200,
                  fit: BoxFit.cover,
                ),
                ),
                
                ClipRRect(
                  borderRadius: BorderRadius.circular(8.0),
                  child:                   
                Image.asset(
                  'assets/images/ceo3.png',
                  width: 200,
                  fit: BoxFit.cover,
                ),
                ),

              ]),
          SizedBox(height: 30),
          Text('    About Us',
              style: TextStyle(
                fontFamily: 'Bell MT',
                fontWeight: FontWeight.normal,
                fontSize: 35,
              )),
          Divider(
            endIndent: 20,
            indent: 20,
            color: Colors.grey[900],
            height: 1,
          ),
          SizedBox(height: 10),
          textSection,
        ],
      )
    ]));
  }
}

Widget textSection = Container(
  width: 700,
  padding: const EdgeInsets.all(32),
  child: Text(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta vestibulum nisl non commodo. Praesent vitae metus semper, ultrices est ut, placerat tortor. Proin in magna eu risus sagittis laoreet a vitae lacus. Praesent sed vehicula massa. Suspendisse suscipit dapibus dui quis pharetra. Donec bibendum lectus nec mi egestas porta. Aliquam malesuada et arcu id semper. Integer commodo nisi a justo luctus ultricies. Sed et eros quam. Donec quis placerat magna. Quisque eu nisl eget ex maximus malesuada. Praesent fringilla urna neque, sit amet tempus lorem faucibus nec. ',
    textAlign: TextAlign.left,
    softWrap: true,
  ),
);
