import 'package:breath_seinajoki/models/user.dart';
import 'package:breath_seinajoki/screens/shopping_card/shopping_cart_body.dart';
import 'package:breath_seinajoki/services/cart.dart';
import 'package:breath_seinajoki/services/database.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class ShoppingCart extends StatefulWidget {

  @override
  _ShoppingCartState createState() => _ShoppingCartState();
}

class _ShoppingCartState extends State<ShoppingCart> {

  @override
  Widget build(BuildContext context) {

    final user = Provider.of<User>(context);

    return StreamProvider<UserData>.value(
      value: DatabaseService(uid: user.uid).userData,
      child: ShoppingCartBody(),
    );
  }
}