import { Component, OnInit } from '@angular/core';
import { MyBitsService } from 'src/app/services/mybits.service';
import { HttpResponse } from '@angular/common/http';
import { Project } from 'src/app/interfaces/project.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsArray: Project[] = [];
  displayTitle: string = "Github Projects";
  hasError: boolean = false;
  loading: boolean = true;

  constructor(private myBitsService: MyBitsService) { }

  ngOnInit() {
    this.myBitsService.getSomeBitsAboutMe("projects").subscribe(
      (response: HttpResponse<any>) => {
        let rawHttpResponseBody: Project[] = response.body;

        rawHttpResponseBody.forEach(project => {

          // creates a typed object of the interface
          let p: Project = {
            title: project["title"],
            websiteLink: project["website_link"],
            description: project["description"],
            imageUrl: project["image_url"]
          };

          // pushes to the typed array
          this.projectsArray.push(p);
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
