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
    navigate(`/recruitment/${item.category}/${item.recruitmentId}`);
  }
  const cutText = (text , length) => {
    if(!text) return "";
    if(text.length > length) {
      return text.slice(0, length) + " ...";
    }
    return text;
  }
  const cutStack = (stack) => {
    if(!Array.isArray(stack)) return "";
    
    return stack.length > 6 ? [...stack.slice(0, 8), "..."] : stack;
    
  }

  return (
    <article className={`${styles.card} 
    ${cardType === "new" ? styles.card__new : cardType === "preview" ? styles.card__preview : ""}`}
     onClick={handleDetail}>
      <div className={styles.content}>
        <h3 className={styles.title}>{cutText(item.projectTitle,12)}</h3>
        <div className={styles.info}>
          <p className={styles.date}>{item.startDate} {item.startDate && " ~ "} {item.endDate}</p>
          <p className={styles.author}>{item.author}</p>
        </div>
      </div>
      <p className={styles.desc}>{cutText(item.projectDesc,35)}</p>
      <div className={styles.stack_list}>
        <p>Stack</p>
        <div className={styles.stack_container}>
          {cutStack(item.stack).map((stack, idx) =>
          stack !== "..." ? (
            <div key={idx} className={styles.stack} style={{backgroundColor : getStackColor(stack)}}> {stack} </div>
          )
          :
          (
            <svg key={idx} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
            </svg>
          )
        )}
        </div>
      </div>
      <div>
        
      </div>
    </article>
  )
}
