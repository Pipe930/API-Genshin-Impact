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
  },
  {
    routerLink: '/armas',
    icon: 'bi bi-hammer',
    label: 'Armas'
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
  },
  {
    routerLink: '',
    icon: 'bi bi-gear-fill',
    label: 'Configuracion',
    items: [
      {
        routerLink: '',
        icon: '',
        label: 'Perfil'
      }
    ]
  }
]
