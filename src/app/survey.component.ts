import { Component } from "@angular/core";
import { Survey } from "surveyjs";

Survey.StylesManager.applyTheme("modern");

var surveyJSON = {
  pages: [
    {
      name: "page1",
      elements: [
        { type: "text", name: "question3" },
        {
          type: "checkbox",
          name: "question2",
          choices: ["item1", "item2", "item3"]
        },
        {
          type: "dropdown",
          name: "question1",
          choices: ["item1", "item2", "item3"]
        }
      ]
    }
  ]
};

function sendDataToServer(survey) {
  //send Ajax request to your web server.
  alert("The results are:" + JSON.stringify(survey.data));
}

@Component({
  selector: "ng-app",
  template: "<div id='surveyElement'></div>"
})
export class AppComponent {
  ngOnInit() {
    var survey = new Survey.Model(surveyJSON);
    survey.onComplete.add(sendDataToServer);
    Survey.SurveyNG.render("surveyElement", { model: survey });
  }
}
