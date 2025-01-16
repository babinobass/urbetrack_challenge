# React Challenge Urbetrack
## Visit
##### https://eliezer-salazar-urbetrack.vercel.app/

## React Challenge Urbetrack
Este proyecto es una aplicación web diseñada para cumplir con los requisitos planteados en el desafío. La aplicación permite a los usuarios iniciar sesión, visualizar imágenes desde la API de Lorem Picsum, guardarlas localmente, y navegar entre varias vistas, incluyendo un detalle de cada imagen.<br/>

## Tech Stack
| Tech | url |
| ------ | ------ |
| React | https://reactjs.org/ |
| TypeScript | https://www.typescriptlang.org/ |
| React Router v6 | https://reactrouter.com/ |
| React Query | https://tanstack.com/ |
| tailwindcss | https://tailwindcss.com/ |
| Radix UI | https://www.radix-ui.com/ |
| Vercel | https://vercel.com/ |
| ViteJs | https://vite.dev/|
| Vitest | https://vitest.dev/|
| GitHub | https://github.com/ |


## 📋 Requisitos

### 1. **Inicio de Sesión (Login)**  
   - Permite iniciar sesión mediante un esquema predefinido:
     - **Usuario:** Todo en minúsculas, sin números ni caracteres especiales.
     - **Contraseña:** `123<Usuario>`.
   - Validaciones de credenciales:
     - Informar error en caso de credenciales inválidas.
     - Mostrar mensaje de éxito al iniciar sesión correctamente.
   - Persistencia de la sesión.
   - Opción para mostrar/ocultar la contraseña.
   - Redirección automática a la pantalla de inicio si el usuario ya está logueado.

### 2. **Menú de Navegación (Navbar)**  
   - Menú hamburguesa que muestra:
     - Nombre del usuario logueado.
     - Links de navegación:
       - **Inicio**
       - **Mis Imágenes**
     - Botón para cerrar sesión.

### 3. **Vista de Inicio**  
   - Muestra una lista de imágenes obtenidas de la API de Lorem Picsum:
     - Visualización de la imagen y su autor.
     - Scroll infinito para cargar más imágenes.
   - Al hacer clic en una imagen:
     - Navega a la vista de detalle con todos los datos de la imagen.
   - Opción para guardar imágenes localmente.

### 4. **Vista de Mis Imágenes**  
   - Muestra las imágenes guardadas localmente.
   - Permite eliminar imágenes de la lista guardada.
   - Navegación al detalle de cada imagen.

### 5. **Vista de Detalle de Imagen**  
   - Visualiza detalles completos de una imagen seleccionada:
     - Datos: autor, ancho, alto, y enlace para descargar.
   - Funciones disponibles:
     - Descargar la imagen.
     - Guardar o eliminar la imagen localmente.
   - Botón para regresar a la vista anterior.

---

## 🚀 Cómo Ejecutar el Proyecto

### 1. Clonar el Repositorio  
```bash
git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/babinobass/urbetrack_challenge.git)
cd tu-repositorio
```

### 2. Instalar Dependencias  
```bash
npm install
```

### 3. Iniciar la Aplicación  
```bash
npm run dev
```


---


## 📚 Documentación API Usada

La aplicación utiliza la API de [Lorem Picsum](https://picsum.photos/):

### Endpoints:
1. **Lista de Imágenes:**  
   `GET https://picsum.photos/v2/list`
2. **Detalle de Imagen:**  
   `GET https://picsum.photos/id/{id}/info`

---



## 🧑‍💻 Autor

**[Eliezer Salazar]**  
- [LinkedIn](https://www.linkedin.com/in/eliezer-salazar//)  

