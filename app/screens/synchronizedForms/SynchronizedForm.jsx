import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text,SafeAreaView } from 'react-native';


function SynchronizedForms() {
    /**
   * States
   */
     
  /**
   * Store
   */
   const user = useSelector((state) => state.auth.user);
   
     /**
   * hooks
   */

  useEffect(() => {
   
  }, []);

  return (
    <SafeAreaView>
      <Text>SynchronizationForm</Text>
    </SafeAreaView>
  );
}

export default SynchronizedForms;
