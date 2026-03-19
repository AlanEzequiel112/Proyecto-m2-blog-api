# 📌 Blog API – Authors & Posts

API REST desarrollada con **Node.js, Express y PostgreSQL** para la gestión de autores y publicaciones, implementando operaciones CRUD completas, validaciones, testing y documentación con OpenAPI.

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* pg (node-postgres)
* Jest + Supertest
* Swagger UI (OpenAPI)
* Railway (deploy)

---

## 📁 Estructura del proyecto

```
blog-api/
│
├── docs/                # Documentación OpenAPI
│   └── openapi.yaml
│
├── scripts/             # Scripts de base de datos
│   ├── setup.sql
│   └── setup-db.js
│
├── src/                 # Código fuente
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
│
├── tests/               # Tests unitarios
│   ├── authors.test.js
│   ├── posts.test.js
│   └── setup.js
│
├── .env.example
├── package.json
└── README.md
```

---

## 📖 Descripción

Esta API permite gestionar:

* Authors (autores)
* Posts (publicaciones)

Incluye:

* CRUD completo
* Relación 1:N (author → posts)
* Validaciones de datos
* Manejo centralizado de errores
* Queries SQL parametrizadas
* Testing automatizado
* Documentación profesional con OpenAPI
* Deploy en entorno productivo (Railway)

---

## ⚙️ Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone https://github.com/AlanEzequiel112/Proyecto-m2-blog-api.git
cd blog-api
```

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Configurar variables de entorno

Crear archivo `.env` basado en `.env.example`

```env
DATABASE_URL=postgresql://user:password@host:port/database
PORT=3000
```

---

### 4. Inicializar base de datos

```bash
node scripts/setup-db.js
```

O manualmente:

```bash
psql < DATABASE_URL
\i scripts/setup.sql
```

---

### 5. Ejecutar el servidor

```bash
npm run dev
```

---

## 📡 Endpoints principales

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

Ejecutar tests:

```bash
npm test
```

Se utilizan:

* Jest
* Supertest

---

## 📄 Documentación API

Disponible en:

```
http://localhost:3000/docs
```

En producción:

```
https://proyecto-m2-blog-api-production.up.railway.app/docs
```

---

## 🌐 Deploy (Railway)

API desplegada en:

👉 https://proyecto-m2-blog-api-production.up.railway.app

### Variables de entorno utilizadas

* `DATABASE_URL` → conexión a PostgreSQL en Railway
* `PORT` → asignado automáticamente por Railway

### Notas de deployment

* Se utiliza conexión mediante `DATABASE_URL`
* La base de datos debe inicializarse ejecutando el script SQL
* Railway maneja el entorno de producción automáticamente

---

## 🔒 Seguridad

* Uso de variables de entorno (.env)
* Protección contra SQL Injection (queries parametrizadas)
* `.env` excluido del repositorio
* `.env.example` incluido como referencia

---

## 🤖 Uso de Inteligencia Artificial

Durante el desarrollo del proyecto se utilizó inteligencia artificial (ChatGPT) como herramienta de apoyo para:

* Resolución de errores técnicos
* Mejora de la arquitectura del proyecto
* Implementación de buenas prácticas en Express y PostgreSQL
* Generación y validación del archivo OpenAPI
* Asistencia en configuración de despliegue en Railway

Todas las decisiones finales, implementación y validaciones fueron realizadas manualmente por el desarrollador.

---

## 👨‍💻 Autor

Ezequiel Cardiello

---
