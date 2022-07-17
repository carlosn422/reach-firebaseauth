import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent {

  public lastScrollTop = 0;

  constructor(private msgSer: ToggleService){}

  @HostListener("window:scroll", ['$event'])


  doSomethingOnWindowsScroll($event: Event) {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > 10){
      this.msgSer.hazAccion1('down', this.lastScrollTop)
    }
    if(this.lastScrollTop == 0){
      this.msgSer.hazAccion1('up', this.lastScrollTop)
    }
    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }
}
