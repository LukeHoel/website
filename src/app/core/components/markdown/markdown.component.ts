import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import * as marked from 'marked';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent {
  @Input('markdown') set markdown(markdown: string) {
    if (markdown) {
      this.compiledMarkdown = this.domSanitizer.bypassSecurityTrustHtml(marked(markdown));
    }
  }
  compiledMarkdown: SafeHtml;
  constructor(private domSanitizer: DomSanitizer) { }
}
