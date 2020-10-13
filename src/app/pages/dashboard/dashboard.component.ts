import { Component, OnInit, Inject, LOCALE_ID, ɵDEFAULT_LOCALE_ID } from "@angular/core";
import Chart from 'chart.js';
import { Users } from "../../models/users"
import { AuthService } from 'src/app/auth.service';
import { formatDate } from '@angular/common';
import { browserRefresh } from "../../app.component";


@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  public canvas: any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  users: Users[];
  time;

  january;
  public browserRefresh: boolean;

  // jan; feb; march; april; may; june; july; aug; sep; oct; nov; dec;

  constructor(private authservice: AuthService, @Inject(LOCALE_ID) private locale: string) {

  }

  ngOnInit() {

    this.browserRefresh = browserRefresh;
  

    var jan = 0, feb = 0, march = 0, april = 0, may = 0, june = 0, july = 0, aug = 0, sep = 0, oct = 0, nov = 0, dec = 0;

    this.authservice.getUsers().subscribe(usersx => {
      this.users = usersx;
      var count = 0;

      usersx.forEach(element => {
        this.time = element.dateTime;
        var date = new Date(this.time.toDate());
        var getdate = formatDate(date, 'yyyy/MM/ss', this.locale);
        var month = getdate.split("/");

        if (month[1] == "01") {
          jan = jan + 1;
        }
        if (month[1] == "02") {
          feb = feb + 1;
        }
        if (month[1] == "03") {
          march = march + 1;
        }
        if (month[1] == "04") {
          april = april + 1;
        }
        if (month[1] == "05") {
          may = may + 1;
        }
        if (month[1] == "06") {
          june = june + 1;
        }
        if (month[1] == "07") {
          july = july + 1;
        }
        if (month[1] == "08") {
          aug = aug + 1;
        }
        if (month[1] == "09") {
          sep = sep + 1;
        }
        if (month[1] == "10") {
          oct = oct + 1;
        }
        if (month[1] == "11") {
          nov = nov + 1;
        }
        if (month[1] == "12") {
          dec = dec + 1;
        }

      });

      console.log(july);
      this.january = july;
      console.log(this.january);



      var gradientChartOptionsConfigurationWithTooltipRed: any = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 5,
              suggestedMax: 20,
              padding:5,
              fontColor: "#9a9a9a"
            }
          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(233,32,16,0.1)',
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }]
        }
      };

      var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

      this.datasets = [
        [jan, feb, march, april, may, june, july, aug, sep, oct, nov, dec],
      ];
      this.data = this.datasets[0];

      this.canvas = document.getElementById("chartBig1");
      this.ctx = this.canvas.getContext("2d");

      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
      gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors

      var config = {
        type: 'line',
        data: {
          labels: chart_labels,
          datasets: [{
            label: "New Users",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#ec250d',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#ec250d',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#ec250d',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.data,
          }]
        },
        options: gradientChartOptionsConfigurationWithTooltipRed
      };
      this.myChartData = new Chart(this.ctx, config);


      this.canvas = document.getElementById("CountryChart");
      this.ctx = this.canvas.getContext("2d");
      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
      gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors

    })
  }
  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }
}
