import React from 'react';
import {View} from 'react-native';
import {Button, Card, Text, useTheme} from 'react-native-paper';
import {LocalSvg} from 'react-native-svg';
import {HomeScreenProps} from '../../types';
import getStyles from './style';
import Header from '../../components/header';
import {calm, anxious, focus, relax} from '../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Sound from 'react-native-sound';

export default (props: HomeScreenProps) => {
  const styles = getStyles(useTheme());
  const theme = useTheme();
  const {navigation} = props;
  const CardWithIcon = ({title, icon}: {title: string; icon: any}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Player')}>
      <Card style={styles.card}>
        <LocalSvg asset={icon} width={35} height={35} />
      </Card>
      <Text style={{textAlign: 'center', marginTop: 5}}> {title} </Text>
    </TouchableOpacity>
  );

  const whoosh = new Sound(
    'never_gonna_give_you_up.mp3',
    Sound.MAIN_BUNDLE,
    error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          whoosh.getDuration() +
          'number of channels: ' +
          whoosh.getNumberOfChannels(),
      );

      // Play the sound with an onEnd callback
      // whoosh.play(success => {
      //   if (success) {
      //     console.log('successfully finished playing');
      //   } else {
      //     console.log('playback failed due to audio decoding errors');
      //   }
      // });
    },
  );

  return (
    <View style={styles.container}>
      <Header />

      <Text style={{fontSize: 30}}>Welcome back, Wael!</Text>
      <Text style={{color: theme.colors.tertiary, fontSize: 18}}>
        How are you feeling today ?
      </Text>

      <View style={styles.cardsContainer}>
        <CardWithIcon title="Calm" icon={calm} />
        <CardWithIcon title="Relax" icon={relax} />
        <CardWithIcon title="Focus" icon={focus} />
        <CardWithIcon title="Anxious" icon={anxious} />
      </View>

      <Button onPress={() => whoosh.play()}>play</Button>
      <Button onPress={() => whoosh.pause()}>pause</Button>
    </View>
  );
};
