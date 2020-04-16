import 'package:breath_seinajoki/models/user.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class Cart {

  final UserData userData;
  Cart({this.userData});

  final CollectionReference userCollection = Firestore.instance.collection('user');


  List<Product> _productListFromSnapshot(QuerySnapshot snapshot) {
    return snapshot.documents.map((doc) {
      return Product(
        name: doc.data['name'] ?? '',
        price: doc.data['price'] ?? 0.0 ,
        );
    }).toList();
  }

  Future updateUserProducts(Product myProduct) async {
    return await userCollection.document(userData.uid).setData({
      'products': myProduct
    });
  }
}