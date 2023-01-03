import { useRequest } from 'ahooks'

import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { getUsername } from './request'
import { loadingStyle } from './style'
import ReactSvg from '@/assets/react.svg'

const WorkSpace: FC = () => {
  const { data, error, loading } = useRequest(getUsername)
  const navigate = useNavigate()

  if (error) return <div>{error.message}</div>

  if (loading) return <div css={loadingStyle}>loading...</div>

  return (
    <div>
      <img src={ReactSvg} alt="" />
      <h1>{data}</h1>
      <button onClick={() => navigate('/error', { replace: true })}>go to error</button>
    </div>
  )
}

export default WorkSpace
