import { INavbarData } from './NavbarData';

export const barraNavegacionDatos: INavbarData[] = [
  {
    routerLink: '/Inicio',
    icon: 'bi bi-house-door',
    label: 'Inicio',
  },
  {
    routerLink: '/personajes',
    icon: 'bi bi-person-lines-fill',
    label: 'Personajes',
    items: [
      {
        routerLink: '',
        label: 'Vision'
      },
      {
        routerLink: '',
        label: 'Arma'
      }
    ]
  },
  {
    routerLink: '/armas',
    icon: 'bi bi-hammer',
    label: 'Armas',
  }
]
