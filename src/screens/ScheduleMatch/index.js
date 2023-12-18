import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {globleStyle} from '@utils/globleStyle';
import CustomStatusBar from '@components/CustomStatusBar';
import {
  Images,
  LightTheme,
  Static,
  Value,
  upcomingCricketMatches,
} from '@constants';
import {styles} from './styles';
import {CommonHeader} from '@screens/Dashboard';
import {
  convertTimeFormat,
  convertToYYYYMMDD,
  doTimeRangesOverlap,
  formatDate,
  formatTime,
  formatTimeValue,
  formattedDateFunc,
} from '@utils/commonFunction';
import {dashboardStyle} from '@screens/Dashboard/styles';
import CalenderView from '@components/CalenderView';
import TimeSlot from '@components/TimeSlot';
import {addMatch} from '@redux/actions/matchAction';
import {goBack} from '@services/navigationServices';
import CustomButton from '@components/CustomButton';

import {useSelector, useDispatch} from 'react-redux';
import AddNewModal, {dataParticipants} from '@components/AddNewModal';
const ScheduleMatch = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [openCalender, setOpenCalender] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {matchSchedule} = useSelector(state => state.matchReducer);
  const [selectedTeam, setSelectedTeam] = useState([]);
  const dispatch = useDispatch();
  const onADD = item => {
    dispatch(addMatch(item));
  };
  const renderDate = date => {
    const [day, rest] = formattedDateFunc(date).split(', ');
    const formattedDate = formattedDateFunc(date);
    const isSelected = selectedDate === formattedDate;
    const selectDate = () => {
      if (isSelected) {
        setSelectedDate('');
      } else {
        setSelectedDate(formattedDate);
      }
    };
    return (
      <TouchableOpacity
        key={date}
        onPress={() => selectDate()}
        style={[
          styles.TapOnDate,
          isSelected ? {backgroundColor: LightTheme.white} : null,
        ]}>
        <Text style={[styles.date, isSelected && {color: LightTheme.text}]}>
          {day}
        </Text>
        <Text style={[styles.date, isSelected && {color: LightTheme.text}]}>
          {rest}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderDatesRow = () => {
    const currentDate = new Date();
    const dates = [];
    for (let i = 0; i < 20; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      dates.push(renderDate(nextDate));
    }
    return dates;
  };

  const renderTimeSlotsRow = () => {
    const timeSlots = [];
    const currentTime = new Date();
    const isToday = selectedDate === formattedDateFunc(currentTime);
    const startHour = isToday ? currentTime.getHours() : 8;
    const endHour = 20;
    for (let i = startHour; i <= endHour; i += 2) {
      const startTime = new Date(currentTime);
      startTime.setHours(i, 0, 0);
      const endTime = new Date(currentTime);
      endTime.setHours(i + 2, 0, 0);

      const formattedStartTime = formatTimeValue(
        startTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      );
      const formattedEndTime = formatTimeValue(
        endTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      );
      const isSelected =
        selectedTimeSlot === `${formattedStartTime} - ${formattedEndTime}`;
      const selectTimeSlot = () => {
        if (isSelected) {
          setSelectedTimeSlot('');
        } else {
          setSelectedTimeSlot(`${formattedStartTime} - ${formattedEndTime}`);
        }
      };
      timeSlots.push(
        <TouchableOpacity
          key={`${formattedStartTime}-${formattedEndTime}`}
          onPress={() => selectTimeSlot()}
          style={[
            styles.TapOnDate,
            isSelected ? {backgroundColor: LightTheme.white} : null,
          ]}>
          <Text style={[styles.date, isSelected && {color: LightTheme.text}]}>
            {formattedStartTime} - {formattedEndTime}
          </Text>
        </TouchableOpacity>,
      );
    }

    return timeSlots;
  };
  const filteredMatches = upcomingCricketMatches.filter(match => {
    const matchDate = new Date(match.date).toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
    const matchTime = formatTime(match.time);
    return (
      (!selectedDate || matchDate === selectedDate) &&
      (!selectedTimeSlot || doTimeRangesOverlap(matchTime, selectedTimeSlot))
    );
  });
  const onContinue = () => {
    if (selectedTeam) {
      const selectedLabels = selectedTeam.map(value => {
        const selectedItem = dataParticipants.find(
          item => item.value === value,
        );
        return selectedItem ? selectedItem.label : '';
      });
      const payload = {
        date: convertToYYYYMMDD(selectedDate),
        id: matchSchedule ? matchSchedule.length + 1 : 1,
        participants: selectedLabels,
        time: convertTimeFormat(selectedTimeSlot),
      };
      dispatch(addMatch(payload));
      setShowModal(false);
    }
  };
  const renderUpcomingMatchItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => onADD(item)}>
        <View style={globleStyle.spaceBetween}>
          <Text style={styles.dateText}>{formatDate(item.date)}</Text>
          <Image source={Images.add} style={styles.add} />
        </View>
        <View style={dashboardStyle.matchItem}>
          <Text style={dashboardStyle.time}>{formatTime(item.time)} | </Text>
          <Text style={dashboardStyle.participants}>
            {item.participants[0]} vs {item.participants[1]}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={globleStyle.backGroundMain}>
      <CustomStatusBar />
      <TouchableOpacity onPress={goBack}>
        <Image source={Images.backIcon} style={[styles.add, styles.bottom]} />
      </TouchableOpacity>
      <CalenderView
        setOpenCalender={setOpenCalender}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        renderDatesRow={renderDatesRow}
        openCalender={openCalender}
      />
      <TimeSlot
        selectedTimeSlot={selectedTimeSlot}
        renderTimeSlotsRow={renderTimeSlotsRow}
        setShowDatePicker={setShowDatePicker}
        showDatePicker={showDatePicker}
      />
      <View style={styles.main}>
        <CommonHeader title={Static.List} />
      </View>
      <FlatList
        data={filteredMatches}
        keyExtractor={(item, index) => item.id + index}
        renderItem={renderUpcomingMatchItem}
        style={{paddingHorizontal: Value.CONSTANT_VALUE_20}}
        ListEmptyComponent={
          <>
            <Text style={dashboardStyle.noMatch}>No matches found</Text>
            <CustomButton
              title={'Add Schedule New Match'}
              onPress={() => {
                if (!selectedDate || !selectedTimeSlot) {
                  Alert.alert('Please select date and time');
                } else {
                  setShowModal(!showModal);
                }
              }}
            />
          </>
        }
      />
      <AddNewModal
        showModal={showModal}
        selectedTimeSlot={selectedTimeSlot}
        selectDate={selectedDate}
        onRequestClose={() => {
          setShowModal(false);
        }}
        selected={selectedTeam}
        setSelected={setSelectedTeam}
        onContinue={onContinue}
      />
    </SafeAreaView>
  );
};

export default ScheduleMatch;
