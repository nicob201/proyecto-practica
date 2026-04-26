# 🛒 E-Commerce App

> Demo de e-commerce construida con React y Vite como proyecto académico.

---

## ⚡ Tecnologías

| Herramienta | Descripción |
|-------------|-------------|
| ⚛️ React 18 + Vite | Framework UI |
| 🎨 CSS vanilla | Estilos |
| 🔥 Supabase | Backend (DB + Auth) |
| 🧭 React Router DOM | Navegación |

---

## Funcionalidades

- 📦 Catálogo de productos con filtrado  
- 🔍 Detalle de producto individual  
- 🛒 Carrito de compras (añadir, eliminar, modificar cantidad)  
- 📧 Página de contacto  
- 📬 Newsletter  

---

## 📁 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
│   ├── home/       # Componentes específicos de Home
│   ├── layout/    # Navbar, Footer, Layout
│   ├── products/  # ProductCard, ProductList
│   └── ui/        # Componentes UI (Button)
├── context/       # Context API (Carrito)
├── data/          # Datos estáticos
├── hooks/         # Custom hooks
├── pages/         # Páginas de la app
├── routes/        # Configuración de rutas
├── services/     # Servicios (Supabase)
└── styles/       # Estilos globales
```

---

## 🚀 Ejecutar el Proyecto

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

> 💡 El servidor se iniciara en `http://localhost:5173`

---

## 👤 Autor

Proyecto desarrollado por Nicolas Boscasso como práctica profesional para academia Teclab.

---