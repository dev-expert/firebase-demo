import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Student } from "../models/student.model";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor(private firestore: AngularFirestore) { }

  ref(collection) {
    return this.firestore.collection(collection);
  }

  getstudent(collection: string) {
    return this.ref(collection).snapshotChanges().pipe(map(x => {
      return x.map(a => {
        const data = a.payload.doc.data() as Student;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  getStudentById(collection: string, doc: string) {
    return this.ref(collection).doc(doc).snapshotChanges().pipe(map(x => {
      const data = x.payload.data() as Student;
      data.id = doc;
      return data;
    }))
  }

  updateStudent(collection: string, data: any): Observable<any> {
    const obj = {
      Age: data.Age,
      Name: data.Name,
      Designation: data.Designation
    }

    return new Observable((observer) => {
      this.ref(collection).doc(data.id).set(data).then(() => {
        observer.next();
      });
    });
  }

  addStudent(collection: string, data: any): Observable<any> {
    const obj = {
      Age: data.Age,
      Name: data.Name,
      Designation: data.Designation
    }
    return new Observable((observer) => {
      this.ref(collection).add(obj).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }

  deleteStudent(collection: string, id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref(collection).doc(id).delete().then(() => {
        observer.next();
      });
    });
  }
}
