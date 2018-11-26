import { Component, OnInit } from '@angular/core';
import { MyBitsService } from 'src/app/services/mybits.service';
import { HttpResponse } from '@angular/common/http';
import { Skill } from 'src/app/interfaces/skill.interface.';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillsArray: Skill[] = [];
  displayTitle = "Skills!";

  constructor(private myBitsService: MyBitsService) { }

  ngOnInit() {

    this.myBitsService.getSomeBitsAboutMe("skills").subscribe(
      (response: HttpResponse<any>) => {
        let rawHttpResponseBody: Skill[] = response.body;

        rawHttpResponseBody.forEach(skill => {

          // creates a typed object of the interface
          let s: Skill = {
            title: skill["title"],
            level: skill["level"],
            description: skill["description"],
            imageUrl: skill["image_url"]
          }

          // pushes to the typed array
          this.skillsArray.push(s);
        });

        console.log(this.skillsArray);
      },
      (err) => {
        console.log(`Uh-oh! An exception was raised: [Status Code]:${err["status"]}, [Response]: ${err["statusText"]}`);
      }
    );
  }

}
