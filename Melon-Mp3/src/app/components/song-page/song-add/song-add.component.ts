import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song.class';
import { Subscription } from 'rxjs';
import { SongService } from 'src/app/services/song.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { storage } from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html',
  styleUrls: ['./song-add.component.css']
})
export class SongAddComponent implements OnInit {
  public song: Song;
  public subscription: Subscription;
  public formSong: FormGroup;
  public files : File;
  public imgSrc:string;
  public selectUrls: any[] = [];
  public selectUrl :any = null;
  public sub : Subscription;
  constructor(
    public songService: SongService,
    public routerService: Router,
    private formBuilder: FormBuilder,
    private storage : AngularFireStorage,
    private db: AngularFireDatabase,
    
  ) { 
    
  }

  ngOnInit() {
    this.song = new Song(null,null,null,null,null);
    this.createForm()
  }

  createForm() {
    this.formSong = this.formBuilder.group({
      nameSong: ["", Validators.compose([Validators.required])],
      descriptionSong: ["", Validators.compose([Validators.required])],
      fileMp3 : ["", Validators.required],
      avatarSong:["", Validators.compose([Validators.required])],
      comment: ["", Validators.compose([Validators.required])]
    })
  }
  onAddSong() {

    this.subscription = this.songService.addSong(this.song).subscribe(data => {

      this.routerService.navigate(['/melon.mp3.vn/song']);

    });

  }
  onSubmitAddSong(formSong) {
    console.log(this.selectUrls.length)
    console.log('onSubmit')
    if (this.formSong.valid) {
      for (var y = 0; y < this.selectUrls.length; y++) {
        var filePath = `${this.formSong.value.descriptionSong}/${this.selectUrls[y].name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
        console.log(filePath)
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, this.selectUrls[y]).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              console.log(url);
              console.log(typeof (url))
              formSong['fileMp3'] = url;
              // this.imageService.insertImageDetails();
              this.song.fileMp3 = url;
              console.log(this.song.fileMp3)
              console.log("update successfull")
              // this.resetForm();
              this.song = new Song(
                this.formSong.value.nameSong,
                this.formSong.value.descriptionSong,
                this.song.fileMp3,
                this.formSong.value.avatarSong,
                this.formSong.value.comment
              );
              console.log("Before : ", this.song);  
              this.sub = this.songService.addSong(this.song).subscribe( song => {
                console.log(song)
              })
            })
          })
        ).subscribe();
      }

    }
    // console.log(this.formSong);
    // console.log(this.song.fileMp3);



  }
  getLink(event) {
    if (event.target.files) {
      console.log(event.target.files.length)
      for (var i = 0; i < event.target.files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => this.imgSrc = e.target.result;
        reader.readAsDataURL(event.target.files[i]);
        this.selectUrls.push(event.target.files[i]);
        console.log(this.selectUrls)
      }
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}
