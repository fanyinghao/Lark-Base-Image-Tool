import React from "react";
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { IconCrop } from '@douyinfe/semi-icons';
import { IconColorPlatteNew, IconBackTop, IconTransfer } from '@douyinfe/semi-icons-lab';

import styles from './index.module.css';

const Component = () => {
  return (
    <Tabs
      tabPosition="top"
      defaultActiveKey="1"
      type="card"
      size="large"
      className={styles.rootTabs}
    >
      <TabPane
        tab="批量裁切"
        itemKey="1"
        icon={<IconCrop className={styles.semiIconsFile} />}
      />
      <TabPane
        tab="批量修图"
        itemKey="2"
        icon={<IconColorPlatteNew className={styles.semiIconsFile} />}
        disabled
      />
      <TabPane
        tab="批量导出"
        itemKey="3"
        icon={<IconTransfer className={styles.semiIconsFile} />}
        disabled
      />

      <TabPane
        tab="云同步"
        itemKey="4"
        icon={<IconBackTop className={styles.semiIconsFile} />}
        disabled
      />
    </Tabs>
  );
}

export default Component;