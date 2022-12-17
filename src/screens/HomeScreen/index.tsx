import React from 'react';
import {View} from 'react-native';
import {Card, Text, useTheme} from 'react-native-paper';
import {LocalSvg} from 'react-native-svg';
import {HomeScreenProps} from '../../types';
import getStyles from './style';
import Header from '../../components/header';
import {calm, anxious, focus, relax} from '../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default (_props: HomeScreenProps) => {
  const styles = getStyles(useTheme());
  const theme = useTheme();

  const CardWithIcon = ({title, icon}: {title: string; icon: any}) => (
    <TouchableOpacity>
      <Card style={styles.card}>
        <LocalSvg asset={icon} width={35} height={35} />
      </Card>
      <Text style={{textAlign: 'center', marginTop: 5}}> {title} </Text>
    </TouchableOpacity>
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
    </View>
  );
};
