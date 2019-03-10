/**
 * Service used to get mybits info by making requests
 * to the backend API.
 */
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";


@Injectable()
export class MyBitsService {

    /**
     * Default constructor for the service.
     * 
     * @param httpClient (HttpClient) - Used to make HTTP requests to the backend API.
     */
    constructor(private httpClient: HttpClient) {

    }

    /**
     * Makes a request to the backend API in order to retrieve
     * data for the About Me section.
     * 
     * @returns an HttpResponse object as an observable.
     */
    public getSomeBitsAboutMe(sectionName: string) {

        // maps the sectionName to the proper backend API url
        let urlMapping: object = {
            "aboutMe": environment.MYBITS_ENDPOINT_ABOUTME,
            "projects": environment.MYBITS_ENDPOINT_PROJECTS,
            "skills": environment.MYBITS_ENDPOINT_SKILLS
        };

        let url = environment.MYBITS_HOST + urlMapping[sectionName];

        return this.httpClient.get<HttpResponse<any>>(url, { observe: 'response' });
    }

}
