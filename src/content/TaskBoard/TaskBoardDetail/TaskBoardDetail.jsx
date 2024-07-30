import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'

import { fetchTaskBoardDetail } from '../../../slice/TaskBoard/TaskBoardDetail/taskBoardDetail' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faAnglesLeft, faAnglesRight, faChevronLeft, faChevronRight,  
} from '@fortawesome/free-solid-svg-icons'

import styles from './TaskBoardDetail.module.css'
import LoadingProgress from '../../../components/LoadingProgress/LoadingProgress'


const TaskBoardDetail = () => {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { task, pagination, status, error } = useSelector((state) => state.taskBoardDetail)

  useEffect(() => {
    const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page'), 10) : 1
    dispatch(fetchTaskBoardDetail({ slug, page: currentPage }))
  }, [dispatch, slug, searchParams])

  useEffect(() => {
    if (status === 'succeeded') {
      console.log('Task Board Detail:', task)
    }else if (status === 'failed') {
      console.error('Error:', error)
    }
  }, [status, task, error])

  const handlePageChange = (page) => {
    navigate(`/taskboard/${slug}?page=${page}`)
    dispatch(fetchTaskBoardDetail({ slug, page }))
  }

  return (
    <div className={`${styles.board__detail__container} site__height`}>
      <LoadingProgress isLoading={status === 'loading'} />
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' && (
        <div className={styles.board__box}>

          <div className={styles.board__header}>

            <div className={styles.header__columns}>
              <div className={`${styles.header__title} font-concert-one`}>

                <h2>{task.name}</h2>
                <span className={`${styles.board__dash}`}></span>

              </div>

              <div className={styles.header__summary}>

                <p className={styles.completed__tasks}>{task.completed_tasks} Completed</p>
                <p className={styles.remaining__tasks}>{task.remaining_tasks} Remaining</p>
                <p className={styles.total__tasks}>{task.total_tasks} Total</p>

              </div>
            </div>

            <div className={styles.description}>
              <p>{task.description}</p>
            </div>

          </div>

          <div className={styles.board__tasks}>
            {task.tasks.results.map((result) => (
              <div key={result.id} className={styles.task}>
                <h3>ID: {result.id}</h3>
              </div>
            ))}
          </div>

          <div className={styles.board__pagination}>

            <button
              className={`${styles.pagination__button} ${!pagination.links.first ? styles.disabled : ''}`}
              onClick={() => handlePageChange(1)}
              disabled={!pagination.links.first}
            >
              <FontAwesomeIcon icon={faAnglesLeft} />
            </button>
            <button
              className={`${styles.pagination__button} ${!pagination.links.previous ? styles.disabled : ''}`}
              onClick={() => handlePageChange(pagination.current_page - 1)}
              disabled={!pagination.links.previous}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {pagination.page_range && pagination.page_range.map((page) => (
              <button className={`${styles.pagination__numbers} ${page === pagination.current_page ? styles.active : ''}`}
              key={page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
            ))}
            <span> ... </span>
            <button className={styles.pagination__numbers} onClick={() => handlePageChange(pagination.total_pages)}>
              {pagination.total_pages}
            </button>
            <button
              className={`${styles.pagination__button} ${!pagination.links.next ? styles.disabled : ''}`}
              onClick={() => handlePageChange(pagination.current_page + 1)}
              disabled={!pagination.links.next}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <button
              className={`${styles.pagination__button} ${!pagination.links.last ? styles.disabled : ''}`}
              onClick={() => handlePageChange(pagination.total_pages)}
              disabled={!pagination.links.last}
            >
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>

          </div>

        </div>
      )}
    </div>
  )
}

export default TaskBoardDetail
