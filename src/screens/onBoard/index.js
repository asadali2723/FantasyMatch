import {Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {globleStyle} from '@utils/globleStyle';
import {Images, Routes, Static} from '@constants';
import styles from './styles';
import CustomButton from '@components/CustomButton';
import {navigate} from '@services/navigationServices';
import CustomStatusBar from '@components/CustomStatusBar';

const OnBoard = () => {
  return (
    <SafeAreaView style={globleStyle.backGroundMain}>
      <CustomStatusBar />
      <Image source={Images.onBoardImage} style={styles.img} />
      <Text style={styles.title}>{Static.onBoardTitle}</Text>
      <Text style={styles.description}>{Static.onBoardDescription}</Text>
      <CustomButton
        extraStyle={styles.btn}
        onPress={() => {
          navigate(Routes.Dashboard);
        }}
        title={Static.OnBoardBtn}
      />
    </SafeAreaView>
  );
};

export default OnBoard;
