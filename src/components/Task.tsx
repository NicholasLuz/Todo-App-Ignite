import { Circle, CheckCircle, Trash, IconWeight } from 'phosphor-react';
import { useState } from 'react';
import './task.scss';

interface TaskProps {
  taskContent: string;
  taskId: string;
  taskIsComplete: boolean;
  onDeleteTask: (taskId: string) => void;
  onChangeTask: (taskId: string) => void;
}

export function Task( { taskContent, taskId, taskIsComplete, onDeleteTask, onChangeTask }: TaskProps) {
  const [circleWeight, setCircleWeight ] = useState<IconWeight>('regular');
  const [circleColor, setCircleColor] = useState<string>('#4EA8DE');

  function handleDeleteTask() {
    onDeleteTask(taskId);

  }

  function handleCircleHover() {
    setCircleWeight('duotone');
    setCircleColor('#1E6F9F');
  }
  
  function handleCircleLeaveHover() {
    setCircleWeight('regular');
    setCircleColor('#4EA8DE');
  }
  
  function handleChangeTaskState() {
    onChangeTask(taskId);
  }

  return (
    <>
      <div className='task-wrapper'>
        {taskIsComplete ? <CheckCircle className='checked-circle' size='1.5rem' weight='fill' onClick={handleChangeTaskState}/> : <Circle className='circle' size='1.5rem' weight={circleWeight} color={circleColor} onMouseEnter={handleCircleHover} onMouseLeave={handleCircleLeaveHover} onClick={handleChangeTaskState}/>}
      
        <span className={taskIsComplete ? 'checked' : ''}>
          {taskContent}
        </span>

        <Trash size='1.5rem' className='trash' onClick={handleDeleteTask}/>
      </div>   
    </>
  )
}