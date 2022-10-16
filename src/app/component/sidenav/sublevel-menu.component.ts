import { Component, OnInit, Input } from '@angular/core';
import { INavbarData } from './NavbarData';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sublevel-menu',
  template: `
  <ul *ngIf="collapsed && datos.items && datos.items.length > 0"
  class="sublevel-nav"
  [@submenu]="expanded
  ? {value: 'visible',
    params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',height: '*'}}
  : {value: 'hidden',
    params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',height: '0'}}"
    >
    <li *ngFor="let item of datos.items" class="sublevel-items">
      <a class="sublevel-link"
      (click)="handeleClick(item)"
      *ngIf="item.items && item.items.length > 0"
      >
        <i class="sublevel-link-icon bi bi-circle-fill"></i>
        <span class="sublevel-link-text"
        *ngIf="collapsed"
        >{{item.label}}</span>
        <i class="menu-icon-collapsed"
        *ngIf="item.items && collapsed"
        [ngClass]="!item.expanded ? 'bi bi-caret-right-fill': 'bi bi-caret-down-fill'"
        ></i>
      </a>
      <a class="sublevel-link"
      *ngIf="!item.items || (item.items && item.items.length === 0)"
      [routerLink]="[item.routerLink]"
      routerLinkActive="active-sublevel"
      [routerLinkActiveOptions]="{exact: true}">
        <i class="sublevel-link-icon bi bi-circle-fill"
        ></i>
        <span class="sublevel-link-text" *ngIf="collapsed">{{item.label}}</span>
      </a>
      <div *ngIf="item.items && item.items.length > 0">
        <app-sublevel-menu
        [collapsed]="collapsed"
        [multiple]="multiple"
        [expanded]="item.expanded"
        ></app-sublevel-menu>
      </div>
    </li>
  </ul>
  `,
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible <=> hidden', [style({overflow: 'hidden'}),
        animate('{{transitionParams}}')
    ]),
    transition('void => *', animate(0))
    ])
  ]
})
export class SublevelMenuComponent implements OnInit {
  @Input() public datos: INavbarData = {
    routerLink: '',
    icon: '',
    label: '',
    items: [],
  }

  @Input() public collapsed: boolean = false;
  @Input() public animacion: boolean | undefined;
  @Input() public expanded: boolean | undefined;
  @Input() public multiple: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public handeleClick(item: any):void{
    if(!this.multiple){
      if(this.datos.items && this.datos.items.length > 0){
        for(let modeItem of this.datos.items){
          if(item !==modeItem && modeItem.expanded){
            modeItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }
}
