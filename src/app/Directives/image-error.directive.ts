import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageError]'
})
export class ImageErrorDirective {

  constructor(private elementImg : ElementRef) { }

  @HostListener('error')
  OnError():void{
    this.elementImg.nativeElement.src = '../../assets/Image Error _files/upload-error.png';
  }

}
