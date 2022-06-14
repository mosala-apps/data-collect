import React , { useEffect }  from 'react';
import { useNavigation } from '@react-navigation/native';
import { initDatabase } from '../services/database';
import { fetchFormsByStatus, updateForm } from '../services/formService';
import { statusForm } from '../config/variables';
import { useDispatch, useSelector } from 'react-redux';
import { syncForm } from '../store/form/formAsyncQueries';
import { isConnected } from '../config/offlineConfig';
import { logout } from '../store';
import { ToastAndroid } from 'react-native';
import { isLoggedIn } from '../store/auth/authAsyncQuerie';

const SetupComponent = () => {
  let timer = null

  const dispatch = useDispatch()
  const navigation = useNavigation()

  const TIME_ON_ERROR = 60000 // 1 minute
  const TIME_ON_SUCCESS = 5000 // 5 seconds

  const reRunSync = (time) => {
    timer = setTimeout(() => {
      syncRecursivelySavedForms()
    }, time);
  }

  const handleExpireToken = () => {
    ToastAndroid.show('Votre session a expiré, vous devez vous reconnecter pour synchroniser vos formulaires', ToastAndroid.LONG);
    navigation.navigate('Signin');
    dispatch(logout());
  }

  const syncRecursivelySavedForms = async () => {
    const loggedIn = await isLoggedIn()
    if (isConnected && loggedIn) {
      const formsSaved = await fetchFormsByStatus(statusForm.saved)
      if (formsSaved.length > 0) {
        syncForm(JSON.parse(formsSaved[0].payload))
          .then(async() => {
            await updateForm(formsSaved[0].id, {status: statusForm.synchronized, error: 0})
            reRunSync(TIME_ON_SUCCESS)
          })
          .catch(async (error) => {
            if (error.response.status === 401) {
              handleExpireToken()
              reRunSync(TIME_ON_ERROR)
            } else {
              await updateForm(formsSaved[0].id, {error: 1})
              reRunSync(TIME_ON_ERROR)
            }
          })
      } else {
        reRunSync(TIME_ON_ERROR)
      }
    } else {
      reRunSync(TIME_ON_ERROR)
    }
  }

  useEffect(() => {
    try {
      initDatabase()
        .then(() => {
          timer = setTimeout(() => {
            syncRecursivelySavedForms()
          }, 5000);
        });
    } catch (error) {
      console.log(error)
    }
    return () => {
      clearTimeout(timer)
    };
  }, []);

  return null;
}

export default SetupComponent;
