import styles from './index.less';

import { useModel } from 'umi';

export default function IndexPage() {
  const { masterState, setMasterState } = useModel('@@qiankunStateFromMaster');
  setMasterState({ text: '你好', name: '沈诗' });
  return (
    <div>
      <h1 className={styles.title}>App1</h1>
      <h2>
        master：{masterState.text} {masterState?.name}
      </h2>
    </div>
  );
}
