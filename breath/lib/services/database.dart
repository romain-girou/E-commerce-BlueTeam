import 'package:breath_seinajoki/models/user.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class DatabaseService {

  final String uid;
  DatabaseService({this.uid});

  // collection reference
  final CollectionReference userCollection = Firestore.instance.collection('user');

  Future updateUserData (String email, String password, List<Product> myProducts) async {
    return await userCollection.document(uid).setData({
      'email': email,
      'password': password,
      'products': myProducts,
    });
  }

  Future updateUserProducts (List<dynamic> myProduct) async {
    return await userCollection.document(uid).updateData({
      'products': myProduct,
    });
  }

  // products list from snapshot
  List<Map> _productsListFromSnapshot(QuerySnapshot snapshot) {
    return snapshot.documents.map((doc) {
      return doc.data['products'];
    }).toList();
  }

  // userData from snapshot
  UserData _userDataFromSnapshot (DocumentSnapshot snapshot) {
    return UserData(
      uid: uid,
      email: snapshot.data['email'],
      password: snapshot.data['password'],
      myProduct: snapshot.data['products'],
    );
  }

  UserData _userDataProduct (DocumentSnapshot snapshot) {
    return UserData(myProduct: snapshot.data['products']);
  }

  // get user doc stream
  Stream<UserData> get userData {
    return userCollection.document(uid).snapshots()
      .map(_userDataFromSnapshot);
  }

  Stream<UserData> get product {
    return userCollection.document(uid).snapshots().map(_userDataProduct);
  }

}