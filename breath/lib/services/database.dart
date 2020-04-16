import 'package:breath/models/user.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class DatabaseService {

  final String uid;
  DatabaseService({this.uid});

  // collection reference
  final CollectionReference userCollection = Firestore.instance.collection('user');

  Future updateUserData (String email, String password) async {
    return await userCollection.document(uid).setData({
      'email': email,
      'password': password,
    });
  }

  // userData from snapshot
  UserData _userDataFromSnapshot (DocumentSnapshot snapshot) {
    return UserData(
      uid: uid,
      email: snapshot.data['email'],
      password: snapshot.data['password']
    );
  }

  // get user doc stream
  Stream<UserData> get userData {
    return userCollection.document(uid).snapshots()
      .map(_userDataFromSnapshot);
  }

}