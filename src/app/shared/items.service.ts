
import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  $key: string;
    recyclables_quantity:number;
    nonrecyclable_quantity:number;
    reusables_quantity:number;
    degradables_quantity:number;
    store_name:string;
    currentTimestamp: Date;

  constructor (public db: AngularFirestore) {
  }

  addItem(item) {
    const randomId = (Math.random()*10).toString();
    const storeName = item.store_name;
    item.Date = new Date();
    item.currentTimestamp = (new Date()).valueOf();
    
    this.db.collection("data").doc(randomId).set(item).then(function() {
      console.log("Document successfully written!");
  });
  };

  async getItem() {
    let val;
    let dfRef;

    dfRef = this.db.collection('data').ref.orderBy('currentTimestamp', 'desc').limit(1);
    await dfRef.get().then((result) => {
      result.docs.forEach((doc) => { 
        val = doc.data()
      })
    }).catch((err) => {  
      console.error(err)
    });
    return val;
  }
 async getDateRange(startDate,endDate) {
    let dateRangeValues = [];    
  let collectionRef= this.db.collection('data').ref.where("currentTimestamp",">=",startDate).where("currentTimestamp","<=",endDate);
  await collectionRef.get().then((result) => {
    result.docs.forEach((doc) => { 
      dateRangeValues.push(doc.data())
    })
  }).catch((err) => {  
    console.error(err)
  });
  return dateRangeValues;
  
}
  

  




   /* let dfRef = this.db.collection("data")*/

  /*  dfRef.orderBy("currentTimestamp", "desc").limit(1);*/

    
   /* await this.db.collection("data").get().subscribe(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
  });
    /*await this.db.collection("data").doc(storeNAme).ref.get().then((result) => {
      val = result.data();
    }).catch((err) => {  
      console.error(err)
    });
    return val;
  }*/
  } 