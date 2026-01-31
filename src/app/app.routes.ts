import { Routes } from '@angular/router';
import { IndexMainComponent } from './index/index-main/index-main.component';
import { AuthLoginComponent }  from './auth/auth-login/auth-login.component';


export const routes: Routes = [
	{
        path: '',
        component: IndexMainComponent
	},
	{
        path: 'auth',
        component: AuthLoginComponent
	},
	// {
    //     path: 'applications',
    //     component: ApplicationMainComponent
	// }
];
