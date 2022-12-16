import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image} from 'react-native';
import {LocalSvg} from 'react-native-svg';
import {hamburger, app_logo, profile} from '../../assets';
import getStyle from './style';

function Header() {
  const styles = getStyle();

  const navigation: DrawerNavigationHelpers = useNavigation();
  const toggleDrawer = () => navigation.toggleDrawer();
  return (
    <View style={styles.header}>
      <LocalSvg
        asset={hamburger}
        width={22}
        height={18}
        onPress={toggleDrawer}
      />
      <LocalSvg asset={app_logo} width={43} height={49} />
      <Image source={profile} style={styles.logo} />
    </View>
  );
}

export default Header;
