# UserCaseStudy

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.7.

 Technology | Purpose |
|-------------|----------|
| **Angular 20** | Core framework (Standalone Components + Signals) |
| **Ng-Zorro Ant Design** | UI component library (Ant Design for Angular) |
| **RxJS** | Reactive streams, `finalize()` for lifecycle management |
| **TypeScript** | Strongly typed, modern JavaScript |
| **SCSS** | Modular styling, responsive layout |

---

## 🚀 Features

✅ Fetches user data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)  
✅ Displays user list with responsive cards  
✅ Individual detail pages with hero-style design  
✅ Search & live filtering  
✅ Error handling with retry button  
✅ Skeleton loader & full-screen spinner overlay  
✅ Empty state view when no results are found  
✅ Lazy-loaded routes for better performance  
✅ Clean UI/UX with accessible and responsive design 

## 🧠 Core Concepts

### 1️⃣ Standalone Components
Each component (`UserList`, `UserDetail`) is standalone — no NgModule is used.  
Angular 20 allows direct imports within components for better modularity and performance.

### 2️⃣ Service Layer
`UserService` handles all API requests and isolates HTTP logic from UI, achieving *Separation of Concerns*.

### 3️⃣ Routing & Lazy Loading
- `/users` → User list page  
- `/users/:id` → Lazy-loaded user detail page  

Lazy loading reduces initial bundle size and improves performance.

### 4️⃣ Reactive Data Handling
`RxJS finalize()` ensures the `loading` state resets correctly whether the request succeeds or fails.

### 5️⃣ Ng-Zorro Integration
Ng-Zorro UI components are used for:
- Buttons (`nz-button`)
- Icons (`nz-icon`)
- Skeleton loaders (`nz-skeleton`)
- Empty states (`nz-empty`)
- Loading spinners (`nz-spin`)

This creates a **professional, enterprise-grade UI** consistent with Ant Design principles.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
