import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsService {

  constructor() { }
  public loadScript(route: string,file : string) {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = './assets'+route+'/'+file;
    node.type = 'text/javascript';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  public loadModuleScript(route: string, file: string) {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = './assets' + route + '/' + file;
    node.type = 'module';
    node.async = true;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
