import { Component, OnInit, ViewChild, ElementRef,AfterViewInit, Renderer2, AfterContentInit } from '@angular/core';
import * as d3 from "d3";
import { RshinyService } from '../service/rshiny.service';
import html2canvas from 'html2canvas';

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
  constructor(private RshinyService : RshinyService, private renderer : Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.onLineLinearRegression();
  }

  ngAfterContentInit(){
    
  }

  createPrediction(){
    
   
    
    
  }

  onLogicalRegression(){
    this.removeTheGraph();
    this.renderer.appendChild(this.analytics.nativeElement,this.RshinyService.chart());
  }


  onLineLinearRegression = () => {
    
    this.removeTheGraph();
    let normalData = Float64Array.from({length: 100}, d3.randomNormal());
  
   
    this.renderer.appendChild(this.analytics.nativeElement,this.RshinyService.qqnorm(normalData));
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

 
  getTheR2(){
    let result = this.RshinyService.getRSquared((x) => { return (6 * x) - 5 }, [0, 1, 4, 9, 16, 25, 36]);
    
    this.valueR2 =  result.rSquared;
    this.valueSSres = result.SSres;
    this.valueSStot = result.SStot;
    this.valueMean = result.meanValue;

    this.onLineLinearRegression();
  }

}
