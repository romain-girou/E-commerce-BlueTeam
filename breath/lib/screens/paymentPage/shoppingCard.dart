//import 'dart:html';
import 'package:breath_seinajoki/models/user.dart';
import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

final databaseReference = Firestore.instance;

class ShoppingCard extends StatefulWidget {
  @override
  _ShoppingCardState createState() => _ShoppingCardState();
}

class _ShoppingCardState extends State<ShoppingCard> {
  // String data = '';

  @override
  Widget build(BuildContext context) {
    User user;

    try {
      user = Provider.of<User>(context);
      print(user.uid);
    } catch (e) {
      // test
      user = User(uid: '20b32OVMo1RCgsPUkaLdZ60vbKo2');
    }

    var dataList = new List(4);
    dataList[0] = new Map();
    dataList[1] = new Map();
    dataList[2] = new Map();
    dataList[3] = new Map();
    dataList[0]['name'] = 'France bottle';
    dataList[0]['price'] = '50';
    dataList[1]['name'] = 'Finland bottle';
    dataList[1]['price'] = '50';
    dataList[2]['name'] = 'Canada bottle';
    dataList[2]['price'] = '70';
    dataList[3]['name'] = 'Canada bottle';
    dataList[3]['price'] = '70';
    

    int nbFrance = 0;
    int nbFinland = 0;
    int nbCanada = 0;
    int total = 0;
    int itemCounter = 0;

    for (int i = 0; i < dataList.length ; i++) {
      dataList[i]['name'] == 'France bottle' ? nbFrance += 1 : null;
      dataList[i]['name'] == 'Finland bottle' ? nbFinland += 1 : null;
      dataList[i]['name'] == 'Canada bottle' ? nbCanada += 1 : null;
      total += int.parse(dataList[i]['price']);
    }

    print(dataList[0]['name']);

    nbFinland != 0 ? itemCounter += 1 : itemCounter += 0;
    nbFrance != 0 ? itemCounter += 1 : itemCounter += 0;
    nbCanada != 0 ? itemCounter += 1 : itemCounter += 0;

    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Shopping Card',
          style: TextStyle(color: Colors.black),
        ),
        backgroundColor: Colors.white12,
        //elevation: 0,
      ),
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
