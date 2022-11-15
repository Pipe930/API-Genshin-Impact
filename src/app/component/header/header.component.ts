import {
  Component,
  OnInit,
  Input,
  HostListener
} from '@angular/core';
import { Languages } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;

  public canShowSearchAsOverlay: boolean = false;
  public selectedLanguage: any;

  public languages:any = Languages;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  public onResize(event: any){
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
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
