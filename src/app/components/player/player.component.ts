import {
  Component, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit,
  ViewChild
} from '@angular/core';
import {selector} from "rxjs/operator/publish";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  ///player properties///
  @Input() paused: boolean;


  @Input() backward = new EventEmitter();
  @Input() pausePlay = new EventEmitter();
  @Input() forward = new EventEmitter();
  @Input() random = new EventEmitter();
  @Input() elapsed: number;
  @Input() total: number;
  @Input() current: number;
  @Input() volumeLvl: number;
  volumeOn:boolean=true;
  progressPinDown: boolean;
  volumeLvlChange: boolean;

  @ViewChild('progress', {read: ElementRef}) progressBar: ElementRef;
  @ViewChild('volumeLvl', {read: ElementRef}) volumeLvlRef:ElementRef;

  constructor() {


  }

  @HostListener('window:mousemove', ['$event'])
  mousemove(event: MouseEvent) {
    if (this.progressPinDown) {
      console.log(' event', event);
      this.progressBar.nativeElement.style.width = event.clientX < 968 ? ((event.clientX / 968) * 100).toString() + '%' : '100%'
    }
    // if(this.volumeLvlChange){
    //   console.log(this.volumeLvlRef.nativeElement.offsetLeft);
    //   this.volumeLvlRef.nativeElement.style.width=event.clientX<757 ? ((event.clientX/757)*100).toString()+'%': '100%'
    // }

  }

  playPause() {


  }

  @HostListener('window:mouseup', ['$event'])
  mouseup(event: MouseEvent) {
    if (this.progressPinDown) {
      console.log(' mouseup', event);
      this.progressPinDown = false;
    }

  }


  pinDown(event) {
    console.log('pin is being dragged', event);
    this.progressPinDown = true;

  }

  mouseOverProgressBar(event) {
  }

  pinUp(event) {
    console.log("pin up");
    this.progressPinDown = false;


  }

  ngOnInit() {
  }

  playPauseFunction() {
    this.paused = !this.paused;


  }

  changeVolumeLvlDown(event) {
    this.volumeLvlChange = true;
  }

  changeVolumeLvlUp(event) {

    this.volumeLvlChange = false;

  }

  setVolumeLevel(event) {
    if(this.volumeLvlChange){
      console.log(event);
      if(event.clientX<=this.volumeLvlRef.nativeElement.offsetLeft+3)
      {
        this.volumeLvlRef.nativeElement.style.width='0%';
        this.volumeLvl=0;
        this.volumeOn=false;
      }
      else if(event.clientX>90+this.volumeLvlRef.nativeElement.offsetLeft-3){

        this.volumeLvlRef.nativeElement.style.width='100%';
        this.volumeLvl=100;
        this.volumeOn=true;


      }else{
        this.volumeLvlRef.nativeElement.style.width=(((event.clientX-this.volumeLvlRef.nativeElement.offsetLeft)/90)*100).toString()+'%';
        this.volumeOn=true;


      }

    }

  }
}
