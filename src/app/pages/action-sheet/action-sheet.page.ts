import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: false
})
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentActionSheet();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      backdropDismiss: false,
      buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'red',
          handler: () => {
            console.log('Delete clicked');},
        },
        {
          text: 'Share',
          icon: 'share-outline',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ],
    });

    await actionSheet.present();
  }

}
