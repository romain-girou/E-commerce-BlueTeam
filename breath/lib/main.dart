import 'package:breath/routes/routes_names.dart';
import 'package:flutter/material.dart';
import 'package:breath/routes/router.dart' as router;

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Breath',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      // navigatorKey: locator<NavigationService>().navigatorKey,
      initialRoute: HomeRoute,
      onGenerateRoute: router.generateRoute,
    );
  }
}
