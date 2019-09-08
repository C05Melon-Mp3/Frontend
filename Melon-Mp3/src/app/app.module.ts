import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';


import {
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatTabsModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatStepperModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule  
} from '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login-melon/login/login.component';
import { RegisterComponent } from './components/login-melon/register/register.component';
import { from } from 'rxjs';
import { ArtistComponent } from './components/artist-page/artist/artist.component';
import { ArtistAddComponent } from './components/artist-page/artist-add/artist-add.component';
import { ArtistNameComponent } from './components/artist-page/artist-name/artist-name.component';
import { ArtistCommentComponent } from './components/artist-page/artist-comment/artist-comment.component';
import { ArtistPageComponent } from './components/artist-page/artist-page/artist-page.component';
import { SongComponent } from './components/song-page/song/song.component';
import { SongPageComponent } from './components/song-page/song-page/song-page.component';
import { SongAddComponent } from './components/song-page/song-add/song-add.component';
import { SongEditComponent } from './components/song-page/song-edit/song-edit.component';
import { PlaylistComponent } from './components/playlist-page/playlist/playlist.component';
import { PlaylistPageComponent } from './components/playlist-page/playlist-page/playlist-page.component';
import { PlaylistAddComponent } from './components/playlist-page/playlist-add/playlist-add.component';
import { PlaylistEditComponent } from './components/playlist-page/playlist-edit/playlist-edit.component';
import { PlaylistNameComponent } from './components/playlist-page/playlist-name/playlist-name.component';
import { PlaylistAddSongComponent } from './components/playlist-page/playlist-add-song/playlist-add-song.component';
import { UpdatePasswordComponent } from './components/login-melon/update-password/update-password.component';
import { UpdateUserComponent } from './components/login-melon/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ArtistComponent,
    ArtistAddComponent,
    ArtistNameComponent,
    ArtistCommentComponent,
    ArtistPageComponent,
    SongComponent,
    SongPageComponent,
    SongAddComponent,
    SongEditComponent,
    PlaylistComponent,
    PlaylistPageComponent,
    PlaylistAddComponent,
    PlaylistEditComponent,
    PlaylistNameComponent,
    PlaylistAddSongComponent,
    UpdatePasswordComponent,
    UpdateUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MaterialModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatStepperModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
