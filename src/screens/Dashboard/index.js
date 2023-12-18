import CustomStatusBar from '@components/CustomStatusBar';
import {Alignment, Images, Routes, Static, getSectionedData} from '@constants';
import {globleStyle} from '@utils/globleStyle';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {formatDate, formatTime} from '@utils/commonFunction';
import {dashboardStyle} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import _ from 'lodash';
import {navigate} from '@services/navigationServices';
import {deleteMatch} from '@redux/actions/matchAction';
import ModalMiddle from '@components/Modal';
export const CommonHeader = ({title, extraStyle = null}) => (
  <Text style={[dashboardStyle.Upcoming, extraStyle]}>{title}</Text>
);

const ScheduleCalenderView = () => {
  return (
    <View style={[globleStyle.spaceBetween, {alignItems: Alignment.CENTER}]}>
      <CommonHeader title={Static.ScheduleMatch} />
      <TouchableOpacity onPress={() => navigate(Routes.ScheduleMatch)}>
        <Image source={Images.calender} />
      </TouchableOpacity>
    </View>
  );
};
const Dashboard = () => {
  const {matchSchedule} = useSelector(state => state.matchReducer);
  const sectionedData = getSectionedData();
  const [OpenModal, setOpenModal] = useState(false);
  const [deletedItem, setDeleteItem] = useState(null);
  const dispatch = useDispatch();
  const renderMatchItem = ({item}) => {
    return (
      <View style={dashboardStyle.matchItem}>
        <Text style={dashboardStyle.time}>{formatTime(item.time)} | </Text>
        <Text style={dashboardStyle.participants}>
          {item.participants[0]} vs {item.participants[1]}
        </Text>
      </View>
    );
  };

  const renderSectionHeader = ({section: {title}}) => (
    <Text style={dashboardStyle.sectionHeader}>{formatDate(title)}</Text>
  );
  const renderScheduledMatches = ({item}) => {
    return (
      <View>
        <View style={globleStyle.spaceBetween}>
          <Text style={dashboardStyle.sectionHeader}>
            {formatDate(item.date)}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setDeleteItem(item);
              setOpenModal(true);
            }}>
            <Image source={Images.delete} />
          </TouchableOpacity>
        </View>
        <View style={dashboardStyle.matchItem}>
          <Text style={dashboardStyle.time}>{formatTime(item.time)} | </Text>
          <Text style={dashboardStyle.participants}>
            {item.participants[0]} vs {item.participants[1]}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={globleStyle.backGroundMain}>
      <CustomStatusBar />
      <ScrollView style={dashboardStyle.main}>
        <Text style={dashboardStyle.title}>{Static.Schedule}</Text>
        <ScheduleCalenderView />
        <CommonHeader title={Static.ScheduledMatch} />
        <FlatList
          data={matchSchedule}
          keyExtractor={(item, index) => item.id + index}
          renderItem={renderScheduledMatches}
          ListEmptyComponent={
            <Text style={dashboardStyle.noMatch}>No Scheduled Matches!</Text>
          }
        />
        <CommonHeader title={Static.Upcoming} />
        <View style={dashboardStyle.upcomingEvent}>
          <SectionList
            showsVerticalScrollIndicator={false}
            sections={Object.keys(sectionedData).map(date => ({
              title: date,
              data: sectionedData[date],
            }))}
            keyExtractor={(item, index) => item.id + index}
            renderItem={renderMatchItem}
            renderSectionHeader={renderSectionHeader}
          />
        </View>
        <ModalMiddle
          showModal={OpenModal}
          onRequestClose={() => setOpenModal(false)}
          onContinue={() => {
            dispatch(deleteMatch(deletedItem));
            setOpenModal(false);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Dashboard;
