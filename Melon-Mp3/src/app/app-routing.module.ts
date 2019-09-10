import { NgModule } from '@angular/core';

import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

<<<<<<< HEAD

=======
import { ArtistEditComponent } from './components/artist-page/artist-edit/artist-edit.component';
import { UpdateUserInformationComponent } from './components/login-melon/update-user-information/update-user-information.component';
import { ProfileComponent } from './components/login-melon/profile/profile.component';
import { ListAccountComponent } from './components/login-melon/list-account/list-account.component';



const routes: Routes = [

  //Home-page
  {
    path: '',
    redirectTo: "melon.mp3.vn",
    pathMatch: 'full',
  },
  {
    path: 'melon.mp3.vn',
    component: HomeComponent
  },

  {
    path: 'melon.mp3.vn/login',
    component: LoginComponent,
  },
  {
    path: 'melon.mp3.vn/register',
    component: RegisterComponent,
  },
  {
    path: 'melon.mp3.vn/accounts/update-password/:id',
    component: UpdatePasswordComponent,
  },
  {
    path: 'melon.mp3.vn/accounts/update-user-information/:id',
    component: UpdateUserInformationComponent
  },
  {
    path: "melon.mp3.vn/accounts/Profile/:info",
    component: ProfileComponent
  },
  { path: "melon.mp3.vn/accounts/list-account", component: ListAccountComponent },
  //Playlist-page
  {
    path: 'melon.mp3.vn/playlist',
    component: PlaylistPageComponent,
    children: [
      {
        path: '',
        component: PlaylistComponent,
      },
      {
        path: 'add-playlist',
        component: PlaylistAddComponent,
      },
      {
        path: ':id/edit-playlist',
        component: PlaylistEditComponent,
      },
      {
        path: ':id/:name_playlist',
        component: PlaylistNameComponent,
      }
    ]
  },
  //Song-page
  {
    path: 'melon.mp3.vn/song',
    component: SongPageComponent,
    children: [
      {
        path: '',
        component: SongComponent
      },
      {
        path: ':id/edit',
        component: SongEditComponent
      },
      {
        path: 'add-song',
        component: SongAddComponent
      },
    ]
  },
  //Artist-page
  {
    path: 'melon.mp3.vn/artist',
    component: ArtistPageComponent,
    children: [

      {
        path: 'add-artist',
        component: ArtistAddComponent
      },
      {
        path: '',
        component: ArtistComponent
      },
      {
        path: ':id/edit',
        component: ArtistAddComponent
      },
      {
        path: ':id/:name_artist',
        component: ArtistNameComponent
      },
      {
        path: ':id/:name_artist/comment',
        component: ArtistCommentComponent
      },
      {
        path: ':id/edit',
        component: ArtistEditComponent
      },
      {
        path: ':id/:name',
        component: ArtistNameComponent
      },
      {
        path: ':id/:name/comment',
        component: ArtistCommentComponent
      }
    ]
  }
];
>>>>>>> fc2acf4afb9819bb0aa3e59f24b6074c4311f52f

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
