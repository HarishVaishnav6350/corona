import { Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { NewsComponent } from './component/news/news.component';
import { TicTacComponent } from './component/tic-tac/tic-tac.component';
import { InvoiceGeneratorComponent } from './component/invoice-generator/invoice-generator.component';
import { CustmorDetailsComponent } from './component/custmor-details/custmor-details.component';
import { AnimationDemoComponent } from './component/animation-demo/animation-demo.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth.guard';
import { TablePracticesComponent } from './component/table-practices/table-practices.component';
import { QuryParamComponent } from './component/qury-param/qury-param.component';
import { ReuseableCardComponent } from './component/reuseable-card/reuseable-card.component';
import { AngularMastryComponent } from './component/angular-mastry/angular-mastry.component';
import { DynamicRoutingComponent } from './component/dynamic-routing/dynamic-routing.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { FormPracticesComponent } from './component/form-practices/form-practices.component';
import { RegisterComponent } from './component/register/register.component';
import { AirsmeInvoiceComponent } from './component/airsme-invoice/airsme-invoice.component';

export const routes: Routes = [{
  path: '', component: LandingPageComponent,
  children: [
    { path: '', component: MainPageComponent },
    { path: 'news', component: NewsComponent },
    { path: 'tic-tac-toe', component: TicTacComponent },
    { path: 'invoice', component: AirsmeInvoiceComponent },
    { path: 'custmor-details', component: CustmorDetailsComponent },
    { path: 'anim-demo', component: AnimationDemoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'table-content', component: TablePracticesComponent, canActivate: [AuthGuard] }, 
    { path: 'query/:table/:tab', component: QuryParamComponent },
    { path: 'card', component: ReuseableCardComponent },
    { path: 'mastry', component: AngularMastryComponent },
    { path: 'mastry/:id', component: DynamicRoutingComponent },
    { path: 'form-practice', component: FormPracticesComponent, canActivate: [AuthGuard] } ,
    {path: 'register',component:RegisterComponent}
  ]
},
{ path: '**', component: PageNotFoundComponent },
];

