const tasks = document.querySelectorAll('.task');
const zones = document.querySelectorAll('.dropzone');

tasks.forEach(task => {
  task.addEventListener('dragstart', () => {
    task.classList.add('dragging');
  });

  task.addEventListener('dragend', () => {
    task.classList.remove('dragging');
  });
});

zones.forEach(zone => {
  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.classList.add('over');
    const dragging = document.querySelector('.dragging');
    if (dragging) {
      zone.appendChild(dragging);
    }
  });

  zone.addEventListener('dragleave', () => {
    zone.classList.remove('over');
  });

  zone.addEventListener('drop', () => {
    zone.classList.remove('over');
  });
});