
import 'package:cloud_firestore/cloud_firestore.dart';

class CardService {
  
  final String uid;
  CardService({this.uid});

  final CollectionReference userCollection = Firestore.instance.collection('user');

  Future updateCardData (
  String numero,
  String expDate,
  String crypto,
  ) async {
    return await  userCollection.document(uid).updateData({ 
       'expDate': expDate,
       'numero': numero,
       'crypto': crypto,
    });
  }
}