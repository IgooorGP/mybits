import { Component, OnInit } from '@angular/core';
import { MyBitsService } from 'src/app/services/mybits.service';
import { HttpResponse } from '@angular/common/http';
import { AboutMe } from 'src/app/interfaces/about-me.interface';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMe: AboutMe;
  displayTitle: string = "About me";
  hasError: boolean = false;
  loading: boolean = true;

  constructor(private myBitsService: MyBitsService) { }

  ngOnInit() {
    this.myBitsService.getSomeBitsAboutMe("aboutMe").subscribe(
      (response: HttpResponse<any>) => {
        let rawHttpResponseBody: AboutMe[] = response.body;

        rawHttpResponseBody.forEach(aboutMe => {
          this.aboutMe = {
            firstName: aboutMe["first_name"],
            lastName: aboutMe["last_name"],
            city: aboutMe["city"],
            age: aboutMe["age"],
            maritalStatus: aboutMe["marital_status"],
            languages: aboutMe["languages"],
            description: aboutMe["description"],
            imageUrl: aboutMe["image_url"],
            resumeUrl: aboutMe["resume_url"],
          };
        });

        this.loading = false;
      },
      (err) => {
        this.loading = false;
        this.hasError = true;

        // logging when not in production
        if (!environment.production) {
          console.log(`Uh-oh! An exception was raised: [Status Code]:${err["status"]}, [Response]: ${err["statusText"]}`);
        }
      }
    );
  }
}
