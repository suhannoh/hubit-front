import { useParams } from 'react-router-dom'
import styles from './CertDetail.module.css'
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
const loaders = {
  1: () => import('../../store/cert1').then(m => m.cert1Data),
  2: () => import('../../store/cert2').then(m => m.cert2Data),
  3: () => import('../../store/cert3').then(m => m.cert3Data),
  4: () => import('../../store/cert4').then(m => m.cert4Data),
  5: () => import('../../store/cert5').then(m => m.cert5Data),
  6: () => import('../../store/cert6').then(m => m.cert6Data),
  7: () => import('../../store/cert7').then(m => m.cert7Data),
  8: () => import('../../store/cert8').then(m => m.cert8Data),
  9: () => import('../../store/cert9').then(m => m.cert9Data),
  10: () => import('../../store/cert10').then(m => m.cert10Data),
  11: () => import('../../store/cert11').then(m => m.cert11Data),
  12: () => import('../../store/cert12').then(m => m.cert12Data),
};

export default function CertDetail() {
  const {detailNumber} = useParams();
  // const key = Number(detailNumber);
  // const datas = data_number[key] || [];

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const key = Number(detailNumber);
  const loader = loaders[key];

  useEffect(() => {
    
    if (!loader) {
      console.log("data not found");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    loader()
      .then((data) => {
        setDatas(data ?? []);
      })
      .catch((err) => {
        console.error('cert data load error', err);
        setDatas([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loader]);

  return (
    <div className={styles.container}>
      {loading && <Loading />}
      {datas.map((section, idx) => (
      <div key={idx} className={styles.section}>
        <h2 className={styles.title}>{idx+1}. {section.section}</h2>

        {section.items.map((item, i) => (
          <div key={i} className={styles.item}>
            <h3>{item.title}</h3>

            {/* mnemonic(암기코드) 있으면 표시 */}
            {item.mnemonic && (
              <p className={styles.mnemonic}>암기: {item.mnemonic}</p>
            )}

            <p className={styles.summary}><span>{item.summary}</span></p>

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
