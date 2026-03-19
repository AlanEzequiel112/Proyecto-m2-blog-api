# 📌 Blog API – Authors & Posts

API REST desarrollada con **Node.js, Express y PostgreSQL** para la gestión de autores y publicaciones.

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* pg (node-postgres)
* Jest + Supertest
* Swagger (OpenAPI)
* Railway (deploy)

---

## 📁 Estructura del proyecto

```
blog-api/
├── docs/
│   └── openapi.yaml
├── scripts/
│   ├── setup-db.js
│   └── setup.sql
├── src/
│   ├── db/
│   │   └── index.js
│   ├── middleware/
│   │   ├── AppError.js
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── authors.routes.js
│   │   └── posts.routes.js
│   ├── services/
│   │   ├── authors.service.js
│   │   └── posts.service.js
│   ├── app.js
│   └── server.js
├── tests/
│   ├── authors.test.js
│   ├── posts.test.js
│   └── setup.js
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Instalación

```bash
git clone <repo-url>
cd blog-api
npm install
```

---

## 🔐 Variables de entorno

Crear archivo `.env` basado en `.env.example`

### Ejemplo:

```
DATABASE_URL=postgresql://user:password@host:port/database
```

---

## ▶️ Ejecución

### Desarrollo

```bash
npm run dev
```

### Producción

```bash
npm start
```

---

## 🗄️ Base de datos

### Inicialización

```bash
node scripts/setup-db.js
```

O ejecutar manualmente:

```bash
psql < DATABASE_URL
\i scripts/setup.sql
```

---

## 📡 Endpoints

### Authors

* GET `/authors`
* GET `/authors/:id`
* POST `/authors`
* PUT `/authors/:id`
* DELETE `/authors/:id`

### Posts

* GET `/posts`
* GET `/posts/:id`
* GET `/posts/author/:authorId`
* POST `/posts`
* PUT `/posts/:id`
* DELETE `/posts/:id`

---

## 🧪 Testing

```bash
npm test
```

Incluye pruebas automatizadas con **Jest** y **Supertest**.

---

## 📄 Documentación (Swagger)

Disponible en:

```
http://localhost:3000/docs
```

---

## 🌐 Deploy

Aplicación desplegada en Railway:

👉 https://TU-APP.railway.app

---

## 🧠 Funcionalidades

* CRUD completo de authors y posts
* Relación 1:N (author → posts)
* Validaciones de datos
* Manejo de errores con middleware
* Queries SQL parametrizadas
* Documentación OpenAPI
* Testing automatizado

---

## 🔒 Seguridad

* Uso de variables de entorno (.env)
* Protección contra SQL Injection
* `.env` excluido del repositorio

---

## 📌 Notas

* La base de datos utilizada en producción es Railway
* Se utiliza `DATABASE_URL` para conexión
* Los datos iniciales se cargan con script SQL

---

## 👨‍💻 Autor

Proyecto desarrollado como práctica backend con enfoque en buenas prácticas y arquitectura limpia.

Creditos: Alan Ezequiel Cardiello.

---
