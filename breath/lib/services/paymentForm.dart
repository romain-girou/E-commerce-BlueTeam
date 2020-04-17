import 'package:cloud_firestore/cloud_firestore.dart';

class PaymentService {

  final String uid;
  PaymentService({this.uid});

  final CollectionReference userCollection = Firestore.instance.collection('user');


  Future updateDeliveryData (
      String fullName,
      String address,
      String city,
      String state,
      String zip,
      String country,
      String phone,
      String instructions,
  ) async {
    return await userCollection.document(uid).updateData({
      'fullName': fullName,
      'address': address,
      'city': city,
      'state': state,
      'zip': zip,
      'country': country,
      'phone': phone,
      'instructions': instructions,
    });
  }

}
