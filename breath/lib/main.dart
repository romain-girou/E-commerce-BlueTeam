import 'package:breath/routes/router.dart';
import 'package:breath/routes/routes_names.dart';
import 'package:breath/services/auth.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'models/user.dart';


void main() {
  FluroRouter.setupRouter();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return StreamProvider<User>.value(
      value: AuthService().user,
        child: MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Breath',
        theme: ThemeData(
          primarySwatch: Colors.blue,
          cursorColor: Colors.black12,
        ),
        // navigatorKey: locator<NavigationService>().navigatorKey,
        initialRoute: HomeRoute,
        onGenerateRoute: FluroRouter.router.generator,
      ),
    );
  }
}
