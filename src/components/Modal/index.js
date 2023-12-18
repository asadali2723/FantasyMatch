import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {Alignment, Images, Static} from '@constants';
import CustomButton from '@components/CustomButton';

const ModalMiddle = props => {
  const {showModal, onRequestClose, onContinue} = props;

  return (
    <Modal
      transparent={true}
      visible={showModal}
      onRequestClose={onRequestClose}>
      <View style={[styles.centeredView]}>
        <View style={styles.modalView}>
          <TouchableOpacity onPress={onRequestClose}>
            <Image source={Images.backIcon} />
          </TouchableOpacity>
          <View style={{alignItems: Alignment.CENTER}}>
            <Image source={Images.delete} style={styles.img} />
            <Text style={styles.title}>{Static.DeleteTitle}</Text>
            <Text style={styles.desc}>{Static.Desc}</Text>
            <CustomButton title={Static.goBack} onPress={onRequestClose} />

            <CustomButton
              extraStyle={styles.continue}
              title={Static.Yes}
              onPress={onContinue}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalMiddle;
