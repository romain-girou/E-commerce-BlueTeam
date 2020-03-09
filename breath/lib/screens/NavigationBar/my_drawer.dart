import 'package:breath/routes/routes_names.dart';
import 'package:flutter/material.dart';

class MyDrawer extends StatelessWidget {
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
                // ...
                // Then close the drawer
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: Center(child: Text('About us')),
              onTap: () {
                // Update the state of the app
                // ...
                // Then close the drawer
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: Center(child: Text('My account')),
              onTap: () {
                Navigator.pushNamed(context, SignInRoute);
                Navigator.pop(context);
              },
            )
          ],
        ),
      );
  }
}