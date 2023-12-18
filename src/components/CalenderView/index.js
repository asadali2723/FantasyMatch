import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {CommonHeader} from '@screens/Dashboard';
import {styles} from '@screens/ScheduleMatch/styles';
import {Images} from '@constants';

import {Calendar} from 'react-native-calendars';
import {convertToYYYYMMDD, formattedDateFunc} from '@utils/commonFunction';
const CalenderView = ({
  setOpenCalender,
  setSelectedDate,
  selectedDate,
  renderDatesRow,
  openCalender,
}) => {
  return (
    <>
      <View style={styles.main}>
        <CommonHeader title={`Select Date: ${selectedDate}`} />
      </View>
      <View style={styles.row}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.innerCalenderView}>{renderDatesRow()}</View>
        </ScrollView>
        <TouchableOpacity onPress={() => setOpenCalender(!openCalender)}>
          <Image source={Images.calender} />
        </TouchableOpacity>
      </View>
      {openCalender && (
        <Calendar
          markedDates={
            selectedDate
              ? {[convertToYYYYMMDD(selectedDate)]: {selected: true}}
              : {}
          }
          onDayPress={day => {
            const formattedDate = formattedDateFunc(day.dateString);
            setSelectedDate(formattedDate);
            setOpenCalender(false);
          }}
          minDate={new Date()}
        />
      )}
    </>
  );
};

export default CalenderView;
