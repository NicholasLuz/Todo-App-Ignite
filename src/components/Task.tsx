import { Circle, CheckCircle, Trash, IconWeight } from 'phosphor-react';
import { useState } from 'react';
import './task.scss';

interface TaskProps {
  taskContent: string;
  taskId: string;
  onDeleteTask: (taskId: string, taskComplete: boolean) => void;
  onChangeTask: (taskCompleted: boolean) => void;
}

export function Task( { taskContent, taskId, onDeleteTask, onChangeTask }: TaskProps) {
  const [circleWeight, setCircleWeight ] = useState<IconWeight>('regular')
  const [circleColor, setCircleColor] = useState<string>('#4EA8DE')
  const [taskComplete, setTaskComplete] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(taskId, taskComplete);

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
    onChangeTask(taskComplete);

    setTaskComplete(!taskComplete);
  }

  return (
    <>
      <div className='task-wrapper'>
        {taskComplete ? <CheckCircle className='checked-circle' size='1.5rem' weight='fill' onClick={handleChangeTaskState}/> : <Circle className='circle' size='1.5rem' weight={circleWeight} color={circleColor} onMouseEnter={handleCircleHover} onMouseLeave={handleCircleLeaveHover} onClick={handleChangeTaskState}/>}
      
        <span className={taskComplete ? 'checked' : ''}>
          {taskContent}
        </span>

        <Trash size='1.5rem' className='trash' onClick={handleDeleteTask}/>
      </div>   
    </>
  )
}