import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
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
  const { state } = useLocation();
  const recruitment = state ?? {};
  console.log(recruitment); // { recruitment: ... }

  const getProject = async () => {
      try {
        const { data } = await api.get(`/recruitment/project/${id}/get`);
        setProject(data);
        setProjectStat(data.status);
        console.log(data);  
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

  const isOwner = (project?.members ?? []).find(member => member.userId === user.id && member.role === "OWNER");
  return (
    <div className={styles.container}>
      <div>
        <h3>{recruitment.title ?? ""}</h3>
        <div className={styles.projectHandleBox}>
          <h1>{projectStatus(project.status)}</h1>
          {isOwner && 
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
            }
        </div>
        <div className={styles.membersContainer}>
          <h3>함께하는 팀원</h3>
          <div className={styles.members}>
            {(project?.members ?? []).map( (member) => (
            <div key={member.userId} className={styles.member}>
              <b>{member.role ?? ""}</b>
              {member.role === "OWNER" ? 
              <>
                <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                  <path d="m12,12c3.309,0,6-2.691,6-6S15.309,0,12,0s-6,2.691-6,6,2.691,6,6,6Zm0-10c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm9,21c0,.552-.447,1-1,1s-1-.448-1-1c0-3.019-1.925-5.59-4.609-6.57l-1.517,2.276,1.093,3.99c.183.666-.405,1.305-1.201,1.305h-1.532c-.796,0-1.383-.639-1.201-1.305l1.093-3.99-1.517-2.276c-2.684.98-4.609,3.551-4.609,6.571,0,.552-.448,1-1,1s-1-.448-1-1c0-4.962,4.038-9,9-9s9,4.038,9,9Z"/>
                </svg>
                <svg className={styles.ownerStar} fill="#FFD700"  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20">
                <path d="M23.836,8.794a3.179,3.179,0,0,0-3.067-2.226H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832L4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6A3.177,3.177,0,0,0,23.836,8.794Zm-2.343,1.991-4.144,3.029a1,1,0,0,0-.362,1.116L18.562,19.8a1.227,1.227,0,0,1-1.895,1.365l-4.075-3a1,1,0,0,0-1.184,0l-4.075,3a1.227,1.227,0,0,1-1.9-1.365L7.013,14.93a1,1,0,0,0-.362-1.116L2.507,10.785a1.227,1.227,0,0,1,.724-2.217h5.1a1,1,0,0,0,.952-.694l1.55-4.831a1.227,1.227,0,0,1,2.336,0l1.55,4.831a1,1,0,0,0,.952.694h5.1a1.227,1.227,0,0,1,.724,2.217Z"/>
                </svg>
              </>
              :
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="100" height="100">
                <path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"/><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"/>
              </svg>
              }
              <p>{member.fullName ?? ""}</p>
              <div className={styles.memberInfo}>
              <p> 이름 : {member.fullName ?? "선택없음"}</p>
               <a href={member.link ?? "#"} target="_blank" rel="noreferrer"> 플젝링크 </a>
                <p>희망포지션 : {member.position ?? "선택없음"}</p>
                <p>연락처 : {member.contact ?? "선택없음"}</p>
              </div>
            </div>))}
          </div>
        </div>
      </div>
      <div className={styles.membersContainer}>
        <h3>대화 내용은 저장되지 않습니다</h3>
        <ChatRoom roomId={Number(id)} user={user} />
      </div>
    </div>
  )
}
