import { useLocation, useNavigate } from 'react-router-dom';
import styles from './RecruitmentCard.module.css'
export default function RecruitmentCard({ item , cardType=""}) {
  
  const navigate = useNavigate();
  // const { pathname } = useLocation();
  // const url = pathname.split("/")[2];
  const stackColor = {
    primary : [
      "REACT" , "VUE" , "HTML" , "CSS" , "JAVASCRIPT" , "TYPESCRIPT" , "NODEJS"
    ],
    subPrimary : [
      "JAVA" , "SPRING" , "SPRING BOOT", "PYTHON"
    ]
  }
  
  const getStackColor = (s = "") => {
  if (stackColor.primary.includes(s)) return "var(--primary)";
  if (stackColor.subPrimary.includes(s)) return "var(--sub-primary)";
  return "var(--stack-default)"; // 없으면 기본색
};

  const handleDetail = () => {
    navigate(`/recruitment/${item.category}/${item.recruitmentId}`, { state : item });
  }

  return (
    <article className={`${styles.card} ${cardType === "new" && styles.card__new}`} onClick={handleDetail}>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.projectTitle}</h3>
        <div className={styles.info}>
          <p className={styles.date}>{item.startDate} {item.startDate && " ~ "} {item.endDate}</p>
          <p className={styles.author}>{item.author}</p>
        </div>
      </div>
      <p className={styles.desc}>{item.projectDesc}</p>
      <div className={styles.stack_list}>
        <p>Stack</p>
        <div className={styles.stack_container}>
          {item.stack.map((stack, idx) => (
            <div key={idx} className={styles.stack} style={{backgroundColor : getStackColor(stack)}}> {stack} </div>
          ))}
        </div>
      </div>
      <div>
        
      </div>
    </article>
  )
}
