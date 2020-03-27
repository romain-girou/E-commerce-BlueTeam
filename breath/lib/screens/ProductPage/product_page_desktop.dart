import 'package:breath/routes/routes_names.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';

class ProductPageDesktop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    double myPageHeight = MediaQuery.of(context).size.height - 100;
    double myPageWidth = MediaQuery.of(context).size.width;
    return Column(
        children: <Widget>[
          Container(
            color: Colors.red,
            height: myPageHeight,
            width: myPageWidth,
          ),
          Container(
            color: Colors.green,
            height: myPageHeight,
            width: myPageWidth,
          ),
          Container(
            color: Colors.blue,
            height: myPageHeight,
            width: myPageWidth,
          ),
        ],
    );
  }
}
