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
        label: 'Vision',
        items: [
          {
            routerLink: '',
            label: 'Electro'
          },
          {
            routerLink: '',
            label: 'Pyro'
          },
          {
            routerLink: '',
            label: 'Hydro'
          },
          {
            routerLink: '',
            label: 'Anemo'
          },
          {
            routerLink: '',
            label: 'Dendro'
          },
          {
            routerLink: '',
            label: 'Cryo'
          },
          {
            routerLink: '',
            label: 'Geo'
          }
        ]
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
    items: [
      {
        routerLink: '',
        label: 'Arco'
      },
      {
        routerLink: '',
        label: 'Espada Ligera'
      },
      {
        routerLink: '',
        label: 'Catalizador'
      },
      {
        routerLink: '',
        label: 'Mandoble'
      },
      {
        routerLink: '',
        label: 'Lanza'
      }
    ]
  },
  {
    routerLink: '/artefactos',
    icon: 'bi bi-pie-chart-fill',
    label: 'Artefactos'
  },
  {
    routerLink: '/materiales',
    icon: 'bi bi-bookmark-fill',
    label: 'Materiales'
  }
]
