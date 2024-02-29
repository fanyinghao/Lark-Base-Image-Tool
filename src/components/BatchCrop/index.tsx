import React from "react";
import { Input, Select, Radio, Button } from '@douyinfe/semi-ui';
import { IconCrop } from '@douyinfe/semi-icons';
import styles from './index.module.css';

const Component = () => {
  return (
    <div className={styles.rootBatchCropFrame}>
      <div className={styles.optionColumnGroup}>
        <div className={styles.semiComponentBlockNa}>
          <p className={styles.blockName}>选择列</p>
        </div>
        <Select
          placeholder="请选择附件列"
          autoFocus={true}
          maxTagCount={3}
          className={styles.select}
        >
          <Select.Option value="hotsoon">列1</Select.Option>
        </Select>
      </div>
      <div className={styles.optionScaleGroup}>
        <div className={styles.semiComponentBlockNa}>
          <p className={styles.blockName}>裁切比例</p>
        </div>
        <Radio
          type="card"
          extra="1:1"
          className={styles.radio}
        >
          <img
            src='https://img0.baidu.com/it/u=3628503530,464378779&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=600'
            width={60}
            height={60}
          />
        </Radio>
        <Radio
          type="card"
          extra="5:4"
          className={styles.radio1}
        >
          <img
            src='https://img0.baidu.com/it/u=3628503530,464378779&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=600'
            width={75}
            height={60}
          />
        </Radio>
        <Radio
          type="card"
          extra="4:3"
          className={styles.radio1}
        >
          <img
            src='https://img0.baidu.com/it/u=3628503530,464378779&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=600'
            width={80}
            height={60}
          />
        </Radio>
        <Radio
          type="card"
          extra="圆形"
          className={styles.radio1}
        >
          <img
            src='https://img0.baidu.com/it/u=3628503530,464378779&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=600'
            width={60}
            height={60}
            style={{
              borderRadius: '1.5rem'
            }}
          />
        </Radio>
        <Radio
          type="card"
          className={styles.radio1}
          extra={<div>自定义<div style={styles.input}>Width:{<Input></Input>} Height:{<Input></Input>}</div></div>}
        >
        </Radio>
      </div>
      <div className={styles.optionSaveGroup}>
        <div className={styles.semiComponentBlockNa}>
          <p className={styles.blockName}>图片保存</p>
        </div>
        <Radio
          type="card"
          className={styles.radio}
        >
          添加新列
        </Radio>
        <Radio
          type="card"
          className={styles.radio1}
        >
          覆盖原列
        </Radio>
      </div>
      <Button
        theme="solid"
        iconPosition="right"
        icon={<IconCrop />}
        className={styles.button}
      >
        批量处理
      </Button>
    </div>
  );
}

export default Component;
