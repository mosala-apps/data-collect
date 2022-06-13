import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text,SafeAreaView } from 'react-native';
import { getAllFormFiltered } from '../../store';


function SynchronizedForms() {
    /**
   * States
   */
     const [page, setPage] = useState(1);
     const dispatch = useDispatch();
     const [refreshing, setRefreshing] = useState(false);
  /**
   * Store
   */
   const user = useSelector((state) => state.auth.user);
   const form = useSelector((state) => state.form.form);
   const isLoading = useSelector((state) => state.form.isLoading);

     /**
   * hooks
   */

  useEffect(() => {
    if (user && user.hospital && user.hospital.id) {
      console.log('user ->',user.id)
      dispatch(getAllFormFiltered({ admin_user_id:user.id }));
    }
    console.log('form ->',form)
  }, [user]);

  return (
    <SafeAreaView>
      <Text>SynchronizationForm</Text>
    </SafeAreaView>
  );
}

export default SynchronizedForms;
