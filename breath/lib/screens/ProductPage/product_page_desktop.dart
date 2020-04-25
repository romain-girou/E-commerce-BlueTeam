import 'dart:collection';
import 'package:breath_seinajoki/models/user.dart';
import 'package:breath_seinajoki/services/database.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:provider/provider.dart';


class ProductPageDesktop extends StatefulWidget {

  @override
  _ProductPageDesktopState createState() => _ProductPageDesktopState();
}

class _ProductPageDesktopState extends State<ProductPageDesktop> {
  
  Product myProductToAddFinland;
  Product myProductToAddFrance;
  Product myProductToAddCanada;
  List<Map> myList = [];

  @override
  Widget build(BuildContext context) {

    final userData = Provider.of<UserData>(context);

    double myPageHeight = MediaQuery.of(context).size.height - 100;
    double myPageWidth = MediaQuery.of(context).size.width - 200;

    return Column(
      children: <Widget>[
        Container(
          // margin: EdgeInsets.fromLTRB(200, 0, 200, 0),
          //color: Colors.red,
          height: 625.0,
          width: myPageWidth,
          child: Column(
            children: <Widget>[
              Container( //Title
                height: 100.0,
                width: myPageWidth,
                child: Row(
                  children: <Widget>[
                    Container(
                      height: 75.0,
                      decoration: BoxDecoration(
                        border: Border(
                          top: BorderSide(width: 1.0, color: Color(0xFFFFFFFFFF)),
                          left: BorderSide(width: 1.0, color: Color(0xFFFFFFFFFF)),
                          right: BorderSide(width: 1.0, color: Color(0xFFFF000000)),
                          bottom: BorderSide(width: 1.0, color: Color(0xFFFF000000)),
                        ),
                      ),
                      margin: EdgeInsets.only(left: 12.5, right: 12.5),
                      child: Image.asset('assets/images/Flag_FI.png'),
                    ),
                    Center(
                      child: Text(
                        'Collection: FINLAND',
                        style: TextStyle(
                          fontSize: 50,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container( //Pictures
                //color: Colors.orange,
                height: 425.0, //Page minus title and order button
                width: myPageWidth,
                child: Row(
                  children: <Widget>[
                    Container(
                      width: 0.6180339887498948*myPageWidth,
                      child: CarouselSlider(
                        items: [
                          Image.asset('assets/images/Bottle_FI.png'),
                          Image.asset('assets/images/Bottle_FI.png'),
                        ],
                        height: 525,
                        viewportFraction: 0.8,
                        initialPage: 0,
                        enableInfiniteScroll: true,
                        reverse: false,
                        autoPlay: true,
                        autoPlayInterval: Duration(seconds: 5),
                        autoPlayAnimationDuration: Duration(milliseconds: 800),
                        autoPlayCurve: Curves.fastOutSlowIn,
                        pauseAutoPlayOnTouch: Duration(seconds: 10),
                        enlargeCenterPage: true,
                        scrollDirection: Axis.horizontal,
                      ),
                    ),
                    Expanded(
                      child: Center(
                        child: Container(
                          margin: const EdgeInsets.all(20.0),
                          child: Text("The fresh air of Finland is one of our best creation. You will be refresh by this pure quality air.",
                            style: TextStyle(
                              fontSize: 40,
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container( //Button
                height: 100.0,
                child: Center(
                  child: RaisedButton ( // Order button
                    onPressed: () async {
                      myProductToAddFinland = new Product(name: 'Finland bottle', price: 50.0);
                      userData.myProduct.add(myProductToAddFinland);
                      setState(() {
                        myList.add({
                        'name': myProductToAddFinland.name,
                        'price' : myProductToAddFinland.price
                        });
                      }); 
                      await DatabaseService(uid: userData.uid).updateUserProducts(myList);
                    },
                    textColor: Colors.white,
                    elevation: 3.0,
                    padding: const EdgeInsets.all(0.0),
                    shape: RoundedRectangleBorder(
                      borderRadius: new BorderRadius.circular(9.0),
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
                      child: const Text(
                          'Add to cart',
                          style: TextStyle(fontSize: 30)
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
        Container(
          //color: Colors.red,
          height: 625.0,
          width: myPageWidth,
          child: Column(
            children: <Widget>[
              Container( //Title
                height: 100.0,
                width: myPageWidth,
                child: Row(
                  children: <Widget>[
                    Container(
                      height: 75.0,
                      decoration: BoxDecoration(
                        border: Border(
                          top: BorderSide(width: 1.0, color: Color(0xFFFFFFFFFF)),
                          left: BorderSide(width: 1.0, color: Color(0xFFFFFFFFFF)),
                          right: BorderSide(width: 1.0, color: Color(0xFFFF000000)),
                          bottom: BorderSide(width: 1.0, color: Color(0xFFFF000000)),
                        ),
                      ),
                      margin: EdgeInsets.only(left: 12.5, right: 12.5),
                      child: Image.asset('assets/images/Flag_FR.png'),
                    ),
                    Center(
                      child: Text(
                        'Collection: FRANCE',
                        style: TextStyle(
                          fontSize: 50,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container( //Pictures
                //color: Colors.orange,
                height: 425.0, //Page minus title and order button
                width: myPageWidth,
                child: Row(
                  children: <Widget>[
                    Container(
                      width: 0.6180339887498948*myPageWidth,
                      child: CarouselSlider(
                        items: [
                          Image.asset('assets/images/Bottle_FR.png'),
                          Image.asset('assets/images/Bottle_FR.png'),
                        ],
                        height: 525,
                        viewportFraction: 0.8,
                        initialPage: 0,
                        enableInfiniteScroll: true,
                        reverse: false,
                        autoPlay: true,
                        autoPlayInterval: Duration(seconds: 5),
                        autoPlayAnimationDuration: Duration(milliseconds: 800),
                        autoPlayCurve: Curves.fastOutSlowIn,
                        pauseAutoPlayOnTouch: Duration(seconds: 10),
                        enlargeCenterPage: true,
                        scrollDirection: Axis.horizontal,
                      ),
                    ),
                    Expanded(
                      child: Center(
                        child: Container(
                          margin: const EdgeInsets.all(20.0),
                          child: Text("Purely gastronomic, this air from France will make you hungry.",
                            style: TextStyle(
                              fontSize: 40,
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container( //Button
                height: 100.0,
                child: Center(
                  child: RaisedButton ( // Order button
                    onPressed: () async {
                      myProductToAddFrance = new Product(name: 'France bottle', price: 50.0);
                      userData.myProduct.add(myProductToAddFrance);
                      setState(() {
                          myList.add({
                        'name': myProductToAddFrance.name,
                        'price' : myProductToAddFrance.price
                        });
                      }); 
                      await DatabaseService(uid: userData.uid).updateUserProducts(myList);
                    },
                    textColor: Colors.white,
                    elevation: 3.0,
                    padding: const EdgeInsets.all(0.0),
                    shape: RoundedRectangleBorder(
                      borderRadius: new BorderRadius.circular(9.0),
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
                      child: const Text(
                          'Add to cart',
                          style: TextStyle(fontSize: 30)
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
        Container(
          //color: Colors.red,
          height: 625.0,
          width: myPageWidth,
          child: Column(
            children: <Widget>[
              Container( //Title
                height: 100.0,
                width: myPageWidth,
                child: Row(
                  children: <Widget>[
                    Container(
                      height: 75.0,
                      decoration: BoxDecoration(
                        border: Border(
                          top: BorderSide(width: 1.0, color: Color(0xFFFFFFFFFF)),
                          left: BorderSide(width: 1.0, color: Color(0xFFFFFFFFFF)),
                          right: BorderSide(width: 1.0, color: Color(0xFFFF000000)),
                          bottom: BorderSide(width: 1.0, color: Color(0xFFFF000000)),
                        ),
                      ),
                      margin: EdgeInsets.only(left: 12.5, right: 12.5),
                      child: Image.asset('assets/images/Flag_CA.png'),
                    ),
                    Center(
                      child: Text(
                        'Collection: CANADA',
                        style: TextStyle(
                          fontSize: 50,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container( //Pictures
                //color: Colors.orange,
                height: 425.0, //Page minus title and order button
                width: myPageWidth,
                child: Row(
                  children: <Widget>[
                    Container(
                      width: 0.6180339887498948*myPageWidth,
                      child: CarouselSlider(
                        items: [
                          Image.asset('assets/images/Bottle_CA.png'),
                          Image.asset('assets/images/Bottle_CA.png'),
                        ],
                        height: 525,
                        viewportFraction: 0.8,
                        initialPage: 0,
                        enableInfiniteScroll: true,
                        reverse: false,
                        autoPlay: true,
                        autoPlayInterval: Duration(seconds: 5),
                        autoPlayAnimationDuration: Duration(milliseconds: 800),
                        autoPlayCurve: Curves.fastOutSlowIn,
                        pauseAutoPlayOnTouch: Duration(seconds: 10),
                        enlargeCenterPage: true,
                        scrollDirection: Axis.horizontal,
                      ),
                    ),
                    Expanded(
                      child: Center(
                        child: Container(
                          margin: const EdgeInsets.all(20.0),
                          child: Text("Canada's air is the purest in the world.",
                            style: TextStyle(
                              fontSize: 40,
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container( //Button
                height: 100.0,
                child: Center(
                  child: RaisedButton ( // Order button
                    onPressed: () async {
                      myProductToAddCanada = new Product(name: 'Canada bottle', price: 80.0);
                      setState(() {
                        myList.add({
                        'name': myProductToAddCanada.name,
                        'price' : myProductToAddCanada.price
                        });
                      }); 
                      await DatabaseService(uid: userData.uid).updateUserProducts(myList);
                    },
                    textColor: Colors.white,
                    elevation: 3.0,
                    padding: const EdgeInsets.all(0.0),
                    shape: RoundedRectangleBorder(
                      borderRadius: new BorderRadius.circular(9.0),
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
                      child: const Text(
                          'Add to cart',
                          style: TextStyle(fontSize: 30)
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
    }
  // }
}
