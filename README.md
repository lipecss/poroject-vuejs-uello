🚚 Projeto Uello

> Projeto gerado com **[Vue Cli 3](https://cli.vuejs.org/ "Site Vue Cli 3")** e **[Vue.js 2x](https://vuejs.org/ " Site Vue.js ")**, usando o padrão de design descrito neste [Documentos](https://jedicatvuejs.netlify.app/guide/vuejs/intalacao.html#estrutura-projeto).

## Sobre
Projeto desenvolvido com Vuejs e suas bibliotecas, para compor uma área de serviço/controle da entregas de um cliente. Desário proposto pela Uello.

<div style="text-align:center"><img src="https://media0.giphy.com/media/gRGy9yYXHfx1NdQdMP/giphy.gif" "Demonstração" /></div>

[Link para acesso - Netlify](https://uello-system-test.netlify.app/)


## Desenvolvimento
### Constrúido com
Foi usado no desenvolvimento dessa aplicação:
> Todas as versões especificadas são mínimas.
- [Vue.js](https://vuejs.org/) - v2.6.11
- [Vue Cli](https://cli.vuejs.org/) - v4.5.1
- [Vue I18N](https://github.com/kazupon/vue-i18n) - v8.23.0
- [Vue Router](https://router.vuejs.org/) - v3.2.0
- [Vue PWA](https://router.vuejs.org/) - v4.5.0
- [Vuex](https://vuex.vuejs.org/) - v3.4.0
- [Vuex Persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate) - v4.0.0-beta.3
- [vue-flag-icon](https://www.npmjs.com/package/vue-flag-icon) - v1.0.6
- [axios](https://www.npmjs.com/package/axios) - v3.6.0
- [mapbox-gl](https://www.npmjs.com/package/mapbox-gl) - v3.6.0
- [@mapbox/mapbox-gl-directions](https://www.npmjs.com/package/@mapbox/mapbox-gl-directions) - v4.1.0


### Important Explanation
- **[I18N] (https://github.com/kazupon/vue-cli-plugin-i18n)**, por padrão já fornece configurações para dois idiomas ** pt-BR ** e ** en ** . Para fornecer mais idiomas, basta criar os arquivos no diretório __src / locales__. Lembre-se de que você deve ter as mesmas chaves em todos os arquivos que estejam em perfeito estado de funcionamento. Este plugin é configurado com um idioma __default__ e um de __fallback__ _ "erro" _, para alterar ambos vá no arquivo __vue.config.js__ localizado na raiz do projeto e altere os campos __locale__ _ "represents the default" _ e __fallbackLocale__ _ "represents the fallback" _ para aqueles desejados. Ao alterar os idiomas __default__ e __fallbackLocale__, você deve alterar a [Variável de ambiente] (# Variavel-de-ambiente) nas chaves __VUE_APP_I18N_LOCALE__ _ "para o padrão e" _ and __VUE_APP_I18N_FALLBACK_LOCALE__ "for the fallback".

- **[vuex-persistedstate] (https://github.com/robinvdvleuten/vuex-persistedstate)**, persiste os dados de armazenamento atualizando a página em ** LocalStorage **, permitindo não excluir dados de ** Store ** abrindo outra guia no navegador ou mesmo atualizando a página. É de grande valor apagar os dados salvos em ** LocalStorage ** com o nome ** vuex ** ao fazer logoff ou mesmo fechar as guias do sistema com o gancho ** beforeDestroy ** ou ** destruído **.


### Variáveis de Ambiente

Para que o projeto funcione corretamente e tenha melhor segurança, trabalhe com dois arquivos de variáveis de ambiente que estão sendo ignorados pelo Git por meio do arquivo **. Gitignore **.

Crie os arquivos na raiz do seu projeto com os nomes:
- ** env.development **: Usado por _Vue.js_ quando você está desenvolvendo seu projeto.
- ** env.production **: Usando por _Vue.js_ ao gerar o projeto _Build_.
- **. env **: Ou use apenas um arquivo dotenv

With the following structure and the appropriate values for your project:

```js
{
  VUE_APP_KEY_NAME =  valor que você deseja
}
```

É obrigatório ter pelo menos essas chaves e valores para funcionar perfeitamente:

```js
{
	VUE_APP_APP_NAME = APP TESTE
	VUE_APP_BASE = http://localhost:8080/
	VUE_APP_I18N_LOCALE = pt-BR
	VUE_APP_I18N_FALLBACK_LOCALE = en
	VUE_APP_TOKEN_NAME =qualquer valor
	VUE_APP_MAPBOX_KEY = chave API MapBOx
}
```

### Página

Por padrão, o projeto já vem com as seguintes páginas:
- Login: Você não precisa estar logado para acessar.
- System: Você precisa estar logado para acessar. Aqui, você poderá interagir, conferir o processo de entrega atual, assim como verificar suas informaçoes.
- Erro 404: Você não precisa estar logado para acessar.

## Instalação e uso
### Pré-requisitos e instalação
- Terminal (Command used in Terminal Powershell)
- Yarn
- Vue.js

### **Configuração do projeto**
Para executar este projeto, você deve primeiro instalar as dependências. No tipo de diretório raiz:
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn run serve
```

#### Compiles and minifies for production
```
yarn run build
```

#### I18N Reports
```
yarn run i18n:report
```

#### Lints and fixes files
```
yarn run lint
```

#### Run your end-to-end tests
```
yarn run test:e2e
```

#### Run your unit tests
```
yarn run test:unit
```

#### Run your verbose unit tests
```
yarn run test:unit_verbose
```

Para testar clique aqui [```http://localhost:8080```](http://localhost:8080).

### **Produção**
Para a produção, você precisa fazer alguns truques para executar o ** modo Vue Route history ** em alguns serviços de implantação.

## [netlify](http://netlify.com)
Para usar no ** netlify **, você precisará criar no diretório ** public ** um arquivo com o nome *** _ redirects *** e o seguinte conteúdo:
```js
/*    /index.html   200
```

Vá para ** Settings> Build & Deploy ** e na sessão ** Build settings ** no relatório iiii:

- Comando de Build: **yarn build**
- Diretório de publicação: **dist**

### **Versioning**
0.1.0

#### **TODOS**

 - **Implemente um serviço de geolocalização:**
Use dadod em tempo real, a partir de um GPS, podendo visualizar pelo mapa.

 - **Transformar Timeline em um componente**
 Como os dados estão mocados, deixei o timeline de histórico da entrega dentro do componente de menus (mobile e desktop).


### **Licensing**
 Não tenho nenhum direito sobre as imagens da Uello. Aproveito aqui, peço a permissão de uso apenas para fins ilustrativos e sem desejo de obter lucro com elas.

MIT
Copyright (c) 2021 Felipecss.
