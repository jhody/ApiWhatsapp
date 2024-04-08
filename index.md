
# descargar archivo a servidor linux
 wget [link]
# instalar pnpm 
npm install -g @pnpm/exe
# habilitar la ejecuciòn de scripts en windows, abrir consola powershell como administrador
Get-ExecutionPolicy -list 
Set-ExecutionPolicy RemoteSigned -Force
# abrir gpdit.msc del ejecutar
# si no lo encuentra hay q instalarlo
 ir la link [descargar gpedit.msc](https://tecnored.org/lista-de-descargas/#google_vignette)
# ir a plantillas seleccionadas>componentes de windows>windows power shell
# click en activar ejecucion de scripts
# Habiliar y permitir solo scripts firmados
# LUego de estos pasos ya debe funcionar PNPM --version

# iniciar pnpm init para que cargue los modulos, hay que estar dentro de la carpeta del proyecto
`pnpm init`
# cargar libreria
pnpm add @bot-whatsapp/bot
# cambiar el package.json "@bot-whatsapp/bot": "^0.1.38" a "@bot-whatsapp/bot": "0.1.3-alpha.9"

# instalar la version estable 
pnpm i
# agregar la linea  "type": "module", para que funcione como mòdulo, aceptando input, from 

# instalar para typescript
pnpm add tsm -D

# agregar en script "dev": "npx tsm -I ./src/app.ts",
# instalar tsm para typescript 
npm install --global tsm

pnpm run dev

# instalar bailey para q emule un navegador

pnpm add @bot-whatsapp/provider-baileys

pnpm add @boot-whatsapp/bot

# ajustar el tema de version de bailey a la misma

# instalar libreria chabot free y seguir los pasos de instalaciòn en las instrucciones, se instala en la carpeta
npm create bot-whatsapp@latest

pnpm i


# para ejecutar el proyecto
pnpm run dev

# alternativa a postman para visual studio es ThunderClient
# instalar libreria ThunderClient

# subir al repositorio y luego descargarlo al servidor git init , git clone
#descargar en el servidor Node js
curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash
sudo apt-get install -y nodejs

npm i pnpm --global

# entrar al directorio ApiWhatsapp cd
# instalar pnpm 
pnpm i

