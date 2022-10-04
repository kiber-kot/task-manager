import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {

  static categories: Category[] = [
    {_id: 1, _title: "Работа"},
    {_id: 2, _title: "Семья"},
    {_id: 3, _title: "Учеба"},
    {_id: 4, _title: "Отдых"},
    {_id: 5, _title: "Спорт"},
    {_id: 6, _title: "Еда"},
    {_id: 7, _title: "Финансы"},
    {_id: 8, _title: "Гаджеты"},
    {_id: 9, _title: "Здоровье"},
    {_id: 10, _title: "Автомобиль"}
  ]

  static priority: Priority[] = [
    {_id: 1, _title: "Низкий", _color: "#e5e5e5"},
    {_id: 2, _title: "Средний", _color: "#85D1B2"},
    {_id: 2, _title: "Высокий", _color: "#F1828D"},
    {_id: 2, _title: "Очень срочно!!!", _color: "#F1128D"}
  ]

  static tasks: Task[] = [
    {
      _id: 1,
      _title: "Залить бензин полный бак",
      _priority: TestData.priority[2],
      _completed: false,
      _category: TestData.categories[9],
      _date: new Date('2019-04-10')
    },
    {
      _id: 2,
      _title: "Передать отчеты начальнику управления",
      _priority: TestData.priority[0],
      _completed: false,
      _category: TestData.categories[0],
      _date: new Date('2019-04-11')
    },
    {
      _id: 3,
      _title: "Убратсья в своей комнате, полить растения",
      _priority: TestData.priority[2],
      _completed: false,
      _category: TestData.categories[9],
      _date: new Date('2019-04-12')
    }
  ]

}
