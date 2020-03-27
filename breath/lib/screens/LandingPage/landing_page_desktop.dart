import 'package:breath/routes/routes_names.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:breath/classes/bullet.dart';

class LandingPageDesktop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    double myPageHeight = MediaQuery.of(context).size.height - 100;
    double myPageWidth = MediaQuery.of(context).size.width;
    return Container( // Main screen
            height: myPageHeight,
            decoration: BoxDecoration( // Background image
              image: DecorationImage(
                image: AssetImage("assets/images/Air_wave.png"),
                fit: BoxFit.cover,
              ),
            ),
            child: Column(
              children: <Widget>[
                SizedBox( // Title
                  width: myPageWidth,
                  height: myPageHeight*0.25,
                  child: AutoSizeText.rich(
                    TextSpan(
                      children: [
                        TextSpan(
                          text: 'Breath',
                          style: TextStyle(
                            fontFamily: 'Clarissa',
                          ),
                        ),
                        TextSpan(
                          text: ',',
                          style: TextStyle(
                            fontFamily: 'Bell MT',
                            fontWeight: FontWeight.normal,
                            // fontSize: 50.0
                          ),
                        ),
                        TextSpan(
                          text: ' purty at hand',
                          style: TextStyle(
                            fontFamily: 'Clarissa',
                          ),
                        ),
                      ],
                    ),
                    //maxLines: 1, // We ask all the title will be on one line
                    style: TextStyle(fontSize: 150, color: Colors.black,),
                    minFontSize: 0,
                    stepGranularity: 0.1,
                    textAlign: TextAlign.center,
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
                      padding: EdgeInsets.symmetric(horizontal: 10.0),
                      //padding: EdgeInsets.all(5.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly, // Equal space between the children
                        children: <Widget>[
                          Container( // Slogan
                            child: AutoSizeText(
                              'Explore the air of the world',
                              maxFontSize: 55,
                              //minFontSize: 55,
                              maxLines: 2,
                              textAlign: TextAlign.center,
                              style: TextStyle( // Bold text
                                fontWeight: FontWeight.bold,
                                fontSize: 55.0,
                              ),
                            ),
                          ),
                          Container( // Bullet points
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
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
                            onPressed: () {Navigator.pushNamed(context, SignInRoute);},
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
                                    //Color(0xFF03A9F4), // <=> Colors.lightBlue
                                    //Color(0xFF4FC3F7), // <=> Colors.lightBlue[300]
                                    //Color(0xFFB3E5FC), // <=> Colors.lightBlue[100]

                                    //Color(0xFF009688), // <=> Colors.teal
                                    //Color(0xFF4DB6AC), // <=> Colors.teal[300]

                                    //Color(0xFFBFBFBF), // <=> Colors.grey[400]
                                    //Color(0xFFEEEEEE), // <=> Colors.grey[200]
                                    //Color(0xFFE0E0E0), // <=> Colors.grey[300]

                                    //Color(0xFF0D47A1),
                                    //Color(0xFF1976D2),
                                    //Color(0xFF42A5F5),
                                  ],
                                ),
                              ),
                              padding: const EdgeInsets.all(15.0),
                              child: const Text(
                                  'DISCOVER NOW',
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
            ),);
  }
}
