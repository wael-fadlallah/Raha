import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {LocalSvg} from 'react-native-svg';
import {art} from '../../assets';
import icons from '../../assets/icons';
import getStyle from './style';
import Video from 'react-native-video';
import ProgressBar from './ProgressBar';
enum playerStatusEnum {
  Playing = 'Playing',
  Paused = 'Paused',
  Stoped = 'Stoped',
}

type PlayerStatus = keyof typeof playerStatusEnum;
function PlayerScreen() {
  const styles = getStyle(useTheme());

  const [playerStatus, setPlayerStatus] = useState<PlayerStatus>(
    playerStatusEnum.Stoped,
  );

  const [state, setState] = useState({currentTime: 0, fullLength: 0});

  const audio = require('./never_gonna_give_you_up.mp3');
  const vid = require('./fall_in_love.mp4');
  let player: Video | null = null;

  const onBuffer = () => {
    console.log('onBuffer');
  };
  const videoError = () => {
    console.log('videoError');
  };

  const toggleAudio = () => {
    if (
      playerStatus === playerStatusEnum.Paused ||
      playerStatus === playerStatusEnum.Stoped
    ) {
      setPlayerStatus(playerStatusEnum.Playing);
    } else {
      setPlayerStatus(playerStatusEnum.Paused);
    }
  };
  const getProgressPercentage = ({
    currentTime,
    seekableDuration,
  }: {
    currentTime: number;
    seekableDuration: number;
  }) => {
    setState({currentTime, fullLength: seekableDuration});
  };

  return (
    <View style={styles.container}>
      <Image source={art} style={styles.trackImage} />
      <Text style={styles.trackName}>Painting Forest</Text>
      <Text style={styles.trackAuthor}>By: Painting with Passion</Text>

      <ProgressBar
        currentTime={state.currentTime}
        fullLength={state.fullLength}
      />

      <View style={styles.trackControlsContainer}>
        <LocalSvg asset={icons.previous} />
        <LocalSvg
          asset={
            playerStatus === playerStatusEnum.Playing ? icons.pause : icons.play
          }
          onPress={() => toggleAudio()}
        />
        <LocalSvg asset={icons.next} />
      </View>

      <Video
        // audioOnly={true}
        source={audio}
        ref={ref => {
          player = ref;
        }}
        onBuffer={onBuffer} // Callback when remote video is buffering
        onError={videoError} // Callback when video cannot be loaded
        paused={playerStatus !== playerStatusEnum.Playing}
        onProgress={getProgressPercentage}
        controls={true}
      />
    </View>
  );
}

export default PlayerScreen;
