import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

declare var Aviary: any;

@Component({
  selector: 'creative-sdk',
  templateUrl: './creative-sdk.component.html',
  styleUrls: ['./creative-sdk.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreativeSdkComponent implements OnInit {

  @Input() imageUrl: string;
  featherEditor: any;

  constructor() { }

  ngOnInit() {
    this.featherEditor = new Aviary.Feather({
      apiKey: '3bfcd2b9623d45b98301fb7d037425a2',
      // tools : 'enhance,text,meme,draw,crop,resize,effects,frames,sharpness,whiten',
      onSave: function(imageID, newURL) {
          var img = document.getElementById(imageID) as HTMLImageElement;
          img.src = newURL;
      }
    });
  }

  launchEditor(id, src) {
    this.featherEditor.launch({
        image: id,
        url: src,
        // forceCropPreset: ['Coverpage','150x150'],
    });
    return false;
  }
}
