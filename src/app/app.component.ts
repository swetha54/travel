import { Component, OnInit } from "@angular/core";
declare var jQuery: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
})
export class AppComponent implements OnInit {
  title = "travel";
  ngOnInit() {
    (function($) {
      $(document).ready(function() {
        $(".button-collapse").sideNav();
        $(".slider").slider({
          indicators: false,
          height: 400,
          transition: 500,
          interval: 3000
        });
        $(".scrollspy").scrollSpy();
      });
    })(jQuery);
  }
}
