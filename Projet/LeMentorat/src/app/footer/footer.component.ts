import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent
{
  showLegalMention = false;
  showCGVModal = false;
  CGVLink: any;
  legalMentionLink: any;

  constructor(sanitizer: DomSanitizer)
  {
    this.CGVLink = sanitizer.bypassSecurityTrustResourceUrl('http://localhost:8000/res/pdf/CGV.pdf');
    this.legalMentionLink = sanitizer.bypassSecurityTrustResourceUrl(
      'http://localhost:8000/res/pdf/mentions_legales.pdf');
  }
}
