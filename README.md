# 🏋️ WOD Weights — CrossFit Weight Calculator

Calculadora de pesos para CrossFit por género, edad y nivel. PWA instalable, funciona offline.

## 🚀 Deploy en GitHub Pages

1. Crear repositorio en GitHub (ej. `wod-weights`)
2. Subir todos los archivos de esta carpeta
3. Ir a **Settings → Pages → Source: main / root**
4. La app estará en: `https://TU-USUARIO.github.io/wod-weights/`

## 📱 Instalar como app (PWA)

- **iOS Safari:** Compartir → "Añadir a pantalla de inicio"
- **Android Chrome:** Menú → "Instalar app"

## ✨ Funcionalidades

- 18 movimientos de CrossFit con pesos de referencia
- Ajuste por **género** (M/F), **edad** (5 rangos Masters) y **nivel** (5 niveles)
- **1RM personal**: ingresa tus máximos y ve los % aplicados a cada movimiento
- **Calculadora** de % de 1RM con tabla completa (50%–95%)
- **Conversor** kg ↔ lb
- **Calculadora de platos** en barra
- **Favoritos** por movimiento (guardados localmente)
- Notas de **técnica** por movimiento
- Funciona **100% offline** como PWA
- Datos guardados en localStorage (privado, no sale del dispositivo)

## 📊 Categorías de movimientos

- Halterofilia: Snatch, Clean, Clean & Jerk
- Fuerza: Back Squat, Front Squat, Deadlift, Strict Press, Push Press, Thruster
- Metcon: Wall Ball, Thruster
- Gimnasia: Pull-up/C2B, Toes-to-Bar, HSPU, Rope Climb
- Kettlebell: KB Swing, KB Clean, KB Snatch

## 📁 Archivos

```
index.html      ← App principal (todo en un archivo)
manifest.json   ← Configuración PWA
sw.js           ← Service Worker (offline)
icon-192.png    ← Ícono app
icon-512.png    ← Ícono app HD
```
