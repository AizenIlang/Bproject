import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ReportService } from '../service/report.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reportallbarangay',
  templateUrl: './reportallbarangay.component.html',
  styleUrls: ['./reportallbarangay.component.css']
})
export class ReportallbarangayComponent implements OnInit, AfterViewInit {

  theContext : any;
  chartBarangay = [];
  check = false;
  barangayList = [];
  barangayDrive = [];
  barangkaDrive = [];
  barangkaIbaba = [];
  barangkaIlaya = [];
  barangkaItaas = [];
  buayangBato = [];
  hulo = [];
  mabiniJRizal = [];
  malamig = [];
  namayan = [];
  oldZaniga = [];
  plainview = [];
  sanJose = [];
  vergara = [];

  date : any;

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

  @ViewChild('canvasAllBarangay',{static: false}) theCanvas : ElementRef;

  constructor(private reportService : ReportService) { }

  ngOnInit() {
    this.date = new Date().getFullYear();
    this.jan = "Jan " + this.date;
    this.feb = "Feb " + this.date;
    this.march = "March " + this.date;
    this.april = "April " + this.date;
    this.may = "May " + this.date;
    this.jun = "Jun " + this.date;
    this.jul = "Jul " + this.date;
    this.aug = "Aug " + this.date;
    this.sep = "Sep " + this.date;
    this.oct = "Oct " + this.date;
    this.nov = "Nov " + this.date;
    this.dec = "Dec " + this.date;
  }

  // getBarangayList = () => {
  //   this.reportService.getAppointmentAll().subscribe( res=>{
  //     this.barangayList = res;
  //     this.loadDataBarangay();
  //   });
  // }

  getBarangayListUW(){
    this.reportService.getAppointmentAllUW().subscribe( res=>{
      this.barangayList = res;
      this.loadDataBarangay();
    });
  }

  getBarangayListOW(){
    this.reportService.getAppointmentAllOW().subscribe( res =>{
      this.barangayList = res;
      this.loadDataBarangay();
    })
  }

  getBarangayListNorm(){
    this.reportService.getAppointmentAllNorm().subscribe(res =>{
      this.barangayList = res;
      this.loadDataBarangay();
    })
  }


  ngAfterViewInit(){
    this.theContext = this.theCanvas.nativeElement.getContext('2d');
    // this.getOWList();
    //  this.getBarangayList();
  }

