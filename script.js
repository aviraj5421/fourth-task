const input = document.getElementById('task-input');
const timeInput = document.getElementById('task-time');
const taskList = document.getElementById('task-list');
const dateTimeDisplay = document.getElementById('date-time');

// 🔁 Update real-time date and time
function updateDateTime() {
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString();
  dateTimeDisplay.textContent = `${dateStr} | ${timeStr}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// ➕ Add a new task
function addTask() {
  const taskText = input.value.trim();
  const taskTime = timeInput.value;

  if (!taskText || !taskTime) return;

  const li = document.createElement('li');
  li.classList.add('task-item');

  // Task content section
  const content = document.createElement('div');
  content.classList.add('task-content');
  content.innerHTML = `
    <strong>Task:</strong> ${taskText}<br/>
    <strong>Time:</strong> ${taskTime}<br/>
    <strong>Status:</strong> <span class="status">Not Completed</span>
  `;

  // 🖱 Toggle completion when clicking task
  content.addEventListener('click', () => {
    li.classList.toggle('completed');
    const status = content.querySelector('.status');
    status.textContent = li.classList.contains('completed') ? 'Completed' : 'Not Completed';
  });

  // ❌ Delete button
  const delBtn = document.createElement('button');
  delBtn.innerHTML = '✖';
  delBtn.className = 'delete-btn';
  delBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(content);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  // Clear inputs
  input.value = '';
  timeInput.value = '';
}
