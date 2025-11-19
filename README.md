# Portfolio Personal - Angular + NG-ZORRO + Less

Este es un portfolio personal desarrollado con Angular, utilizando NG-ZORRO para componentes UI y Less como preprocesador CSS.

## 🚀 Tecnologías utilizadas

- **Angular 20.3** - Framework principal
- **NG-ZORRO (Ant Design)** - Biblioteca de componentes UI
- **Less** - Preprocesador CSS
- **TypeScript** - Lenguaje de programación
- **RxJS** - Programación reactiva

## ✨ Características

### Configuración del proyecto:
- ✅ **Less** configurado como preprocesador CSS
- ✅ **NG-ZORRO** completamente integrado
- ✅ **No se generan archivos de test (.spec.ts)** automáticamente
- ✅ **Internacionalización** configurada en español
- ✅ **Animaciones** habilitadas

### Componentes implementados:
- Layout responsivo con header, content y footer
- Menú de navegación horizontal
- Tarjetas informativas
- Timeline de experiencia profesional
- Estadísticas con contadores
- Sistema de tags para tecnologías
- Iconografía completa

## 🛠️ Comandos disponibles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start

# Construir para producción
npm run build

# Ejecutar tests
npm test

# Generar un nuevo componente (sin archivos .spec.ts)
ng generate component nombre-componente
```

## 📁 Estructura del proyecto

```
portfolio/
├── src/
│   ├── app/
│   │   ├── app.ts              # Componente principal
│   │   ├── app.html            # Template con NG-ZORRO
│   │   ├── app.less            # Estilos del componente
│   │   ├── app.config.ts       # Configuración de la app
│   │   └── app.routes.ts       # Rutas de la aplicación
│   ├── styles.less             # Estilos globales + NG-ZORRO
│   └── index.html              # Archivo HTML principal
├── angular.json                # Configuración de Angular CLI
├── package.json                # Dependencias del proyecto
└── tsconfig.json               # Configuración de TypeScript
```

## 🎨 Personalización de estilos

Los estilos están organizados usando Less:

### Variables globales (`src/styles.less`):
```less
@primary-color: #1890ff;
@success-color: #52c41a;
@warning-color: #faad14;
@error-color: #f5222d;
```

### Mixins disponibles:
```less
.border-radius(@radius);
.box-shadow(@shadow);
```

## 📱 Diseño responsivo

La aplicación está optimizada para:
- 📱 Móviles (< 768px)
- 💻 Tablets y escritorio (≥ 768px)

## 🌐 Internacionalización

Configurado para español (`es_ES`) con soporte para:
- Formato de fechas español
- Componentes NG-ZORRO en español
- Localización completa

## ⚙️ Configuración específica

### No generar archivos de test:
```json
"schematics": {
  "@schematics/angular:component": {
    "style": "less",
    "skipTests": true
  }
}
```

### Presupuestos ajustados:
- Bundle inicial: máximo 4MB
- Estilos de componente: máximo 2MB

## 🚦 Comandos de desarrollo

```bash
# Generar componente
ng g c components/mi-componente

# Generar servicio
ng g s services/mi-servicio

# Generar directiva
ng g d directives/mi-directiva

# Actualizar Angular
ng update @angular/core @angular/cli
```

## 📄 Licencia

Este proyecto es de uso personal y educativo.

---

⭐ **¡Gracias por visitar mi portfolio!** ⭐
