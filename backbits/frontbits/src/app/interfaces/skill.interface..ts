/**
 * Default interface for a Skill object.
 * 
 * Example:
 * {
        title: "My Bits",
        website_link: "github.com/IgooorGP/mybits",
        description: "Some Bits about me written in Django with a little help of Angular on the front-end!",
        image_url: "http://localhost:5005/backbits/static/backbits/github_8dEp4uA.svg"
    }
 */
export interface Skill {
    title: string,
    level: string
    description: string
    imageUrl: string
}