import { Component, OnInit } from '@angular/core';
//const date = new Date();
@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome: string = "Laranja Mecânica do Brasil";
  public d: string | undefined;


  constructor() { }

  getDateNow():Date{
    //private d: Date; //
    const date:Date = new Date();
    new Intl.DateTimeFormat(['ban', 'id']).format(date);
    return date;
  }

  ngOnInit() {
    //d:Date;
    //console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
    console.log(this.getDateNow());
    this.d = new Intl.DateTimeFormat(['ban', 'id']).format(this.getDateNow())
    console.log(this.d);

  }

}
