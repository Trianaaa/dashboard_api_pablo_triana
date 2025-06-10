# dashboards_api_pablo_triana

Este proyecto es una aplicación web construida con **React** y **Vite**, que muestra una interfaz de gestión de **proyectos**, **fuentes de datos**, **paneles** y **tableros**. Incluye funcionalidades de ordenamiento, modo oscuro y una vista detallada al seleccionar un proyecto.

---
## Estructura del proyecto

```bash
dashboards_api_pablo_triana/
├── nginx/                  # Configuración Nginx para Docker
│   └── default.conf
├── src/
│   ├── assets/             # Activos como imágenes o íconos
│   │   └── react.svg
│   ├── components/         # Componentes reutilizables de React
│   │   ├── DashboardCard.jsx
│   │   ├── DataSourceCard.jsx
│   │   ├── Header.jsx
│   │   ├── PanelCard.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Sidebar.jsx
│   ├── context/            # Contextos de React para gestión de estado global
│   │   └── ThemeContext.jsx
│   ├── pages/              # Páginas principales de la aplicación
│   │   └── Overview.jsx
│   ├── styles/             # Hojas de estilo CSS puro
│   │   └── Overview.css
│   ├── App.css
│   ├── App.jsx             # Componente principal de la aplicación
│   ├── index.css           # Estilos globales y variables CSS
│   └── main.jsx            # Punto de entrada de la aplicación (renderizado React)
├── docker-compose.yml      # Configuración para Docker Compose
├── Dockerfile              # Instrucciones para construir la imagen Docker
└── README.md               # Documentación del proyecto
```
---

## 🚀 Inicialización y Despliegue del Proyecto

### 1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd dashboards_api_pablo_triana
```
Para ejecutar el proyecto en tu entorno local, usa los siguientes tres comandos:

### 2. Instalar dependencias
```bash
npm install
```
Este comando instalará todas las dependencias necesarias definidas en package.json.

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Esto iniciará el servidor de desarrollo de Vite. La app estará disponible en 
```bash
http://localhost:5173/
```
---
## 🚀 Opcion 2: Despliegue con Docker Compose
Asegurarse de tener Docker y Docker Compose instalados.
### 1. Construir y ejecutar el contenedor
Abrir la terminal en la carpeta raiz del proyecto y ejecutar el siguiente comando:
```bash
docker compose up --build -d
```
Una vez que el comando se complete, la aplicación estará disponible en el navegador en:
```bash
http://localhost:8080/
```
---
## 📝 Notas Adicionales

* **Lenguaje:** JavaScript
* **Framework:** ReactJS
* **Bundler:** Vite
* **Estilos:** CSS puro (sin frameworks como Tailwind o Bootstrap)
* **Routing:** react-router-dom

