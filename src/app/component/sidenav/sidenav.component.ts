import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { transition, trigger, style, animate, keyframes } from '@angular/animations';
import { barraNavegacionDatos } from './navegacion-data';
import { INavbarData } from './NavbarData';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms',
          style({ opacity: 1 })
        )
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms',
          style({ opacity: 0 })
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ])
        )
      ])
    ])
  ]
})

export class SidenavComponent implements OnInit {
  @Output() public onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  public collapsed: boolean = false;
  public screenWidth: number = 0;
  public barraDatos = barraNavegacionDatos;
  public multiple: boolean = false;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  public onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit(
        {
          collapsed: this.collapsed,
          screenWidth: this.screenWidth,
        }
      )
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  public abrirMenu():void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit(
      {
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      }
    )
  }

  public cerrarMenu():void{
    this.collapsed = false;
    this.onToggleSideNav.emit(
      {
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      }
    )
  }

  public handleClick(item: INavbarData):void{
    if(!this.multiple){
      for(let modeItem of this.barraDatos){
        if(item !== modeItem && modeItem.expanded){
          modeItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
  }

}
