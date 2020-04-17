import 'package:breath_seinajoki/models/user.dart';
import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:breath_seinajoki/services/auth.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class MyAppBar extends StatelessWidget implements PreferredSizeWidget{
  final double height;

  const MyAppBar({
    Key key,
    @required this.height,
    }) : super(key: key);


  @override
  Widget build(BuildContext context) {

    final user = Provider.of<User>(context);
    final AuthService _auth = AuthService();

    return Column(
        children: [
          Container(
              color: Colors.white12,
              child: Padding(
                  padding: EdgeInsets.all(20),
                  child: Container(
                      child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Row(
                                children: <Widget>[
                                  Image.asset('assets/images/Breath_logo.png', height: 50.0,),
                                  Text.rich(
                                      TextSpan(
                                          children: [
                                            TextSpan(
                                                text: ',',
                                                style: TextStyle(
                                                    fontFamily: 'Bell MT',
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
                                      style: TextStyle(fontSize: 40, color: Colors.black,),
                                      textAlign: TextAlign.center,
                                  ),
                                  ],
                                  ),
                                  Row(
                                      children: <Widget>[
                                        IconButton(
                                            icon: Icon(Icons.add_shopping_cart),
                                            onPressed: () {
                                              if (user == null) {
                                                return 'You have to log in first';
                                              }else{
                                                return Navigator.pushNamed(context, PaymentRoute);
                                              }
                                            },
                                        ),
                                        SizedBox(width: 20.0),
                                        IconButton(
                                            icon: user == null ? Icon(Icons.account_circle) : Icon(Icons.exit_to_app),
                                            onPressed: () {
                                              if (user == null) {
                                                return Navigator.pushNamed(context, SignInRoute);
                                              } else {
                                                return _auth.signOut();
                                              }
                                            },
                                        ),
                                        ],
                                        ),
                                        ]),
                                        ),
                                        ),
                                        ),
                                        ],
                                        );
  }

  @override
  Size get preferredSize => Size.fromHeight(height);
}
