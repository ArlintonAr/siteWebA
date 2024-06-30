import { Component } from '@angular/core';

@Component({
  selector: 'brands-enterprise',
  templateUrl: './brands-enterprise.component.html',
  styleUrl: './brands-enterprise.component.css'
})
export class BrandsEnterpriseComponent {

  public brands = [
    {
      name: 'Newmont',
      img: '../../../../assets/img/brandEnterprise/newmont.png'
    },
    {
      name: 'Epsel',
      img: '../../../../assets/img/brandEnterprise/epsel.png'
    },
    {
      name: 'Jami',
      img: '../../../../assets/img/brandEnterprise/jami.png'
    },
    {
      name: 'NuevoSanJose',
      img: '../../../../assets/img/brandEnterprise/nuevoSanJose.png'
    },
    {
      name: 'J&R',
      img: '../../../../assets/img/brandEnterprise/jr.png'
    },
    {
      name: 'Manpower',
      img: '../../../../assets/img/brandEnterprise/manpower.png'
    },
  ]


}
