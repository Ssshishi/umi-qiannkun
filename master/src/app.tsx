import { useState } from 'react';
import 'antd/dist/antd.compact.min.css';

export function useQiankunStateForSlave() {
  const [masterState, setMasterState] = useState({
    text: 'hello,cishy',
  });

  return {
    masterState,
    setMasterState,
  };
}
