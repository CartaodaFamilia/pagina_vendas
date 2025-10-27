# Cartão de TODOS - Clone da Página

Este projeto contém os arquivos HTML, CSS e JavaScript para o clone da página do Cartão de TODOS.

## Estrutura de Arquivos

```
cloned_page/
├── index.html          # Arquivo HTML principal
├── style.css           # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── README.md           # Este arquivo
└── images/             # Pasta com as imagens
    ├── hero-section-image.png
    ├── benefits-section-image.png
    ├── sonhos-section-image.png
    ├── pricing-section-image.png
    ├── contact-section-image.png
    ├── testimonials-section-image.png
    └── footer-section-image.png
```

## Como Usar no VSCode

1. **Abra o VSCode**
2. **Abra a pasta do projeto:**
   - Vá em `File > Open Folder`
   - Selecione a pasta `cloned_page`

3. **Visualize a página:**
   - Instale a extensão "Live Server" no VSCode (se ainda não tiver)
   - Clique com o botão direito no arquivo `index.html`
   - Selecione "Open with Live Server"
   - A página abrirá automaticamente no seu navegador

## Observações Importantes

### Imagens Necessárias

As imagens referenciadas no HTML precisam ser adicionadas à pasta `images/`. Você precisará dos seguintes arquivos:

- `logo-cartao-de-todos.png` - Logo do Cartão de TODOS
- `cartao-de-todos-card.png` - Imagem do cartão (hero section)
- `casa-carro.png` - Imagem da casa e carro (seção sonhos)
- `flavio-vieira.png` - Foto do depoimento
- `leticia-sales.png` - Foto do depoimento
- `maria-jose-da-silva.png` - Foto do depoimento

**As imagens fornecidas são screenshots das seções da página.** Você pode extrair elementos específicos dessas imagens ou substituí-las por imagens próprias.

### Funcionalidades JavaScript

O arquivo `script.js` inclui:

- ✅ Scroll suave para links âncora
- ✅ Validação de formulário
- ✅ Animações ao rolar a página
- ✅ Efeitos de hover nos botões
- ✅ Efeito no header ao rolar

### Responsividade

O CSS inclui media queries para dispositivos móveis (max-width: 768px).

## Customização

### Cores

As cores principais estão definidas como variáveis CSS no início do arquivo `style.css`:

```css
:root {
    --primary-green: #0d5f5f;
    --orange: #ff5722;
    --bright-green: #a4d65e;
    /* ... */
}
```

### Fontes

O projeto usa a fonte **Poppins** do Google Fonts, já incluída no HTML.

### Ícones

Os ícones são do **Font Awesome 6.5.2**, já incluído via CDN no HTML.

## Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge (versões recentes)
- ✅ Responsivo para mobile, tablet e desktop

## Suporte

Para dúvidas ou problemas, revise os arquivos HTML, CSS e JavaScript e ajuste conforme necessário.

---

**Desenvolvido como clone visual baseado em screenshots fornecidos.**

