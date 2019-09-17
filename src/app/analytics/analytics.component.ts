import { Component, OnInit, ViewChild, ElementRef,AfterViewInit, Renderer2, AfterContentInit } from '@angular/core';
import * as d3 from "d3";
import { RshinyService } from '../service/rshiny.service';
import html2canvas from 'html2canvas';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit,AfterViewInit,AfterContentInit {
  @ViewChild('analytics', {static : false}) analytics: ElementRef;

  valueR2;
  valueSStot;
  valueSSres;
  valueMean;
  valueCoefficient;
 
  constructor(private RshinyService : RshinyService, private renderer : Renderer2, private patientService : PatientService) { }

  form = new FormGroup({
    valueofK : new FormControl(0,[Validators.required]),
    valueofN : new FormControl(0,[Validators.required])    
  });

  selectedFormControl =   new FormControl('age',[Validators.required]);   
  get valueofK(){
    return this.form.get('valueofK');
  }

  get valueofN(){
    return this.form.get('valueofN');
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // this.onLineLinearRegression();
    console.log(this.RshinyService.getRSquared(10,30));
  }

  ngAfterContentInit(){
    
  }


  

  onLogicalRegression(){
    this.removeTheGraph();
    this.renderer.appendChild(this.analytics.nativeElement,this.RshinyService.chart());
  }


  onLineLinearRegression = () => {
    let filteredMalnutritionData = this.patientService.getAllAgeMalnutrition();
    this.removeTheGraph();
    if(this.selectedFormControl.value == "age"){
      filteredMalnutritionData = this.patientService.getAllAgeMalnutrition();
    }else if(this.selectedFormControl.value == "gender"){
      filteredMalnutritionData = this.patientService.getAlllMalnutrition();
    }
    

    this.getTheR2(this.patientService.bmi);
   
    this.renderer.appendChild(this.analytics.nativeElement,this.RshinyService.qqnorm(filteredMalnutritionData));
    // this.renderer.appendChild(this.analytics.nativeElement,this.RshinyService.histogram(normalData));
    // this.RshinyService.MultiLine(53,23).then( t =>{
    //   this.renderer.appendChild(this.analytics.nativeElement,t);
    // });
    
  }

  removeTheGraph(){
    Array.from(this.analytics.nativeElement.children).forEach(child => {
      // console.log('children.length=' + this.analytics.nativeElement.children.length);
      this.renderer.removeChild(this.analytics.nativeElement, child);
    });
  }

 
  getTheR2(theData){
    let result = this.RshinyService.getRSquared((x) => { return (6 * x) - 5 }, theData);
    
    this.valueR2 =  result.rSquared;
    this.valueSSres = result.SSres;
    this.valueSStot = result.SStot;
    this.valueMean = result.meanValue;

   
  }

  getCoefficient(){
    this.valueCoefficient = this.binomial(this.valueofN.value,this.valueofK.value);
  }

  binomial(n, k) {
    console.log(n + 'N value');
    console.log(k + 'K value');
    
   var coeff = 1;
   for (var x = n-k+1; x <= n; x++) coeff *= x;
   for (x = 1; x <= k; x++) coeff /= x;
   return coeff;
  }

  gotChanged(event){
    console.log(event.value);
  }

}
