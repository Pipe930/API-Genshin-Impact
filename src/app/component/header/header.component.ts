import {
  Component,
  OnInit,
  Input,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;

  public canShowSearchAsOverlay: boolean = false;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  public onResize(event: any){
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
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

  public checkCanShowSearchAsOverlay(innerWidth: number):void{
    if(innerWidth < 845){
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }

}
