import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {CommonHeader} from '@screens/Dashboard';
import {styles} from '@screens/ScheduleMatch/styles';
import {Images} from '@constants';

const TimeSlot = ({
  selectedTimeSlot,
  renderTimeSlotsRow,
  setShowDatePicker,
  showDatePicker,
}) => {
  return (
    <View>
      <View style={styles.main}>
        <CommonHeader title={`Select Time: ${selectedTimeSlot}`} />
      </View>
      <View style={[styles.row]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.innerCalenderView}>{renderTimeSlotsRow()}</View>
        </ScrollView>
        <TouchableOpacity onPress={() => setShowDatePicker(!showDatePicker)}>
          <Image source={Images.clock} style={styles.imgClock} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TimeSlot;
