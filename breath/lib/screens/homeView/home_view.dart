import 'package:breath_seinajoki/authenticate/sign_in.dart';
import 'package:breath_seinajoki/models/user.dart';
import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:breath_seinajoki/screens/LandingPage/landing_page_desktop.dart';
import 'package:breath_seinajoki/screens/LandingPage/landing_page_mobile.dart';
import 'package:breath_seinajoki/screens/NavigationBar/my_app_bar.dart';
import 'package:breath_seinajoki/screens/ProductPage/product_page_desktop.dart';
import 'package:breath_seinajoki/screens/ProductPage/product_page_mobile.dart';
import 'package:breath_seinajoki/services/auth.dart';
import 'package:breath_seinajoki/services/database.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
import 'package:provider/provider.dart';
import 'package:responsive_builder/responsive_builder.dart';

class HomeView extends StatelessWidget {

  // final _auth =  new AuthService();

 @override
  Widget build(BuildContext context) {

    // _auth.signInAnonymously();

    final user = Provider.of<FirebaseUser>(context);

    if (user == null){
      return SpinKitRotatingCircle(
        color: Colors.red,
        size: 50.0,
      );
    } else {
      return StreamProvider<UserData>.value(
        value: DatabaseService(uid: user.uid).userData,
          child: Scaffold(
          appBar: MyAppBar(height: 110.0),
          body: ScreenTypeLayout(
            desktop: Scrollbar(
              child: ListView(
                children: <Widget>[
                  LandingPageDesktop(),
                  SizedBox(height: 250.0),
                  ProductPageDesktop(),
                ],
              ),
            ),
            mobile: Scrollbar(
              child: ListView(
                children: <Widget>[
                  LandingPageMobile(),
                  ProductPageMobile(), //TODO: Change to ProductPageMobile
                ],
              ),
            ),
            ),
        ),
      );
    }
  }
}
