import {Directive, ElementRef, OnInit} from '@angular/core';
import * as Cesium from "cesium";

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit{

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const viewer = new Cesium.Viewer(this.el.nativeElement)
  }

}
