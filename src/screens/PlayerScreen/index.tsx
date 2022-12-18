import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {LocalSvg} from 'react-native-svg';
import {art} from '../../assets';
import icons from '../../assets/icons';
import getStyle from './style';
import Sound from 'react-native-sound';

enum playerStatusEnum {
  Playing = 'Playing',
  Paused = 'Paused',
  Stoped = 'Stoped',
}

type PlayerStatus = keyof typeof playerStatusEnum;
function PlayerScreen() {
  const styles = getStyle(useTheme());

  const track = new Sound(
    'never_gonna_give_you_up.mp3',
    Sound.MAIN_BUNDLE,
    error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      console.log(
        'duration in seconds: ' +
          track.getDuration() +
          'number of channels: ' +
          track.getNumberOfChannels(),
      );
    },
  );

  const [playerStatus, setPlayerStatus] = useState<PlayerStatus>(
    playerStatusEnum.Stoped,
  );

  const toggleTrack = () => {
    console.log('Playing');
    if (playerStatus === playerStatusEnum.Playing) {
      track.pause();
      setPlayerStatus('Paused');
    }
    track.play();
    setPlayerStatus('Playing');
  };
  return (
    <View style={styles.container}>
      <Image source={art} style={styles.trackImage} />
      <Text style={styles.trackName}>Painting Forest</Text>
      <Text style={styles.trackAuthor}>By: Painting with Passion</Text>

      <View style={styles.trackControlsContainer}>
        <LocalSvg asset={icons.previous} />
        <LocalSvg
          asset={
            playerStatus === playerStatusEnum.Playing ? icons.pause : icons.play
          }
          onPress={toggleTrack}
        />
        <LocalSvg asset={icons.next} />
      </View>
    </View>
  );
}

export default PlayerScreen;
