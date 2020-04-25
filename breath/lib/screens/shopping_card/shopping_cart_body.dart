import 'package:breath_seinajoki/models/user.dart';
import 'package:breath_seinajoki/services/cart.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class ShoppingCartBody extends StatefulWidget {

  @override
  _ShoppingCartBodyState createState() => _ShoppingCartBodyState();
}

class _ShoppingCartBodyState extends State<ShoppingCartBody> {
  
  Product myProductToAdd;
  Product myProduct2ToAdd;
  Cart myCart;

  @override
  Widget build(BuildContext context) {

    final userData = Provider.of<UserData>(context) ;

    return Container(
      child: Column(
        children: <Widget>[
          RaisedButton(
            onPressed: () async {
              // myProductToAdd = new Product(name: 'bouteille', price: 50.0);
              // myProduct2ToAdd = new Product(name: 'vin', price: 20.0);
              // userData.myProduct.add(myProductToAdd);
              // userData.myProduct.add(myProduct2ToAdd);
              for (var i = 0; i < userData.myProduct.length + 1; i++) {
                print(userData.myProduct[i].name);
                print(userData.myProduct[i].price);
              }
              
              // myCart = new Cart(userData: userData);
              // await myCart.updateUserProducts(myProductToAdd);
            }
            ),
        ],
      ),
    );
  }
}