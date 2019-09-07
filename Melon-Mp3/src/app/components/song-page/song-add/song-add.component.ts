import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song.class';
import { Subscription } from 'rxjs';
import { SongService } from 'src/app/services/song.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.css']
})
export class SongAddComponent implements OnInit {

  hide = true;


  form: any = {};
  song: Song;
  isAdd = false;

  constructor(private songService: SongService, private fb: FormBuilder, private router: Router, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createFormAdd();
  }

  addForm: FormGroup

  createFormAdd() {
    this.addForm = this.fb.group({
      nameSong: new FormControl('',),
      descriptionSong: new FormControl('',),
      fileMp3: new FormControl('',),
      avatarSong: new FormControl('',),
      comment: new FormControl('',)

    })
  };

  onSubmitAddSong() {
    console.log(this.addForm);

    this.song = new Song(
      this.form.nameSong,
      this.form.descriptionSong,
      this.form.fileMp3,
      this.form.avatarSong,
      this.form.comment
    );

    this.songService.addSong(this.song)
      .subscribe(data => {
        if (this.song == null) {
          this.isAdd = false;
        }
        this.isAdd = true;
        const songList = "Back to Song List";
        const snackbarRef = this.snackbar.open('Add New Song Successfully!', songList, {
          horizontalPosition: 'center',
        });
        snackbarRef.onAction().subscribe(() => {
          this.router.navigate(['/melon.mp3.vn/song']);
        })
        console.log(data);
        
      }
     
      )
    
  }

}
