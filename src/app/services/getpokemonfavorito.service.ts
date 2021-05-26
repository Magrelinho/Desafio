import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetpokemonfavoritoService {

  constructor() { }

  public setData(data: any) {
    let dataStorage = JSON.parse(localStorage.getItem('favoritos'));
    if (dataStorage == null) {
      dataStorage = [];
      dataStorage.push(data);
    } else {
      if (dataStorage.find(item => item.name == data.name)) {
        localStorage.removeItem('data.name');
        dataStorage = dataStorage.filter(item => item.name != data.name);

      }
      else {
        dataStorage.push(data);

      }
    }
    localStorage.setItem('favoritos', JSON.stringify(dataStorage));
  }

  public getData(name: String) {
    let dataStorage: any[] = JSON.parse(localStorage.getItem('favoritos'));
    if (dataStorage != null)
      return dataStorage.find(item => item.name == name)
  }

  public getFavoritos() {
    let dataStorage = JSON.parse(localStorage.getItem('favoritos'));
    return dataStorage;

  }

  public limparFavoritos() {
    localStorage.clear();

  }
  
}
