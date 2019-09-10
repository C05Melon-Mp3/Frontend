export class Song {
    id?: Number;
    nameSong: String;
    descriptionSong: String;
    fileMp3: String;
    avatarSong: String;
    comment: String;



    constructor(nameSong: String, descriptionSong: String, fileMp3: String, avatarSong: String, comment: String) {
        this.nameSong = nameSong,
            this.descriptionSong = descriptionSong,
            this.fileMp3 = fileMp3,
            this.avatarSong = avatarSong,
            this.comment = comment

    }
}