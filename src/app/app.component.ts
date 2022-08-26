import { Component, OnInit } from '@angular/core';
import { SectionConst } from 'src/assets/helper-const/section-const';
// import { SectionConst } from '../assets/helper-const/section-const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NewsFeedApp';
  menuItems: any = []
  constructor(public sectionConst:SectionConst) {
  }
  ngOnInit(): void {
    this.menuItems = this.sectionConst.sections
    console.log(this.menuItems);
  }
  menuClick(item:any){
    localStorage.setItem("section",item.name)
  }
}
