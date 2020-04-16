import 'package:breath/authenticate/authenticate.dart';
import 'package:breath/models/user.dart';
import 'package:breath/screens/homeView/home_view.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class Wrapper extends StatelessWidget {
  @override
  Widget build(BuildContext context) {

    final user = Provider.of<User>(context);
    
    //return either Home or Authenticate widget 
    if (user == null) {
      return Authenticate();
    } else {
      return HomeView();
    }
  }
}