import { RouterConfig, Routes, RouterModule } from '@angular/router';
import { CreerClientComponent } from './client-creer.component';
import { ClientListComponent } from './client-list.component';

export const CLIENT_ROUTES: RouterConfig = [
    { path: '', component: ClientListComponent},
    { path: 'creer', component: CreerClientComponent}
];

