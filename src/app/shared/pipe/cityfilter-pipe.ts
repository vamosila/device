import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityfilter',
  pure: false,
  standalone: true
})
export class CityfilterPipe implements PipeTransform {

  transform(cities: any[], filters: any): any[] {
    if(!cities || ! filters) {
      return cities
    }    
    return cities.filter( city => {
      return Object.keys(filters).every(key => {
        const filterValue = filters[key]
        const cityValue = city[key]

        if(filterValue === null || 
          filterValue === undefined || 
          filterValue === '') {
          return true
        }
        if(typeof cityValue === 'number') {
          return cityValue.toString().includes(filterValue.toString())
        }
        if(typeof cityValue === 'string') {
          return cityValue.toLowerCase().includes(filterValue.toLowerCase())
        }
        return true
      })
    })
  }

}
