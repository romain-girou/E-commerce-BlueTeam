//import 'dart:html';
import 'package:breath_seinajoki/models/user.dart';
import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:breath_seinajoki/screens/NavigationBar/my_app_bar.dart';
import 'package:breath_seinajoki/services/database.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:provider/provider.dart';

final databaseReference = Firestore.instance;

class ShoppingCard extends StatefulWidget {
  @override
  _ShoppingCardState createState() => _ShoppingCardState();
}

class _ShoppingCardState extends State<ShoppingCard> {
  @override
  Widget build(BuildContext context) {

    final products = Provider.of<UserData>(context);

    if (products == null) {
      return SpinKitRotatingCircle(
        color: Colors.red,
        size: 50.0,
      );
    }else {
    
    var dataList = products.myProduct;
    int nbFrance = 0;
    int nbFinland = 0;
    int nbCanada = 0;
    int total = 0;
    int itemCounter = 0;

    for (int i = 0; i < dataList.length ; i++) {
      dataList[i]['name'] == 'France bottle' ? nbFrance += 1 : null;
      dataList[i]['name'] == 'Finland bottle' ? nbFinland += 1 : null;
      dataList[i]['name'] == 'Canada bottle' ? nbCanada += 1 : null;
      total += dataList[i]['price'];
    }

    nbFinland != 0 ? itemCounter += 1 : itemCounter += 0;
    nbFrance != 0 ? itemCounter += 1 : itemCounter += 0;
    nbCanada != 0 ? itemCounter += 1 : itemCounter += 0;


    return Scaffold(
      appBar: MyAppBar(height: 110),
      body: Center(
        child: Container(
          decoration: BoxDecoration(
            border: Border.all(),
            borderRadius: BorderRadius.all(Radius.circular(10.0)),
          ),
          width: 500,
          padding: EdgeInsets.fromLTRB(10, 10, 10, 0),
          margin: EdgeInsets.symmetric(horizontal: 50, vertical: 10),
          child: Column(
            //crossAxisAlignment: CrossAxisAlignment.end,
            //mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Expanded(
                child: Container(
                    child: ListView(
                  children: [
                    nbFrance != 0
                        ? CardProduct(
                            country: 'France bottle',
                            price: 50,
                            nbProducts: nbFrance,
                          )
                        : Text('alouette'),
                    nbCanada != 0
                        ? CardProduct(
                            country: 'Canada bottle',
                            price: 70,
                            nbProducts: nbCanada,
                          )
                        : Container(),
                    nbFinland != 0
                        ? CardProduct(
                            country: 'Finland bottle',
                            price: 50,
                            nbProducts: nbFinland,
                          )
                        : Container(),
                  ],
                )),
              ),
              ButtonChecout(dataList: dataList, total: total)
            ],
          ),
        ),
      ),
    );
  }
}
}

class CardProduct extends StatelessWidget {
  final String country;
  final int nbProducts;
  final int price;

  CardProduct({
    Key key,
    this.country,
    this.nbProducts,
    this.price,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Container(
            child: Column(
          children: [
            Container(
              child: Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 8.0, horizontal: 15),
                child: Container(
                    height: 1,
                    decoration:
                        BoxDecoration(border: Border.all(color: Colors.black))),
              ),
            ),
            Center(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Image.asset(
                    'assets/images/Bottle_transparent.png',
                    height: 150,
                  ),
                  SizedBox(
                    width: 50,
                  ),
                  Column(
                    children: [
                      Text(
                        country,
                        style: TextStyle(fontSize: 20),
                      ),
                      Text('${price * nbProducts}€'),
                      Text('x $nbProducts'),
                    ],
                  ),
                ],
              ),
            ),
          ],
        )),
      ),
    );
  }
}

class ButtonChecout extends StatelessWidget {
  const ButtonChecout({
    Key key,
    @required this.dataList,
    @required this.total,
  }) : super(key: key);

  final List dataList;
  final int total;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(10.0),
      child: Container(
        decoration: BoxDecoration(border: Border.all(color: Colors.grey)),
        width: 250,
        height: 100,
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Text('Subtotal (${dataList.length} items) : EUR $total'),
                RaisedButton(
                  // Order button
                  onPressed: () {
                    Navigator.pushNamed(context, PaymentRoute);
                  },
                  child: const Text('Proceed to checkout'),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
