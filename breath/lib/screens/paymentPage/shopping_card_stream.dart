import 'package:breath_seinajoki/models/user.dart';
import 'package:breath_seinajoki/screens/paymentPage/shoppingCard.dart';
import 'package:breath_seinajoki/services/database.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class ShoppingCardStream extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    
    final user = Provider.of<FirebaseUser>(context);

    return StreamProvider<UserData>.value(
      value: DatabaseService(uid: user.uid).product,
      child: ShoppingCard()
      );
  }
}