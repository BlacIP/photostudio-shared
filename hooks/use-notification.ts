'use client';

import * as React from 'react';
import { dismiss, getState, notification, subscribe } from './notification-store';

function useNotification() {
  const [state, setState] = React.useState(getState());

  React.useEffect(() => {
    return subscribe(setState);
  }, []);

  return {
    ...state,
    notification,
    dismiss,
  };
}

export { notification, useNotification };
