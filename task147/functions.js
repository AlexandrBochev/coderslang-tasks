export const formatTaskList = (tasks) => {

  for (let i = 0; i < tasks.length; i++) {
    
    if (tasks[i].status === 'DONE') {
      tasks[i] = `\u2705 ${tasks[i].title}`
    } else {
      tasks[i] = `\u274c ${tasks[i].title}`
    }
 
  }

  return tasks;

}