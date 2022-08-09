window.addEventListener('load', () => { //Проверяем чтобы все элементы были загружены в окне
    const form = document.querySelector('#new-task-form'); // Создаем переменную формы в которой происходят все действия
    const input = document.querySelector('#new-task-input'); // Создаем переменную ввода названия
    const list_el = document.querySelector('#tasks'); // Создаем переменную в которую складываются задачи

        form.addEventListener('submit', (e) => {  //Присваеваем переменной слушателя событий
        e.preventDefault();

        const task = input.value;

        if(!task) { //Если поле ввода пустое вывести сообщение
            alert('Введите свою заметку')
            return;
        }

        const taski = document.querySelector('.taski') //Прячем до создания заметки заголовок
        taski.hidden = false;

        const task_el = document.createElement('div'); //Создаем див с задачами и присваеваем ему класс
        task_el.classList.add('task');

        const task_content_el = document.createElement('div'); // Создаем контейнер
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input'); /* Создаем строчку с заметкой, класс text, записываем в неё то что вводили в инпуте
        и присваеваем ей значение только для чтения */
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement('div') //Созданием див с классом actions
        task_action_el.classList.add('actions');

		const task_edit_el = document.createElement('button'); // Создаем кнопку редактировать
		task_edit_el.classList.add('edit');
		task_edit_el.innerHTML = '<i class="uil uil-pen"></i>';

        const task_delete_el = document.createElement('button'); // Создаем кнопку удалить
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = '<i class="uil uil-trash"></i>';

        
        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);
    
        task_el.appendChild(task_action_el);

        list_el.appendChild(task_el);
        input.value = '';

         task_edit_el.addEventListener('click', () => { /* Создаем функцию при нажатие на которую кнопка редактировать разрежает отредактировать поле ввода и меняет кнопку на сохранить,
            после нажатия возвращает кнопку редактировать и запрещает редактирование*/
            if (task_edit_el.innerHTML.toLocaleLowerCase() == '<i class="uil uil-pen"></i>') {
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.innerHTML = '<i class="uil uil-save"></i>';
            } else {
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerHTML = '<i class="uil uil-pen"></i>';
            }
        });

        task_delete_el.addEventListener('click', () => { //Функция поэлементного удаления заметок и скрытия заголовка по достижению нулевого значения
            list_el.removeChild(task_el);
            let a = document.querySelectorAll('.content').length
            if (a ===0) {
                taski.hidden = true;
            } else {
                taski.hidden = false;
            }
            
        });

    });

});