import { Component, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/interfaces/encuesta';
import { ActivatedRoute, Router } from '@angular/router';
import { EncuestasService } from '../encuestas.service';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.scss']
})
export class VotarComponent implements OnInit {

  encuesta: Encuesta;
  private id: string;

  constructor(private route: ActivatedRoute, private es: EncuestasService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.es.getEncuestaById(this.id).subscribe( (res: any) => {
      console.log('Encuesta recibida', res);
      this.encuesta = res;
    });
  }

  votar() {
    // logica
    this.router.navigate(['/encuestas/seguimiento/' + this.id]);
  }

}