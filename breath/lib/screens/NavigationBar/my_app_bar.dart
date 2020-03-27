import 'package:flutter/material.dart';

class MyAppBar extends StatelessWidget implements PreferredSizeWidget{
final double height;

  const MyAppBar({
    Key key,
    @required this.height,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
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
                      Image.asset('assets/images/Breath_logo.png', height: 60.0,),
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
                        style: TextStyle(fontSize: 49, color: Colors.black,),
                        textAlign: TextAlign.center,
                      ),
                  ],),
                
                IconButton(
                  icon: Icon(Icons.menu),
                  onPressed: () {
                    Scaffold.of(context).openEndDrawer();
                  },
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