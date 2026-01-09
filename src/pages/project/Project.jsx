import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { api } from '../../api/api';
import { handleError } from '../../api/error';
import styles from './Project.module.css'

export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await api.get(`/recruitment/project/${id}/get`);
        setProject(data);
      } catch(e) {
        handleError(e);
      }
    }
    getProject();
  }, [id])

  const projectStatus = (status) => {
    if (status === "NOT_STARTED") return "시작 전인 프로젝트입니다"
    if (status === "IN_PROGRESS") return "진행 중인 프로젝트입니다"
    if (status === "COMPLETED") return "완료된 프로젝트입니다"
  }
  return (
    <div>
      <h1>{projectStatus(project.status)}</h1>
      <h3>함께하는 팀원</h3>
      <div className={styles.members}>
        {(project?.members ?? []).map(member => (
        <div key={member.memberId} className={styles.member}>
          <p>{member.fullName ?? ""}</p>
          <b>{member.role ?? ""}</b>
          <a href={member.link ?? "#"} target="_blank" rel="noreferrer">링크</a>
          <p>{member.position ?? "선택없음"}</p>
          <p>{member.contact ?? "선택없음"}</p>
        </div>))}
      </div>
    </div>
  )
}
