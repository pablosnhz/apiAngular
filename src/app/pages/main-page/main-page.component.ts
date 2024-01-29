import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http'
import { Personaje } from 'src/interfaces/personajes.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
  personajes: Personaje[] | undefined;
  personajesFilt: Personaje[] | undefined;

  constructor( private http: HttpClient ){
    this.getData()
  }

  getData(){
    this.http.get<any>(environment.apiUrl + '/character')
    .subscribe((res)=> {
      this.personajes = res.results;


      this.personajesFilt = this.personajes;

    })
  }

  filter(e: any){
    const search: string = e.target.value
    console.log({ search })
  }

}


// this.personajes = res.map(({ id, name, species, type, gender, location, image }: Personaje) => {
//   return {
//     id: id,
//     name: name,
//     species: species,
//     type: type,
//     gender: gender,
//     location: location,
//     image: image
//   }
// })
