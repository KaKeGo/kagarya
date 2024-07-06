import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { taskBoard } from '../../../slice/TaskBoard/TaskBoard/taskBoard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

import styles from './TaskBoard.module.css'
import LoadingProgress from '../../../components/LoadingProgress/LoadingProgress'

const TaskBoard = () => {
  const dispatch = useDispatch()
  const { task, status, error } = useSelector((state) => state.taskBoard)

  useEffect(() => {
    dispatch(taskBoard())
  }, [dispatch])

  return (
    <div className={`${styles.task__board__container} site__height`}>
      <LoadingProgress isLoading={status === 'loading'} />
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' && task.length > 0 && (
        task.map((item) => (
          <>
            <div className={`${styles.board__box}`} key={item.id}>
              <div className={styles.board__content}>

                <div className={styles.board__header}>

                  <div className={styles.board__header__top}>

                    <div className={`${styles.board__title} font-concert-one`}>
                      <h2>{item.name}</h2>
                      <span className={`${styles.board__dash}`}></span>
                    </div>

                    <div className={`${styles.board__task__summary} font-concert-one`}>
                      <p className={styles.task__summary}>{item.completed_tasks} / {item.total_tasks}</p>
                    </div>

                  </div>

                  <div className={styles.board__body}>

                    <p>{item.description}</p>

                  </div>

                  <div className={styles.board__footer}>

                    <p>Created by {item.creator}</p>

                  </div>

                </div>

                <div className={styles.board__check}>
                  <NavLink to={item.slug} className={`${styles.board__check__button} font-concert-one`}>
                    Check <FontAwesomeIcon className={styles.check__icon} icon={faRightToBracket} />
                  </NavLink>
                </div>

              </div>
            </div>
          </>
        ))
      )}
    </div>
  )
}

export default TaskBoard
