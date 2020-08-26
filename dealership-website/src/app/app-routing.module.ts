import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './pages/home/home-page.module#HomePageModule'},
  {path: 'icons', loadChildren: './pages/icons-filter-page/icons-filter-page.module#IconsFilterPageModule'},
  {path: 'vehicles', loadChildren: './pages/vehicles/vehicle-pages.module#VehiclePagesModule'},
  {path: 'music', loadChildren: './pages/music/music-pages.module#MusicPagesModule'},
  {path: 'phone', loadChildren: './pages/phone-mask-page/phone-mask-page.module#PhoneMaskPageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
