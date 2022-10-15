import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ApiGenshinImpact';

  public isSideNavCollapsed:boolean = false;
  public screenWidth: number = 0;

  public onToggleSideNav(datos: SideNavToggle):void{
    this.screenWidth = datos.screenWidth;
    this.isSideNavCollapsed = datos.collapsed;
  }
}
