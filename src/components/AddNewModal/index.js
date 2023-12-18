import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {
  Alignment,
  Images,
  LightTheme,
  Static,
  getAllParticipants,
} from '@constants';
import CustomButton from '@components/CustomButton';
import styles from '@components/Modal/styles';
import {MultiSelect} from 'react-native-element-dropdown';
import {CommonHeader} from '@screens/Dashboard';
export const dataParticipants = getAllParticipants().map(
  (participant, index) => ({
    label: participant,
    value: `${index + 1}`,
  }),
);
const AddNewModal = props => {
  const {
    showModal,
    onRequestClose,
    selected,
    onContinue,
    selectedTimeSlot,
    selectDate,
    setSelected,
  } = props;

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };
  return (
    <Modal
      transparent={true}
      visible={showModal}
      onRequestClose={onRequestClose}>
      <View style={[styles.centeredView]}>
        <View style={styles.modalView}>
          <View style={{flexDirection: Alignment.ROW}}>
            <TouchableOpacity onPress={onRequestClose}>
              <Image
                source={Images.backIcon}
                tintColor={LightTheme.text}
                style={styles.icon}
              />
            </TouchableOpacity>
            <CommonHeader
              title={'Schedule New match'}
              extraStyle={styles.titleText}
            />
          </View>

          <CommonHeader
            title={`Selected Date: ${selectDate}`}
            extraStyle={{color: LightTheme.text}}
          />
          <CommonHeader
            title={`Selected Time Slot: ${selectedTimeSlot}`}
            extraStyle={{color: LightTheme.text}}
          />
          <View style={styles.container}>
            <MultiSelect
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={dataParticipants}
              labelField="label"
              valueField="value"
              placeholder="Select Teams"
              value={selected}
              search
              maxSelect={2}
              searchPlaceholder="Search..."
              onChange={item => {
                setSelected(item);
              }}
              renderLeftIcon={() => (
                <Image style={styles.iconStyle} source={Images.team} />
              )}
              renderItem={renderItem}
              renderSelectedItem={(item, unSelect) => (
                <View>
                  <View style={styles.selectedStyle}>
                    <Text style={styles.textSelectedStyle}>{item.label}</Text>
                    <TouchableOpacity
                      onPress={() => unSelect && unSelect(item)}>
                      <Image
                        source={Images.delete}
                        tintColor={LightTheme.COLOR_RED}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
            <CustomButton
              extraStyle={styles.continue}
              title={Static.Confirm}
              onPress={onContinue}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddNewModal;
