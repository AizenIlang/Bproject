import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import { FormGroup, FormControl } from '@angular/forms';
import { ReportService } from '../service/report.service';
import { RshinyService } from '../service/rshiny.service';

@Component({
  selector: 'app-reportinterpretation',
  templateUrl: './reportinterpretation.component.html',
  styleUrls: ['./reportinterpretation.component.css']
})
export class ReportinterpretationComponent implements OnInit,AfterViewInit {

  @ViewChild('canvasInterpretation',{static: false}) theCanvas : ElementRef;

  

  barangayList = [];
  theContext : any;
  chartBarangay = [];

  date : any;
  date2 : any;
  jan : string;
  feb : string;
  march : string;
  april : string;
  may : string;
  jun : string;
  jul : string;
  aug : string;
  sep : string;
  oct : string;
  nov : string;
  dec : string;

  constructor(private reportService : ReportService, private rshinyService : RshinyService) { }

  //Report new
  form = new FormGroup({      
    
    selectedFormControl : new FormControl("")
  });

  get selectedFormControl(){
    return this.form.get('selectedFormControl');
  }

  ngOnInit() {
    this.date = new Date().getFullYear();
    this.date2 = new Date().getFullYear()+1;
    this.jan = "Jan " + this.date2;
    this.feb = "Feb " + this.date2;
    this.march = "March " + this.date2;
    this.april = "April " + this.date2;
    this.may = "May " + this.date2;
    this.jun = "Jun " + this.date2;
    this.jul = "Jul " + this.date2;
    this.aug = "Aug " + this.date2;
    this.sep = "Sep " + this.date;
    this.oct = "Oct " + this.date;
    this.nov = "Nov " + this.date;
    this.dec = "Dec " + this.date;
  }

  ngAfterViewInit(){
    this.theContext = this.theCanvas.nativeElement.getContext('2d');

  }

  getBarangayCall(){
    let theString = this.selectedFormControl.value;
    this.reportService.getAppointmentBarangay(theString).subscribe( res=>{
      console.log("GetBarangay Call");
      this.barangayList = res;
      this.loadDataBarangay();
    });
  }


