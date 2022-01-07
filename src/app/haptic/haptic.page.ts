import { Component, OnInit } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';


@Component({
  selector: 'app-haptic',
  templateUrl: './haptic.page.html',
  styleUrls: ['./haptic.page.scss'],
})
export class HapticPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  const hapticsImpactMedium = async () => {
    await Haptics.impact({ style: ImpactStyle.Medium });
  };

  const hapticsVibrate = async () => {
    await Haptics.vibrate();
  };

}
