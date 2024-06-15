import * as React from 'react';
import {Button, View} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
import {useRedux} from 'hooks';

import styles from './styles';

const HomeScreen = ({navigation}) => {
  const auth = useRedux('auth');
  const bookings = useRedux('bookings');
  console.log(bookings.current);
  return (
    <>
      <View style={styles.button}>
        <Button
          title="Go to Jane's profile"
          onPress={() => {
            // navigation.navigate('Profile', {name: 'Jane'});
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Add Booking"
          onPress={() => {
            auth.login({username: 'prasai.reiyaz@gmail.com', password: 'test'});
            bookings.add({id: 'test_id', time: 'test_time'});
          }}
        />
      </View>
      <View>
        <Button
          title="remove Booking"
          onPress={() => {
            auth.logout();
            bookings.remove(bookings.current[0]?.id);
          }}
        />
      </View>
    </>
  );
};

export default HomeScreen;
