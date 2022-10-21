import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  public getHeadClass(): string{
    let styleClass = '';

    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'header-trimmed';
    } else{
      styleClass = 'header-md-screen';
    }

    return styleClass;
  }

}
