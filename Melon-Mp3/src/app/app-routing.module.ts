import { NgModule } from '@angular/core';

// import { routes } from './app.routes';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PlaylistPageComponent } from './components/playlist-page/playlist-page/playlist-page.component';
import { PlaylistComponent } from './components/playlist-page/playlist/playlist.component';
import { PlaylistAddComponent } from './components/playlist-page/playlist-add/playlist-add.component';
import { PlaylistNameComponent } from './components/playlist-page/playlist-name/playlist-name.component';
import { PlaylistAddSongComponent } from './components/playlist-page/playlist-add-song/playlist-add-song.component';
import { SongPageComponent } from './components/song-page/song-page/song-page.component';
import { SongComponent } from './components/song-page/song/song.component';
import { SongEditComponent } from './components/song-page/song-edit/song-edit.component';
import { SongAddComponent } from './components/song-page/song-add/song-add.component';
import { PlaylistEditComponent } from './components/playlist-page/playlist-edit/playlist-edit.component';
import { ArtistPageComponent } from './components/artist-page/artist-page/artist-page.component';
import { ArtistAddComponent } from './components/artist-page/artist-add/artist-add.component';
import { ArtistComponent } from './components/artist-page/artist/artist.component';
import { ArtistNameComponent } from './components/artist-page/artist-name/artist-name.component';
import { ArtistCommentComponent } from './components/artist-page/artist-comment/artist-comment.component';
import { LoginComponent } from './components/login-melon/login/login.component';
import { RegisterComponent } from './components/login-melon/register/register.component';
import { UpdatePasswordComponent } from './components/login-melon/update-password/update-password.component';
import { AnotherComponent } from './components/another/another.component';

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
    path: "melon.mp3.vn/accounts/Profile/:id",
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
        component: ArtistEditComponent
      },
      {
        path: ':id/:name',
        component: ArtistNameComponent
      },
      {
        path: ':id/:name/comment',
        component: ArtistCommentComponent
      },
      // {
      //   path: ':id/edit',
      //   component: ArtistEditComponent
      // },
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
