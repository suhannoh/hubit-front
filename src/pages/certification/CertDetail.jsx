import React from 'react'
import { useParams } from 'react-router-dom'
import { cert1Data } from '../../store/cert1';
import styles from './CertDetail.module.css'
import { cert2Data } from '../../store/cert2';
import { cert3Data } from '../../store/cert3';
import { cert4Data } from '../../store/cert4';
import { cert5Data } from '../../store/cert5';
import { cert6Data } from '../../store/cert6';
import { cert7Data } from '../../store/cert7';
import { cert8Data } from '../../store/cert8';
import { cert9Data } from '../../store/cert9';
import { cert10Data } from '../../store/cert10';
import { cert11Data } from '../../store/cert11';
import { cert12Data } from '../../store/cert12';

const data_number = {
  1: cert1Data,
  2: cert2Data,
  3: cert3Data,
  4 : cert4Data,
  5 : cert5Data,
  6: cert6Data,
  7: cert7Data,
  8: cert8Data,
  9 : cert9Data,
  10 : cert10Data,
  11 : cert11Data,
  12 : cert12Data
}
export default function CertDetail() {
  const {detailNumber} = useParams();
  const key = Number(detailNumber);
  const datas = data_number[key] || [];

  return (
    <div className={styles.container}>
      {datas.map((section, idx) => (
      <div key={idx}>
        <h2 className={styles.title}>{idx+1}. {section.section}</h2>

        {section.items.map((item, i) => (
          <div key={i} className={styles.item}>
            <h3>{item.title}</h3>

            {/* mnemonic(암기코드) 있으면 표시 */}
            {item.mnemonic && (
              <p className={styles.mnemonic}>암기: {item.mnemonic}</p>
            )}

            <p className={styles.summary}>{item.summary}</p>

            <ul>
              {item.details.map((detail, j) => (
                <li key={j} className={styles.detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ))}
    </div>
  )
}
