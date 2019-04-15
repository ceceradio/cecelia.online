import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array < any > = [{
      name: "Special Answer",
      url: "https://aat.devfluid.com",
      repository: "https://github.com/satsukitv/answer-a-thing",
      description: "A creative online game where players earn points by drawing or writing answers to a question, and guessing whose answer will chosen as the best! A fun and open-ended game that's great for breaking the ice and having fun!",
      image: false
    },
    {
      name: "genders.json",
      url: false,
      repository: "https://github.com/satsukitv/genders",
      description: "A json file with an incomplete list of genders that is useful to developers creating social platforms or personal information forms.",
      image: false
    },
    {
      name: "grunt-aem-mobile",
      url: "https://www.npmjs.com/package/grunt-aem-mobile",
      urlLabel: "npm",
      repository: "https://github.com/SixDimensions/grunt-aem-mobile",
      description: "A grunt module that provides common AEM Mobile publishing workflows. Upload articles and thumbnails, publish articles and collections, and manage collections.",
      image: false
    },
    {
      name: "aem-mobile-api",
      url: "https://www.npmjs.com/package/aem-mobile-api",
      urlLabel: "npm",
      repository: "https://github.com/SixDimensions/aem-mobile-api-js",
      description: "JavaScript library that provides publishing API functionality for AEM Mobile.",
      image: false
    },
    {
      name: "Pepito's Friend",
      url: "http://twitter.com/pepitosfriend",
      repository: "https://github.com/satsukitv/pepitos-friend",
      description: "A twitter robot cat who is friends with @PepitoTheCat. Responds to Pepito's coming and going tweets, and tweets about his activities throughout the day.",
      image: "/assets/img/pepitosfriend.png"
    },
    {
      name: "Twitter Block Chain",
      url: "https://chrome.google.com/webstore/detail/twitter-block-chain/dkkfampndkdnjffkleokegfnibnnjfah?hl=en",
      urlLabel: "Google Web Store",
      repository: "https://github.com/satsukitv/twitter-block-chain",
      description: "This browser extension helps users who are likely to be, or currently are being dog-piled. By navigating to a user's followers (or following) page and activating the plugin, you can block all users on that page.",
      image: "/assets/img/twitterblockchain.png"
    },
  ]
  getImage(image) {
    if (image) {
      return image;
    }
    return "/assets/img/satsuki.png";
  }
  getUrl(project) {
    if (project.url) {
      return project.url;
    }
    if (project.repository) {
      return project.repository;
    }
    return "";
  }
  getUrlLabel(project) {
    if (project.hasOwnProperty('urlLabel') && project.urlLabel) {
      return project.urlLabel;
    }
    if (!project.hasOwnProperty('url') || !project.url) {
      return "";
    }
    return project.url.replace("http://", "").replace("https://", "");
  }
  getRepositoryLabel(url) {
    if (!url) {
      return "";
    }
    var idx = url.indexOf("github.com/");
    if (idx > -1) {
      idx = url.indexOf("github.com/") + "github.com/".length;
      return url.substring(idx, url.length);
    }
    return url;
  }
  constructor() {}

  ngOnInit() {}

}