  loadDataBarangay(){

    var BarangkaDriveJan = 0;
    var BarangkaDriveFeb = 0;
    var BarangkaDriveMarch = 0;
    var BarangkaDriveApril = 0;
    var BarangkaDriveMay = 0;
    var BarangkaDriveJun = 0;
    var BarangkaDriveJul = 0;
    var BarangkaDriveAug = 0;
    var BarangkaDriveSep = 0;
    var BarangkaDriveOct = 0;
    var BarangkaDriveNov = 0;
    var BarangkaDriveDec = 0;

    var BarangkaIbabaJan = 0;
    var BarangkaIbabaFeb = 0;
    var BarangkaIbabaMarch = 0;
    var BarangkaIbabaApril = 0;
    var BarangkaIbabaMay = 0;
    var BarangkaIbabaJun = 0;
    var BarangkaIbabaJul = 0;
    var BarangkaIbabaAug = 0;
    var BarangkaIbabaSep = 0;
    var BarangkaIbabaOct = 0;
    var BarangkaIbabaNov = 0;
    var BarangkaIbabaDec = 0;

    var BarangkaIlayaJan = 0;
    var BarangkaIlayaFeb = 0;
    var BarangkaIlayaMarch = 0;
    var BarangkaIlayaApril = 0;
    var BarangkaIlayaMay = 0;
    var BarangkaIlayaJun = 0;
    var BarangkaIlayaJul = 0;
    var BarangkaIlayaAug = 0;
    var BarangkaIlayaSep = 0;
    var BarangkaIlayaOct = 0;
    var BarangkaIlayaNov = 0;
    var BarangkaIlayaDec = 0;

    var BarangkaItaasJan = 0;
    var BarangkaItaasFeb = 0;
    var BarangkaItaasMarch = 0;
    var BarangkaItaasApril = 0;
    var BarangkaItaasMay = 0;
    var BarangkaItaasJun = 0;
    var BarangkaItaasJul = 0;
    var BarangkaItaasAug = 0;
    var BarangkaItaasSep = 0;
    var BarangkaItaasOct = 0;
    var BarangkaItaasNov = 0;
    var BarangkaItaasDec = 0;

    var BuayangBatoJan = 0;
    var BuayangBatoFeb = 0;
    var BuayangBatoMarch = 0;
    var BuayangBatoApril = 0;
    var BuayangBatoMay = 0;
    var BuayangBatoJun = 0;
    var BuayangBatoJul = 0;
    var BuayangBatoAug = 0;
    var BuayangBatoSep = 0;
    var BuayangBatoOct = 0;
    var BuayangBatoNov = 0;
    var BuayangBatoDec = 0;

    var HuloJan = 0;
    var HuloFeb = 0;
    var HuloMarch = 0;
    var HuloApril = 0;
    var HuloMay = 0;
    var HuloJun = 0;
    var HuloJul = 0;
    var HuloAug = 0;
    var HuloSep = 0;
    var HuloOct = 0;
    var HuloNov = 0;
    var HuloDec = 0;

    var MabiniRizalJan = 0;
    var MabiniRizalFeb = 0;
    var MabiniRizalMarch = 0;
    var MabiniRizalApril = 0;
    var MabiniRizalMay = 0;
    var MabiniRizalJun = 0;
    var MabiniRizalJul = 0;
    var MabiniRizalAug = 0;
    var MabiniRizalSep = 0;
    var MabiniRizalOct = 0;
    var MabiniRizalNov = 0;
    var MabiniRizalDec = 0;

    var MalamigJan = 0;
    var MalamigFeb = 0;
    var MalamigMarch = 0;
    var MalamigApril = 0;
    var MalamigMay = 0;
    var MalamigJun = 0;
    var MalamigJul = 0;
    var MalamigAug = 0;
    var MalamigSep = 0;
    var MalamigOct = 0;
    var MalamigNov = 0;
    var MalamigDec = 0;

    var NamayanJan = 0;
    var NamayanFeb = 0;
    var NamayanMarch = 0;
    var NamayanApril = 0;
    var NamayanMay = 0;
    var NamayanJun = 0;
    var NamayanJul = 0;
    var NamayanAug = 0;
    var NamayanSep = 0;
    var NamayanOct = 0;
    var NamayanNov = 0;
    var NamayanDec = 0;

    var OldZanigaJan = 0;
    var OldZanigaFeb = 0;
    var OldZanigaMarch = 0;
    var OldZanigaApril = 0;
    var OldZanigaMay = 0;
    var OldZanigaJun = 0;
    var OldZanigaJul = 0;
    var OldZanigaAug = 0;
    var OldZanigaSep = 0;
    var OldZanigaOct = 0;
    var OldZanigaNov = 0;
    var OldZanigaDec = 0;

    var PlainviewJan = 0;
    var PlainviewFeb = 0;
    var PlainviewMarch = 0;
    var PlainviewApril = 0;
    var PlainviewMay = 0;
    var PlainviewJun = 0;
    var PlainviewJul = 0;
    var PlainviewAug = 0;
    var PlainviewSep = 0;
    var PlainviewOct = 0;
    var PlainviewNov = 0;
    var PlainviewDec = 0;

    var SanJoseJan = 0;
    var SanJoseFeb = 0;
    var SanJoseMarch = 0;
    var SanJoseApril = 0;
    var SanJoseMay = 0;
    var SanJoseJun = 0;
    var SanJoseJul = 0;
    var SanJoseAug = 0;
    var SanJoseSep = 0;
    var SanJoseOct = 0;
    var SanJoseNov = 0;
    var SanJoseDec = 0;

    var VergaraJan = 0;
    var VergaraFeb = 0;
    var VergaraMarch = 0;
    var VergaraApril = 0;
    var VergaraMay = 0;
    var VergaraJun = 0;
    var VergaraJul = 0;
    var VergaraAug = 0;
    var VergaraSep = 0;
    var VergaraOct = 0;
    var VergaraNov = 0;
    var VergaraDec = 0;

    for(let tempdata of this.barangayList){
      let testDate = new Date(tempdata.scheduleDate);
      if(tempdata.barangay == 'Barangka Drive'){
        switch(testDate.getMonth()){
          case 0 :
            BarangkaDriveJan ++;
            break;
          case 1 :
            BarangkaDriveFeb ++;
            break;
          case 2 :
            BarangkaDriveMarch ++;
            break;
          case 3 :
            BarangkaDriveApril ++;
          break;
          case 4 :
            BarangkaDriveMay ++;
            break;
          case 5 :
            BarangkaDriveJun ++;
            break;
          case 6 :
            BarangkaDriveJul ++;
            break;
          case 7 :
            BarangkaDriveAug ++;
            break;
          case 8 :
            BarangkaDriveSep ++;
            break;
          case 9 :
            BarangkaDriveOct ++;
            break;
          case 10 :
            BarangkaDriveNov ++;
            break;
          case 11 :
            BarangkaDriveDec ++;
            break;
          default :
          break;
  
        }
      }
     
      if(tempdata.barangka == "Barangka Ibaba"){
        switch(testDate.getMonth()){
          case 0 :
            BarangkaIbabaJan ++;
            break;
          case 1 :
            BarangkaIbabaFeb ++;
            break;
          case 2 :
            BarangkaIbabaMarch ++;
            break;
          case 3 :
            BarangkaIbabaApril ++;
          break;
          case 4 :
            BarangkaIbabaMay ++;
            break;
          case 5 :
            BarangkaIbabaJun ++;
            break;
          case 6 :
            BarangkaIbabaJul ++;
            break;
          case 7 :
            BarangkaIbabaAug ++;
            break;
          case 8 :
            BarangkaIbabaSep ++;
            break;
          case 9 :
            BarangkaIbabaOct ++;
            break;
          case 10 :
            BarangkaIbabaNov ++;
            break;
          case 11 :
            BarangkaIbabaDec ++;
            break;
          default :
          break;
  
        }
      }

      if(tempdata.barangka == "Barangka Ilaya"){
        switch(testDate.getMonth()){
          case 0 :
            BarangkaIlayaJan ++;
            break;
          case 1 :
            BarangkaIlayaFeb ++;
            break;
          case 2 :
            BarangkaIlayaMarch ++;
            break;
          case 3 :
            BarangkaIlayaApril ++;
          break;
          case 4 :
            BarangkaIlayaMay ++;
            break;
          case 5 :
            BarangkaIlayaJun ++;
            break;
          case 6 :
            BarangkaIlayaJul ++;
            break;
          case 7 :
            BarangkaIlayaAug ++;
            break;
          case 8 :
            BarangkaIlayaSep ++;
            break;
          case 9 :
            BarangkaIlayaOct ++;
            break;
          case 10 :
            BarangkaIlayaNov ++;
            break;
          case 11 :
            BarangkaIlayaDec ++;
            break;
          default :
          break;
  
        }
      }

      if(tempdata.barangka == "Barangka Itaas"){
        switch(testDate.getMonth()){
          case 0 :
            BarangkaItaasJan ++;
            break;
          case 1 :
            BarangkaItaasFeb ++;
            break;
          case 2 :
            BarangkaItaasMarch ++;
            break;
          case 3 :
            BarangkaItaasApril ++;
          break;
          case 4 :
            BarangkaItaasMay ++;
            break;
          case 5 :
            BarangkaItaasJun ++;
            break;
          case 6 :
            BarangkaItaasJul ++;
            break;
          case 7 :
            BarangkaItaasAug ++;
            break;
          case 8 :
            BarangkaItaasSep ++;
            break;
          case 9 :
            BarangkaItaasOct ++;
            break;
          case 10 :
            BarangkaItaasNov ++;
            break;
          case 11 :
            BarangkaItaasDec ++;
            break;
          default :
          break;
  
        }
      }

      if(tempdata.barangka == "Buayang Bato"){
        switch(testDate.getMonth()){
          case 0 :
            BuayangBatoJan ++;
            break;
          case 1 :
            BuayangBatoFeb ++;
            break;
          case 2 :
            BuayangBatoMarch ++;
            break;
          case 3 :
            BuayangBatoApril ++;
          break;
          case 4 :
            BuayangBatoMay ++;
            break;
          case 5 :
            BuayangBatoJun ++;
            break;
          case 6 :
            BuayangBatoJul ++;
            break;
          case 7 :
            BuayangBatoAug ++;
            break;
          case 8 :
            BuayangBatoSep ++;
            break;
          case 9 :
            BuayangBatoOct ++;
            break;
          case 10 :
            BuayangBatoNov ++;
            break;
          case 11 :
            BuayangBatoDec ++;
            break;
          default :
          break;
  
        }
      }

      if(tempdata.barangka == "Hulo"){
        switch(testDate.getMonth()){
          case 0 :
            HuloJan ++;
            break;
          case 1 :
            HuloFeb ++;
            break;
          case 2 :
            HuloMarch ++;
            break;
          case 3 :
            HuloApril ++;
          break;
          case 4 :
            HuloMay ++;
            break;
          case 5 :
            HuloJun ++;
            break;
          case 6 :
            HuloJul ++;
            break;
          case 7 :
            HuloAug ++;
            break;
          case 8 :
            HuloSep ++;
            break;
          case 9 :
            HuloOct ++;
            break;
          case 10 :
            HuloNov ++;
            break;
          case 11 :
            HuloDec ++;
            break;
          default :
          break;
  
        }
      }

      if(tempdata.barangka == "Mabini Rizal"){
        switch(testDate.getMonth()){
          case 0 :
            MabiniRizalJan ++;
            break;
          case 1 :
            MabiniRizalFeb ++;
            break;
          case 2 :
            MabiniRizalMarch ++;
            break;
          case 3 :
            MabiniRizalApril ++;
          break;
          case 4 :
            MabiniRizalMay ++;
            break;
          case 5 :
            MabiniRizalJun ++;
            break;
          case 6 :
            MabiniRizalJul ++;
            break;
          case 7 :
            MabiniRizalAug ++;
            break;
          case 8 :
            MabiniRizalSep ++;
            break;
          case 9 :
            MabiniRizalOct ++;
            break;
          case 10 :
            MabiniRizalNov ++;
            break;
          case 11 :
            MabiniRizalDec ++;
            break;
          default :
          break;
  
        }
      }

      if(tempdata.barangka == "Malamig"){
        switch(testDate.getMonth()){
          case 0 :
            MalamigJan ++;
            break;
          case 1 :
            MalamigFeb ++;
            break;
          case 2 :
            MalamigMarch ++;
            break;
          case 3 :
            MalamigApril ++;
          break;
          case 4 :
            MalamigMay ++;
            break;
          case 5 :
            MalamigJun ++;
            break;
          case 6 :
            MalamigJul ++;
            break;
          case 7 :
            MalamigAug ++;
            break;
          case 8 :
            MalamigSep ++;
            break;
          case 9 :
            MalamigOct ++;
            break;
          case 10 :
            MalamigNov ++;
            break;
          case 11 :
            MalamigDec ++;
            break;
          default :
          break;
  
        }
      }

      if(tempdata.barangka == "Namayan"){
        switch(testDate.getMonth()){
          case 0 :
            NamayanJan ++;
            break;
          case 1 :
            NamayanFeb ++;
            break;
          case 2 :
            NamayanMarch ++;
            break;
          case 3 :
            NamayanApril ++;
          break;
          case 4 :
            NamayanMay ++;
            break;
          case 5 :
            NamayanJun ++;
            break;
          case 6 :
            NamayanJul ++;
            break;
          case 7 :
            NamayanAug ++;
            break;
          case 8 :
            NamayanSep ++;
            break;
          case 9 :
            NamayanOct ++;
            break;
          case 10 :
            NamayanNov ++;
            break;
          case 11 :
            NamayanDec ++;
            break;
          default :
          break;
  
        }
      }

      if(tempdata.barangka == "Old Zaniga"){
        switch(testDate.getMonth()){
          case 0 :
            OldZanigaJan ++;
            break;
          case 1 :
            OldZanigaFeb ++;
            break;
          case 2 :
            OldZanigaMarch ++;
            break;
          case 3 :
            OldZanigaApril ++;
          break;
          case 4 :
            OldZanigaMay ++;
            break;
          case 5 :
            OldZanigaJun ++;
            break;
          case 6 :
            OldZanigaJul ++;
            break;
          case 7 :
            OldZanigaAug ++;
            break;
          case 8 :
            OldZanigaSep ++;
            break;
          case 9 :
            OldZanigaOct ++;
            break;
          case 10 :
            OldZanigaNov ++;
            break;
          case 11 :
            OldZanigaDec ++;
            break;
          default :
          break;
  
        }
      }

      if(tempdata.barangka == "Plainview"){
        switch(testDate.getMonth()){
          case 0 :
            PlainviewJan ++;
            break;
          case 1 :
            PlainviewFeb ++;
            break;
          case 2 :
            PlainviewMarch ++;
            break;
          case 3 :
            PlainviewApril ++;
          break;
          case 4 :
            PlainviewMay ++;
            break;
          case 5 :
            PlainviewJun ++;
            break;
          case 6 :
            PlainviewJul ++;
            break;
          case 7 :
            PlainviewAug ++;
            break;
          case 8 :
            PlainviewSep ++;
            break;
          case 9 :
            PlainviewOct ++;
            break;
          case 10 :
            PlainviewNov ++;
            break;
          case 11 :
            PlainviewDec ++;
            break;
          default :
          break;
  
        }
      }

      if(tempdata.barangka == "San Jose"){
        switch(testDate.getMonth()){
          case 0 :
            SanJoseJan ++;
            break;
          case 1 :
            SanJoseFeb ++;
            break;
          case 2 :
            SanJoseMarch ++;
            break;
          case 3 :
            SanJoseApril ++;
          break;
          case 4 :
            SanJoseMay ++;
            break;
          case 5 :
            SanJoseJun ++;
            break;
          case 6 :
            SanJoseJul ++;
            break;
          case 7 :
            SanJoseAug ++;
            break;
          case 8 :
            SanJoseSep ++;
            break;
          case 9 :
            SanJoseOct ++;
            break;
          case 10 :
            SanJoseNov ++;
            break;
          case 11 :
            SanJoseDec ++;
            break;
          default :
          break;
  
        }
      }

      if(tempdata.barangka == "Vergara"){
        switch(testDate.getMonth()){
          case 0 :
            VergaraJan ++;
            break;
          case 1 :
            VergaraFeb ++;
            break;
          case 2 :
            VergaraMarch ++;
            break;
          case 3 :
            VergaraApril ++;
          break;
          case 4 :
            VergaraMay ++;
            break;
          case 5 :
            VergaraJun ++;
            break;
          case 6 :
            VergaraJul ++;
            break;
          case 7 :
            VergaraAug ++;
            break;
          case 8 :
            VergaraSep ++;
            break;
          case 9 :
            VergaraOct ++;
            break;
          case 10 :
            VergaraNov ++;
            break;
          case 11 :
            VergaraDec ++;
            break;
          default :
          break;
  
        }
      }

      

    }

    this.barangkaDrive = [BarangkaDriveJan,BarangkaDriveFeb,BarangkaDriveMarch,BarangkaDriveApril,
    BarangkaDriveMay,BarangkaDriveJun,BarangkaDriveJul,BarangkaDriveAug,BarangkaDriveSep,BarangkaDriveOct,BarangkaDriveNov,BarangkaDriveDec];
    this.barangkaIbaba = [BarangkaIbabaJan,BarangkaIbabaFeb,BarangkaIbabaMarch,BarangkaIbabaApril,
      BarangkaIbabaMay,BarangkaIbabaJun,BarangkaIbabaJul,BarangkaIbabaAug,BarangkaIbabaSep,BarangkaIbabaOct,BarangkaIbabaNov,BarangkaIbabaDec];
    this.barangkaIlaya = [BarangkaIlayaJan,BarangkaIlayaFeb,BarangkaIlayaMarch,BarangkaIlayaApril,
        BarangkaIlayaMay,BarangkaIlayaJun,BarangkaIlayaJul,BarangkaIlayaAug,BarangkaIlayaSep,BarangkaIlayaOct,BarangkaIlayaNov,BarangkaIlayaDec]; 
    this.barangkaItaas = [BarangkaItaasJan,BarangkaItaasFeb,BarangkaItaasMarch,BarangkaItaasApril,
      BarangkaItaasMay,BarangkaItaasJun,BarangkaItaasJul,BarangkaItaasAug,BarangkaItaasSep,BarangkaItaasOct,BarangkaItaasNov,BarangkaItaasDec]; 
    this.buayangBato = [BuayangBatoJan,BuayangBatoFeb,BuayangBatoMarch,BuayangBatoApril,
      BuayangBatoMay,BuayangBatoJun,BuayangBatoJul,BuayangBatoAug,BuayangBatoSep,BuayangBatoOct,BuayangBatoNov,BuayangBatoDec];
    this.hulo = [HuloJan,HuloFeb,HuloMarch,HuloApril,
      HuloMay,HuloJun,HuloJul,HuloAug,HuloSep,HuloOct,HuloNov,HuloDec];
    this.mabiniJRizal = [MabiniRizalJan,MabiniRizalFeb,MabiniRizalMarch,MabiniRizalApril,
      MabiniRizalMay,MabiniRizalJun,MabiniRizalJul,MabiniRizalAug,MabiniRizalSep,MabiniRizalOct,MabiniRizalNov,MabiniRizalDec];
    this.namayan = [NamayanJan,NamayanFeb,NamayanMarch,NamayanApril,
      NamayanMay,NamayanJun,NamayanJul,NamayanAug,NamayanSep,NamayanOct,NamayanNov,NamayanDec];
    this.oldZaniga = [OldZanigaJan,OldZanigaFeb,OldZanigaMarch,OldZanigaApril,
      OldZanigaMay,OldZanigaJun,OldZanigaJul,OldZanigaAug,OldZanigaSep,OldZanigaOct,OldZanigaNov,OldZanigaDec];
    this.plainview = [PlainviewJan,PlainviewFeb,PlainviewMarch,PlainviewApril,
      PlainviewMay,PlainviewJun,PlainviewJul,PlainviewAug,PlainviewSep,PlainviewOct,PlainviewNov,PlainviewDec];
    this.sanJose = [SanJoseJan,SanJoseFeb,SanJoseMarch,SanJoseApril,
      SanJoseMay,SanJoseJun,SanJoseJul,SanJoseAug,SanJoseSep,SanJoseOct,SanJoseNov,SanJoseDec];
    this.vergara = [VergaraJan,VergaraFeb,VergaraMarch,VergaraApril,
      VergaraMay,VergaraJun,VergaraJul,VergaraAug,VergaraSep,VergaraOct,VergaraNov,VergaraDec];
    this.malamig = [MalamigJan,MalamigFeb,MalamigMarch,MalamigApril,
      MalamigMay,MalamigJun,MalamigJul,MalamigAug,MalamigSep,MalamigOct,MalamigNov,MalamigDec];

    this.generatePatientsReport(this.barangkaDrive,this.barangkaIbaba,this.barangkaIlaya,this.barangkaItaas,
      this.buayangBato,this.hulo,this.mabiniJRizal,this.malamig,this.namayan,this.oldZaniga,this.plainview,
      this.sanJose,this.vergara);

  }

