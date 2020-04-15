import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:breath_seinajoki/shared/constants.dart';
import 'package:breath_seinajoki/screens/NavigationBar/my_app_bar.dart';
import 'package:provider/provider.dart';
import 'package:breath_seinajoki/models/user.dart';
import 'package:breath_seinajoki/services/paymentForm.dart';
import 'package:flutter/gestures.dart';
import 'package:responsive_builder/responsive_builder.dart';

class ThankPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: MyAppBar(height: 100.0),
        body: ScreenTypeLayout(
            desktop: Scrollbar(
                child: ListView(
                    children: <Widget>[
            //          LandingPageDesktop(),
                      SizedBox(height: 250.0),
             //         ProductPageDesktop(),
                    ],
                ),
            ),
            mobile: Scrollbar(
                child: ListView(
                    children: <Widget>[
              //        LandingPageMobile(),
               //       ProductPageDesktop(), //TODO: Change to ProductPageMobile
                    ],
                ),
            ),
        ),

    );
  }
}
