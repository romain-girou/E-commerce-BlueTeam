import 'package:breath_seinajoki/models/user.dart';
import 'package:breath_seinajoki/routes/routes_names.dart';
import 'package:breath_seinajoki/services/auth.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'dart:html' as html;


class MyAppBar extends StatelessWidget implements PreferredSizeWidget{
final double height;

  const MyAppBar({
    Key key,
    @required this.height,
  }) : super(key: key);

  // Future<bool> isUserAnon (FirebaseUser user) async {
  //   bool myUser = user.isAnonymous;
  //   //print(myUser);
  //   if (myUser == true){
  //     return !null;
  //   } else {
      
  //     return null;
  //   }
  // }
  Icon isUserAnon (FirebaseUser user, AuthService anonAuth) {
      // bool myUser = user.isAnonymous;
      // print(user.isAnonymous);
      if (user.isAnonymous == true){
        return Icon(Icons.account_circle);
      } else if (user.isAnonymous == false) {
        //anonAuth.signOut();
        return Icon(Icons.exit_to_app);
      }
    }

  @override
  Widget build(BuildContext context) {

    final user = Provider.of<FirebaseUser>(context);
    final AuthService _auth = AuthService();

    return Column(
      children: [
        Container(
          color: Colors.white12,
          child: Padding(
            padding: EdgeInsets.fromLTRB(20, 20, 10, 0),
            child: Container(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Column(
                    children: <Widget>[
                      Row(
                        children: <Widget>[
                          Image.asset('assets/images/Breath_logo.png', height: 50.0,),
                          Text.rich(
                            TextSpan(
                              text: ',',
                              style: TextStyle(
                                fontFamily: 'Bell MT',
                                fontSize: 30,
                                color: Colors.black,
                              ),    
                            ),
                          ),
                        ],
                      ),
                      Text.rich(
                        TextSpan(
                          text: ' purty at hand',
                          style: TextStyle(
                            fontFamily: 'Clarissa',
                            fontSize: 30, color: Colors.black,
                          ),
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                Row(
                  children: <Widget>[
                    IconButton(
                      icon: Icon(Icons.add_shopping_cart),
                      onPressed: () {
                        Navigator.pushNamed(context, ShoppingCardRoute);
                      },
                    ),
                    SizedBox(width: 5.0),
                    IconButton(
                      icon: isUserAnon(user, _auth), //!= null ? Icon(Icons.account_circle) : Icon(Icons.exit_to_app),
                      onPressed: () {
                        if (user.isAnonymous) {
                          Navigator.pushNamed(context, SignInRoute);
                        } else {
                          _auth.signOut(); 
                          return html.window.location.reload(); 
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