  generatePatientsReport(dBarangkaDrive,
    dBarangkaIbaba,
    dBarangkaIlaya,
    dBarangkaItaas,
    dBuayangBato,
    dHulo,
    dMabiniRizal,
    dMalamig,
    dNamayan,
    dOldZaniga,
    dPlainview,
    dSanJose,
    dVergara) {

    console.log("The dsumData" + dBarangkaDrive);
    this.chartBarangay = new Chart(
      'canvasAllBarangay',
      {
        type: 'line',
        
        data: {
          datasets: [{
            data: dBarangkaDrive,
            label: 'Barangka Drive',
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
            data : dBarangkaIbaba,
            label : 'Barangka Ibaba',
            backgroundColor : 'rgba(0, 255, 255, 1)'
          },{
            data : dBarangkaIlaya,
            label : 'Barangka Ilaya',
            backgroundColor : 'rgba(255, 0, 255, 0.5)'
          },{
            data : dBarangkaItaas,
            label : 'Barangka Itaas',
            backgroundColor : 'rgba(20, 20, 40, 0.5)'
          },{
            data : dBuayangBato,
            label : 'Buayang Bato',
            backgroundColor : 'rgba(45, 10, 105, 0.2)'
          },{
            data : dHulo,
            label : 'Hulo',
            backgroundColor : 'rgba(52, 0, 255, 0.2)'
          },{
            data : dMabiniRizal,
            label : 'Mabini Rizal',
            backgroundColor : 'rgba(25, 25, 25, 0.2)'
          },{
            data : dMalamig,
            label : 'Malamig',
            backgroundColor : 'rgba(200, 100, 32, 0.2)'
          },{
            data : dNamayan,
            label : 'Namayan',
            backgroundColor : 'rgba(60, 60, 15, 0.2)'
          },{
            data : dOldZaniga,
            label : 'Old Zaniga',
            backgroundColor : 'rgba(40, 23, 40, 0.2)'
          },{
            data : dPlainview,
            label : 'Plainview',
            backgroundColor : 'rgba(120, 120, 255, 0.2)'
          },{
            data : dSanJose,
            label : 'San Jose',
            backgroundColor : 'rgba(255, 0, 255, 0.2)'
          },{
            data : dVergara,
            label : 'Vergara',
            backgroundColor : 'rgba(200, 200, 255, 0.2)'
          }],

          
          labels: [
            this.jan,
            this.feb,
            this.march,
            this.april,
            this.may,
            this.jun,
            this.jul,
            this.aug,
            this.sep,
            this.oct,
            this.nov,
            this.dec        
            
          ]
        }, scaleOverride: true,
        scaleStepWidth: 1,
        scaleSteps: 10,
        options: {
          events: ['click'],
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
          legend: {
            display: true,
            position: 'left',
          }
        }

      });
  }
}
