import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AnnounceComponent } from '../components/announce/announce.component';
import { HeaderComponent } from '../components/header/header.component';
import {HomeComponent } from '../components/home/home.component';
import {MenuComponent} from '../components/menu/menu.component';
import {ReservationComponent } from '../components/reservation/reservation.component';
import {ReservationFormComponent} from '../components/reservation-form/reservation-form.component';
import {FooterComponent} from '../components/footer/footer.component';
import {GalleryComponent} from '../components/gallery/gallery.component';
import {OurTeamComponent} from '../components/our-team/our-team.component';
import {ContactUsComponent} from '../components/contact-us/contact-us.component'



const routes: Routes = [
  {
    path: '' , component: HomeComponent
  },
  {
    path: 'announce', component:AnnounceComponent
  },
  {
    path: 'gallery', component:GalleryComponent
  },
  {
    path: 'menu' , component:MenuComponent
  },
  {
    path: 'reservation' , component:ReservationComponent
  },
  {
    path: 'form' , component:ReservationFormComponent
  },
  {
    path: 'staff' , component:OurTeamComponent
  },
  {
    path: 'contact' , component:ContactUsComponent
  }
  
]





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }





