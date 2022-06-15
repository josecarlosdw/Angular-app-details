import { Pipe, PipeTransform } from '@angular/core';
import { Estadio } from '../estadios';

@Pipe({
    
    name: 'selectedEstadio'
})

export class SelectedEstadioPipe implements PipeTransform {

    transform(allEstadios: Estadio[], estadiosId: number): any {

        return allEstadios.filter(p => p.id === estadiosId);
    }
}