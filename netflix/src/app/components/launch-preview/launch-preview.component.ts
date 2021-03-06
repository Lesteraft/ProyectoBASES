import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {VgAPI} from 'videogular2/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-launch-preview',
  templateUrl: './launch-preview.component.html',
  styleUrls: ['./launch-preview.component.css']
})
export class LaunchPreviewComponent implements OnInit {
    preload = 'auto';
    video = '../../../assets/video/Trailer1.mp4';
    api: VgAPI;
    id = 2;
  constructor() {
  }


  ngOnInit() {
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    this.api.play();
    $(window).scroll(function() {
       if ($(window).scrollTop() > 350) {
         api.pause();
       } else if ($(window).scrollTop() < 10 ) {
         api.play();
       }
    });
  }

}
