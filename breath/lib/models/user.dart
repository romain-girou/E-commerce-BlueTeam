class User {

  final String uid;

  User ({this.uid});

}

class UserData {

  final String uid;
  final String email;
  final String password;
  List<dynamic> myProduct;

  UserData ({this.uid, this.email, this.password, this.myProduct});
  
}

class Product {

  String name;
  double price;

  Product({this.name, this.price});

  @override
  String toString() {
    // TODO: implement toString
    return '{${this.name}, ${this.price}}';
  }

}