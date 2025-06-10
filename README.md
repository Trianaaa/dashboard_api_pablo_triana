# dashboards_api_pablo_triana

Este proyecto es una aplicación web construida con **React** y **Vite**, que muestra una interfaz de gestión de **proyectos**, **fuentes de datos**, **paneles** y **tableros**. Incluye funcionalidades de ordenamiento, modo oscuro y una vista detallada al seleccionar un proyecto.

---

## 🚀 Inicialización y Despliegue del Proyecto

Para ejecutar el proyecto en tu entorno local, usa los siguientes tres comandos:

### 1. Instalar dependencias
```bash
npm install
```
Este comando instalará todas las dependencias necesarias definidas en package.json.

### 2. Iniciar el servidor de desarrollo
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
Una vez que el comando se complete, la aplicación estará disponible en tu navegador en:
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

