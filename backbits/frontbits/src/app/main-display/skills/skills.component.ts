import { Component, OnInit } from '@angular/core';
import { MyBitsService } from 'src/app/services/mybits.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  displayTitle = "Skills!";

  constructor(private myBitsService: MyBitsService) { }

  ngOnInit() {
    this.myBitsService.getSomeBitsAboutMe("skills").subscribe(
      (response: HttpResponse<any>) => {
        let rawHttpResponseBody = response.body;

        console.log(rawHttpResponseBody);
      },
      (err) => {
        console.log(`Uh-oh! An exception was raised: [Status Code]:${err["status"]}, [Response]: ${err["statusText"]}`);
      }
    );
  }

}
