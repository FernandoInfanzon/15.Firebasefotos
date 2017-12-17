import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FileItem } from '../models/file-item';

import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class CargaImagenesService {
   private CARPETA_IMAGENES: string = 'img';

  constructor(
    public af: AngularFireDatabase
  ) { }

  listaUltimasImagenes( numeroImagenes: number ): Observable<any[]> {
    return this.af.list(
       `/${ this.CARPETA_IMAGENES }`,
       ref => ref.limitToLast(numeroImagenes)
    ).valueChanges();
  }

  cargar_imagenes_firebase( archivos: FileItem[] ){
    const storageRef = firebase.storage().ref();
    for(const item of archivos){
      item.estaSubiendo = true;

      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.CARPETA_IMAGENES }/${ item.nombreArchivo }`).put( item.archivo );
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        ( snapshot ) => item.progreso = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100,
        ( error ) => console.error( 'Error al subir ', error),
        () => {
          item.url = uploadTask.snapshot.downloadURL;
          item.estaSubiendo = false;
          this.guardarImagen( {
            nombre: item.nombreArchivo,
            url: item.url
          });
        }
      ); // on
    }
  }

  private guardarImagen( imagen: any ){
    this.af.list(
      `/${ this.CARPETA_IMAGENES }`
    ).push( imagen );
  }
}