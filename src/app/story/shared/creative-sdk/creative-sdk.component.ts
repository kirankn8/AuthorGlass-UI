import { Component, OnInit, ViewEncapsulation, Input, ElementRef, ViewChild } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

declare var Aviary: any;
var self;

@Component({
  selector: 'creative-sdk',
  templateUrl: './creative-sdk.component.html',
  styleUrls: ['./creative-sdk.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreativeSdkComponent implements OnInit {

  @Input() imageUrl: any;
  featherEditor: any;
  url: any;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    let self = this;
    this.featherEditor = new Aviary.Feather({
      apiKey: '3bfcd2b9623d45b98301fb7d037425a2',
      // tools : 'enhance,text,meme,draw,crop,resize,effects,frames,sharpness,whiten',
      onSave: function(imageID, newURL) {
        var img = document.getElementById(imageID) as HTMLImageElement;
        img.src = newURL;
        console.log("src: "+img.src);
        this.url = newURL;
        self.featherEditor.close();
      },      
      onClose: function(isDirty) {
        self.featherEditor.close();
      },
      onError: function(errorObj) {
        console.log(errorObj.code);
        console.log(errorObj.message);
        console.log(errorObj.args);
      }
    });
  }

  sanitizeUrl(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  launchEditor(id, src) {
    this.featherEditor.launch({
        image: id,
        url: src,
        forceCropPreset: ['Coverpage','210x297'],
        forceCropMessage: 'Crop your Coverpage:',
    });
    return false;
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
      this.url = this.sanitizeUrl(window.URL.createObjectURL(event.target.files[0]));
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  // fileChange(event) {
  //   let fileList: FileList = event.target.files;
  //   if(fileList.length > 0) {
  //       let file: File = fileList[0];
  //       let formData:FormData = new FormData();
  //       console.log(file);
  //       console.log(formData);
  //       formData.append('uploadFile', file, file.name);
  //       let headers = new Headers();
  //       /** No need to include Content-Type in Angular 4 */
  //       headers.append('Content-Type', 'multipart/form-data');
  //       headers.append('Accept', 'application/json');
  //       let options = new RequestOptions({ headers: headers });
  //       this.http.post(`${this.apiEndPoint}`, formData, options)
  //           .map(res => res.json())
  //           .catch(error => Observable.throw(error))
  //           .subscribe(
  //               data => console.log('success'),
  //               error => console.log(error)
  //           )
  //   }
  // }
}
