import { Howl } from 'howler';
import sound from '../assets/sound.mp3'

const NotificationSound = new Howl({
    src: [sound],
});

const playNotificationSound = () => {
    NotificationSound.play();
};

export default playNotificationSound;
