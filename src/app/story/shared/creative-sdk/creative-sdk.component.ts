import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    let self = this;
    this.featherEditor = new Aviary.Feather({
      apiKey: '3bfcd2b9623d45b98301fb7d037425a2',
      // tools : 'enhance,text,meme,draw,crop,resize,effects,frames,sharpness,whiten',
      onSave: function(imageID, newURL) {
        var img = document.getElementById(imageID) as HTMLImageElement;
        img.src = newURL;
        self.featherEditor.close();
      },      
      onClose(isDirty) {
        self.featherEditor.close();
      }
    });
  }

  launchEditor(id, src) {
    // console.log(this.featherEditor);
    this.featherEditor.launch({
        image: id,
        url: src,
        forceCropPreset: ['Coverpage','210x297'],
        forceCropMessage: 'Crop your Coverpage:',
    });
    return false;
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        console.log(file);
        console.log(formData);
        // formData.append('uploadFile', file, file.name);
        // let headers = new Headers();
        // /** No need to include Content-Type in Angular 4 */
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers });
        // this.http.post(`${this.apiEndPoint}`, formData, options)
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )
    }
  }
}
