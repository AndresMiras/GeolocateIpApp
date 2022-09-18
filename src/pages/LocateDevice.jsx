import React from 'react';
import SendIp from '../components/LocateDevice/SendIp';
import { GlobalMap } from '../components/LocateDevice/GlobalMap';
import { PopUppBottomStats } from '../components/LocateDevice/PopUppBottomStats';

export const LocateDevice = () => {
  return (
    <>
      <SendIp/>
      <GlobalMap/>
      {/* <PopUppBottomStats placement={'bottom'}name={'bottom'}/> */}
    </>
  )
}
