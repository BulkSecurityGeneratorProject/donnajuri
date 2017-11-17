import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PasswordComponent } from './password.component';

export const passwordRoute: Route = {
    path: 'password',
    component: PasswordComponent,
    data: {
        authorities: ['ROLE_COORDENADOR', 'ROLE_ADVOGADO', 'ROLE_CLIENTE'],
        pageTitle: 'Password'
    },
    canActivate: [UserRouteAccessService]
};
