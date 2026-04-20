# TravelTrucks

## English

### Project Overview

TravelTrucks is a web application for browsing and booking camper vans. It includes a catalog with filters, camper detail pages, favorites, and a booking form integrated with a remote API.

### Main Features

- Home page with hero section and navigation.
- Camper catalog with filtering by location, camper form, engine type, and transmission.
- Camper cards with key information and favorites toggle.
- Camper details page with photo gallery, full-screen image viewer, amenities, specs, reviews, and booking form.
- Booking request submission with client-side validation.
- Favorites persistence using `localStorage`.
- Responsive layout for desktop and mobile.

### Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- CSS Modules
- TanStack Query
- React Hook Form + Zod
- Sonner (toast notifications)
- React Icons

### Installation

1. Clone the repository:

```bash
git clone git@github.com:Shido337/TravelTrucks.git
cd TravelTrucks
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open in browser:

```
https://vercel.com/shido337s-projects/travel-trucks
```

### Usage

- Home page: `/`
- Catalog page: `/catalog`
- Camper details page: `/catalog/{camperId}`

Useful scripts:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### API

- Base URL: `https://campers-api.goit.study`

### Author

- GitHub: [Shido337](https://github.com/Shido337)
- Repository: [TravelTrucks](https://github.com/Shido337/TravelTrucks)

---

## Українська

### Короткий опис

TravelTrucks - це вебзастосунок для перегляду та бронювання кемперів. У проєкті реалізовано каталог із фільтрами, сторінки деталей кемпера, обране та форму бронювання з інтеграцією API.

### Основні функції

- Головна сторінка з hero-блоком і навігацією.
- Каталог кемперів із фільтрами за локацією, типом кемпера, типом двигуна та трансмісією.
- Картки кемперів з основною інформацією та додаванням в обране.
- Сторінка деталей кемпера з галереєю фото, повноекранним переглядом, зручностями, технічними характеристиками, відгуками та формою бронювання.
- Надсилання заявки на бронювання з клієнтською валідацією.
- Збереження обраного у `localStorage`.
- Адаптивний інтерфейс для desktop і mobile.

### Технології

- Next.js 16 (App Router)
- React 19 + TypeScript
- CSS Modules
- TanStack Query
- React Hook Form + Zod
- Sonner (toast-сповіщення)
- React Icons

### Встановлення

1. Клонувати репозиторій:

```bash
git clone git@github.com:Shido337/TravelTrucks.git
cd TravelTrucks
```

2. Встановити залежності:

```bash
npm install
```

3. Запустити проєкт у режимі розробки:

```bash
npm run dev
```

4. Відкрити у браузері:

```
https://vercel.com/shido337s-projects/travel-trucks
```

### Використання

- Головна сторінка: `/`
- Каталог: `/catalog`
- Деталі кемпера: `/catalog/{camperId}`

Корисні команди:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### API

- Базова адреса API: `https://campers-api.goit.study`

### Автор

- GitHub: [Shido337](https://github.com/Shido337)
- Репозиторій: [TravelTrucks](https://github.com/Shido337/TravelTrucks)