  generatePatientsReport(theData,theDataO,theDataN) {
    // console.log(JSON.stringify(theData) + "The Barangay Count");
    this.chartBarangay = new Chart(
      'canvasInterpretation',
      {
        type: 'bar',
        
        data: {
          datasets: [{
            data: theData,
            yAxisID: 'y-axis-1',
            label: 'Under weight',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              // 'rgba(54, 162, 235, 0.2)',
              // 'rgba(25, 20, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              // 'rgba(15, 10, 255, 0.2)',
              // 'rgba(255, 159, 64, 0.2)',
              // 'rgba(2, 99, 132, 0.2)',
              // 'rgba(54, 162, 235, 0.2)',
              // 'rgba(2, 206, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              // 'rgba(153, 102, 255, 0.2)',
              // 'rgba(255, 1, 64, 0.2)',
              // 'rgba(255, 159, 64, 0.2)',
            ]
          },{
            data : theDataO,
            yAxisID: 'y-axis-2',
            label : 'Over weight',
            backgroundColor : 'rgba(0, 255, 255, 1)'
          }],

          
          labels: [
          
            this.sep,
            this.oct,
            this.nov,
            this.dec,
            this.jan,
            this.feb,
            this.march,
            this.april,
            this.may,
            this.jun,
            this.jul,
            this.aug,            
          ]
        }, scaleOverride: true,
        scaleStepWidth: 1,
        scaleSteps: 10,
        options: {
					responsive: true,
					title: {
						display: true,
						text: 'Interpretation Malnutrition'
					},
					tooltips: {
						mode: 'index',
						intersect: true
					},
					scales: {
						yAxes: [{
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'left',
							id: 'y-axis-1',
						}, {
							type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
							display: true,
							position: 'right',
							id: 'y-axis-2',
							gridLines: {
								drawOnChartArea: false
							}
						}],
          }
        }

      });
  }

  loadDataBarangay(){
    var Jan = 0;
    var Feb = 0;
    var March = 0;
    var April = 0;
    var May = 0;
    var Jun = 0;
    var Jul = 0;
    var Aug = 0;
    var Sep = 0;
    var Oct = 0;
    var Nov = 0;
    var Dec = 0;

    var OJan = 0;
    var OFeb = 0;
    var OMarch = 0;
    var OApril = 0;
    var OMay = 0;
    var OJun = 0;
    var OJul = 0;
    var OAug = 0;
    var OSep = 0;
    var OOct = 0;
    var ONov = 0;
    var ODec = 0;

    var NJan = 0;
    var NFeb = 0;
    var NMarch = 0;
    var NApril = 0;
    var NMay = 0;
    var NJun = 0;
    var NJul = 0;
    var NAug = 0;
    var NSep = 0;
    var NOct = 0;
    var NNov = 0;
    var NDec = 0;

    for(let tempdata of this.barangayList){
      let testDate = new Date(tempdata.scheduleDate);
      if(tempdata.healthStatus == "Under Weight"){
        switch(testDate.getMonth()){
          case 0 :
            Jan ++;
            break;
          case 1 :
            Feb ++;
            break;
          case 2 :
            March ++;
            break;
          case 3 :
            April ++;
          break;
          case 4 :
            May ++;
            break;
          case 5 :
            Jun ++;
            break;
          case 6 :
            Jul ++;
            break;
          case 7 :
            Aug ++;
            break;
          case 8 :
            Sep ++;
            break;
          case 9 :
            Oct ++;
            break;
          case 10 :
            Nov ++;
            break;
          case 11 :
            Dec ++;
            break;
          default :
          break;
  
        }
      }
     
      if(tempdata.healthStatus == "Over Weight"){
        switch(testDate.getMonth()){
          case 0 :
            OJan ++;
            break;
          case 1 :
            OFeb ++;
            break;
          case 2 :
            OMarch ++;
            break;
          case 3 :
            OApril ++;
          break;
          case 4 :
            OMay ++;
            break;
          case 5 :
            OJun ++;
            break;
          case 6 :
            OJul ++;
            break;
          case 7 :
            OAug ++;
            break;
          case 8 :
            OSep ++;
            break;
          case 9 :
            OOct ++;
            break;
          case 10 :
            ONov ++;
            break;
          case 11 :
            ODec ++;
            break;
          default :
          break;
  
        }
      }

      if(tempdata.healthStatus == "Normal"){
        switch(testDate.getMonth()){
          case 0 :
            NJan ++;
            break;
          case 1 :
            NFeb ++;
            break;
          case 2 :
            NMarch ++;
            break;
          case 3 :
            NApril ++;
          break;
          case 4 :
            NMay ++;
            break;
          case 5 :
            NJun ++;
            break;
          case 6 :
            NJul ++;
            break;
          case 7 :
            NAug ++;
            break;
          case 8 :
            NSep ++;
            break;
          case 9 :
            NOct ++;
            break;
          case 10 :
            NNov ++;
            break;
          case 11 :
            NDec ++;
            break;
          default :
          break;
  
        }
      }

    }
    //Normalize Data
    var NormJan = [];
    var NormFeb = [];
    var NormMarch = [];
    var NormApril = [];
    var NormMay = [];
    var NormJun = [];
    var NormJul = [];
    var NormAug = [];
    var NormSep = [];
    var NormOct = [];
    var NormNov = [];
    var NormDec = [];
    NormJan = [Jan,OJan];
    NormFeb = [Feb,OFeb];
    NormMarch =[March,OMarch];
    NormApril =[April,OApril];
    NormMay = [May,OMay];
    NormJun = [Jun,OJun];
    NormJul = [Jul,OJul];
    NormAug = [Aug,OAug];
    NormSep = [Sep,OSep];
    NormOct = [Oct,OOct];
    NormNov = [Nov,ONov];
    NormDec = [Dec,ODec];
    
    //Normalization Cleansing
    Jan = this.rshinyService.bollr2(NormJan);
    Feb = this.rshinyService.bollr2(NormFeb);
    March = this.rshinyService.bollr2(NormMarch);
    April = this.rshinyService.bollr2(NormApril);
    May =  this.rshinyService.bollr2(NormMay);
    Jun = this.rshinyService.bollr2(NormJun);
    Jul = this.rshinyService.bollr2(NormJul);
    Aug = this.rshinyService.bollr2(NormAug);
    Sep = this.rshinyService.bollr2(NormSep);
    Oct = this.rshinyService.bollr2(NormOct);
    Nov = this.rshinyService.bollr2(NormNov);
    Dec = this.rshinyService.bollr2(NormDec);
    
    OJan = this.rshinyService.bollr3(NormJan);
    OFeb = this.rshinyService.bollr3(NormFeb);
    OMarch = this.rshinyService.bollr3(NormMarch);
    OApril = this.rshinyService.bollr3(NormApril);
    OMay =  this.rshinyService.bollr3(NormMay);
    OJun = this.rshinyService.bollr3(NormJun);
    OJul = this.rshinyService.bollr3(NormJul);
    OAug = this.rshinyService.bollr3(NormAug);
    OSep = this.rshinyService.bollr3(NormSep);
    OOct = this.rshinyService.bollr3(NormOct);
    ONov = this.rshinyService.bollr3(NormNov);
    ODec = this.rshinyService.bollr3(NormDec);
    
    this.generatePatientsReport([Sep,Oct,Nov,Dec,Jan,Feb,March,April,May,Jun,Jul,Aug],
      [OSep,OOct,ONov,ODec,OJan,OFeb,OMarch,OApril,OMay,OJun,OJul,OAug],
      [NSep,NOct,NNov,NDec,NJan,NFeb,NMarch,NApril,NMay,NJun,NJul,NAug]);

  }


}
