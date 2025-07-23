const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const delBtn = document.createElement('button');
  delBtn.innerHTML = '✖';
  delBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = '';
}
