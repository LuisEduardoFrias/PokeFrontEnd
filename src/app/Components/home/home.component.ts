import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  private Contador = 0;
  
  Urlimage = '';

   private ListUrlImage = [
    "http://fondospantalla.net/wp-content/uploads/2017/02/Fondos-de-pantalla-Pokemon-Imagenes-hd-fotos-wallpaper-para-celular-android.jpg",
    "http://fondospantalla.net/wp-content/uploads/2017/02/Fondos-de-pantalla-Pokemon-Imagenes-hd-fotos-wallpaper-para-celular-android-2.jpg",
    "http://fondospantalla.net/wp-content/uploads/2017/02/Fondos-de-pantalla-Pokemon-Imagenes-hd-fotos-wallpaper-para-celular-android-3.jpg",
    "http://fondospantalla.net/wp-content/uploads/2017/02/Fondos-de-pantalla-Pokemon-Imagenes-hd-fotos-wallpaper-para-celular-android-4.jpg",
    "http://fondospantalla.net/wp-content/uploads/2017/02/Fondos-de-pantalla-Pokemon-Imagenes-hd-fotos-wallpaper-para-celular-android-6.jpg"]

  ngOnInit(): void {

    setInterval(() =>
    {
      
      this.Contador++;

      this.Urlimage = this.ListUrlImage[this.Contador];

      if (this.Contador == 4) {
        this.Contador = 0;
      }
    
    }, 2000);


  }

}
