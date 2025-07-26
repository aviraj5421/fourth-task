const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const dateTimeDisplay = document.getElementById('date-time');

// Update current date and time
function updateDateTime() {
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString();
  dateTimeDisplay.textContent = `${dateStr} | ${timeStr}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

function addTask() {
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Add timestamp below task
  const timeSpan = document.createElement('span');
  timeSpan.classList.add('timestamp');
  const now = new Date();
  timeSpan.textContent = `Created: ${now.toLocaleTimeString()} ${now.toLocaleDateString()}`;
  li.appendChild(timeSpan);

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
