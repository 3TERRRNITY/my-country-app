
## Как запустить проект

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/3TERRRNITY/my-country-app.git
    cd <project-directory>
    ```

2. Установите зависимости:

    ```bash
    npm install
    ```

3. Запустите проект:

    ```bash
    npm run dev
    ```

4. Перейдите в браузере по адресу [http://localhost:3000](http://localhost:3000).

## Описание файлов

- **pages/index.tsx**: Главная страница с данными о странах. Здесь происходит загрузка данных с API и отображение их в виде списка.
- **components/CountryItem.tsx**: Компонент, который отображает информацию о каждой стране, включая флаг и название. Также есть кнопка для удаления страны из списка.
- **lib/types.ts**: Типы данных для стран. Тип `Country` описывает структуру данных, которые мы получаем из API.
- **next.config.js**: Конфигурация Next.js, где задаются параметры для загрузки изображений с внешних источников.

## Зависимости

- **Next.js**: Для создания серверных и клиентских страниц.
- **Axios**: Для выполнения HTTP-запросов.
- **Framer Motion**: Для добавления анимаций на страницы.
- **TailwindCSS**: Для стилизации

## Заметки

- В этом проекте используется серверная функция `getServerSideProps` для получения списка стран с внешнего API при каждом запросе.
- При удалении страны из списка, компонент обновляется с анимацией для плавного скрытия элемента.
