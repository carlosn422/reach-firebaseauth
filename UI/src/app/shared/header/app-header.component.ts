import { Component } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  isExpanded = true;

  public observer1: any;
  public observer2: any;
  constructor(private msgSer: ToggleService, public authService: AuthService) { }

  ngOnInit() {
    this.observer1 = this.msgSer.escucharAccion1().subscribe(mensaje => {
      if(mensaje.text){
        if(mensaje.text == 'up'){
          //this.toggle();
        }
        if(mensaje.text == 'down'){
          if(mensaje.scroll > 0 && mensaje.scroll < 45){
            this.collapse();
          }

        }
      }
    });
    //this.observer2 = this.msgSer.escucharAccion2().subscribe(mensaje => this.cambiarAlgo2(mensaje));
    //...
  }

  ngOnDestroy() {
    this.observer1.unsubscribe();
  }

  collapse() {
    this.isExpanded = true;
  }

  toggle() {
    this.isExpanded = false;
  }

  se(){
    this.isExpanded = !this.isExpanded;
  }
}
