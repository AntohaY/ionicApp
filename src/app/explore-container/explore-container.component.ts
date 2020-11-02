import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PythonClassifierService } from "../python-classifier.service";


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

  constructor(private classifierService: PythonClassifierService) { }

  ngOnInit() {
    this.hideChip = true;
  }

  classifyText() {
    this.classifierService.getSentiment(this.inputValue)
        .subscribe((data: any) => {
          console.log(data);
          if (data) {
            this.hideChip = false;
            this.analysisResult = data.result;
          }
          console.log(this.analysisResult);
        })
  }

}
