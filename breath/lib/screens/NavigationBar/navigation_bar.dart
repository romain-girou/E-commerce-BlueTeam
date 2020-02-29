import 'dart:ui';

import 'package:flutter/material.dart';

class NavigationBar extends StatefulWidget {
  @override
  _NavigationBarState createState() => _NavigationBarState();
}

class _NavigationBarState extends State<NavigationBar> {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.amber,
      height: 100,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          SizedBox(
            height: 80,
            width: 150,
            child: Image.asset('assets/breath.png'),
          ),
          Row(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              FlatButton(
                onPressed: null, 
                child: Icon(
                  Icons.shopping_basket,
                ),
              ),
              SizedBox(width: 60.0),
              FlatButton(
                onPressed: null, 
                child: Icon(
                  Icons.person,
                ),
              ),
            ],
          )
        ],
      ),
    );
  }
}