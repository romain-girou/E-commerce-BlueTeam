import 'package:breath/routes/routes_names.dart';
import 'package:flutter/material.dart';

class MyDrawer extends StatefulWidget {

  @override
  _MyDrawerState createState() => _MyDrawerState();
}

class _MyDrawerState extends State<MyDrawer> {

  String route = "";
  String currentRoute = "";
  Future navigation (String route) {
    // print(route);
    print(currentRoute);
    if (route != currentRoute){
    currentRoute = route;
    return Navigator.pushNamed(context, route);
    } else {
      return null;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Drawer(
        child: ListView(
          // Important: Remove any padding from the ListView.
          padding: EdgeInsets.zero,
          children: <Widget>[
            ListTile(
              title: Center(child: Text('Collections')),
              onTap: () {
                // Update the state of the app
                // setState(() {
                //   route = CollectionRoute;
                // });
                // Then close the drawer
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: Center(child: Text('About us')),
              onTap: () {
                // Update the state of the app
                // setState(() {
                //   route = AboutUsRoute;
                // });
                // Then close the drawer                
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: Center(child: Text('My account')),
              onTap: () {
                print(route);
                if (route != SignInRoute){
                // Update the state of the app
                setState(() {
                  route = SignInRoute;
                });
                // Then close the drawer                
                Navigator.pop(context);
                navigation(route);              
                }
              },
            )
          ],
        ),
      );
  }
}