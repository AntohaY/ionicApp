import { Component, OnInit, Input } from '@angular/core';
import { PythonClassifierService } from "../python-classifier.service";
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  analysisResult: string;
  hideChip: boolean;
  inputValue: string;

  constructor(private classifierService: PythonClassifierService, public toastController: ToastController) { }

  ngOnInit() {
    this.hideChip = true;
  }

  classifyText() {
    this.classifierService.getSentiment(this.inputValue)
        .subscribe(
            (data: any) => {
                this.hideChip = false;
                this.analysisResult = data.result;
                console.log(data);
            },
            error => this.presentToast(error, "danger")
        );
  }

    async presentToast(message, color) {
        const toast = await this.toastController.create({
            message,
            duration: 3000,
            position: "bottom",
            animated: true,
            color: color ? color: ""
        });
        toast.present();
    }

}
