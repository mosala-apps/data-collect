import { createAsyncThunk } from '@reduxjs/toolkit';
import apiURL from '../../config/apiURL';

export const notificationsHospital = createAsyncThunk(
  'notification/notificationsHospital',
  async (payload) => {
    try {
      const notifications = await (
        await apiURL.get(`/notifications/${payload.id}`)
      ).data;
      return notifications;
    } catch (error) {
      return error;
    }
  },
);
export const getNotificationNotRead = createAsyncThunk(
  'notification/getNotificationNotRead',
  async (payload) => {
    try {
      const notificationNotReads = await (
        await apiURL.get(`/notifications/notification-not-read/${payload.id}`)
      ).data;
      return notificationNotReads;
    } catch (error) {
      return error;
    }
  },
);
