import './App.css';
import { bitable, ITableMeta } from "@lark-base-open/js-sdk";
import { Button, Form } from '@douyinfe/semi-ui';
import { BaseFormApi } from '@douyinfe/semi-foundation/lib/es/form/interface';
import { useState, useEffect, useRef, useCallback } from 'react';

import BatchCrop from './components/BatchCrop';
import Tab from './components/Tab';

import styles from './App.css';

export default function App() {
  const [tableMetaList, setTableMetaList] = useState<ITableMeta[]>();
  const formApi = useRef<BaseFormApi>();
  const addRecord = useCallback(async ({ table: tableId }: { table: string }) => {
    if (tableId) {
      const table = await bitable.base.getTableById(tableId);
      table.addRecord({
        fields: {},
      });
    }
  }, []);
  useEffect(() => {
    Promise.all([bitable.base.getTableMetaList(), bitable.base.getSelection()])
      .then(([metaList, selection]) => {
        setTableMetaList(metaList);
        formApi.current?.setValues({ table: selection.tableId });
      });
  }, []);

  return (
    <main className="main">
      <div className={styles.rootFrame1}>
        <Tab></Tab>
        <BatchCrop></BatchCrop>
      </div>
    </main>
  )
}