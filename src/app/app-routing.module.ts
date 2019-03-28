import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './Components/Pages/portafolio/portafolio.component';
import { AboutComponent } from './Components/Pages/about/about.component';
import { PortafolioItemComponent } from './Components/Pages/portafolio-item/portafolio-item.component';

const APP_ROUTES : Routes = [
    {path : 'home' , component : PortafolioComponent},
    {path : 'about' , component : AboutComponent},
    {path : 'Item' , component: PortafolioItemComponent},
    {path : '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports : [
        RouterModule.forRoot( APP_ROUTES,{ useHash:true})
    ],
    exports : [
        RouterModule
    ]
})
export class AppRoutingModule{}