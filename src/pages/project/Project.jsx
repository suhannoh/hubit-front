import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { api } from '../../api/api';
import { handleError } from '../../api/error';
import styles from './Project.module.css'
import ChatRoom from '../../components/ChatRoom';
import userStore from '../../store/user';

export default function Project() {
  const { id } = useParams();
  const {user} = userStore();
  const [project, setProject] = useState({});
  const [projectStat , setProjectStat] = useState("");

  const getProject = async () => {
      try {
        const { data } = await api.get(`/recruitment/project/${id}/get`);
        setProject(data);
        setProjectStat(data.status);
        console.log(data)
      } catch(e) {
        handleError(e);
      }
    }

  useEffect(() => {
    console.log("[Project Detail] mounted");
    getProject();
  }, [id])

  const handleChangeStatus = async () => {
    console.log("프로젝트 상태 변경 호출")
    if (projectStat === project.status) return;
    try {
      await api.patch(`recruitment/project/${id}/status`, null, {
        params : {
          status : projectStat
        }
      });
      getProject();
      alert("수정이 완료되었습니다")
    } catch (e) {
      console.log(e);
    }

  }

  const projectStatus = (status) => {
    if (status === "NOT_STARTED") return "시작 전인 프로젝트입니다"
    if (status === "IN_PROGRESS") return "진행 중인 프로젝트입니다"
    if (status === "COMPLETED") return "완료된 프로젝트입니다"
  }
  return (
    <div className={styles.container}>
      <div className={styles.projectHandleBox}>
        <h1>{projectStatus(project.status)}</h1>
        <div className={styles.projectHandle}>
          <select value={projectStat} onChange={(e) => setProjectStat(e.target.value)}>
            <option value="NOT_STARTED">대기</option>
            <option value="IN_PROGRESS">시작</option>
            <option value="COMPLETED">종료</option>
          </select>
          <button type='button' onClick={handleChangeStatus}> 
            변경
          </button>
        </div>
      </div>
      <div className={styles.membersContainer}>
        <h3>함께하는 팀원</h3>
        <div className={styles.members}>
          {(project?.members ?? []).map( (member) => (
          <div key={member.userId} className={styles.member}>
            <b>{member.role ?? ""}</b>
            <p>{member.fullName ?? ""}</p>
            <a href={member.link ?? "#"} target="_blank" rel="noreferrer">링크</a>
            <p>{member.position ?? "선택없음"}</p>
            <p>{member.contact ?? "선택없음"}</p>
          </div>))}
        </div>
      </div>
      <div className={styles.membersContainer}>
        <h3>대화 내용은 저장되지 않습니다</h3>
        <ChatRoom roomId={Number(id)} user={user} />
      </div>
    </div>
  )
}
