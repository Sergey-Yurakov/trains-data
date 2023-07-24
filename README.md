Задача выполнена в учебных целях!

Краткое описание задачи - получаем данные по api, кладем в store (redux toolkit), выводим данные поездов.
По клику на строку с поездом открывается более детальная информация в таблице, данные можно изменить,
на каждом столбце стоит валидация (ниже будет описана),
валидация кастомная.

Поля для валидации:
скорость — неотрицательное целое число;
сила тяги — положительное число с плавающей запятой;
ток двигателя — положительное целое число;

Для запуска проекта необходимо клонировать репозиторий (git clone url), 
затем установить нужные пакеты (npm i),  
затем развернуть проект (npm start), 
проект запускается на http://localhost:3000.

На проекте использовалась методология FSD (Feature-Sliced Design).
Более подробно можно почитать здесь https://feature-sliced.design/ru/.

Стек на проекте - React, Redux toolkit, Typescript, Prettier.
